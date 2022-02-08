# typing

## CommandHandler

### Constructor
```js
new CommandHandler(client, options);
```

| PARAMETER | TYPE                                                                                   | DESCRIPTION             |
| --------- | -------------------------------------------------------------------------------------- |-------------------------|
| client    | <a href='https://discord.js.org/#/docs/main/stable/class/Client'>discord.js#Client</a> | discord.js' Client.     |
| options   | <a href='#options'>Options</a>                              | CommandHandler's Option |

### Properties

#### .path

command file's path

> Type: string

#### .loadType

command's loadType

> Type: <a href='https://github.com/discommand/discommand/blob/main/src/structures/command.ts#L6'>loadType</a>

### Methods

#### CommandLoadAll()

> Description: Command Load and run.

#### CommandDeloadAll()

> Description: Command Deload.


#### CommandReloadAll()

this is now can't.

> Description: Command Reload and run.

## ListenerHandler

### Constructor
```javascript
new ListenerHandler(client, options);
```

### Properties

#### .path

> Type: string

#### .loadType

> Type: <a href='https://github.com/discommand/discommand/blob/main/src/structures/command.ts#L6'>loadType</a>
> 
>

### Methods

#### ListenerLoadAll()

> Description: Listener Load and run.

#### ListenerDeloadAll()

> Description: Listener Deload.


#### ListenerReloadAll()

this is now can't.

> Description: Listener Reload and run.

| PARAMETER | TYPE                                                                                   | DESCRIPTION              |
| --------- | -------------------------------------------------------------------------------------- |--------------------------|
| client    | <a href='https://discord.js.org/#/docs/main/stable/class/Client'>discord.js#Client</a> | discord.js' Client.      |
| options   | <a href='#options'>Options</a>                              | ListenerHandler's Option |

## Options

| PARAMETER | TYPE                                                                                                   | DESCRIPTION         | EXAMPLE                   |
|-----------|--------------------------------------------------------------------------------------------------------|---------------------|---------------------------|
| path      | string                                                                                                 | command file's path | `__dirname + '/commands'` |
| loadType  | <a href='https://github.com/discommand/discommand/blob/main/src/structures/command.ts#L6'>loadType</a> | command's loadType  | `'FILE'`                  |

