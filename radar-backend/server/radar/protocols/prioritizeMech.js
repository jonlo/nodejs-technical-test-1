const Protocol = require('./protocol');

module.exports = class PrioritizeMech extends Protocol {

    constructor() {
        super();
    }

    apply(scans) {
        scans.sort(sortByMechPriority);
        return scans;
    }

};

function sortByMechPriority(a, b) {
    if (a.enemies.type === 'mech' && b.enemies.type === 'soldier') {
        return -1;
    }
    if (a.enemies.type === 'soldier' && b.enemies.type === 'mech') {
        return 1;
    }
    return 0;
}