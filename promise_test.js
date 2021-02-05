const axios = require('axios');

const fetchURL = (url) => axios.get(url);
const urls = [1, 1, 25].map((num) => `http://localhost:3000/sleep/${num}`);
const requests = urls.map((url) => fetchURL(url));

Promise.race(requests).then(function (results) {
    console.log(results.data);
});
