promise_any_test
================

Testing the implementation of Promise.any or Promise.race. I've some assumptions about it's implementation that I wanted to test.

Start a server that sleeps to simulate slow requests.

`npm start`

Run the test script that uses Promise.race.

`node promise_test.js`

Notice how it hangs even after printing the first of the results. This seems to indicate that all the promises are done to completion even if Promise.race moves forward with the first request.

Questions:

How does Promise.any handle sending out requests? Specifically, is it able to step in middle of iteration if a promise was fulfilled or does it always work on every promise before returning. It would make sense that it is optimized to stop early, but I'm curious as to when that threshold may be reached.

