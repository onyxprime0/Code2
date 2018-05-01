

class MFTile extends Tile {

  // Do you feel lonely?
  processData() {
    // make a couner for each response type
    this.Salt = loadImage ("SaltyFry.jpg");
    this.Hetero = loadImage ("StraightFry.jpg");
    this.Gay = loadImage ("CurlyFry.jpg");
    this.wet = loadImage ("SauceFry.jpg");
    this.dry = loadImage ("NoSauceFry.jpg");

    this.Curly = 0;
    this.Straight = 0;
    this.NoSauce = 0;
    this.Salty = 0;
    this.Sauce = 0;

    // get all the responses to that question
    // the useful method here is getColumn()
    this.FryAnswers = this.table.getColumn('How do you like your fries?');


    // compare each answer to the string 'Yes'
    // increment counters as appropriate
    for (let i = 0; i < this.FryAnswers.length; i++) {
      if (this.FryAnswers[i] === 'Curly') {
        this.Curly++ ;}

        if (this.FryAnswers[i] === 'Straight') {
          this.Straight++;
        }
        if (this.FryAnswers[i] === 'Salty') {
          this.Salty++;
        }
        if (this.FryAnswers[i] === 'Without sauce') {
          this.NoSauce++;
        }
        if (this.FryAnswers[i] === 'With sauce') {
          this.Sauce++;
        }

    }
    this.Curly*=30;
    this.Straight*=30;
    this.NoSauce*=30;
    this.Sauce*=30;
    this.Salty*=30;

  }

display() {
noStroke();
super.display();

image(this.Gay,20,40,this.Curly,this.Curly);
image(this.Hetero,180,30,this.Straight,this.Straight);
image(this.wet,300,150,this.Sauce,this.Sauce);
image(this.Dry,70,275,this.NoSauce,this.NoSauce);
image(this.Salt,300,200,this.Salty,this.Salty);

fill(69,84,75);
noStroke();
textFont('Arial');
textSize(15);
text("HOW YA LIKE YA FRIES",15,15);
}
