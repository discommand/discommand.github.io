# Example

## Install

<code-group>
<code-block title="npm">

```bash
npm i discommand
```

</code-block>

<code-block title="yarn">

```bash
yarn add discommand
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
---

<code-group>
<code-block title="index.js">

```js
const { DiscommndClient, LoadType } = require('discommand')
const { GatewayIntentBits } = require('discord.js')
const path = require('path')

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    loadType: LoadType.File,
    directory: {
      commandFolderDirectory: path.join(__dirname, 'commands'),
    },
  }
)

client.LoadAll()

client.login('your_bot_token')
```

</code-block>

<code-block title="commands/ping.js">

```js
const { Command } = require('discommand')
const { SlashCommandBuilder } = require('discord.js')

module.exports = class extends Command {
  data = new SlashCommandBuilder().setName('ping').setDescription('pong')
  execute(interaction, cmd) {
    interaction.reply('Pong!')
  }
}
```

</code-block>
</code-group>

### Usage for TypeScript
---

<code-group>
<code-block title="index.ts">

```ts
import { DiscommandClient, LoadType } from 'discommand'
import { GatewayIntentBits } from 'discord.js'
import * as path from 'path'

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    loadType: LoadType.File,
    directory: {
      commandFolderDirectory: path.join(__dirname, 'commands'),
    },
  }
)

client.loadAll()

client.login('your_bot_token')
```

</code-block>

<code-block title="commands/ping.ts">

```ts
import { Command } from 'discommand'
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'

export default class extends Command {
  data = new SlashCommandBuilder().setName('ping').setDescription('pong')
  execute(interaction: ChatInputCommandInteraction, cmd: DiscommandHandler) {
    interaction.reply('Pong!')
  }
}
```

</code-block>
</code-group>
