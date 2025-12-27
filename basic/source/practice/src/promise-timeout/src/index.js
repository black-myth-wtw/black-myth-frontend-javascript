// ES5
// promise timeout 异步状态机请求超时中间件
// function promise_timeout(promises, timeout) {
//     if (!Array.isArray(promises)) {
//         throw new TypeError(`The params ${promises} must be an array!`);
//     }
//     return Promise.race([...promises.map(function (promise) {
//         return Promise.resolve(promise).then(function (value) {
//             if (typeof value === 'object' && value.hasOwnProperty('status')) {
//                 return value;
//             } else {
//                 return {
//                     status: 'fulfilled',
//                     value
//                 };
//             }
//         }).catch(function (reason) {
//             if (typeof reason === 'object' && reason.hasOwnProperty('status')) {
//                 return reason;
//             } else {
//                 return {
//                     status: 'rejected',
//                     reason
//                 };
//             }
//         });
//     }), new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject({
//                 status: 'rejected',
//                 reason: '请求超时!'
//             })
//         }, timeout);
//     })]);
// }
//
// promise_timeout([new Promise(function (resolve) {
//     // resolve('black_myth_wtw');
//     // resolve({status: 'fulfilled', value: 'black@myth@wtw'});
//     // setTimeout(() => {
//     //     resolve('black$myth$wtw');
//     // }, 2900);
//     setTimeout(function () {
//         resolve('black&myth&wtw');
//     }, 3100);
// })], 3000).then(function (value) {
//     console.log(value)
// }).catch(function (reason) {
//     console.error(reason)
// });

// ES6
// function promise_timeout(promises, timeout) {
//     if (!Array.isArray(promises)) {
//         throw new TypeError(`The params ${promises} must be an array!`);
//     }
//     return Promise.race([...promises.map(promise => Promise.resolve(promise).then(value => typeof value === 'object' && value.hasOwnProperty('status') ? value : {
//         status: 'fulfilled',
//         value
//     }).catch(reason => typeof reason === 'object' && reason.hasOwnProperty('status') ? reason : {
//         status: 'rejected',
//         reason
//     })), new Promise((resolve, reject) => setTimeout(() => reject({
//         status: 'rejected',
//         reason: '请求超时!'
//     }), timeout))]);
// }
//
// promise_timeout([new Promise(resolve => {
//     // resolve('black_myth_wtw');
//     // resolve({status: 'fulfilled', value: 'black@myth@wtw'});
//     // setTimeout(() => {
//     //     resolve('black$myth$wtw');
//     // }, 2900);
//     setTimeout(() => {
//         resolve('black&myth&wtw');
//     }, 3100);
// })], 3000).then(value => console.log(value)).catch(reason => console.error(reason));
