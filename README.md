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
coolify/2.0.8
$ coolify --help [COMMAND]
USAGE
  $ coolify COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`coolify applications add`](#coolify-applications-add)
-   [`coolify applications list`](#coolify-applications-list)
-   [`coolify applications remove [NAME]`](#coolify-applications-remove-name)
-   [`coolify deploy [NAME]`](#coolify-deploy-name)
-   [`coolify execute NAME COMMAND`](#coolify-execute-name-command)
-   [`coolify help [COMMAND]`](#coolify-help-command)
-   [`coolify instances add`](#coolify-instances-add)
-   [`coolify instances list`](#coolify-instances-list)
-   [`coolify instances remove [NAME]`](#coolify-instances-remove-name)
-   [`coolify restart [NAME]`](#coolify-restart-name)
-   [`coolify start [NAME]`](#coolify-start-name)
-   [`coolify status [NAME]`](#coolify-status-name)
-   [`coolify stop [NAME]`](#coolify-stop-name)

## `coolify applications add`

Add an application

```
USAGE
  $ coolify applications add

DESCRIPTION
  Add an application
```

_See code: [src/commands/applications/add.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/applications/add.ts)_

## `coolify applications list`

List all applications

```
USAGE
  $ coolify applications list

DESCRIPTION
  List all applications
```

_See code: [src/commands/applications/list.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/applications/list.ts)_

## `coolify applications remove [NAME]`

Remove an application

```
USAGE
  $ coolify applications remove [NAME]

ARGUMENTS
  NAME  Name of the application

DESCRIPTION
  Remove an application
```

_See code: [src/commands/applications/remove.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/applications/remove.ts)_

## `coolify deploy [NAME]`

Deploy your application

```
USAGE
  $ coolify deploy [NAME] [-f]

ARGUMENTS
  NAME  Name of the application

FLAGS
  -f, --force
  -w, --watch

DESCRIPTION
  Deploy your application
```

_See code: [src/commands/deploy.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/deploy.ts)_

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

_See code: [src/commands/execute.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/execute.ts)_

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

## `coolify instances add`

Add a coolify instance

```
USAGE
  $ coolify instances add

DESCRIPTION
  Add a coolify instance
```

_See code: [src/commands/instances/add.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/instances/add.ts)_

## `coolify instances list`

List all your coolify instances

```
USAGE
  $ coolify instances list

DESCRIPTION
  List all your coolify instances
```

_See code: [src/commands/instances/list.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/instances/list.ts)_

## `coolify instances remove [NAME]`

Remove a coolify instance

```
USAGE
  $ coolify instances remove [NAME]

ARGUMENTS
  NAME  Name of the instance

DESCRIPTION
  Remove a coolify instance
```

_See code: [src/commands/instances/remove.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/instances/remove.ts)_

## `coolify restart [NAME]`

Restart your application

```
USAGE
  $ coolify restart [NAME]

ARGUMENTS
  NAME  Name of the application

FLAGS
  -w, --watch

DESCRIPTION
  Restart your application
```

_See code: [src/commands/restart.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/restart.ts)_

## `coolify start [NAME]`

Start your application

```
USAGE
  $ coolify start [NAME]

ARGUMENTS
  NAME  Name of the application

FLAGS
  -w, --watch

DESCRIPTION
  Start your application
```

_See code: [src/commands/start.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/start.ts)_

## `coolify status [NAME]`

Status of your application

```
USAGE
  $ coolify status [NAME]

ARGUMENTS
  NAME  Name of the application

DESCRIPTION
  Status of your application
```

_See code: [src/commands/status.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/status.ts)_

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

_See code: [src/commands/stop.ts](https://github.com/Luca-Sordetti/coolify-cli/blob/v2.0.5/src/commands/stop.ts)_

<!-- commandsstop -->
