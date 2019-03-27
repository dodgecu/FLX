const max = process.argv[2];
let FizzBuzz = (function*() {
  let current = 1;
  while (current <= max) {
    let fb = current;
    current++;
    if (fb % 15 === 0) {
      fb = "FizzBuzz";
    } else if (fb % 3 === 0) {
      fb = "Fizz";
    } else if (fb % 5 === 0) {
      fb = "Buzz";
    }
    yield fb;
  }
})();

for (var n of FizzBuzz) {
  console.log(n);
}

// #tower-of-babel verify generator.js

/*Your submission results compared to the expected:

ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

"1"                                 ==    "1"                                
"2"                                 ==    "2"                                
"Fizz"                              ==    "Fizz"                             
"4"                                 ==    "4"                                
"Buzz"                              ==    "Buzz"                             
"Fizz"                              ==    "Fizz"                             
"7"                                 ==    "7"                                
"8"                                 ==    "8"                                
"Fizz"                              ==    "Fizz"                             
"Buzz"                              ==    "Buzz"                             
"11"                                ==    "11"                               
"Fizz"                              ==    "Fizz"                             
"13"                                ==    "13"                               
"14"                                ==    "14"                               
"FizzBuzz"                          ==    "FizzBuzz"                         
"16"                                ==    "16"                               
"17"                                ==    "17"                               
"Fizz"                              ==    "Fizz"                             
"19"                                ==    "19"                               
"Buzz"                              ==    "Buzz"                             
"Fizz"                              ==    "Fizz"                             
"22"                                ==    "22"                               
"23"                                ==    "23"                               
"Fizz"                              ==    "Fizz"                             
"Buzz"                              ==    "Buzz"                             
"26"                                ==    "26"                               
"Fizz"                              ==    "Fizz"                             
"28"                                ==    "28"                               
"29"                                ==    "29"                               
"FizzBuzz"                          ==    "FizzBuzz"                         
"31"                                ==    "31"                               
"32"                                ==    "32"                               
"Fizz"                              ==    "Fizz"                             
"34"                                ==    "34"                               
"Buzz"                              ==    "Buzz"                             
"Fizz"                              ==    "Fizz"                             
"37"                                ==    "37"                               
"38"                                ==    "38"                               
"Fizz"                              ==    "Fizz"                             
"Buzz"                              ==    "Buzz"                             
"41"                                ==    "41"                               
"Fizz"                              ==    "Fizz"                             
"43"                                ==    "43"                               
"44"                                ==    "44"                               
"FizzBuzz"                          ==    "FizzBuzz"                         
"46"                                ==    "46"                               
"47"                                ==    "47"                               
""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
const max = process.argv[2];
let FizzBuzz = function* (){
let num = 1;
while (num <= max) {
let value = num;
num++;
if (value % 15 === 0) {
value = 'FizzBuzz';
} else if (value % 3 === 0) {
value = 'Fizz';
} else if (value % 5 === 0) {
value = 'Buzz';
}
yield value;
}
}();

for (var n of FizzBuzz) {
console.log(n);
}



────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to GENERATOR passed!

/tmp/_babel_25754/solution.js
You have 3 challenges left.
Type 'tower-of-babel' to show the menu.*/
