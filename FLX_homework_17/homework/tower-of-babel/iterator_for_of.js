const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let current = 1;
    return {
      next() {
        if (current <= max) {
          let fb = current;
          if (fb % 15 === 0) {
            fb = "FizzBuzz";
          } else if (fb % 3 === 0) {
            fb = "Fizz";
          } else if (fb % 5 === 0) {
            fb = "Buzz";
          }
          current++;
          return { done: false, value: fb };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let n of FizzBuzz) {
  console.log(n);
}

// #tower-of-babel verify iterator_for_of.js

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
   "Fizz"                              ==    "Fizz"                             
   "49"                                ==    "49"                               
   "Buzz"                              ==    "Buzz"                             
   "Fizz"                              ==    "Fizz"                             
   "52"                                ==    "52"                               
   "53"                                ==    "53"                               
   "Fizz"                              ==    "Fizz"                             
   "Buzz"                              ==    "Buzz"                             
   "56"                                ==    "56"                               
   "Fizz"                              ==    "Fizz"                             
   "58"                                ==    "58"                               
   "59"                                ==    "59"                               
   "FizzBuzz"                          ==    "FizzBuzz"                         
   "61"                                ==    "61"                               
   "62"                                ==    "62"                               
   "Fizz"                              ==    "Fizz"                             
   "64"                                ==    "64"                               
   "Buzz"                              ==    "Buzz"                             
   "Fizz"                              ==    "Fizz"                             
   "67"                                ==    "67"                               
   "68"                                ==    "68"                               
   "Fizz"                              ==    "Fizz"                             
   "Buzz"                              ==    "Buzz"                             
   "71"                                ==    "71"                               
   "Fizz"                              ==    "Fizz"                             
   "73"                                ==    "73"                               
   "74"                                ==    "74"                               
   "FizzBuzz"                          ==    "FizzBuzz"                         
   "76"                                ==    "76"                               
   "77"                                ==    "77"                               
   "Fizz"                              ==    "Fizz"                             
   "79"                                ==    "79"                               
   "Buzz"                              ==    "Buzz"                             
   "Fizz"                              ==    "Fizz"                             
   "82"                                ==    "82"                               
   "83"                                ==    "83"                               
   "Fizz"                              ==    "Fizz"                             
   "Buzz"                              ==    "Buzz"                             
   "86"                                ==    "86"                               
   "Fizz"                              ==    "Fizz"                             
   "88"                                ==    "88"                               
   "89"                                ==    "89"                               
   "FizzBuzz"                          ==    "FizzBuzz"                         
   "91"                                ==    "91"                               
   "92"                                ==    "92"                               
   "Fizz"                              ==    "Fizz"                             
   "94"                                ==    "94"                               
   "Buzz"                              ==    "Buzz"                             
   "Fizz"                              ==    "Fizz"                             
   "97"                                ==    "97"                               
   "98"                                ==    "98"                               
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    const max = +process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        let num = 1;
        return {
          next() {
            if (num > max) {
              return { done: true };
            }
            let value = num;
            if (value % 15 === 0) {
              value = 'FizzBuzz';
            } else if (value % 3 === 0) {
              value = 'Fizz';
            } else if (value % 5 === 0) {
              value = 'Buzz';
            }
            num++;
            return { done: false, value: value };
          }
        }
      }
    }
    
    for (var n of FizzBuzz) {
      console.log(n);
    }
    
    

────────────────────────────────────────────────────────────────────────────────


# PASS

Your solution to ITERATOR FOR OF passed!

/tmp/_babel_25114/solution.js
You have 4 challenges left.
Type 'tower-of-babel' to show the menu.*/
