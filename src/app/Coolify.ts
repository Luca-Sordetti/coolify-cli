import axios from "axios";
import Log from "./Log.js";
import Storage from "./Storage.js";

interface DeployResponse {
    deployments: {
        message: string;
        resource_uuid: string;
        deployment_uuid: string;
    }[];
}

interface Application {
    id: number;
    uuid: string;
    name: string;
    git_repository: string;
    status: string;
}

class Coolify {
    api = axios.create({
        baseURL: Storage.get("url"),
        headers: {
            Authorization: `Bearer ${Storage.get("token")}`,
        },
    });

    constructor() {
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    Log.error(
                        "Your token is invalid. Please run coolify init <url> <token> <application:uuid> to set up the CLI."
                    );
                } else {
                    if (error.response.data && error.response.data.message) {
                        Log.error("[API]", error.response.data.message);
                    }
                }

                return Promise.reject(error);
            }
        );
    }

    async checkIfInitialized() {
        if (
            !Storage.get("url") ||
            !Storage.get("token") ||
            !Storage.get("application")
        ) {
            throw new Error(
                "Please run coolify init <url> <token> <application:uuid> to set up the CLI."
            );
        }
    }

    /**
     *
     * @param url Your Coolify URL
     * @param token Your Coolify API Token
     * @param application Your Coolify application UUID
     * @returns
     */
    async init(url: string, token: string, application: string) {
        return Storage.set({
            url,
            token,
            application,
        });
    }

    /**
     * Deploy the current project
     * @param {boolean} force
     * @returns {Promise<void>}
     */
    async deploy(force: boolean = false) {
        await this.checkIfInitialized();

        Log.info("Deploying your application...");

        try {
            const { data } = await this.api.post<DeployResponse>(
                "/api/v1/deploy?uuid=" +
                    Storage.get("application") +
                    "&force=" +
                    force
            );

            if (data.deployments && data.deployments[0]) {
                Log.success(data.deployments[0].message);
            }
        } catch (error) {
            new Error(
                "An error occurred while deploying your application. Please try again."
            );
        }
    }

    /**
     * Start the current project
     * @returns {Promise<void>}
     */
    async start() {
        await this.checkIfInitialized();

        Log.info("Starting your application...");

        try {
            const { data } = await this.api.post(
                "/api/v1/applications/" + Storage.get("application") + "/start"
            );

            Log.success(data.message);
        } catch (error) {
            new Error(
                "An error occurred while starting your application. Please try again."
            );
        }
    }

    /**
     * Stop the current project
     * @returns {Promise<void>}
     */
    async stop() {
        await this.checkIfInitialized();

        Log.info("Stopping your application...");

        try {
            const { data } = await this.api.post(
                "/api/v1/applications/" + Storage.get("application") + "/stop"
            );

            Log.success(data.message);
        } catch (error) {
            new Error(
                "An error occurred while stopping your application. Please try again."
            );
        }
    }

    /**
     * Restart the current project
     * @returns {Promise<void>}
     */
    async restart() {
        await this.checkIfInitialized();

        Log.info("Restarting your application...");

        try {
            const { data } = await this.api.post(
                "/api/v1/applications/" +
                    Storage.get("application") +
                    "/restart"
            );

            Log.success(data.message);
        } catch (error) {
            new Error(
                "An error occurred while restarting your application. Please try again."
            );
        }
    }

    /**
     * Check the status of the current project
     * @returns {Promise<void>}
     */
    async status() {
        await this.checkIfInitialized();

        try {
            const application = await this.get();

            Log.success("application status: " + application.status);
        } catch {
            new Error(
                "An error occurred while getting your application. Please try again."
            );
        }
    }

    /**
     * Get the current project
     * @returns {Promise<Application>}
     */
    private async get() {
        const { data } = await this.api.get<Application>(
            "/api/v1/applications/" + Storage.get("application")
        );

        return data;
    }
}

export default new Coolify();
