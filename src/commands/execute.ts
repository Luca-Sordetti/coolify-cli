import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Execute extends Command {
    static override args = {
        name: Args.string({
            required: true,
            description: "Name of the application",
        }),
        command: Args.string({
            required: true,
            description: "Command to execute",
        }),
    };

    static override description = "Execute a command in your application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Execute);

        try {
            const application = await Coolify.selectApplication(args.name);
            await application.execute(args.command);
            Log.success(["Command executed successfully"]);
        } catch (e: any) {
            Log.error([e.message ?? "Failed to execute the command"]);
        }
    }
}
