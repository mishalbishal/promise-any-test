var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

// From: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/sleep/:sleepTime', async (req, res) => {
  const sleepTime = req.params.sleepTime;
  for (let i = 1; i <= sleepTime; i++) {
    await sleep(1000);
    console.log(`SLEEP [${i} / ${sleepTime}]`);
  }
  res.send(`Slept for ${sleepTime} seconds.`);
})

module.exports = router;
