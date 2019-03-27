"use strict";
// This variable `a` should be accessible outside of the block scope.
var a = 5;

// This variable `b` should not be reassignable.
const b = process.argv[2];

if (a === 5) {
  // This variable `c` should only be valid in this block.
  let c = 4;
  console.log(c); // 4

  // This variable `b` should only be valid in this block and should not be reassignable.
  const b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Trying to change the value of `c`
  const c = 1000;
} catch (e) {
  // but an `c is not defined` error should occur.
  console.log(e);
}

// #tower-of-babel run solution.js => /tmp/_babel_14791/solution.js:19} in this block.

// #tower-of-babel verify solution.js

/*
    Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    'use strict';
    let a = 5;
    const b = process.argv[2];
    
    if (a === 5) {
      let c = 4;
      console.log(c);  // 4
    
      const b = 8;
      console.log(b);
    } 
    
    console.log(a); // 5
    console.log(b);
    try {
      c = 1000;
    } catch (e) {
      console.log(e);
    }
    
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to BLOCK SCOPE passed!

/tmp/_babel_14791/solution.js
You have 6 challenges left.
Type 'tower-of-babel' to show the menu.
*/
