import { Command } from "@oclif/core";
import TtyTable from "tty-table";
import Coolify from "../../app/Coolify.js";
import Log from "../../app/Log.js";

export default class ApplicationsList extends Command {
    static override args = {};

    static override description = "List all applications";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        try {
            const applications = await Coolify.applications();

            if (applications.length === 0) {
                Log.info("You don't have any applications yet.");
                return;
            }

            const header = [
                { value: "name", alias: "Name" },
                { value: "instance", alias: "Instance" },
            ];

            const rows = applications.map((v) => ({
                name: v.name,
                instance: v.instance.name + " (" + v.instance.url + ")",
            }));

            const t3 = TtyTable(header, rows, {});

            Log.info(t3.render());
        } catch (e: any) {
            Log.error([e.message ?? "Failed to list the applications."]);
        }
    }
}
