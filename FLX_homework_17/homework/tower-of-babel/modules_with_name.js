import { PI, sqrt, square } from "./modules_with_name_math.js";

const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));

// #tower-of-babel run modules_with_name.js modules_with_name_math.js
// => 3.141592
// => 7.615773105863909
// => 5329

// #tower-of-babel verify modules_with_name.js modules_with_name_math.js

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "3.141592"                          ==    "3.141592"                         
   "3.872983346207417"                 ==    "3.872983346207417"                
   "361"                               ==    "361"                              
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
solution-math.js:

    export const PI = 3.141592;
    
    var _sqrt = function(s, x, last){
      return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
    };
    export function sqrt(s){
      return _sqrt(s, s/2.0, 0.0);
    };
    export function square(x) {
      return x * x;
    };
    

────────────────────────────────────────────────────────────────────────────────
solution.js:

    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    
    import {PI, sqrt, square} from './solution-math';
    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to MODULES WITH NAME passed!

/tmp/_babel_12318/solution.js
You have 8 challenges left.
Type 'tower-of-babel' to show the menu.
*/
