///////////////////////////
///      B U L L E T    ///
///////////////////////////
var distance;
var sumOfRadi;

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.used = false;
  }

  show = function() {
    fill(247, 175, 25);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.radius * 2, this.radius * 2);
  };

  move = function() {
    this.y -= 7;
  };

  hits = function(invader) {
    distance = dist(this.x, this.y, invader.x, invader.y);
    sumOfRadi = this.radius + invader.size;

    if (distance <= sumOfRadi) {
      return true;
    } else {
      return false;
    }
  };

  use = function() {
    this.used = true;
  };
}
