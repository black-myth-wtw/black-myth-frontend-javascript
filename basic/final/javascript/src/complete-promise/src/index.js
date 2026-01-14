// javascript complete promise A+ 完整模拟
// const Complete_Promise_Mock = (() => {
//     const PENDING = 'pending',
//         FULFILLED = 'fulfilled',
//         REJECTED = 'rejected';
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => callback(value));
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => callback(reason));
//                 }
//             };
//             try {
//                 fn(resolve, reject);
//             } catch (error) {
//                 reject(error);
//             }
//         }
//         then(onFulfilled = value => value, onRejected = reason => {
//             throw reason;
//         }) {
//             let promise = null,
//                 self = this;
//             if (this.status === FULFILLED) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     let then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(promise_self, y => {
//                                             thenable.call(promise_self, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(self.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise(function (resolve, reject) {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(self.reason);
//                             } else {
//                                 let x = onRejected(self.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         let then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(promise_self, y => {
//                                                 thenable.call(promise_self, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 })(self.value);
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                     self.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(self.reason);
//                                 } else {
//                                     let x = onRejected(self.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//         catch(onRejected = reason => {
//             throw reason;
//         }) {
//             return this.then(null, onRejected);
//         }
//         finally(fn) {
//             return this.then(value => Promise.resolve(fn()).then(() => value), reason => Promise.resolve(fn()).catch(() => {
//                 throw reason;
//             }));
//         }
//     }
//     Promise.resolve = promise => {
//         if (promise instanceof Promise) return promise;
//         return new Promise(resolve => resolve(promise));
//     };
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => reject(reason));
//     };
//     Promise.all = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const {length: promise_list_length} = promise_list,
//                 all_promise_result = [];
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     all_promise_result[index] = value;
//                     if (count >= promise_list_length) {
//                         resolve(all_promise_result);
//                     }
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             promise_list.forEach(promise => {
//                 Promise.resolve(promise).then(value => resolve(value), reason => reject(reason));
//             });
//         });
//     };
//     Promise.allSettled = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const {length: promise_list_length} = promise_list,
//                 all_settled_promise_result = [];
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     all_settled_promise_result[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(all_settled_promise_result);
//                     }
//                 }, reason => {
//                     count++;
//                     all_settled_promise_result[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(all_settled_promise_result);
//                     }
//                 });
//             });
//         });
//     };
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(y => resolvePromise(promise, y, resolve, reject), r => reject(r));
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return resolve(x);
//             let then = null,
//                 called = false;
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//             try {
//                 then.call(x, y => {
//                     if (called) return;
//                     called = true;
//                     resolvePromise(promise, y, resolve, reject);
//                 }, r => {
//                     if (called) return;
//                     called = true;
//                     reject(r);
//                 });
//             } catch (error) {
//                 if (called) return;
//                 reject(error);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//     return Promise;
// })();
// const promise = new Complete_Promise_Mock((resolve) => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve({
//                                 then(resolve) {
//                                     setTimeout(() => {
//                                         resolve('I love WangJinJin~~~~~~');
//                                     }, 2000);
//                                 }
//                             });
//                         }
//                     });
//                 }
//             })
//         }
//     });
// });
// promise.then(value => {
//     console.log(value);
//     return `I love ${value}`;
// }).then(99).then(val => {
//     console.log(val);
//     // throw new TypeError('I love myself~~~~~~');
//     return `I love ${val}`;
// }).then(result => {
//     return Complete_Promise_Mock.reject(result);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// setTimeout(() => {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
// Complete_Promise_Mock.resolve([1, 99, 100]).then(values => {
//     console.log(values);
// });
// Complete_Promise_Mock.resolve([1, Complete_Promise_Mock.reject(99), 101]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Complete_Promise_Mock.resolve(promise).then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log('error:', reason);
// });
// Complete_Promise_Mock.reject('I love complete promise~~~~~').then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log('error:', reason);
// });
// Complete_Promise_Mock.all([new Complete_Promise_Mock(resolve => {
//     resolve('I love FrontEnd~~~~~~')
// }), Complete_Promise_Mock.resolve(199), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Complete_Promise_Mock.all([new Complete_Promise_Mock(resolve => {
//     resolve('I love FrontEnd~~~~~~')
// }), Complete_Promise_Mock.reject(777), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Complete_Promise_Mock.all([new Complete_Promise_Mock(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 4500);
// }), Complete_Promise_Mock.resolve(999), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Complete_Promise_Mock.race([new Complete_Promise_Mock(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 3000);
// }), new Complete_Promise_Mock((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Complete_Promise_Mock.race([new Complete_Promise_Mock(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 2800);
// }), new Complete_Promise_Mock((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), new Complete_Promise_Mock(resolve => {
//     setTimeout(() => {
//         resolve(true);
//     }, 2900);
// })]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Complete_Promise_Mock.allSettled([new Complete_Promise_Mock(resolve => {
//     setTimeout(() => {
//         resolve('I love NodeJS~~~~~~');
//     }, 3100);
// }), new Complete_Promise_Mock((resolve, reject) => {
//     setTimeout(() => {
//         reject(1000);
//     }, 4200);
// }), new Complete_Promise_Mock(resolve => {
//     setTimeout(() => {
//         resolve(false);
//     }, 2200);
// })]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
