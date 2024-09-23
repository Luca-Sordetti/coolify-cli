import { ux } from "@oclif/core";
import axios, { AxiosInstance } from "axios";
import chalk from "chalk";
import { ApplicationInterface, InstanceInterface } from "../../types/index.js";
import Log from "../Log.js";

class Application implements ApplicationInterface {
    uuid: string;
    name: string;
    instance_url?: string;

    instance: InstanceInterface;

    api: AxiosInstance;

    constructor(instance: InstanceInterface, data: ApplicationInterface) {
        this.uuid = data.uuid;
        this.name = data.name;
        this.instance_url = data.instance_url;

        this.instance = instance;

        this.api = axios.create({
            baseURL: instance.url,
            headers: {
                Authorization: `Bearer ${instance.token}`,
            },
        });

        this.api.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response?.status === 401) {
                    Log.error([
                        "Your token is invalid. Please run 'coolify login -f' to set up the instance.",
                    ]);
                } else {
                    if (error.response.data && error.response.data.message) {
                        Log.error([error.response.data.message]);
                    }
                }

                return Promise.reject(error);
            }
        );
    }

    async deploy(force: boolean, watch: boolean = false) {
        const { data } = await this.api.post(
            `/api/v1/deploy?uuid=${this.uuid}&force=${force}`
        );

        const deployment = data.deployments[0];

        if (watch) {
            const status = await this.waitDeployment(
                deployment.deployment_uuid,
                "Deployment"
            );

            if (status == "timeout" || status == "max_attemps") {
                Log.error(["Deployment timeout."]);
            } else {
                Log.success(["Application deployed successfully"]);
            }
        } else {
            Log.success([deployment.message]);
        }

        return data;
    }

    async start(watch: boolean = false) {
        const { data } = await this.api.post(
            `/api/v1/applications/${this.uuid}/start`
        );

        if (watch) {
            const status = await this.waitDeployment(
                data.deployment_uuid,
                "Starting application"
            );

            if (status == "timeout" || status == "max_attemps") {
                Log.error(["Starting timeout."]);
            } else {
                Log.success(["Application started successfully"]);
            }
        } else {
            Log.success([data.message]);
        }

        return data;
    }

    async stop() {
        ux.action.start("Stopping application");

        const { data } = await this.api.post(
            `/api/v1/applications/${this.uuid}/stop`
        );

        ux.action.stop();
        Log.success([data.message]);

        return data;
    }

    async restart(watch: boolean = false) {
        const { data } = await this.api.post(
            `/api/v1/applications/${this.uuid}/restart`
        );

        if (watch) {
            const status = await this.waitDeployment(
                data.deployment_uuid,
                "Restarting application"
            );

            if (status == "timeout" || status == "max_attemps") {
                Log.error(["Restarting timeout."]);
            } else {
                Log.success(["Application restarted successfully"]);
            }
        } else {
            Log.success([data.message]);
        }

        return data;
    }

    async execute(command: string) {
        return this.api.post(`/api/v1/applications/${this.uuid}/execute`, {
            command,
        });
    }

    async fetch() {
        return this.api.get(`/api/v1/applications/${this.uuid}`);
    }

    private async waitDeployment(
        uuid: string,
        message: string,
        timeoutLimit: number = 500
    ) {
        ux.action.start(message, chalk.gray("queued"));

        let maxAttemps = 5;

        let done = false;
        let timeout = 0;
        let attemps = 0;

        let prevLogs = 0;

        while (!done && timeout < timeoutLimit && attemps < maxAttemps) {
            try {
                const { data } = await this.getDeployment(uuid);

                attemps = 0;

                const logs = JSON.parse(data.logs);

                if (logs.length > prevLogs) {
                    for (let i = prevLogs; i < logs.length; i++) {
                        Log.info(chalk.gray(logs[i].output));
                    }
                }

                switch (data.status) {
                    case "finished":
                        done = true;
                        ux.action.status = chalk.green("finished");
                        break;
                    case "queued":
                        ux.action.status = chalk.gray("queued");
                        break;
                    case "error":
                        ux.action.status = chalk.red("error");
                        break;
                    case "in_progress":
                        ux.action.status = chalk.yellow("in progress");
                        break;
                }
            } catch (e) {
                attemps++;
            }

            await new Promise((resolve) => setTimeout(resolve, 2000));

            timeout++;
        }

        ux.action.stop();

        if (timeout >= timeoutLimit) {
            return "timeout";
        }

        if (attemps >= maxAttemps) {
            return "max_attemps";
        }

        return "finished";
    }

    private async getDeployment(uuid: string) {
        return this.api.get(`/api/v1/deployments/${uuid}`);
    }
}

export default Application;
