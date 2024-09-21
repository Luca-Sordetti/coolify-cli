import { Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Status extends Command {
    static override args = {};

    static override description = "Check the status of the current application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        try {
            await Coolify.status();
        } catch (e: any) {
            Log.error(e.message);
        }
    }
}
