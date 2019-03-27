const fs = require("fs");

function run(generator) {
  const it = generator(go);

  function go(err, result) {
    if (err) {
      return it.throw(err);
    }
    it.next(result);
  }

  go();
}

run(function*(done) {
  let firstFile;
  try {
    const dirFiles = yield fs.readdir("NoNoNoNo", done);
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});

// #learn-generators verify Look_sync_do_async.js

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "null"
1.  EXPECTED:  "null"

2.  ACTUAL:    ""
2.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to LOOK SYNC. DO ASYNC. passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs');
    
    function run (generator) {
      var it = generator(go);
    
      function go (err, result) {
        if (err) return it.throw(err);
        it.next(result);
      }
    
      go();
    }
    
    run(function* (done) {
      var firstFile;
      try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        firstFile = dirFiles[0];
      } catch (err) {
        firstFile = null;
      }
    
      console.log(firstFile);
    });
    

────────────────────────────────────────────────────────────────────────────────

You have one challenge left
Type 'learn-generators' to show the menu.*/
