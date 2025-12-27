// javascript promise 异步状态机
// 基本用法,注意其是直接绑定至内置对象 [[PromiseState]] 内
// 创建未完成的 Promise: new Promise((resolve, reject) => {});
// const promise = new Promise(resolve => {
//     resolve('black myth wtw~~~~~~');
// });
// promise.then((value) => console.log(value));
// const promise = new Promise((resolve, reject) => {
//     reject(new TypeError('wtw'));
// });
// promise.then((value) => console.log(value)).catch(error => console.log('error:', error));
// 创建已处理的 Promise: Promise.resolve(),Promise.reject(),注意对于 Promise.resolve(),如果传递 Promise 参数,会将此 Promise 直接返回
// Promise.resolve(69).then(value => console.log(value));
// Promise.reject('black@myth@wtw').catch(error => console.error('error:', error));
// 全局的 Promise 拒绝处理程序,在 Event Loop 事件循环执行机制中,如果 Promise 被拒绝,且无拒绝处理程序,会触发执行 unhandledRejection 事件;如果 Promise 被拒绝,但监听到存在拒绝处理程序,会触发执行 rejectionHandled 事件;如果同步立即设置拒绝处理程序,则不会触发任何事件
// unhandledRejection 事件: 在 nodejs 中通过监听 process.on;而在 web 中则会触发执行 window 事件 unhandledrejection
// rejectionHandled 事件: 在 nodejs 中通过监听 promise.on;而在 web 中则会触发执行 window 事件 rejectionhandled
// let rejected = null;
// process.on('unhandledRejection', (reason, promise) => {
//     console.log('unhandledRejection');
//     console.log(reason);
//     console.log(rejected === promise);
// });
// process.on('rejectionHandled', promise => {
//     console.log('rejectionHandled');
//     console.log(rejected === promise);
// });
// rejected = Promise.reject('black*myth*wtw');
// setTimeout(() => {
//     rejected.catch(error => console.error('error:', error));
// }, 2000);
// let rejected = null;
// window.addEventListener('unhandledrejection', ({type, reason, promise}) => {
//     console.log(type);
//     console.log(reason);
//     console.log(rejected === promise);
// });
// window.addEventListener('rejectionhandled', ({type, promise}) => {
//     console.log(type);
//     console.log(rejected === promise);
// });
// rejected = Promise.reject('black+myth+wtw');
// // rejected.catch(reason => console.error(`reason:${reason}`));
// setTimeout(() => {
//     rejected.catch(reason => console.error(`reason:${reason}`));
// }, 3000);
// const promise_map = new Map();
// let rejected = null;
// process.on('unhandledRejection', (reason, promise) => {
//     promise_map.set(promise, reason);
// });
// process.on('rejectionHandled', promise => {
//     console.log(promise_map.get(promise));
//     promise_map.delete(promise);
// });
// function resolveUnhandledRejection(promise_map) {
//     setInterval(() => {
//         promise_map.forEach((reason, promise) => {
//             console.log('resolve unhandled rejection');
//             console.log(reason);
//             console.log(promise === rejected);
//         });
//         promise_map.clear();
//     }, 2 * 60 * 1000);
// }
// resolveUnhandledRejection(promise_map);
// rejected = Promise.reject('black%myth%wtw');
// setTimeout(() => {
//     rejected.catch(reason => console.error(`reason: ${reason}`));
// }, 3000);
// Promise 执行时抛出错误: 使用 catch 进行拦截
// const promise = new Promise((resolve, reject) => {
//     throw new TypeError('black_myth_ufo~~~~~~');
// });
// promise.catch(error => console.error(error.message));
// Promise.all: 当 Promise.all 数组内的所有程序都完毕结束时,才会实行返回,接收到的也才会是一个数组,分别代表着每一个完毕结束处理程序所传递的数据,一旦存在拒绝处理程序,会立即实行返回,接收到拒绝处理程序所传递的数据
// Promise.all([1, 99, 108]).then(values => console.log(values)).catch(reason => console.error(reason));
// Promise.all([1, Promise.reject('black#myth#wtw'), 108]).then(values => console.log(values)).catch(reason => console.error(reason));
// Promise.all([new Promise(resolve => setTimeout(() => resolve('black~myth~wtw'), 4000)), true, 688]).then(values => console.log(values)).catch(reason => console.error(reason));
// Promise.race: 当 Promise.race 数组内的任意一个处理程序完毕结束或者拒绝时,都会实行返回,接收到完毕结束/拒绝处理程序所传递的数据
// function promise_timeout(promises, timeout) {
//     return Promise.race([...promises.map(promise => Promise.resolve(promise).then(val => typeof val === 'object' && val.hasOwnProperty('status') ? val : {
//         status: 'fulfilled',
//         value: val,
//     })), new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({
//                 status: 'rejected',
//                 reason: '请求超时~~~~~~'
//             });
//         }, timeout);
//     })]);
// }
// promise_timeout([new Promise(resolve => {
//     // resolve('black-myth_wtw');
//     // resolve({
//     //     status: 'fulfilled',
//     //     value: 'black$myth$wtw'
//     // });
//     // setTimeout(() => {
//     //     resolve('black&myth&wtw');
//     // }, 2900);
//     // setTimeout(() => {
//     //     resolve('black&myth&wtw');
//     // }, 3000);
//     setTimeout(() => {
//         resolve('black&myth&wtw');
//     }, 3100);
// })], 3000).then(result => console.log('result:', result)).catch(reason => console.error('reason:', reason));
// Promise 串行链
// const p1 = new Promise(resolve => {
//     resolve('black!myth!wtw');
// });
// p1.then(value => {
//     console.log(`value: ${value}`);
//     return Promise.reject('black*myth*wtw');
// }).catch(reason => {
//     console.error(`reason: ${reason}`);
// });
// const p1 = new Promise(resolve => {
//     resolve('black!myth!wtw');
// });
// const p2 = p1.then(value => {
//     console.log(`value: ${value}`);
//     return Promise.reject('black*myth*wtw');
// });
// p2.catch(reason => {
//     console.error(`reason: ${reason}`);
// });
// Promise 链中抛出错误
// const p1 = new Promise(resolve => {
//     resolve('black!myth!wtw');
// });
// p1.then(value => {
//     console.log(`value: ${value}`);
//     throw new TypeError('black^myth^wtw');
// }).catch(reason => {
//     console.error(`reason: ${reason}`);
// });
// const p1 = new Promise(resolve => {
//     resolve('black!myth!wtw');
// });
// const p2 = p1.then(value => {
//     console.log(`value: ${value}`);
//     throw new TypeError('black^myth^wtw');
// });
// p2.catch(reason => {
//     console.error(`reason: ${reason}`);
// });
// Promise 链中的返回值
// const p1 = new Promise(resolve => {
//     resolve(66);
// });
// p1.then(value => {
//     console.log(`value: ${value}`);
//     return value + 10;
// }).then(val => {
//     console.log(`val: ${val}`);
//     return val / 10;
// }).then(result => {
//     console.log(`result: ${result}`);
// });
// const p1 = new Promise(resolve => {
//     resolve(66);
// });
// const p2 = p1.then(value => {
//     console.log(`value: ${value}`);
//     return value + 10;
// });
// const p3 = p2.then(val => {
//     console.log(`val: ${val}`);
//     return val / 10;
// });
// p3.then(result => {
//     console.log(`result: ${result}`);
// });
// const p1 = Promise.reject('black+myth+wtw');
// p1.catch(reason => {
//     console.error(`reason: ${reason}`);
//     return 88;
// }).then(value => {
//     console.log(`value: ${value}`);
//     return value + 20;
// }).then(val => {
//     console.log(`val: ${val}`);
//     throw new TypeError('blocked~~~~~~');
// }).catch(error => {
//     console.error(`error: ${error}`);
// });
// const p1 = Promise.reject('black+myth+wtw');
// const p2 = p1.catch(reason => {
//     console.error(`reason: ${reason}`);
//     return 88;
// });
// const p3 = p2.then(value => {
//     console.log(`value: ${value}`);
//     return value + 20;
// });
// const p4 = p3.then(val => {
//     console.log(`val: ${val}`);
//     throw new TypeError('blocked~~~~~~');
// });
// p4.catch(error => {
//     console.error(`error: ${error}`);
// });
// const p1 = Promise.resolve(120);
// p1.then(value => {
//     console.log(`value: ${value}`);
//     return value + 10;
// }).then(val => {
//     console.log(`val: ${val}`);
//     return val / 10;
// }).then(result => {
//     console.log(`result: ${result}`);
// });
// const p1 = Promise.resolve(120);
// const p2 = p1.then(value => {
//     console.log(`value: ${value}`);
//     return value + 10;
// })
// const p3 = p2.then(val => {
//     console.log(`val: ${val}`);
//     return val / 10;
// });
// p3.then(result => {
//     console.log(`result: ${result}`);
// });
// Promise 链中返回 Promise
// const p1 = new Promise(resolve => resolve('black@myth@wtw'));
// const p2 = Promise.reject('black?myth?wtw');
// p1.then(value => {
//     console.log(`value:${value}`);
//     return p2;
// }).catch(error => {
//     console.error(`error:${error}`);
//     return new Promise(resolve => resolve('black<myth>wtw'));
// }).then(val => {
//     console.log(`val:${val}`);
// });
// const p1 = new Promise(resolve => resolve('black@myth@wtw'));
// const p2 = Promise.reject('black?myth?wtw');
// const p3 = p1.then(value => {
//     console.log(`value:${value}`);
//     return p2;
// })
// const p4 = p3.catch(error => {
//     console.error(`error:${error}`);
//     const p5 = new Promise(resolve => resolve('black<myth>wtw'));
//     return p5;
// });
// p4.then(val => {
//     console.log(`val:${val}`);
// });
// 派生类继承自 Promise: 注意对于 Promise.resolve(),Promise.reject() 所创建的类构造对象,它就是由静态访问器属性 [Symbol.species] 来确定值类型的,由此,类构造对象是在派生类的原型链上
