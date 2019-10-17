////////////////////////////////
///        L E V E L        ///
//////////////////////////////

class Level {
  constructor(invaderPopulation, levelNumber) {
    this.invaderPopulation = invaderPopulation;
    this.number = levelNumber;
  }

  // -- Check if Level is Over
  isLevelOver = function() {
    var result = true;
    for (var i = 0; i < this.invaderPopulation.length; i++) {
      if (
        this.invaderPopulation[i].isAlive() ||
        !this.invaderPopulation[i].didCross
      ) {
        result = false;
        break;
      }
    }

    return result;
  };
}
