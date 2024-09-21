import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Init extends Command {
    static override args = {
        url: Args.url({
            description: "Url of your coolify instance",
            required: true,
        }),
        token: Args.string({
            description: "Token API of your coolify instance",
            required: true,
        }),
        application: Args.string({
            description: "Your application identifier",
            required: true,
        }),
    };

    static override description =
        "Initialize coolify configuration for your project";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Init);

        try {
            await Coolify.init(args.url?.origin!, args.token, args.application);
        } catch (e: any) {
            Log.error(e.message);
        }
    }
}
