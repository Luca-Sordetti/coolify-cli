import { input, select } from "@inquirer/prompts";
import { Command } from "@oclif/core";
import Coolify from "../../app/Coolify.js";
import Log from "../../app/Log.js";

export default class ApplicationsList extends Command {
    static override args = {};

    static override description = "Add an application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const instances = await Coolify.instances();

        if (instances.length === 0) {
            Log.error(["You need to login first."]);
            return;
        }

        const instance = await select({
            message: "Select an instance",
            choices: instances.map((instance) => ({
                name: instance.name,
                value: instance,
            })),
        });

        let applications;

        try {
            applications = await instance.applications();
        } catch (e: any) {
            Log.error([e.message ?? "Failed to fetch applications."]);
            return;
        }

        const application = await select({
            message: "Select an application",
            choices: applications.map((application) => ({
                name:
                    application.name +
                    " (" +
                    application.uuid +
                    (application.fqdn ? " - " + application.fqdn : "") +
                    ")",
                value: application,
            })),
            loop: false,
        });

        const name = await input({
            message: "Enter a name for this application",
            default: application.uuid,
        });

        try {
            await Coolify.addApplication(instance, application, name);
            Log.info("Application added successfully.");
        } catch (e: any) {
            Log.error([e.message ?? "Failed to add the application."]);
        }
    }
}
