class Command {
    
    constructor(command) {
        this.name              = command || '';
        this.aliases           = command || [];
        this.description       = command || '';
        this.permissions       = command || '';
        this.clientPermissions = command || [];
        this.userPermissions   = command || [];
        this.ownerOnly         = command || false;
        this.guildOnly         = command || true;
        this.enabled           = command || true;
        this.examples          = command || [];
        this.cooldown          = command || 0;
        this.subCommands       = command || [];
    }

    /**
     * @param {Function} execute - Executes the command.
     */
    execute() { }
}

module.exports = Command;