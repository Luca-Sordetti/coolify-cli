export interface InstanceInterface {
    url: string;
    token: string;
    name: string;
}

export interface ApplicationInterface {
    uuid: string;
    name: string;
    fqdn?: string;
    instance_url?: string;
}
