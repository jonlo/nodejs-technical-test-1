const Protocol = require('./protocol');

module.exports = class AssistAllies extends Protocol {

    constructor() {
        super();
    }

    apply(scans) {
        scans.sort(sortByAllies);
        return scans;
    }

};

function sortByAllies(a, b) {
    if (a.allies !== undefined && b.allies === undefined) {
        return -1;
    }
    if (a.allies === undefined && b.allies !== undefined) {
        return 1;
    }
    return 0;
}