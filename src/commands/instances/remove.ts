import { Args, Command } from "@oclif/core";
import Coolify from "../../app/Coolify.js";
import Log from "../../app/Log.js";

export default class InstancesList extends Command {
    static override args = {
        name: Args.string({
            required: false,
            description: "Name of the instance",
        }),
    };

    static override description = "Remove a coolify instance";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(InstancesList);

        try {
            const instance = await Coolify.selectInstance(args.name);
            await Coolify.removeInstance(instance.name);

            Log.success(["Successfully removed the coolify instance"], true);
        } catch (e: any) {
            Log.error(
                [e.message ?? "Failed to remove the coolify instance."],
                true
            );
        }
    }
}
