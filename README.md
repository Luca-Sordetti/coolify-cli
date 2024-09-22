# coolify-cli

Coolify CLI is a user-friendly command-line tool that simplifies the deployment and management of applications.

[![Version](https://img.shields.io/npm/v/coolify-cli.svg)](https://npmjs.org/package/coolify-cli)
[![Downloads/week](https://img.shields.io/npm/dw/coolify-cli.svg)](https://npmjs.org/package/coolify-cli)

<!-- toc -->

-   [coolify-cli](#coolify-cli)
-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g coolify
$ coolify COMMAND
running command...
$ coolify (--version)
coolify/0.0.0 darwin-arm64 node-v20.11.1
$ coolify --help [COMMAND]
USAGE
  $ coolify COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`coolify help [COMMAND]`](#coolify-help-command)
-   [`coolify init URL TOKEN APPLICATION`](#coolify-init-url-token-application)
-   [`coolify restart`](#coolify-restart)
-   [`coolify start`](#coolify-start)
-   [`coolify status`](#coolify-status)
-   [`coolify stop`](#coolify-stop)
-   [`coolify deploy`](#coolify-deploy)
-   [`coolify execute COMMAND`](#coolify-execute-command)

## `coolify help [COMMAND]`

Display help for coolify.

```
USAGE
  $ coolify help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for coolify.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.11/src/commands/help.ts)_

## `coolify init URL TOKEN APPLICATION`

Initialize coolify configuration for your project

```
USAGE
  $ coolify init URL TOKEN APPLICATION

ARGUMENTS
  URL          Url of your coolify instance
  TOKEN        Token API of your coolify instance
  APPLICATION  Your application identifier

DESCRIPTION
  Initialize coolify configuration for your project
```

_See code: [src/commands/init.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/init.ts)_

## `coolify deploy`

Trigger a new deployment for the current application

```
USAGE
  $ coolify deploy [-f]

FLAGS
  -f, --force

DESCRIPTION
  Trigger a new deployment for the current application
```

_See code: [src/commands/deploy.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/deploy.ts)_

## `coolify restart`

Restart the service of the current application

```
USAGE
  $ coolify restart

DESCRIPTION
  Restart the service of the current application
```

_See code: [src/commands/restart.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/restart.ts)_

## `coolify start`

Start the service of the current application

```
USAGE
  $ coolify start

DESCRIPTION
  Start the service of the current application
```

_See code: [src/commands/start.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/start.ts)_

## `coolify status`

Check the status of the current application

```
USAGE
  $ coolify status

DESCRIPTION
  Check the status of the current application
```

_See code: [src/commands/status.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/status.ts)_

## `coolify stop`

Stop the service of the current application

```
USAGE
  $ coolify stop

DESCRIPTION
  Stop the service of the current application
```

_See code: [src/commands/status.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/stop.ts)_

## `coolify execute COMMAND`

Execute a command in the current container of your application

```
USAGE
  $ coolify execute COMMAND

ARGUMENTS
  COMMAND  Command to execute

DESCRIPTION
  Execute a command in the current container of your application
```

_See code: [src/commands/execute.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v0.0.0/src/commands/execute.ts)_
