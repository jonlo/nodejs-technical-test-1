const Vector2 = require('../Cartesian utils/Vector2');

module.exports = class Scan {

    constructor(scanData) {
        this.coordinates = new Vector2(scanData.coordinates.x, scanData.coordinates.y);
        this.enemies = scanData.enemies;
        this.allies = scanData.allies;
        this.setDistance();
    }

    setDistance() {
        this.distance = new Vector2(0, 0).distanceToVector2(this.coordinates);
    }

};