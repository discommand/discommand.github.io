# Example

- **This version is not supported by MessageCommand.**

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

###  Usage for Javascript

<code-group>
<code-block title="index.js">
```js
const { Client } = require('discord.js')
const { CommandHandler } = require('discommand')
const path = require('path')

const client = new Client({ intents: ['GUILDS'] })

const cmd = new CommandHandler(client, {
prefix: '!',
path: path.join(__dirname, 'commands'),
loadType: 'FOLDER',
})

cmd.CommandLoadAll()

client.login('your_bot_token')
```
</code-block>

<code-block title="commands/ping.js">
```js
const { Command } = require('discommand')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = class extends Command {
  data = new SlashCommandBuilder().setName('ping').setDescription('Pong!')
  execute(interaction, slash) {
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
import { Client } from 'discord.js'
import { CommandHandler } from 'discommand'
import path = require('path')

const client = new Client({intents: ['GUILDS']})
const cmd = new CommandHandler(client, {
path: path.join(__dirname, 'commands'),
loadType: 'FILE',
})

cmd.CommandLoadAll()

client.login('your_bot_token')
```
</code-block>

<code-block title="commands/ping.ts">
```ts
import { Command, CommandHandler } from 'discommand'
import { CommandInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

export = class extends Command {
  data = new SlashCommandBuilder().setName('Ping').setDescription('Pong!')
  execute(interaction: CommandInteraction, slash: CommandHandler) {
    interaction.reply('Pong!')
  }
}
```
</code-block>
</code-group>

## Listener

###  Usage for Javascript

<code-group>
<code-block title="index.js">

```js
const { Client } = require('discord.js')
const { ListenerHandler } = require('discommand')
const path = require('path')

const client = new Client({ intents: ['GUILDS'] })

const event = new ListenerHandler(client, {
path: path.join(__dirname, 'events'),
loadType: 'FILE',
})

event.ListenerLoadAll()

client.login('your_bot_token')
```
</code-block>

<code-block title="commands/ping.js">

```js
const { Listener } = require('discommand')

module.exports = class extends Command {
  name = 'ready'
  execute() {
    console.log('Ready!')
  }
}
```
</code-block>
</code-group>

### Usage for TypeScript

<code-group>
<code-block title="index.ts">

```ts
import { Client } from 'discord.js'
import { ListenerHandler } from 'discommand'
import path = require('path')

const client = new Client({intents: ['GUILDS']})

const event = new ListenerHandler(client, {
path: path.join(__dirname, 'events'),
loadType: 'FILE',
})

event.CommandLoadAll()

client.login('your_bot_token')
```
</code-block>

<code-block title="commands/ping.ts">

```ts
import { Command, CommandHandler } from 'discommand'
import { CommandInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

export = class extends Command {
  name = 'ready'
  excute() {
    console.log('Ready!')
  }
}
```
</code-block>
</code-group>