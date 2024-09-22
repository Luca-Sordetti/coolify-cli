import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Start extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the application",
        }),
    };

    static override description = "Start your application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Start);

        try {
            const application = await Coolify.selectApplication(args.name);
            await application.start();
            Log.success(["Application started successfully"]);
        } catch (e: any) {
            Log.error([e.message ?? "Failed to started the application"]);
        }
    }
}
