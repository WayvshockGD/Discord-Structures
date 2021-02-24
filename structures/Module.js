class Module {
    constructor(module) {
        this.label          = module || '';
        this.enabled        = module || true;
        this.devOnly        = module || false;
        this.list           = module || true;
        this.moduleCooldown = module || 0;
    }

    /**
     * @param {Function} execute - Excutes the module.
     */
    execute() { }
}