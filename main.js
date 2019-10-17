//////////// V A R I A B L E S ///////////
var canvas;
var canvBack;

var game; // -- Main Object
var initPopulation; // -- Original Invader Population
var ship;
var bullets;

/////////// P R E L O A D  //////////////
function preload() {
  initPopulation = new InvaderPopulation();
  game = new Game(0, 10, initPopulation);
}

/////////////// S E T  U P ////////////
function setup() {
  canvas = createCanvas(800, 500);
  canvas.position(350, 100);

  canvBack = new Background();
  ship = new Spaceship();
}

/////////////// D R A W  //////////////
function draw() {
  // --Background

  background(38, 41, 50);
  canvBack.show();
  ship.show();
}
