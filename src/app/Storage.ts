import fs from "fs";

type StorageValues = {
    url: string;
    token: string;
    application: string;
};

class Storage {
    data: StorageValues;

    constructor() {
        this.data = {
            url: "",
            token: "",
            application: "",
        };

        if (fs.existsSync(this.path())) {
            this.data = JSON.parse(fs.readFileSync(this.path()).toString());
        }
    }

    async set(data: StorageValues) {
        this.data = data;
        return this.save();
    }

    async update(key: keyof StorageValues, value: any) {
        this.data[key] = value;
        return this.save();
    }

    get(key: keyof StorageValues, defaultValue?: any) {
        return this.data[key] || defaultValue;
    }

    path() {
        return "./coolify.json";
    }

    async save() {
        fs.writeFileSync(this.path(), JSON.stringify(this.data, null, 4));

        if (fs.existsSync(".gitignore")) {
            const gitignore = fs.readFileSync(".gitignore").toString();
            if (!gitignore.includes("coolify.json")) {
                fs.appendFileSync(".gitignore", "\ncoolify.json");
            }
        } else {
            fs.writeFileSync(".gitignore", "coolify.json");
        }
    }
}

export default new Storage();
