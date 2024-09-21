import chalk from "chalk";

class Log {
    primaryColor = chalk.hex("#8c52ff");

    public info(...args: any[]): void {
        console.log(this.primaryColor(...args));
    }

    public error(...args: any[]): void {
        console.log(chalk.red(...args));
    }

    public success(...args: any[]): void {
        console.log(chalk.green(...args));
    }
}

export default new Log();
