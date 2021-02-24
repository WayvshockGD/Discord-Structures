let { CommandStructure } = require('../../../index.js');

class test extends CommandStructure {
    constructor() {
        super();

        this.name    = 'test';
        this.aliases = [ 'the' ];
    }

    async execute({ message }) {
        return await message.channel.send('ok this works lol')
    }
}

module.exports = new test();