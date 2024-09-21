import { Command } from "@oclif/core";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Restart extends Command {
    static override args = {};

    static override description =
        "Restart the service of the current application";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        try {
            await Coolify.restart();
        } catch (e: any) {
            Log.error(e.message);
        }
    }
}
