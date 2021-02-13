// async function testWithFetch() {

//     const fetchURL = (url) => axios.get(url);
//     const urls = [5, 25, 25, 25, 25, 25, 25, 25, 25, 25].map((num) => `/sleep/${num}`);
//     const requests = urls.map((url) => fetchURL(url));

//     Promise.race(requests).then(function (results) {
//         console.log(results.data);
//     });
// }

// // testWithFetch();

// async function testWithFetchCancellable() {

//     const source = axios.CancelToken.source();

//     const fetchURL = (url) => axios.get(url, {
//         cancelToken: source.token
//     });
//     const urls = [1, 1, 25].map((num) => `/sleep/${num}`);
//     const requests = urls.map((url) => fetchURL(url));

//     await Promise.race(requests).then(function (results) {
//         console.log(results.data);
//         source.cancel("Cancelling remaining requests.");
//         console.log("Finished");
//     });
// }

// // testWithFetchCancellable();

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function testWithTimeOut() {
//     const promise1 = new Promise(async (resolve) => {
//         for (let i = 0; i < 10; i++) {
//             await sleep(1000);
//             console.log(`Slept ${i}/total`);
//         }
//     });
//     const promise2 = sleep(10);

//     Promise.race([promise1, promise2]).then(function (results) {
//         console.log("Finished with: " + results);
//     })
// }

// // testWithTimeOut();

// // How to make a new promise?
// // function anyResult(urls, resolve, reject) {
// //     const source = axios.CancelToken.source();

// //     const fetchURL = (url) => axios.get(url, {
// //         cancelToken: source.token
// //     });
// //     const urls = [1, 1, 25].map((num) => `/sleep/${num}`);
// //     const requests = urls.map((url) => fetchURL(url));

// //     return Promise.race(requests).then(resolve).catch(reject);
// // }