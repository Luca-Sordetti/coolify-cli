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
coolify-cli/0.0.0 linux-x64 node-v18.20.4
$ coolify --help [COMMAND]
USAGE
  $ coolify COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`coolify help [COMMAND]`](#coolify-help-command)
-   [`coolify plugins`](#coolify-plugins)
-   [`coolify plugins add PLUGIN`](#coolify-plugins-add-plugin)
-   [`coolify plugins:inspect PLUGIN...`](#coolify-pluginsinspect-plugin)
-   [`coolify plugins install PLUGIN`](#coolify-plugins-install-plugin)
-   [`coolify plugins link PATH`](#coolify-plugins-link-path)
-   [`coolify plugins remove [PLUGIN]`](#coolify-plugins-remove-plugin)
-   [`coolify plugins reset`](#coolify-plugins-reset)
-   [`coolify plugins uninstall [PLUGIN]`](#coolify-plugins-uninstall-plugin)
-   [`coolify plugins unlink [PLUGIN]`](#coolify-plugins-unlink-plugin)
-   [`coolify plugins update`](#coolify-plugins-update)

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

## `coolify plugins`

List installed plugins.

```
USAGE
  $ coolify plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ coolify plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/index.ts)_

## `coolify plugins add PLUGIN`

Installs a plugin into coolify.

```
USAGE
  $ coolify plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into coolify.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COOLIFY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COOLIFY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ coolify plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ coolify plugins add myplugin

  Install a plugin from a github url.

    $ coolify plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ coolify plugins add someuser/someplugin
```

## `coolify plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ coolify plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ coolify plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/inspect.ts)_

## `coolify plugins install PLUGIN`

Installs a plugin into coolify.

```
USAGE
  $ coolify plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into coolify.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COOLIFY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COOLIFY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ coolify plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ coolify plugins install myplugin

  Install a plugin from a github url.

    $ coolify plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ coolify plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/install.ts)_

## `coolify plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ coolify plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ coolify plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/link.ts)_

## `coolify plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coolify plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coolify plugins unlink
  $ coolify plugins remove

EXAMPLES
  $ coolify plugins remove myplugin
```

## `coolify plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ coolify plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/reset.ts)_

## `coolify plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coolify plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coolify plugins unlink
  $ coolify plugins remove

EXAMPLES
  $ coolify plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/uninstall.ts)_

## `coolify plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coolify plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coolify plugins unlink
  $ coolify plugins remove

EXAMPLES
  $ coolify plugins unlink myplugin
```

## `coolify plugins update`

Update installed plugins.

```
USAGE
  $ coolify plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.9/src/commands/plugins/update.ts)_

<!-- commandsstop -->

-   [`coolify init <url> <api-token> <application-id>`](#coolify-init)
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
