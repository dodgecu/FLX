const param = process.argv[2];

console.log(`Hello ${param}`);

// #babel-node babel_setup.js Dodge => Hello Dodge
// #tower-of-babel run babel_setup.js Dodge => Hello ES6;
// #tower-of-babel verify babel_setup.js

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "Hello Babel"                       ==    "Hello Babel"                      
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var arg = process.argv[2];
    console.log(`Hello ${arg}`);
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to BABEL SETUP passed!

/tmp/_babel_9881/solution.js
You have 11 challenges left.
Type 'tower-of-babel' to show the menu.
*/
