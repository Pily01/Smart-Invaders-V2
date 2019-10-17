//////////// V A R I A B L E S ///////////
var canvas;
var canvBack;

var game; // -- Main Object
var initPopulation; // -- Original Invader Population
var ship;
var bullets = [];
var level;

var invaderOb; // -- Invader Population Object
var InvaderArr; // -- Invader Population´s Invaders array
var invaderNum; // -- Invader Population´s number property

/////////// P R E L O A D  //////////////
function preload() {
  initPopulation = new InvaderPopulation();
  game = new Game(0, 10, initPopulation);
  game.currentLevel.invaderPopulation.populate(15);
}

/////////////// S E T  U P ////////////
function setup() {
  canvas = createCanvas(800, 500);
  canvas.position(350, 100);

  canvBack = new Background();
  ship = new Spaceship();

  level = game.currentLevel;
  invaderOb = game.getInvaderPopObject();
  invaderArr = game.getInvaderPopArray();
  invaderNum = game.getInvadersNum();
}

/////////////// D R A W  //////////////
function draw() {
  // --Background

  background(38, 41, 50);
  canvBack.show();

  // -- Spaceship
  ship.show();
  ship.move();
}
