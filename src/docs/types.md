# typing

## DiscommandClient

### Constructor

```js
new DiscommandClient(ClientOptions, Options);
```

|PARAMETER|TYPE|DESCRIPTION|
|---------|----|-----------|
|ClientOptions|<a href='https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions'>discord.js#ClientOptions</a>|discord.js' ClientOptions.|
|DiscommandClientOptions|<a href='#discommandclientoptions'>DiscommandClientOptions</a>|CommandHandler's Option|

### Properties

#### .Options

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

|PARAMETER|TYPE|EXAMPLE|
|---------|----|-------|
|loadtype|<a href="https://github.com/discommand/discommand/blob/main/src/types/index.ts#L3">Loadtype</a>|`LoadType.File`|
|directory|<a href="https://github.com/discommand/discommand/blob/main/src/types/index.ts#L15">directory</a>|`{ commandFolderDirectory: __dirname + '/commands' }`|