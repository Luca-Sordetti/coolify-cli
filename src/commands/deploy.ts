import { Command, Flags } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Deploy extends Command {
    static override args = {};

    static override description =
        "Trigger a new deployment for the current application";

    static override examples = [];

    static override flags = {
        force: Flags.boolean({ char: "f" }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parse(Deploy);

        try {
            await Coolify.deploy(flags.force);
        } catch (e: any) {
            Log.error(e.message);
        }
    }
}
