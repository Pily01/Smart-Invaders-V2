//////////// V A R I A B L E S ///////////
var canvas;
var canvBack;

var spaceship;
var bullets = [];

/////////////// S E T  U P ////////////
function setup() {
  canvas = createCanvas(800, 500);
  canvas.position(350, 100);

  canvBack = new Background();
  spaceship = new Spaceship();
}

/////////////// D R A W  //////////////
function draw() {
  // --Background
  background(38, 41, 50);
  canvBack.show();

  // --Spaceship
  spaceship.show();
  spaceship.move();

  // -- Bullets
  for (var i = bullets.length - 1; i > 0; i--) {
    bullets[i].move();
    bullets[i].show();
  }
}

/////////  K E Y  P R E S S E D  //////
