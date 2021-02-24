let { CommandStructure } = require('structures');

class test extends CommandStructure {
    constructor() {
        super();

        this.name    = 'test';
        this.aliases = [ 'the', 't' ];
    }

    async execute({ message }) {
        return await message.channel.createMessage('ok this works lol')
    }
}

module.exports = new test();