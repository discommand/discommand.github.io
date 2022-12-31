# typing

## DiscommandClient

extends [Client](https://discord.js.org/#/docs/discord.js/main/class/Client)

### Constructor

```js
new DiscommandClient(clientOptions, options)
```

| PARAMETER     | TYPE                                                                            | DESCRIPTION                |
| ------------- | ------------------------------------------------------------------------------- | -------------------------- |
| clientOptions | [Client](https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions) | discord.js' ClientOptions. |
| options       | [DiscommandClientOptions](#discommandclientoptions)                             | CommandHandler's Option    |

### Properties

#### .discommandOptions

DiscommandClient's Options

> Type: <a href="#discommandclientoptions">DiscommandClientOptions</a>

### Methods

#### .loadAll()

> Description: Module Load and run

#### .deloadAll()

> Description: Module deload

#### .reloadAll()

> Description: Module reload

## DiscommandClientOptions

| PROPERTY  | TYPE                                                                                  | OPTIONAL | EXAMPLE                                |
| --------- | ------------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| directory | [directory](https://github.com/discommand/discommand/blob/main/src/types/index.ts#L5) |          | `{ command: __dirname + '/commands' }` |
| guildID   | [Snowflakes](https://discord.com/developers/docs/reference#snowflakes)                | O        | `your guild id`                        |

## DiscommandHandler

extends [BaseHandler](https://github.com/discommand/discommand/blob/main/src/Bases/BaseHandler.ts)

### Constructor

```js
new DiscommandHandler(options)
```

| PARAMETER | TYPE                                                  | DESCRIPTION                 |
| --------- | ----------------------------------------------------- | --------------------------- |
| options   | [DiscommandHandlerOptions](#discommandhandleroptions) | DiscommandHandler's options |

### Properties

#### .options

> Type: [DiscommandHandlerOptions](#discommandhandleroptions)

### Methods

#### .loadAll()

> Description: Module Load and run

#### .deloadAll()

> Description: Module deload

#### .reloadAll()

> Description: Module reload

## DiscommandHandlerOptions

| PROPERTY  | TYPE                                                                                              | OPTIONAL | EXAMPLE                   |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| directory | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |          | `__dirname + '/commands'` |
| guildID   | [Snowflakes](https://discord.com/developers/docs/reference#snowflakes)                            | O        | `your guild id`           |

## Command

abstract

extends [Base](https://github.com/discommand/discommand/blob/main/src/Bases/Base.ts)

### Constructor

```js
new Command(name)
```

| PARAMETER | TYPE                                                                                              | DESCRIPTION    |
| --------- | ------------------------------------------------------------------------------------------------- | -------------- |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Command's name |

### Properties

#### .data

> Type: [ApplicationCommandData](https://discord.js.org/#/docs/discord.js/main/typedef/ApplicationCommandData)

## Listener

abstract

extends [Base](https://github.com/discommand/discommand/blob/main/src/Bases/Base.ts)

### Constructor

```js
new Listener(name)
```

| PARAMETER | TYPE                                                                                              | DESCRIPTION     |
| --------- | ------------------------------------------------------------------------------------------------- | --------------- |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Listener's name |

### Properties

#### .once

> Type: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
