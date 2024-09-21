# coolify-cli

Coolify CLI is a user-friendly command-line tool that simplifies the deployment and management of applications.

[![Version](https://img.shields.io/npm/v/coolify-cli.svg)](https://npmjs.org/package/coolify-cli)
[![Downloads/week](https://img.shields.io/npm/dw/coolify-cli.svg)](https://npmjs.org/package/coolify-cli)

<!-- toc -->

-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g coolify-cli
$ coolify COMMAND
running command...
$ coolify (--version)
coolify-cli/0.0.0 darwin-arm64 node-v20.11.1
$ coolify --help [COMMAND]
USAGE
  $ coolify COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`coolify init URL API_TOKEN APPLICATION_ID`](#coolify-init)
-   [`coolify deploy`](#coolify-deploy)
-   [`coolify start`](#coolify-start)
-   [`coolify stop`](#coolify-stop)
-   [`coolify restart`](#coolify-restart)
-   [`coolify status`](#coolify-status)

## `coolify init URL API_TOKEN APPLICATION_ID`

Say hello

```
USAGE
  $ coolify init <url> <api-token> <application-id>

ARGUMENTS
  URL           (required) URL of your Coolify Instance
  API_TOKEN     (required) API Token of your Coolify Instance
  APPLICATION_ID  (required) Application ID in your Coolify Instance

DESCRIPTION
  Initialize Coolify CLI Initialize coolify configuration for your project
```

## `coolify deploy`

Trigger a new deployment for the current application

```
USAGE
  $ coolify deply

DESCRIPTION
  Trigger a new deployment for the current application
```

## `coolify start`

Start the current application

```
USAGE
  $ coolify start

DESCRIPTION
  Start the current application
```

## `coolify stop`

Stop the current application

```
USAGE
  $ coolify stop

DESCRIPTION
  Stop the current application
```

## `coolify restart`

Restart the current application

```
USAGE
  $ coolify restart

DESCRIPTION
  Restart the current application
```

## `coolify status`

Get the status of the current application

```
USAGE
  $ coolify status

DESCRIPTION
  Get the status of the current application
```
