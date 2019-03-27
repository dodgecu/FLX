function* flat(array) {
  for (const item of array) {
    if (Array.isArray(item)) {
      yield* flat(item);
    } else {
      yield item;
    }
  }
}

const A = [1, [2, [3, 4], 5], 6];
for (let f of flat(A)) {
  console.log(f);
}

// #learn-generators verify delegating_generators.js

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "1"
1.  EXPECTED:  "1"

2.  ACTUAL:    "2"
2.  EXPECTED:  "2"

3.  ACTUAL:    "3"
3.  EXPECTED:  "3"

4.  ACTUAL:    "4"
4.  EXPECTED:  "4"

5.  ACTUAL:    "5"
5.  EXPECTED:  "5"

6.  ACTUAL:    "6"
6.  EXPECTED:  "6"

7.  ACTUAL:    ""
7.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to DELEGATING GENERATORS passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function *flat (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
          yield* flat(arr[i]);
        }
      } else {
        yield arr;
      }
    }
    
    var A = [1, [2, [3, 4], 5], 6];
    for (var f of flat(A)) {
        console.log( f );
    }
    // 1 2 3 4 5 6
    
    
    

────────────────────────────────────────────────────────────────────────────────

You have 4 challenges left.
Type 'learn-generators' to show the menu.*/
