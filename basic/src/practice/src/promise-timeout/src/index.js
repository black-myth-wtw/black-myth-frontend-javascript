// javascript promise timeout 异步状态机请求超时中间件
// ES5
// function promise_timeout(promises, timeout) {
//     if (!Array.isArray(promises)) throw new TypeError(`The params promises:${promises} must be an array~~~~~~`);
//     return Promise.race([...promises.map(function (promise) {
//         return Promise.resolve(promise).then(function (value) {
//             if (typeof value === 'object' && value.hasOwnProperty('status')) {
//                 return value;
//             } else {
//                 return {
//                     status: 'fulfilled',
//                     value,
//                 };
//             }
//         });
//     }), new Promise((resolve, reject) => {
//         setTimeout(function () {
//             reject({
//                 status: 'rejected',
//                 reason: '请求超时~~~~~~'
//             });
//         }, timeout);
//     })]);
// }
// const promise_timeout_result = promise_timeout([new Promise(resolve => {
//     // resolve('I love ZhengShuAng~~~~~~');
//     // resolve({
//     //     status: 'fulfilled',
//     //     value: 'I love ZhaoYue~~~~~~'
//     // });
//     // setTimeout(function () {
//     //     resolve('I love WangJinJin~~~~~~');
//     // }, 3100);
//     setTimeout(function () {
//         resolve('I love myself~~~~~~');
//     }, 2900);
// })], 3000);
// promise_timeout_result.then(function (value) {
//     console.log('result:', value);
// }).catch(function (reason) {
//     console.error('reason:', reason);
// });

// ES6
// function promise_timeout(promises, timeout) {
//     if (!Array.isArray(promises)) throw new TypeError(`The params promises:${promises} must be an array~~~~~~`);
//     return Promise.race([...promises.map(promise => Promise.resolve(promise).then(value => typeof value === 'object' && value.hasOwnProperty('status') ? value : {
//         status: 'fulfilled',
//         value
//     })), new Promise((resolve, reject) => setTimeout(() => {
//         reject({
//             status: 'rejected',
//             reason: '请求超时~~~~~~'
//         });
//     }, timeout))]);
// }
// promise_timeout([new Promise(resolve => {
//     // resolve('I love ZhengShuAng~~~~~~');
//     // resolve({
//     //     status: 'fulfilled',
//     //     value: 'I love ZhaoYue~~~~~~'
//     // });
//     // setTimeout(() => {
//     //     resolve('I love WangJinJin~~~~~~');
//     // }, 3100);
//     setTimeout(() => {
//         resolve('I love myself~~~~~~');
//     }, 2900);
// })], 3000).then(value => console.log('result:', value)).catch(error => console.error(error));
