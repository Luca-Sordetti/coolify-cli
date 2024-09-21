import { Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Stop extends Command {
    static override args = {};

    static override description = "Stop the service of the current application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        try {
            await Coolify.stop();
        } catch (e: any) {
            Log.error(e.message);
        }
    }
}
