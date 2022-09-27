const Protocol = require('./protocol');

module.exports = class AvoidCrossfire extends Protocol {

    constructor() {
        super();
    }

    apply(scans) {
        return scans.filter(scan => scan.allies === undefined);
    }

};