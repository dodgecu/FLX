class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }

  damage() {
    this.health_ = this.health_ - 10;
  }

  getHealth() {
    return this.health_;
  }

  toString() {
    return `x: ${this.x} y: ${this.y} health: ${this.health_}`;
  }
}

const x = process.argv[2];
const y = process.argv[3];

const character = new Character(+x, +y);
character.damage();
console.log(character.toString());

// #babel-node class.js 4 6 => x: 4 y: 6 health: 90
// #tower-of-babel run class.js => x: 31 y: 69 health: 90
// #tower-of-babel verify class.js

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "x: 30 y: 91 health: 90"            ==    "x: 30 y: 91 health: 90"           
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    class Character {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
      }
      damage() {
        this.health_ -= 10;
      }
      getHealth() {
        return this.health_;
      }
      toString() {
        return `x: ${this.x} y: ${this.y} health: ${this.health_}`;
      }
    }
    
    var x = process.argv[2];
    var y = process.argv[3];
    var character = new Character(+x, +y);
    character.damage();
    console.log(character.toString());
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to CLASS passed!

/tmp/_babel_10773/solution.js
You have 10 challenges left.
Type 'tower-of-babel' to show the menu.
*/
