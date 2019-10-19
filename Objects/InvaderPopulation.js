//////////////////////////////////////////////////
///    I N V A D E R   P O P U L A T I O N    ///
////////////////////////////////////////////////

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

class InvaderPopulation {
  constructor() {
    this.population = [];
    this.number = 0;
  }

  populate = function(numInvaders) {
    for (var i = 0; i < numInvaders; i++) {
      this.createRandInvader();
    }
  };

  // -- Create a Random Invader
  createRandInvader = function() {
    var direction = getRandomNumber(0, 8) + "";
    var speed = getRandomNumber(0, 8) + "";
    var size = getRandomNumber(0, 8) + "";

    var flib = direction + speed + size;
    var randX = getRandomNumber(80, 500);

    var invader = new Invader(randX, 50, flib);
    this.population.push(invader);
    this.number++;
  };

  getNumber = function() {
    return this.number;
  };
}

/////// G E T  R A N D O M  N U M B E R /////////
// -- Returns a random number between min (inclusive) and
// -- max (exclusive)
getRandomNumber = function(min, max) {
  var result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};
