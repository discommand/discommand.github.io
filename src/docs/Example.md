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

## ChatInput Command

### Usage for Javascript

---

<code-group>
<code-block title="index.js">

```js
const { DiscommndClient } = require('discommand')
const { GatewayIntentBits } = require('discord.js')

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    loadType: LoadType.File,
    directory: {
      command: __dirname + '/commands',
    },
  }
)

client.start('your_bot_token')
```

</code-block>

<code-block title="commands/ping.js">

```js
const { Command } = require('discommand')
const { ApplicationCommandType } = require('discord.js')

module.exports = class extends Command {
  constructor() {
    super()
    this.data = {
      name: 'ping',
      description: 'Pong',
      type: ApplicationCommandType.ChatInput,
    }
  }
  execute(interaction) {
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
import { DiscommandClient } from 'discommand'
import { GatewayIntentBits } from 'discord.js'

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    loadType: LoadType.File,
    directory: {
      command: __dirname + '/commands',
    },
  }
)

client.start('your_bot_token')
```

</code-block>

<code-block title="commands/ping.ts">

```ts
import { Command } from 'discommand'
import { ChatInputCommandInteraction, ApplicationCommandType } from 'discord.js'

export default class extends Command {
  constructor() {
    super()
    this.data = {
      name: 'ping',
      description: 'Pong',
      type: ApplicationCommandType.ChatInput,
    }
  }
  execute(interaction: ChatInputCommandInteraction) {
    interaction.reply('Pong!')
  }
}
```

</code-block>
</code-group>

## Context Menu

### Usage for JavaScript

---

<code-group>
<code-block title="User Context Menu">

```js
const { Command } = require('discommand')
const { ApplicationCommandType } = require('discord.js')

module.exports = class extends Command {
  constructor() {
    super()
    this.data = {
      name: 'ping',
      type: ApplicationCommandType.User,
    }
  }
  execute(interaction) {
    interaction.reply(`Hello ${interaction.targetUser}`)
  }
}
```

</code-block>

<code-block title="Message Context Menu">

```js
const { Command } = require('discommand')
const { ApplicationCommandType } = require('discord.js')

module.exports = class extends Command {
  constructor() {
    super()
    this.data = {
      name: 'ping',
      type: ApplicationCommandType.Message,
    }
  }
  execute(interaction) {
    interaction.reply(`Message is ${interaction.targetMessage}`)
  }
}
```

</code-block>
</code-group>

### Using for TypeScript

---

<code-group>
<code-block title="User Context Menu">

```ts
import { Command } from 'discommand'
import {
  UserContextMenuCommandInteraction,
  ApplicationCommandType,
} from 'discord.js'

export default class extends Command {
  constructor() {
    super()
    this.data = {
      name: 'ping',
      type: ApplicationCommandType.User,
    }
  }
  execute(interaction: UserContextMenuCommandInteraction) {
    interaction.reply(`Hello ${interaction.targetUser}`)
  }
}
```

</code-block>

<code-block title="Message Context Menu">

```ts
import { Command } from 'discommand'
import {
  MessageContextMenuCommandInteraction,
  ApplicationCommandType,
} from 'discord.js'

export default class extends Command {
  constructor() {
    super()
    this.data = {
      name: 'ping',
      type: ApplicationCommandType.Message,
    }
  }
  execute(interaction: MessageContextMenuCommandInteraction) {
    interaction.reply(`Message is ${interaction.targetMessage}`)
  }
}
```

</code-block>
</code-group>

## Event listener

<code-group>
<code-block title="Using for JavaScript">

```js
const { Listener } = require('discommand')

module.exports = class extends Listener {
  constructor() {
    super('ready')
  }
  execute(client) {
    console.log(`Login as ${client.user?.username}`)
  }
}
```

</code-block>

<code-block title="Using for TypeScript">

```ts
import { Listener } from 'discommand'
import type { Client } from 'discord.js'

export default class extends Listener {
  constructor() {
    super('ready')
  }
  execute(client: Client) {
    console.log(`Login as ${client.user?.username}`)
  }
}
```

</code-block>
</code-group>
