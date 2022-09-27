const Protocol = require('./protocol');
const DistanceSorter = require("../scanner/distanceSorter");

module.exports = class FurthestEnemies extends Protocol {

    constructor() {
        super();
    }

    apply(scans) {
        scans.sort(sortByEnemies);
        DistanceSorter.sortByFurtherDistance(scans);
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