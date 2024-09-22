import axios, { AxiosInstance } from "axios";
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

    async deploy(force: boolean) {
        return this.api.post(`/api/v1/deploy?uuid=${this.uuid}&force=${force}`);
    }

    async start() {
        return this.api.post(`/api/v1/applications/${this.uuid}/start`);
    }

    async stop() {
        return this.api.post(`/api/v1/applications/${this.uuid}/stop`);
    }

    async restart() {
        return this.api.post(`/api/v1/applications/${this.uuid}/restart`);
    }

    async execute(command: string) {
        throw new Error("Not implemented yet");
        // return this.api.post(`/api/v1/applications/${this.uuid}/execute`, {
        //     command,
        // });
    }

    async fetch() {
        return this.api.get(`/api/v1/applications/${this.uuid}`);
    }
}

export default Application;
