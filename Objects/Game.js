////////////////////////////////
///         G A M E         ///
//////////////////////////////

class Game {
  constructor(score, lives, initialPopulation) {
    this.score = score;
    this.lives = lives;
    this.bullets = [];
    this.currentLevel = new Level(initialPopulation, 1);
  }
}
