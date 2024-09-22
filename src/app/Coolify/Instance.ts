import axios, { AxiosInstance } from "axios";
import { ApplicationInterface, InstanceInterface } from "../../types/index.js";

class Instance implements InstanceInterface {
    name: string;
    token: string;
    url: string;

    api: AxiosInstance;

    constructor(data: InstanceInterface) {
        this.url = data.url;
        this.token = data.token;
        this.name = data.name;

        this.api = axios.create({
            baseURL: data.url,
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
    }

    async applications() {
        return this.api
            .get<ApplicationInterface[]>("/api/v1/applications")
            .then(({ data }) => {
                return data;
            });
    }
}

export default Instance;
