import { Args, Command, Flags } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Deploy extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the application",
        }),
    };

    static override description = "Deploy your application";

    static override examples = [];

    static override flags = {
        force: Flags.boolean({ char: "f" }),
    };

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(Deploy);

        try {
            const application = await Coolify.selectApplication(args.name);
            await application.deploy(flags.force);
            Log.success(["Application deployed successfully"]);
        } catch (e: any) {
            Log.error([e.message ?? "Failed to deploy the application"]);
        }
    }
}
