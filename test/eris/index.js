let { Client } = require('eris');
let { token, commands} = require('../config.json');
let { StructureClient } = require('structures');

let client = new Client(token);
let prefix = '!';

client.once('ready', () => {
    console.log('Ready');
});

let command = require('./test');
client.commands = new Map();

client.commands.set(command.name, command)

client.on('messageCreate', async (message) => {
    new StructureClient(message, client, 'eris', prefix, false, commands);

    if (message.content === `${prefix}${command.name}` || message.content === `${prefix}${command.aliases}`) {
        command.execute({ message });
    }
})

client.connect();