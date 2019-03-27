function* factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    yield result;
  }
}

for (let n of factorial(5)) {
  console.log(n);
}

// #learn-generators verify generator_iterator.js

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "1"
1.  EXPECTED:  "1"

2.  ACTUAL:    "2"
2.  EXPECTED:  "2"

3.  ACTUAL:    "6"
3.  EXPECTED:  "6"

4.  ACTUAL:    "24"
4.  EXPECTED:  "24"

5.  ACTUAL:    "120"
5.  EXPECTED:  "120"

6.  ACTUAL:    ""
6.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to GENERATOR ITERATOR passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function *factorial (n) {
      var result = 1;
      for (var i = 1; i <= n; i++) {
        result *= i;
        yield result;
      }
    }
    
    for (var n of factorial(5)) {
      console.log(n)
    }
    

────────────────────────────────────────────────────────────────────────────────

You have 3 challenges left.
Type 'learn-generators' to show the menu.*/
