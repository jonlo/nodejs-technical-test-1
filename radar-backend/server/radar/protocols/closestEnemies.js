const Protocol = require('./protocol');

module.exports = class ClosestEnemies extends Protocol {

    constructor() {
        super();
    }

    apply(scans) {
        scans.sort(sortByEnemies);
        return scans;
    }

};

function sortByEnemies(a, b) {
    if (a.enemies !== undefined && b.enemies === undefined) {
        return -1;
    }
    if (a.enemies === undefined && b.enemies !== undefined) {
        return 1;
    }
    return 0;
}