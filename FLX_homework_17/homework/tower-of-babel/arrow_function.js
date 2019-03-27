const inputs = process.argv.slice(2);
const result = inputs.reduce(
  (letter, word) => (letter += word.substring(0, 1).toUpperCase()),
  ""
);

console.log(result);

// #tower-of-babel verify arrow_function.js

/*Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "SFBYHMA"                           ==    "SFBYHMA"                          
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var inputs = process.argv.slice(2);
    var result = inputs.map((x) => x[0]).reduce((result, x) => result + x);
    
    console.log(result);
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to ARROW FUNCTION passed!

/tmp/_babel_28109/solution.js
You have one challenge left
Type 'tower-of-babel' to show the menu.*/
