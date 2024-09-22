import { input } from "@inquirer/prompts";
import { Command, Flags, ux } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Login extends Command {
    static override args = {};

    static override description = "Login to your coolify instance";

    static override examples = [""];

    static override flags = {
        force: Flags.boolean({
            char: "f",
            description: "Force replace login to your coolify instance",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parse(Login);

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
            default: "Personal instance",
            required: true,
        });

        ux.action.start("Logging in to your coolify instance...");

        try {
            await Coolify.login(url, password, name, flags.force);

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
