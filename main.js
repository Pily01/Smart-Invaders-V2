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

/////////// S H O W  S C O R E  &  L I V E S  //////

/////////////// D R A W  //////////////
function draw() {
  // --Background

  background(38, 41, 50);
  canvBack.show();

  // -- Spaceship
  ship.show();
  ship.move();

  // -- Invaders
  for (var i = invaderNum - 1; i >= 0; i--) {
    if (invaderArr[i].alive) {
      invaderArr[i].show();
      invaderArr[i].move();
      invaderArr[i].checkCrossed();
      if (invaderArr[i].didCross()) {
        document.getElementById("livestext").innerHTML = game.lives;
      }
    }
  }
  //  -- Bullets
  for (var i = bullets.length - 1; i > 0; i--) {
    bullets[i].move();
    bullets[i].show();
    for (var j = invaderNum - 1; j >= 0; j--) {
      if (invaderArr[j].alive && bullets[i].hits(invaderArr[j])) {
        bullets.splice(i, 1);
        invaderArr[j].die();
        game.score += 10;
        document.getElementById("scoretext").innerHTML = game.score;
        break;
      }
    }
  }
}

//////////// K E Y  R E L E A S E D //////
function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    ship.setDirection(0);
  }
}

//////////// K E Y  P R E S S E D //////
function keyPressed() {
  if (keyCode === ENTER) {
    var bullet = new Bullet(ship.x, ship.y - 15);
    bullets.push(bullet);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDirection(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDirection(-1);
  }
}
