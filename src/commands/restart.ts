import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Restart extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the application",
        }),
    };

    static override description = "Restart your application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Restart);

        try {
            const application = await Coolify.selectApplication(args.name);
            await application.restart();
            Log.success(["Application restarted successfully"]);
        } catch (e: any) {
            Log.error([e.message ?? "Failed to restart the application"]);
        }
    }
}
