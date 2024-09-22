import { Args, Command } from "@oclif/core";
import Coolify from "../../app/Coolify.js";
import Log from "../../app/Log.js";

export default class ApplicationsList extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the application",
        }),
    };

    static override description = "Remove an application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(ApplicationsList);
        try {
            const application = await Coolify.selectApplication(args.name);
            await Coolify.removeApplication(application.name);
            Log.info("Application removed successfully.");
        } catch (e: any) {
            Log.error([e.message ?? "Failed to remove the application."]);
        }
    }
}
