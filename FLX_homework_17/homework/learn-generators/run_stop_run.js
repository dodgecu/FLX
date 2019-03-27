function* range(from, to) {
  let n = from - 1;
  while (n < to) {
    n++;
    yield n;
  }
}

for (let r of range(5, 10)) {
  console.log(r);
}
// #learn-generators verify run_stop_run.js

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "5"
1.  EXPECTED:  "5"

2.  ACTUAL:    "6"
2.  EXPECTED:  "6"

3.  ACTUAL:    "7"
3.  EXPECTED:  "7"

4.  ACTUAL:    "8"
4.  EXPECTED:  "8"

5.  ACTUAL:    "9"
5.  EXPECTED:  "9"

6.  ACTUAL:    "10"
6.  EXPECTED:  "10"

7.  ACTUAL:    ""
7.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to RUN STOP RUN passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function *range(from, to) {
      for(var i = from; i <= to; i++) {
        yield i;
      }
    }
    
    for (var r of range(5, 10)) {
        console.log( r );
    }
    

────────────────────────────────────────────────────────────────────────────────

You have 2 challenges left.
Type 'learn-generators' to show the menu.*/
