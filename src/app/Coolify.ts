import { select } from "@inquirer/prompts";
import axios from "axios";
import { ApplicationInterface, InstanceInterface } from "../types/index.js";
import Application from "./Coolify/Application.js";
import Instance from "./Coolify/Instance.js";
import Storage from "./Storage.js";

class Coolify {
    private _instances: Instance[] = [];
    private _applications: Application[] = [];

    async addInstance(
        url: string,
        token: string,
        name: string,
        force: boolean = false
    ) {
        try {
            if (!force) {
                const alreadyExists = this._instances.some(
                    (instance) => instance.url === url
                );

                if (alreadyExists) {
                    throw new Error("This instance is already registered.");
                }
            }

            await axios({
                method: "GET",
                baseURL: url,
                url: "/api/v1/teams",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const instances = Storage.get<InstanceInterface[]>(
                "instances",
                []
            ).filter((v) => v.url !== url);

            await Storage.append("instances", [
                ...instances,
                {
                    url,
                    token,
                    name,
                },
            ]);

            return true;
        } catch (e: any) {
            throw new Error(
                e.message ?? "Failed to login to your coolify instance."
            );
        }
    }

    async removeInstance(name: string) {
        try {
            let instances = Storage.get<InstanceInterface[]>("instances", []);

            if (!instances.some((v) => v.name === name)) {
                throw new Error("This instance is not registered.");
            }

            const instance = instances.find((v) => v.name === name);

            instances = instances.filter((v) => v.name !== instance?.name);

            await Storage.append("instances", instances);

            const applications = Storage.get<ApplicationInterface[]>(
                "applications",
                []
            );

            await Storage.append(
                "applications",
                applications.filter((v) => v.instance_url !== instance?.url)
            );
        } catch (e: any) {
            throw new Error(e.message ?? "Failed to logout from the instance.");
        }
    }

    async addApplication(
        instance: Instance,
        application: ApplicationInterface,
        name: string
    ) {
        try {
            let applications = Storage.get<ApplicationInterface[]>(
                "applications",
                []
            );

            if (applications.some((v) => v.name === name)) {
                throw new Error("This application name is already registered.");
            }

            applications.push({
                name,
                uuid: application.uuid,
                instance_url: instance.url,
            });

            await Storage.append("applications", applications);
        } catch (e: any) {
            throw new Error(e.message ?? "Failed to add the application.");
        }
    }

    async removeApplication(name: string) {
        try {
            let applications = Storage.get<ApplicationInterface[]>(
                "applications",
                []
            );

            if (!applications.some((v) => v.name === name)) {
                throw new Error("This application is not registered.");
            }

            applications = applications.filter((v) => v.name !== name);

            await Storage.append("applications", applications);
        } catch (e: any) {
            throw new Error(e.message ?? "Failed to remove the application.");
        }
    }

    async selectApplication(name?: string) {
        const applications = this._applications;

        if (applications.length === 0) {
            throw new Error("No applications found");
        }

        if (name) {
            const application = applications.find((v) => v.name === name);

            if (!application) {
                throw new Error("Application not found");
            }

            return application;
        }

        return select({
            message: "Select an application",
            choices: applications.map((application) => ({
                name:
                    "[" +
                    application.instance.name +
                    "]" +
                    " - " +
                    application.name,
                value: application,
            })),
        });
    }

    async selectInstance(name?: string) {
        const instances = this._instances;

        if (instances.length === 0) {
            throw new Error("No instances found");
        }

        if (name) {
            const instance = instances.find((v) => v.name === name);

            if (!instance) {
                throw new Error("Instance not found");
            }

            return instance;
        }

        return select({
            message: "Select an instance",
            choices: instances.map((instance) => ({
                name: instance.name,
                value: instance,
            })),
        });
    }

    getApp(name: string) {
        return this._applications.find((v) => v.name === name);
    }

    instances() {
        return this._instances;
    }

    applications() {
        return this._applications;
    }

    async load() {
        const instances = Storage.get<InstanceInterface[]>("instances", []);

        this._instances = instances.map((instance) => new Instance(instance));

        const applications = Storage.get<ApplicationInterface[]>(
            "applications",
            []
        );

        this._applications = applications
            .map((application) => {
                const instance = this._instances.find(
                    (v) => v.url === application.instance_url
                );

                if (!instance) {
                    return null;
                }

                return new Application(instance, application);
            })
            .filter((v) => v !== null);
    }
}

export default new Coolify();
