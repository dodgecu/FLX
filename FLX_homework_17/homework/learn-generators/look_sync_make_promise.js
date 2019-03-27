function askFoo() {
  return new Promise((resolve, reject) => resolve("foo"));
}

function run(generator) {
  const it = generator();

  function go(result) {
    if (result.done) {
      return result.value;
    }

    return result.value.then(
      value => go(it.next(value)),
      error => go(it.throw(error))
    );
  }

  go(it.next());
}

run(function*() {
  try {
    const foo = yield askFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
});

// #learn-generators verify look_sync_make_promise.js

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "foo"
1.  EXPECTED:  "foo"

2.  ACTUAL:    ""
2.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to LOOK SYNC. MAKE PROMISE. passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function getFoo () {
      return new Promise(function (resolve, reject){
        resolve('foo');
      });
    }
    
    function run (generator) {
      var it = generator();
    
      function go(result) {
        // take a look also on `Generator.prototype.return`
        if (result.done) return result.value;
    
        return result.value.then(function (value) {
          return go(it.next(value));
        }, function (error) {
          return go(it.throw(error));
        });
    
      }
    
      go(it.next());
    }
    
    run(function* () {
      try {
        var foo = yield getFoo();
        console.log(foo);
      } catch (e) {
        console.log(e);
      }
    });
    

────────────────────────────────────────────────────────────────────────────────

You've finished all the challenges! Hooray!*/
