# structures

This github repository is just for this because i am tired of making more.
If you would like this on npm let me know!

how to use:

# Setup

in your package.json
you can use the git link of this repository.

```json
# i am using this package.json as an example.

{
  "name": "structures",
  "version": "1.0.0",
  "description": "the basic structures for any discord bot.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "Apache-2.0",
  "dependencies": {
    "discord-structures": "version" "run npm install discord-structures"
  }
}
```

And then you can use it!

### Example Command:

```js
let { CommandStructures } = require('discord-structures')

class Ping extends CommandStructures {
    constructor() {
        super();

        this.name    = 'ping' // can be used in super as well
        this.aliases = [' pong ']
    }

    async execute({ message }) or (message) {
        return await message.channel.send('Pong!'); // Discord.js

        return await message.channel.createMessage('Pong!'); // Eris
    }
}

module.exports = Ping;
// or
module.exports = new Ping();
```

## The Structure Client

very simple to set up

all the structure has is a help command. more features will be coming soon

Doc:

| Name        | Type        |
|-------------|-------------|
| message     | Object      |
| client      | Object      |
| lib         | String      |
| prefix      | String      | 
| disableHelp | Boolean     |
| commands    | Object      |

example:

```js
let { StructureClient } = require('structures');

new StructureClient(message, client, 'eris', '!', false) // true is only if you want to disable the help command
```

The client is supposed to be like this

```js
let { Client } = require('eris'); // you can also go with discord.js but the lib has to be djs
let { token } = require('./config.json');
let { StructureClient } = require('structures');

let client = new Client(token);

client.once('ready', () => {
    console.log('Ready');
});

let command = require('./test');
client.commands = new Map();

client.commands.set(command.name, command)

client.on('messageCreate', async (message) => {
    new StructureClient(message, client, 'eris', '!', false);

    if (message.content === `!${command.name}` || message.content === `!${command.aliases}`) {
        command.execute({ message });
    }
})

client.connect();
```

The command object can also be:

```json
{
    "name": ["your commands here"]
}
```