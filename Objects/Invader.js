///////////////////////////
///    I N V A D E R    ///
///////////////////////////

var directionOptions = [
  "horizontal",
  "random",
  "vertical",
  "diagonalR",
  "digonalL",
  "static",
  "random",
  "diagonalR"
];
var speedOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
var sizeOptions = [7, 10, 15, 18, 20, 23, 25, 30];

// -- Invader Object
class Invader {
  constructor(x, y, flib) {
    this.x = x;
    this.y = y;
    this.dir = 1;

    this.alive = true;
    this.crossed = false;

    this.flib = flib;
    var flibChar = this.flib.split("");

    this.direction = directionOptions[parseInt(flibChar[0])];
    this.speed = speedOptions[parseInt(flibChar[1])];
    this.size = sizeOptions[parseInt(flibChar[2])];
  }

  show = function() {
    fill(249, 113, 0);
    stroke(87, 34, 18);
    rectMode(CENTER);
    rect(this.x, this.y, this.size * 2, this.size * 2);
  };

  //////////     M O V E      ////////

  move = function() {
    // -- Horizontal
    if (this.direction === "horizontal") {
      if (this.x > 10 && this.x < width - 10) {
        this.x += this.speed * 5;
      } else {
        if (this.x <= 10) {
          this.x = width - 20;
        } else {
          this.x = 20;
        }
      }

      // --  Random
    } else if (this.direction === "random") {
      var rand = Math.random();

      if (rand < 0.5) {
        if (this.x - Math.random() * 10 >= 0) {
          this.x -= Math.random() * 10;
        } else {
          this.x += Math.random() * 10;
        }

        if (this.y - Math.random() * 10 >= 0) {
          this.y -= Math.random() * 10;
        } else {
          this.y += Math.random() * 10;
        }
      } else {
        if (this.x + Math.random() * 10 <= width) {
          this.x += Math.random() * 10;
        } else {
          this.x -= Math.random() * 10;
        }

        this.y += Math.random() * 10;
      }

      // -- Vertical
    } else if (this.direction === "vertical") {
      this.y += this.speed;
    }

    // -- Diagonal Right
    else if (this.direction === "diagonalR") {
      this.x += this.speed;
      this.y += this.speed;
      if (this.x + this.size >= width) {
        this.direction = "diagonalL";
      }

      // -- Diagonal Left
    } else if (this.direction === "diagonalL") {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.x - this.size <= 0) {
        this.direction = "diagonalR";
      }

      // -- Circles
    } else if (this.direction === "circles") {
      this.x += this.speed * this.dir;
      if (this.x + this.size >= width) {
        this.dir = -1;
      } else if (this.x - this.size <= 0) {
        this.dir = 1;
      }
    }
  }; //Move

  ///////// C R O S S E D //////////
  checkCrossed = function() {
    if (this.x > height - 80) {
      this.crossed = true;
    }
  };

  didCross = function() {
    return this.crossed;
  };

  ///////// I S  A L I V E ////////
  isAlive = function() {
    return this.alive;
  };

  die = function() {
    this.alive = false;
  };
}
