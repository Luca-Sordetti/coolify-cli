import { Command } from "@oclif/core";
import Table from "tty-table";
import Coolify from "../app/Coolify.js";
import Log from "../app/Log.js";

export default class Ls extends Command {
    static override args = {};

    static override description = "List all your coolify instances";

    static override examples = [];

    static override flags = {};

    public async run(): Promise<void> {
        try {
            const instances = await Coolify.instances();

            if (instances.length === 0) {
                Log.info("You don't have any coolify instances yet.");
                return;
            }

            const header = [
                { value: "name", alias: "Name" },
                { value: "url", alias: "URL" },
                { value: "token", alias: "API Token" },
                { value: "applications", alias: "Apps registered" },
            ];

            const rows = instances.map((instance) => ({
                name: instance.name,
                url: instance.url,
                token: instance.token.slice(0, 5) + "...",
                applications: Coolify.applications().filter(
                    (app) => app.instance_url === instance.url
                ).length,
            }));

            const t3 = Table(header, rows, {});

            Log.info(t3.render());
        } catch (e: any) {
            Log.error([e.message ?? "Failed to list your coolify instances."]);
        }
    }
}
