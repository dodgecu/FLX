const rawArgs = process.argv.slice(2);
const args = [];

rawArgs.forEach(val => {
  const commaSep = val.split(",");
  commaSep.forEach(val => {
    if (val !== "") args.push(+val);
  });
});

const avg = (...nums) => {
  return nums.reduce((res, cur) => (res += cur), 0) / nums.length;
};

console.log(avg(...args));

// #tower-of-babel verify rest_and_spread.js

/*Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "49.67"                             ==    "49.67"                            
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var rawArgs = process.argv.slice(2);
    var args = [];
    
    rawArgs.forEach(val => {
      let commaSep = val.split(',');
      commaSep.forEach(val => {
        if(val !== '') args.push(+val);
      });
    });
    
    function avg(...args){
      return args.reduce((a, b)=>a+b)/args.length;
    }
    
    console.log(avg(...args));
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to REST AND SPREAD passed!

/tmp/_babel_28410/solution.js
You've finished all the challenges! Hooray!*/
