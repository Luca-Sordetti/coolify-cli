import { select } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Logout extends Command {
    static override args = {
        instance: Args.string({ required: false }),
    };

    static override description = "Logout from an instance of Coolify";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        const { args } = await this.parse(Logout);

        if (args.instance) {
            try {
                await Coolify.logout(args.instance);
            } catch (e: any) {
                Log.error([e.message ?? "Failed to logout."]);
            }

            return;
        }

        const instances = await Coolify.instances();

        if (instances.length === 0) {
            Log.error(["You need to login first."]);
            return;
        }

        const instance = await select({
            message: "Select an instance to logout from",
            choices: instances.map((instance) => ({
                name: instance.name,
                value: instance,
            })),
        });

        try {
            await Coolify.logout(instance.name);
        } catch (e: any) {
            Log.error([e.message ?? "Failed to logout."]);
        }
    }
}
