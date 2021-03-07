promise_any_test
================

Testing the implementation of Promise.any or Promise.race. I've some assumptions about it's implementation that I wanted to test.

Start a server that sleeps to simulate slow requests.

On windows powershell:

`$env:DEBUG='myapp:*'; npm start`

On max/linux:

`DEBUG=myapp:* npm start`

This still start a server that runs on [localhost:3000](https://localhost:3000)

Try the interactive tools for looking into to use axios' cancel feature to reduce browser resource usage.


# (Optional) Playing around with Promise.race

Alongside the server above, you can also play around with a node.js script. The reason for using the browser is to highlight the browser connection limits. The limits for node.js are set to Infinity, so it depends on your hardware how many connections can be made.

You can run the script using:

`npm run script`

Notice how it hangs even after printing the first of the results. This seems to indicate that all the promises are done to completion even if Promise.race moves forward with the first request.

Questions:

How does Promise.any handle sending out requests? Specifically, is it able to step in middle of iteration if a promise was fulfilled or does it always work on every promise before returning. It would make sense that it is optimized to stop early, but I'm curious as to when that threshold may be reached.
