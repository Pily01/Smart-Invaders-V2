////////////////////////////////
///         G A M E         ///
//////////////////////////////

class Game {
  constructor(score, lives, initialPopulation) {
    this.score = score;
    this.lives = lives;
    this.spaceShip = new Spaceship();
    this.bullets = [];
    this.currentLevel;
  }
}
