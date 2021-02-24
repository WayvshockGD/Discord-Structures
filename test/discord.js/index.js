let { Client } = require('discord.js');
let { token, commands} = require('../config.json');
let { StructureClient } = require('../../index');

let client = new Client();
let prefix = '?';

client.once('ready', () => {
    console.log('Ready');
});


let command = require('./commands/test');
client.commands = new Map();

client.commands.set(command.name, command)

client.on('message', async (message) => {
    new StructureClient(message, client, 'djs', prefix, false, commands);

    if (message.content === `${prefix}${command.name}` || message.content === `${prefix}${command.aliases}`) {
        command.execute({ message });
    }
})

client.login(token);