const protocols = {
    'closest-enemies': require('./closestEnemies'),
    'furthest-enemies': require('./furthestEnemies'),
    'assist-allies': require('./assistAllies'),
    'avoid-crossfire': require('./avoidCrossfire'),
    'prioritize-mech': require('./prioritizeMech'),
    'avoid-mech': require('./avoidMech'),
};

class ProtocolFactory {

    static createProtocol(name) {
        return new protocols[name];
    }
}

module.exports = ProtocolFactory;