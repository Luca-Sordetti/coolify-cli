import { Args, Command, Flags, ux } from "@oclif/core";
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
        watch: Flags.boolean({ char: "w" }),
    };

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(Deploy);

        try {
            const application = await Coolify.selectApplication(args.name);
            await application.deploy(flags.force, flags.watch);
        } catch (e: any) {
            console.log(e);

            Log.error(
                [e.message ?? "Failed to deploy the application"],
                !!ux.action.status
            );
        }
    }
}
