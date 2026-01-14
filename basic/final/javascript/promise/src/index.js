// javascript promise A+ 模拟
// const Promise_Mock = (() => {
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
//                                     const then = value.then;
//                                     if (typeof then === 'function') {
//                                         try {
//                                             then.call(promise_self, y => {
//                                                 thenable.call(promise_self, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } catch (error) {
//                                             reject(error);
//                                         }
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
//                                 const x = onRejected(self.reason);
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
//                     let promise_self = this;
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         const then = value.then;
//                                         if (typeof then === 'function') {
//                                             try {
//                                                 then.call(promise_self, y => {
//                                                     thenable.call(promise_self, y);
//                                                 }, r => {
//                                                     reject(r);
//                                                 });
//                                             } catch (error) {
//                                                 reject(error);
//                                             }
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
//                                     const x = onRejected(self.reason);
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
//     }
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are then same~~~~~~'));
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
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (called) return;
//                         called = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (called) return;
//                         called = true;
//                         reject(r);
//                     });
//                 } catch (error) {
//                     if (called) return;
//                     reject(error);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//     return Promise;
// })();
// const promise = new Promise_Mock(resolve => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve('I love WangJinJin~~~~~~');
//                 }
//             })
//         }
//     });
// });
// promise.then(value => {
//     console.log(value);
//     return `I love ${value}`;
// }).then(val => {
//     console.log(val);
//     throw new TypeError('I love myself~~~~~~');
// }).then(() => {
// }, reason => {
//     console.error(reason);
// });
// setTimeout(() => {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
