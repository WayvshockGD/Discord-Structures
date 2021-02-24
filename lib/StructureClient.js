class StructureClient {

    // of course this class is required
    /**
     * @param {Object} message - The message Object the client will use.
     * @param {Object} client - The client object the StructureClient will use.
     * @param {String} lib - The library the client will use. Options: [djs | Eris]
     * @param {String} prefix - The prefix that will be used for the help menu.
     * @param {boolean} disableHelp - Will disable the help default help if false. Options: [true | false]
     * @param {Object} commands - The .json Object that the help command will use. Format: name: Array
     */
    constructor(message, client, lib, prefix, disableHelp, commands) {
        let command;
        this.color = 0x5cf761;

        if (disableHelp === false) {
            if(!commands) commands = [null];
            if (message.author.bot) return false;
            if (message.content.includes(`${prefix}help` || `${prefix}commands`)) {
                if (lib === 'eris') {
                    if (commands.length === 0) command = null;
                    return client.createMessage(message.channel.id, {
                        embed: {
                            title: `${client.user.username} Help`,
                            description: `${'```'}\n${prefix}${commands.name.join(`, \n${prefix}`)}\n${'```'}`,
                            color: this.color
                        }
                    })
                } else if (lib === 'djs') {
                    if (commands.length === 0) command = null
                    return message.channel.send({
                        embed: {
                            title: `${client.user.username} Help`,
                            description: `${'```'}\n${prefix}${commands.name.join(`,\n${prefix}`)}\n${'```'}`,
                            color: this.color
                        }
                    })
                }
            }
        }
    }
        // there must be exceptions.
    execeptions() {
        if (message === undefined) console.error('You must define the message property!')
        if (client === undefined) console.error('The client Object must not be undefined!')
        if (lib === undefined) console.error('The library must defined!')
        if (prefix === undefined) console.error('The prefix string must be defined!')
        if (disableHelp === undefined) console.error('The option is required!')

        process.exit(1);
    }
}

module.exports = StructureClient;