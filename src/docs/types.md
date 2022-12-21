# typing

## DiscommandClient

extends [discord.js Client](https://discord.js.org/#/docs/discord.js/main/class/Client)

### Constructor

```js
new DiscommandClient(ClientOptions, Options);
```

|PARAMETER|TYPE|DESCRIPTION|
|---------|----|-----------|
|ClientOptions|<a href='https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions'>discord.js#ClientOptions</a>|discord.js' ClientOptions.|
|DiscommandClientOptions|<a href='#discommandclientoptions'>DiscommandClientOptions</a>|CommandHandler's Option|

### Properties

#### .discommandOptions

DiscommandClient's Options

> Type: <a href="#discommandclientoptions">DiscommandClientOptions</a>

### Methods

#### .loadAll()

> Description: Command Load and run or Listener Load and run

#### .deloadAll()

> Description: Command deload or Listener deload

#### .reloadAll()

> Description: Command reload or Listener reload


## DiscommandClientOptions

|PARAMETER|TYPE|OPTIONAL|EXAMPLE|
|---------|----|--------|-------|
|loadtype|<a href="https://github.com/discommand/discommand/blob/main/src/types/index.ts#L4">LoadType</a>||`LoadType.File`|
|directory|<a href="https://github.com/discommand/discommand/blob/main/src/types/index.ts#L19">directory</a>||`{ command: __dirname + '/commands' }`|
|guildID|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>|O|`your guild id`|