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
  "circles"
];
var speedOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
var sizeOptions = [7, 10, 15, 18, 20, 23, 25, 30];

class Invader {
  constructor(x, y, flib) {
    this.x = x;
    this.y = y;
    this.move = 1;

    this.alive = true;
    this.crossed = false;

    this.flib = flib;
    var flibChar = this.flib.split("");

    this.direction = directionOptions[parseInt(flibChar[0])];
    this.speed = speedOptions[parseInt(flibChar[1])];
    this.size = sizeOptions[parseInt(flibChar[2])];
  }
}
