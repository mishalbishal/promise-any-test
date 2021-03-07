
const express = require('express')
const app = express()
const port = 3000

app.get('/logbreak', (req, res) => {
    console.log("=".repeat(80));
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

// From: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/sleep/:sleepTime', async (req, res) => {
    const sleepTime = req.params.sleepTime;
    for (let i = 1; i <= sleepTime; i++) {
        await sleep(1000);
        console.log(`SLEEP [${i} / ${sleepTime}]`);        
    }
    res.send(`Slept for ${sleepTime} seconds.`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
