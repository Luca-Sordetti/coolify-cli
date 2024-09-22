import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Status extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the application",
        }),
    };

    static override description = "Status of your application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Status);

        try {
            const application = await Coolify.selectApplication(args.name);
            const app = await application.fetch();
            Log.success(["Application status:", app.data.status]);
        } catch (e: any) {
            Log.error([e.message ?? "Failed to started the application"]);
        }
    }
}
