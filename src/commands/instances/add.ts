import { input } from "@inquirer/prompts";
import { Command, ux } from "@oclif/core";
import Coolify from "../../app/Coolify.js";
import Log from "../../app/Log.js";

export default class InstancesList extends Command {
    static override args = {};

    static override description = "Add a coolify instance";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { flags } = await this.parse(InstancesList);

        const url = await input({
            message: "Enter your coolify instance URL",
            default: "https://app.coolify.io",
            required: true,
        });

        const password = await input({
            message: "Enter your coolify API Token",
            required: true,
        });

        const name = await input({
            message: "Enter a name for this instance",
            default: "MyApp",
            required: true,
        });

        ux.action.start("Logging in to your coolify instance...");

        try {
            await Coolify.addInstance(url, password, name, flags.force);

            Log.success(
                ["Successfully logged in to your coolify instance"],
                true
            );
        } catch (e: any) {
            Log.error(
                [e.message ?? "Failed to login to your coolify instance."],
                true
            );
        }
    }
}
