import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Execute extends Command {
    static override args = {
        command: Args.string({
            description: "Command to execute",
            required: true,
        }),
    };

    static override description =
        "Execute a command in the current container of your application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Execute);

        try {
            await Coolify.execute(args.command);
        } catch (e: any) {
            Log.error(e.message);
        }
    }
}
