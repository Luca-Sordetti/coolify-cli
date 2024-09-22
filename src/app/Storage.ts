import { Config } from "@oclif/core";
import fsExtra from "fs-extra";
import * as path from "path";
import { fileURLToPath } from "url";
import { ApplicationInterface, InstanceInterface } from "../types/index.js";

type StorageValues = {
    instances: InstanceInterface[];
    applications: ApplicationInterface[];
};

class Storage {
    data?: StorageValues;
    config?: Config;

    constructor() {}

    async append(key: keyof StorageValues, value: any) {
        if (!this.data) return;

        this.data[key] = value;

        return this.save();
    }

    get<T>(key: keyof StorageValues, defaultValue?: T): T {
        if (!this.data) return defaultValue as T;

        return (this.data[key] as T) || (defaultValue as T);
    }

    async save() {
        if (!this.config) return;

        if ((await fsExtra.pathExists(this.config.configDir)) === false) {
            await fsExtra.mkdir(this.config.configDir);
        }

        if (
            (await fsExtra.exists(
                path.join(this.config.configDir, "config.json")
            )) === false
        ) {
            await fsExtra.writeJSON(
                path.join(this.config.configDir, "config.json"),
                this.data,
                { spaces: 4 }
            );
        } else {
            await fsExtra.writeJSON(
                path.join(this.config.configDir, "config.json"),
                this.data,
                { spaces: 4 }
            );
        }
    }

    async load() {
        if (!this.config) {
            this.config = await Config.load({
                root: path.resolve(fileURLToPath(import.meta.url), ".."),
                enablePerf: true,
            });
        }

        let data;

        try {
            data = await fsExtra.readJSON(
                path.join(this.config.configDir, "config.json")
            );
        } catch (e) {
            data = {};
        }

        this.data = data;
    }
}

export default new Storage();
