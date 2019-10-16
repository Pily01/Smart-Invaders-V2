////////////////////////////
///  B A C K G R O U N D ///
////////////////////////////

class Background {
  constructor() {
    this.count = 20;
    this.lineY = height - 80;
  }

  show = function() {
    for (var i = 0; i < 10; i++) {
      stroke(205, 174, 153);
      strokeWeight(3);
      line(this.count, this.lineY, this.count + 40, this.lineY);

      this.count += 80;
    }
    this.count = 20;
  };
}
