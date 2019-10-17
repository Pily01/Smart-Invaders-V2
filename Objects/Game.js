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

  // -- Accesor methods
  getLevel = function() {
    return this.currentLevel;
  };

  getInvaderPopObject = function() {
    return this.currentLevel.invaderPopulation;
  };

  getInvaderPopArray = function() {
    return this.currentLevel.invaderPopulation.population;
  };

  getInvadersNum = function() {
    return this.currentLevel.invaderPopulation.getNumber();
  };
}
