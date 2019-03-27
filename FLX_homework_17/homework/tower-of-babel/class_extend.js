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

class Player extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  toString() {
    return `name: ${this.name} ${super.toString()}`;
  }
}

const x = process.argv[2];
const y = process.argv[3];
const name = process.argv[4];
const character = new Character(+x, +y);
character.damage();
console.log(character.toString());
const player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());

// #tower-of-babel run class_extend.js
// => x: 77 y: 55 health: 90
// => name: dave x: 84 y: 63 health: 90
// #tower-of-babel verify class_extend.js

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "x: 79 y: 66 health: 90"            ==    "x: 79 y: 66 health: 90"           
   "name: alice x: 86 y: 74 health: 90" ==    "name: alice x: 86 y: 74 health: 90"
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    'use strict';
    
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
        return `x: ${this.x} y: ${this.y} health: ${this.health_}`
      }
    }
    
    class Player extends Character {
      constructor(x, y, name) {
        super(x, y);
        this.name = name;
      }
      move(dx, dy) {
        this.x += dx;
        this.y += dy;
      }
      toString() {
        return `name: ${this.name} ${super.toString()}`;
      }
    }
    
    var x = process.argv[2];
    var y = process.argv[3];
    var name = process.argv[4];
    var character = new Character(+x, +y);
    character.damage();
    console.log(character.toString());
    var player = new Player(+x, +y, name);
    player.damage();
    player.move(7, 8);
    console.log(player.toString());
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to CLASS EXTEND passed!

/tmp/_babel_11528/solution.js
You have 9 challenges left.
Type 'tower-of-babel' to show the menu.
*/
