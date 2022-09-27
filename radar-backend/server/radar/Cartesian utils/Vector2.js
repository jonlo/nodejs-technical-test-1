

class Vector2 {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceToVector2(v2) {
    const dx = this.x - v2.x;
    const dy = this.y - v2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

}

module.exports = Vector2;