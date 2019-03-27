function* upper(items) {
  for (let item of items) {
    try {
      yield item.toUpperCase();
    } catch (e) {
      yield null;
    }
  }
}

const bad_items = ["a", "B", 1, "c"];

for (let item of upper(bad_items)) {
  console.log(item);
}

// #learn-generators verify catch_error.js

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "A"
1.  EXPECTED:  "A"

2.  ACTUAL:    "B"
2.  EXPECTED:  "B"

3.  ACTUAL:    "null"
3.  EXPECTED:  "null"

4.  ACTUAL:    "C"
4.  EXPECTED:  "C"

5.  ACTUAL:    ""
5.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to CATCH ERROR! passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function *upper (items) {
      for (var item of items) {
        try {
          yield item.toUpperCase();
        } catch (e) {
          yield null;
        }
      }
    }
    
    var bad_items = ['a', 'B', 1, 'c'];
    
    for (var item of upper(bad_items)) {
      console.log(item);
    }
    

────────────────────────────────────────────────────────────────────────────────

You have 5 challenges left.
Type 'learn-generators' to show the menu.*/
