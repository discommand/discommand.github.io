# typing

## Command

### Constructor
```js
new Command(client, options);
```

| PARAMETER | TYPE                                                                                   | DESCRIPTION                   |
| --------- | -------------------------------------------------------------------------------------- | ----------------------------- |
| client    | <a href='https://discord.js.org/#/docs/main/stable/class/Client'>discord.js#Client</a> | discord.js' Client.           |
| options   | <a href='#commandoptions'>commandHandlerClientOptions</a>                              | commandHandlerClient's Option |

### Properties

#### .prefix?

Bot's prefix

> Type: string | undefined

#### .path

command file's path

> Type: string

#### .loadType

command's loadType

> Type: <a href='https://github.com/discommand/discommand/blob/main/src/structures/command.ts#L6'>loadType</a>

### Methods

#### loadCommand()

> Description: Command Load and run.

## CommandOptions

| PARAMETER | TYPE                                                                                                   | DESCRIPTION         | EXAMPLE                   |
| --------- | ------------------------------------------------------------------------------------------------------ | ------------------- | ------------------------- |
| prefix?    | string | undefined                                                                                                 | command's prefix    | `'.'`                     |
| path      | string                                                                                                 | command file's path | `__dirname + '/commands'` |
| loadType  | <a href='https://github.com/discommand/discommand/blob/main/src/structures/command.ts#L6'>loadType</a> | command's loadType  | `'FILE'`                  |