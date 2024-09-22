import { input, select } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class App extends Command {
    static override args = {
        action: Args.string({ required: true }),
        name: Args.string({ required: false }),
    };

    static override description = "";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(App);

        try {
            switch (args.action) {
                case "add":
                    return this.add(args, flags);
                case "remove":
                    return this.remove(args, flags);
            }
        } catch (e: any) {
            Log.error([e.message ?? "Failed to run the application command."]);
        }
    }

    private async add(args: any, flags: any) {
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

    private async remove(args: any, flags: any) {
        try {
            const application = await Coolify.selectApplication(args.name);
            await Coolify.removeApplication(application.name);
            Log.info("Application removed successfully.");
        } catch (e: any) {
            Log.error([e.message ?? "Failed to remove the application."]);
        }
    }
}
