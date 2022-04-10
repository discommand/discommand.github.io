# Example

## Install

<code-group>
<code-block title="yarn">

```bash
yarn add discommand
```

</code-block>

<code-block title="npm">

```bash
npm i discommand
```

</code-block>

<code-block title='pnpm'>

```bash
pnpm add discommand
```

</code-block>
</code-group>

## Command

### Usage for Javascript

<code-group>
<code-block title="index.js">

```js
const { DiscommndClient } = require("discommand");
const { Intents } = require("discord.js");
const path = require("path");

const client = new DiscommandClient(
  {
    intents: [Intents.FLAGS.GUILDS],
  },
  {
    loadType: "FILE",
    CommandHandlerDirectory: path.join(__dirname, "commands"),
  }
);

client.LoadAll();

client.login("your_bot_token");
```

</code-block>

<code-block title="commands/ping.js">

```js
const { Command } = require('discommand')

export = class extends Command {
  name = 'ping'
  description = 'ping'
  execute(interaction, DiscommandHandler) {
    interaction.reply('Pong!')
  }
}
```

</code-block>
</code-group>

### Usage for TypeScript

<code-group>
<code-block title="index.ts">

```ts
import { DiscommandClient } from "discommand";
import { Intents } from "discord.js";
import path = require("path");

const client = new DiscommandClient(
  {
    intents: [Intents.FLAGS.GUILDS],
  },
  {
    loadType: "FILE",
    CommandHandlerDirectory: path.join(__dirname, "commands"),
  }
);

client.loadAll();

client.login("your_bot_token");
```

</code-block>

<code-block title="commands/ping.ts">

```ts
import { Command } from "discommand";
import { CommandInteraction } from "discord.js";

export = class extends Command {
  name = "ping";
  description = "ping";
  execute(
    interaction: CommandInteraction,
    DiscommandHandler: DiscommandHandler
  ) {
    interaction.reply("Pong!");
  }
};
```

</code-block>
</code-group>
