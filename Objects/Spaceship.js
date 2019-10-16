///////////////////////////
///  S P A C E  S H I P ///
///////////////////////////

class Spaceship {
  constructor() {
    this.x = width / 2;
    this.y = height - 40;
    this.direction = 0;
    this.lives = 5;
  }

  show = function() {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, 20, 20);
  };

  move = function() {
    if (this.x > 10 && this.x < width - 10) {
      this.x += this.direction * 7;
    } else {
      if (this.x <= 10) {
        this.x = width - 20;
      } else {
        this.x = 20;
      }
    }
  };

  setDirection = function(dir) {
    this.direction = dir;
  };
}
