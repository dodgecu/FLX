console.log({
  [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
  [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3]
});

// #tower-of-babel verify computed_property.js

/*Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "{ '72': 72, odd: 11 }"             ==    "{ '72': 72, odd: 11 }"            
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    console.log({
      [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
      [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
    });
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to COMPUTED PROPERTY passed!

/tmp/_babel_18911/solution.js
You have 5 challenges left.
Type 'tower-of-babel' to show the menu.
*/
