const Protocol = require('./protocol');

module.exports = class AvoidMech extends Protocol {

    constructor() {
        super();
    }

    apply(scans) {
        return scans.filter(scan => scan.enemies.type !== "mech");
    }

};