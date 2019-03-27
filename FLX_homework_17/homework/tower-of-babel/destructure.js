const json = {
  name: {
    first: "Yosuke",
    family: process.argv[2]
  },
  birth: {
    year: 1982,
    month: 12,
    day: process.argv[3]
  }
};

const {
  name: { family: familyName }
} = json;
const {
  birth: { day: birthDay }
} = json;

console.log(familyName);
console.log(birthDay);

// #tower-of-babel verify destructure.js

/*Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "Kuwahara"                          ==    "Kuwahara"                         
   "21"                                ==    "21"                               
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var json = {
      "name": {
        "first": "Yosuke",
        "family": process.argv[2]
      },
      "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
      }
    };
    var {name: {family: familyName}, birth: {day: birthDay}} = json;
    console.log(familyName);
    console.log(birthDay);
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to DESTRUCTURE passed!

/tmp/_babel_27039/solution.js
You have 2 challenges left.
Type 'tower-of-babel' to show the menu.*/
