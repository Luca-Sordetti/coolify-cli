import { ux } from "@oclif/core";
import chalk from "chalk";

class Log {
    public info(...args: any[]): void {
        ux.stdout(...args);
    }

    public error(messages: string[] = [], stop: boolean = false): void {
        if (stop) {
            ux.action.stop(chalk.red(...messages));
        } else {
            ux.stdout(chalk.red(...messages));
        }
    }

    public success(messages: string[] = [], stop: boolean = false): void {
        if (stop) {
            ux.action.stop(chalk.green(...messages));
        } else {
            ux.stdout(chalk.green(...messages));
        }
    }
}

export default new Log();
