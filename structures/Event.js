class Event {
    constructor(event) {
        this.label   = event || '';
        this.enabled = event || true;
        this.list    = event || true;
    }

    /**
     * @param {Function} execute - Executes the event class.
     */
    execute() { }
}