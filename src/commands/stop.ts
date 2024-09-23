import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Stop extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the application",
        }),
    };

    static override description = "Stop your application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Stop);

        try {
            const application = await Coolify.selectApplication(args.name);
            await application.stop();
        } catch (e: any) {
            Log.error([e.message ?? "Failed to stop the application"]);
        }
    }
}
