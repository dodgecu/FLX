import square from "./modules_default_export_math.js";
const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(square.pi);
console.log(square.sqrt(+arg1));
console.log(square.square(+arg2));

// #tower-of-babel run modules_default_export.js modules_default_export_math.js
//=> 3.141592
//=> 4.123105625617661
//=> 841
// #tower-of-babel verify modules_default_export.js modules_default_export_math.js

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "3.141592"                          ==    "3.141592"                         
   "3.6055512754639896"                ==    "3.6055512754639896"               
   "5476"                              ==    "5476"                             
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
solution-math.js:

    const PI = 3.141592;
    
    var _sqrt = function(s, x, last){
      return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
    };
    function sqrt(s){
      return _sqrt(s, s/2.0, 0.0);
    };
    function square(x) {
      return x * x;
    };
    
    export default {
      PI: PI,
      square: square,
      sqrt: sqrt
    };
    

────────────────────────────────────────────────────────────────────────────────
solution.js:

    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    
    import Math from './solution-math';
    console.log(Math.PI);
    console.log(Math.sqrt(+arg1));
    console.log(Math.square(+arg2));
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to MODULES DEFAULT EXPORT passed!

/tmp/_babel_14646/solution.js
You have 7 challenges left.
Type 'tower-of-babel' to show the menu.
*/
