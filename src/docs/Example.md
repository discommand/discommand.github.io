# Example

## Install

<code-group>
  <code-group-item title="npm">

```bash
npm i discommand
```

  </code-group-item>
  <code-group-item title="yarn">

```bash
yarn add discommand
```

  </code-group-item>
  <code-group-item title='pnpm'>

```bash
pnpm add discommand
```

  </code-group-item>
</code-group>

## ChatInput Command

### Usage for Javascript

---

<details>
  <summary>If use by commonjs</summary>
  <code-group>
  <code-group-item title="index.js">

```js
const { DiscommandClient } = require('discommand')
const { GatewayIntentBits } = require('discord.js')

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    directory: {
      command: __dirname + '/commands',
    },
  }
)

client.login('your_bot_token')
```

  </code-group-item>
  <code-group-item title="commands/ping.js">

```js
const { Command } = require('discommand')
const { ApplicationCommandType } = require('discord.js')

module.exports = class extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'Pong',
      type: ApplicationCommandType.ChatInput,
    })
  }
  execute(interaction) {
    interaction.reply('Pong!')
  }
}
```

  </code-group-item>
  </code-group>
</details>

---

<code-group>
  <code-group-item title="index.js">

```js
import { DiscommandClient } from 'discommand'
import { GatewayIntentBits } from 'discord.js'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    directory: {
      command: dirname(fileURLToPath(import.meta.url)) + '/commands',
    },
  }
)

client.login('your_bot_token')
```

  </code-group-item>
  <code-group-item title="commands/ping.js">

```js
import { Command } from 'discommand'
import { ApplicationCommandType } from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'Pong',
      type: ApplicationCommandType.ChatInput,
    })
  }
  execute(interaction) {
    interaction.reply('Pong!')
  }
}
```

  </code-group-item>
</code-group>

### Usage for TypeScript

---

<details>
  <summary>If use by commonjs</summary>
  <code-group>
    <code-group-item title="index.ts">

```ts
import { DiscommandClient } from 'discommand'
import { GatewayIntentBits } from 'discord.js'

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    directory: {
      command: __dirname + '/commands',
    },
  }
)

client.login('your_bot_token')
```

  </code-group-item>
  </code-group>
</details>

---

<code-group>
  <code-group-item title="index.ts">

```ts
import { DiscommandClient } from 'discommand'
import { GatewayIntentBits } from 'discord.js'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    directory: {
      command: dirname(fileURLToPath(import.meta.url)) + '/commands',
    },
  }
)

client.login('your_bot_token')
```

  </code-group-item>
  <code-group-item title="commands/ping.ts">

```ts
import { Command } from 'discommand'
import { ChatInputCommandInteraction, ApplicationCommandType } from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'Pong',
      type: ApplicationCommandType.ChatInput,
    })
  }
  execute(interaction: ChatInputCommandInteraction) {
    interaction.reply('Pong!')
  }
}
```

  </code-group-item>
</code-group>

## Context Menu

### Usage for JavaScript

---

<code-group>
  <code-group-item title="User Context Menu">

```js
import { Command } from 'discommand'
import { ApplicationCommandType } from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'user',
      type: ApplicationCommandType.User,
    })
  }
  execute(interaction) {
    interaction.reply(`Target User is ${interaction.targetUser}`)
  }
}
```

  </code-group-item>
  <code-group-item title="Message Context Menu">

```js
import { Command } from 'discommand'
import { ApplicationCommandType } from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'message',
      type: ApplicationCommandType.Message,
    })
  }
  execute(interaction) {
    interaction.reply(`Target Message is ${interaction.targetMessage}`)
  }
}
```

  </code-group-item>
</code-group>

### Using for TypeScript

---

<code-group>
  <code-group-item title="User Context Menu">

```ts
import { Command } from 'discommand'
import {
  UserContextMenuCommandInteraction,
  ApplicationCommandType,
} from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'user',
      type: ApplicationCommandType.User,
    })
  }
  execute(interaction: UserContextMenuCommandInteraction) {
    interaction.reply(`Target User is ${interaction.targetUser}`)
  }
}
```

  </code-group-item>
  <code-group-item title="Message Context Menu">

```ts
import { Command } from 'discommand'
import {
  MessageContextMenuCommandInteraction,
  ApplicationCommandType,
} from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'message',
      type: ApplicationCommandType.Message,
    })
  }
  execute(interaction: MessageContextMenuCommandInteraction) {
    interaction.reply(`Target Message is ${interaction.targetMessage}`)
  }
}
```

  </code-group-item>
</code-group>

## Event listener

<code-group>
  <code-group-item title="Using for JavaScript">

```js
import { Listener } from 'discommand'

export default class extends Listener {
  constructor() {
    super('ready')
  }
  execute(client) {
    console.log(`Login as ${client.user?.username}`)
  }
}
```

  </code-group-item>
  <code-group-item title="Using for TypeScript">

```ts
import { Listener } from 'discommand'
import { type Client } from 'discord.js'

export default class extends Listener {
  constructor() {
    super('ready')
  }
  execute(client: Client) {
    console.log(`Login as ${client.user?.username}`)
  }
}
```

  </code-group-item>
</code-group>
