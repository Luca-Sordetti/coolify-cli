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
coolify/2.0.2
$ coolify --help [COMMAND]
USAGE
  $ coolify COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`coolify app [add|remove] [NAME]`](#coolify-app-action-name)
-   [`coolify deploy [NAME]`](#coolify-deploy-name)
-   [`coolify execute NAME COMMAND`](#coolify-execute-name-command)
-   [`coolify help [COMMAND]`](#coolify-help-command)
-   [`coolify login`](#coolify-login)
-   [`coolify logout [INSTANCE]`](#coolify-logout-instance)
-   [`coolify ls`](#coolify-ls)
-   [`coolify restart [NAME]`](#coolify-restart-name)
-   [`coolify start [NAME]`](#coolify-start-name)
-   [`coolify stop [NAME]`](#coolify-stop-name)

## `coolify app ACTION [NAME]`

```
USAGE
  $ coolify app ACTION [NAME]
```

_See code: [src/commands/app.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/app.ts)_

## `coolify deploy [NAME]`

Deploy your application

```
USAGE
  $ coolify deploy [NAME] [-f]

ARGUMENTS
  NAME  Name of the application

FLAGS
  -f, --force

DESCRIPTION
  Deploy your application
```

_See code: [src/commands/deploy.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/deploy.ts)_

## `coolify execute NAME COMMAND`

Execute a command in your application

```
USAGE
  $ coolify execute NAME COMMAND

ARGUMENTS
  NAME     Name of the application
  COMMAND  Command to execute

DESCRIPTION
  Execute a command in your application
```

_See code: [src/commands/execute.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/execute.ts)_

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

## `coolify login`

Login to your coolify instance

```
USAGE
  $ coolify login [-f]

FLAGS
  -f, --force  Force replace login to your coolify instance

DESCRIPTION
  Login to your coolify instance
```

_See code: [src/commands/login.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/login.ts)_

## `coolify logout [INSTANCE]`

Logout from an instance of Coolify

```
USAGE
  $ coolify logout [INSTANCE]

DESCRIPTION
  Logout from an instance of Coolify
```

_See code: [src/commands/logout.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/logout.ts)_

## `coolify ls`

List all your coolify instances

```
USAGE
  $ coolify ls

DESCRIPTION
  List all your coolify instances
```

_See code: [src/commands/ls.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/ls.ts)_

## `coolify restart [NAME]`

Restart your application

```
USAGE
  $ coolify restart [NAME]

ARGUMENTS
  NAME  Name of the application

DESCRIPTION
  Restart your application
```

_See code: [src/commands/restart.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/restart.ts)_

## `coolify start [NAME]`

Start your application

```
USAGE
  $ coolify start [NAME]

ARGUMENTS
  NAME  Name of the application

DESCRIPTION
  Start your application
```

_See code: [src/commands/start.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/start.ts)_

## `coolify stop [NAME]`

Stop your application

```
USAGE
  $ coolify stop [NAME]

ARGUMENTS
  NAME  Name of the application

DESCRIPTION
  Stop your application
```

_See code: [src/commands/stop.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v1.0.3/src/commands/stop.ts)_

<!-- commandsstop -->
