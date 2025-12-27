// promise 异步状态机
// 基本用法,注意 promise 构造对象是绑定至内置对象 [[PromiseState]] 内
// pending: 处理中
// fulfilled: 处理完成
// rejected: 拒绝处理
// 创建未完成的 Promise
// 通过 new Promise((resolve, reject) => {});
// const p1 = new Promise(resolve => {
//     resolve(42);
// });
// p1.then(value => {
//     console.log(value);
// });
// 创建已处理的 Promise
// 注意对于 Promise.resolve,如果传递 Promise 参数,会将此 Promise 直接返回
// const p1 = Promise.resolve(42);
// const p2 = Promise.reject('black_myth_wtw');
// p1.then(value => {
//     console.log(value);
// });
// p2.catch(error => {
//     console.error(error);
// });
// Promise 执行抛出错误
// 使用 catch 拦截
// const p1 = new Promise((resolve, reject) => {
//     try {
//         throw new TypeError('使用 catch 拦截');
//     } catch (error) {
//         reject(error);
//     }
// });
// p1.catch(error => console.error(error));
// Promise 全局拒绝处理程序
// 在 Event Loop 事件循环执行机制中,如果 Promise 被拒绝,且无拒绝处理程序,则会触发执行 unhandledRejection 事件
// let rejected;
// process.on('unhandledRejection', (reason, promise) => {
//     console.log('unhandledRejection');
//     console.log('reason:', reason.message);
//     console.log(rejected === promise);
// });
// // 如果 Promise 被拒绝,且监听到存在拒绝处理程序,则触发执行 rejectionHandled 事件
// process.on('rejectionHandled', promise => {
//     console.log('rejectionHandled');
//     console.log(promise === rejected);
// });
// rejected = Promise.reject(new TypeError('Promise 全局拒绝处理程序'));
// // 如果同步立即设置拒绝处理程序,则不会触发执行任何事件
// setTimeout(() => {
//     rejected.catch(error => console.log('error:', error));
// }, 2000);
// unhandledRejection 事件,在 Nodejs 中通过 promise.on 监听,而在 web 中则是会触发执行 window 事件 onunhandledrejection
// rejectionHandled 事件,在 Nodejs 中通过 promise.on 监听,而在 web 中则是会触发执行 window 事件 onrejectionhandled
// let rejected;
// window.addEventListener('unhandledrejection', ({type, reason, promise}) => {
//     console.log(type);
//     console.log('reason:', reason.message);
//     console.log(promise === rejected);
// });
// window.addEventListener('rejectionhandled', ({type, promise}) => {
//     console.log(type);
//     console.log(promise === rejected);
// });
// rejected = new Promise((resolve, reject) => {
//     reject(new TypeError('Promise 全局拒绝处理程序'));
// });
// setTimeout(() => {
//     rejected.catch(error => {
//         console.log('err:', error);
//     });
// }, 3000);
// let rejected_resolve_map = new Map(),
//     rejected;
// process.on('unhandledRejection', (reason, promise) => {
//     rejected_resolve_map.set(promise, reason);
// });
// process.on('rejectionHandled', promise => {
//     console.log(rejected_resolve_map.get(promise));
//     console.log(rejected_resolve_map.has(promise));
//     // rejected_resolve_map.delete(promise);
// });
// function resolvePromiseUnhandledRejected(rejected_resolve_map) {
//     setInterval(() => {
//         rejected_resolve_map.forEach((reason, promise) => {
//             console.log(promise === rejected);
//             console.log('reason:', reason.message);
//         });
//         rejected_resolve_map.clear();
//     }, 2 * 60 * 1000);
// }
// resolvePromiseUnhandledRejected(rejected_resolve_map);
// rejected = Promise.reject(new TypeError('Promise 全局拒绝处理程序'));
// // rejected.catch(error => console.error('error:', error));
// setTimeout(() => {
//     rejected.catch(error => console.error('error:', error));
// }, 2000);
// Promise.all,当 Promise 数组内的每一个处理程序都完成时,才会实行返回,接收到的数据也才是一个数组,分别代表着每一个完成处理程序所传递的数据,一旦存在有一个拒绝处理程序,则会立即返回,接收到拒绝处理程序传递的数据
// const p1 = Promise.resolve(28);
// const p2 = Promise.resolve('black_myth_wtw');
// const p3 = Promise.resolve(true);
// Promise.all([p1, p2, p3]).then(results => {
//     console.log(Array.isArray(results));
//     console.log(results[0], results[1], results[2]);
// });
// const p1 = Promise.resolve(28);
// const p2 = Promise.reject(new TypeError('Promise.all'));
// const p3 = Promise.resolve(true);
// Promise.all([p1, p2, p3]).then(results => {
//     console.log(Array.isArray(results));
//     console.log(results[0], results[1], results[2]);
// }).catch(error => {
//     console.log('err:', error);
//     console.log(error.message);
// });
// Promise.race 当 Promise 数组内的任意一个处理程序完成或者拒绝时,都会立即返回,接收到完成或者拒绝处理程序传递的数据
// const p1 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(24);
//     }, 800);
// });
// const p2 = Promise.reject(new TypeError('Promise.all'));
// const p3 = new Promise(resolve => {
//     resolve(99);
// });
// Promise.race([p1, p2, p3]).then(results => {
//     console.log(Array.isArray(results));
//     console.log(results[0], results[1], results[2]);
// }).catch(error => {
//     console.log('err:', error);
//     console.log(error.message);
// });
// Promise 串行链
// const p1 = new Promise(resolve => {
//     resolve(32);
// });
// p1.then(value => {
//     console.log(value);
//     throw new TypeError('Promise 串行链');
// }).catch(error => {
//     console.error('err:', error);
//     console.log(error.message);
// });
// const p1 = new Promise(resolve => {
//     resolve(32);
// });
// const p2 = p1.then(value => {
//     console.log(value);
//     throw new TypeError('Promise 串行链');
// });
// p2.catch(error => {
//     console.error('err:', error);
//     console.log(error.message);
// });
// 在 Promise 链中抛出错误
// const p1 = new Promise(resolve => {
//     resolve(49);
// });
// p1.then(value => {
//     console.log(value);
//     throw new TypeError('Promise 串行链: 在 Promise 链中抛出错误');
// }).catch(error => {
//     console.log('err:', error);
//     console.log(error.message);
// });
// const p1 = new Promise(resolve => {
//     resolve(49);
// });
// const p2 = p1.then(value => {
//     console.log(value);
//     throw new TypeError('Promise 串行链: 在 Promise 链中抛出错误');
// });
// p2.catch(error => {
//     console.log('err:', error);
//     console.log(error.message);
// });
// 在 Promise 链中的返回值
// const p1 = new Promise(resolve => {
//     resolve(49);
// });
// p1.then(value => {
//     console.log(value);
//     return value + 51;
// }).then(val => {
//     console.log(val);
// });
// const p1 = new Promise(resolve => {
//     resolve(49);
// });
// const p2 = p1.then(value => {
//     console.log(value);
//     return value + 55;
// });
// p2.then(val => {
//     console.log(val);
// });
// const p1 = Promise.reject('black_myth_wtw');
// const p2 = Promise.resolve(p1);
// p2.catch(error => {
//     console.log('err:', error);
//     return 52;
// }).then(value => {
//     console.log(value);
//     return value + 14;
// }).then(val => {
//     console.log(val);
// });
// const p1 = Promise.reject('black_myth_wtw');
// const p2 = Promise.resolve(p1);
// const p3 = p2.catch(error => {
//     console.log('err:', error);
//     return 52;
// });
// const p4 = p3.then(value => {
//     console.log(value);
//     return value + 20;
// });
// p4.then(val => {
//     console.log(val);
// });
// 非 Promise 的 Thenable 对象
// const o = {
//     then(resolve) {
//         resolve(102);
//     }
// };
// const p1 = Promise.resolve(o);
// p1.then(value => {
//     console.log(value);
// });
// const o = {
//     then(resolve, reject) {
//         reject({sports: ['basketball', 'computer games']});
//     }
// };
// const p1 = Promise.resolve(o);
// p1.catch(err => {
//     console.error('err:', err);
// });
// 在 Promise 链中返回 Promise
// const p1 = new Promise(resolve => {
//     resolve(24);
// });
// const p2 = new Promise((resolve, reject) => {
//     resolve('black myth wtw');
// });
// p2.then(value => {
//     console.log(value);
//     return p1;
// }).then(value => {
//     console.log(value);
// });
// const p1 = new Promise(resolve => {
//     resolve(26);
// });
// const p2 = new Promise((resolve, reject) => {
//     resolve('black myth wtw');
// });
// const p3 = p2.then(value => {
//     console.log(value);
//     return p1;
// });
// p3.then(value => {
//     console.log(value);
// });
// const p1 = new Promise(resolve => {
//     resolve(26);
// });
// const p2 = new Promise((resolve, reject) => {
//     reject(false);
// });
// p2.catch(error => {
//     console.log('error:', error);
//     return p1;
// }).then(value => {
//     console.log(value);
// });
// const p1 = new Promise(resolve => {
//     resolve(26);
// });
// const p2 = new Promise((resolve, reject) => {
//     reject(false);
// });
// const p3 = p2.catch(error => {
//     console.log('error:', error);
//     return p1;
// });
// p3.then(value => {
//     console.log(value);
// });
// const p1 = Promise.resolve(29);
// const p2 = Promise.reject('black&myth&wtw');
// p2.catch(error => {
//     console.log('error:', error);
//     return p1;
// }).then(value => {
//     console.log(value);
// });
// const p1 = Promise.resolve(31);
// const p2 = Promise.reject('black@myth@wtw');
// const p3 = p2.catch(error => {
//     console.log('error:', error);
//     return p1;
// });
// p3.then(value => {
//     console.log(value);
// });
// 派生类继承自 Promise: 注意对于静态成员 Promise.resolve,Promise.reject 来说,它们所创建的类对象就是由静态访问器属性 Symbol.species 来确定值类型的,由此,类对象是在其派生类的原型链上
// class MyPromise extends Promise {
//     success(...args) {
//         return this.then(...args);
//     }
//
//     failure(...args) {
//         return this.catch(...args);
//     }
// }
//
// const p1 = new MyPromise((resolve, reject) => {
//     resolve(24);
// });
// p1.success(value => {
//     console.log(value);
//     throw new TypeError('派生类继承自 Promise');
// }).failure(error => {
//     console.log('error::::::', error);
//     console.log(error.message);
// });
// const p2 = MyPromise.resolve(88);
// const p3 = MyPromise.reject('1993-06-30');
// p3.catch(error => {
//     console.log('err::::::', error);
// });
// console.log(p2 instanceof MyPromise, p2 instanceof Promise);
// console.log(p3 instanceof MyPromise, p3 instanceof Promise);
// Promise 异步任务生成器,异步任务状态机生成器
// const fs = require('fs');
// const path = require('path');
//
// function readFile(...args) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(...args, (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
// }
// function run(generator) {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (!done) {
//             Promise.resolve(value).then(data => {
//                 result = task.next(data);
//                 step();
//             }).catch(reason => {
//                 result = task.throw(reason);
//                 step();
//             });
//         }
//     })();
// }
// run(function* () {
//     const first_question = yield readFile(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_question:', first_question);
//     const seconde_question = yield readFile(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('seconde_question:', seconde_question);
// });
// async/await
// const bar = () => Promise.reject('black#myth#wtw');
// bar().catch(error => console.log('err::::::', error));
// const first = Promise.resolve('First');
// const second = Promise.resolve('Second');
// const third = Promise.reject('Third');
// const fourth = Promise.resolve('Fourth');
// const promise = async () => {
//     const result_one = await Promise.all([first, second]);
//     const result_ano = await Promise.all([third, fourth]);
//     return [result_one, result_ano];
// };
// promise().then(results => {
//     console.log(Array.isArray(results));
//     console.log(results);
// }).catch(reason => {
//     console.log(reason);
// });
