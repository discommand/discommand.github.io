# typing

## DiscommandClient

### Constructor

```js
new DiscommandClient(ClientOptions, DiscommandClientOptions);
```

| PARAMETER               | TYPE                                                                                                         | DESCRIPTION                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------- |
| ClientOptions           | <a href='https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions'>discord.js#ClientOptions</a> | discord.js' ClientOptions. |
| DiscommandClientOptions | <a href='#discommandclientoptions'>DiscommandClientOptions</a>                                               | CommandHandler's Option    |

### Properties

#### .DiscommandClientOptions

DiscommandClient's Option

> Type: <a href="#discommandclientoptions">DiscommandClientOptions</a>

### Methods

#### .LoadAll()

> Description: Command Load and run or Listener Load and run

## DiscommandClientOptions

| PRAMETER                | TYPE                                                                                                                                                  | EXAMPLE                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| CommandHandlerDirectory | string                                                                                                                                                | `__dirname + '/commands'` |
| ListenerDirectory?      | string                                                                                                                                                | `__dirname + '/events'`   |
| loadType                | <a href="https://github.com/discommand/discommand/blob/9a84bde950d988b60d688ae6fcffa8cbf7844594/src/types/DiscommandClientOptions.ts#L1">loadType</a> | `'FILE'`                  |
