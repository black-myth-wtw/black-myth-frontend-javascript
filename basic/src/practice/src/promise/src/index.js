// javascript promise A+ 模拟
// ES5
// var MyPromise = (function () {
//     var PENDING = 'pending',
//         FULFILLED = 'fulfilled',
//         REJECTED = 'rejected';
//     function Promise(fn) {
//         this.value = null;
//         this.reason = null;
//         this.status = PENDING;
//         this.onFulfilledCallbacks = [];
//         this.onRejectedCallbacks = [];
//         var self = this;
//         var resolve = function (value) {
//             if (self.status === PENDING) {
//                 self.status = FULFILLED;
//                 self.value = value;
//                 self.onFulfilledCallbacks.forEach(function (callback) {
//                     callback(value);
//                 });
//             }
//         };
//         var reject = function (reason) {
//             if (self.status === PENDING) {
//                 self.status = REJECTED;
//                 self.reason = reason;
//                 self.onRejectedCallbacks.forEach(function (callback) {
//                     callback(reason);
//                 });
//             }
//         };
//         try {
//             fn(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }
//     Promise.prototype.then = function (onFulfilled, onRejected) {
//         if (typeof onFulfilled === 'undefined') {
//             onFulfilled = function (value) {
//                 return value
//             };
//         }
//         if (typeof onRejected === 'undefined') {
//             onRejected = function (reason) {
//                 throw reason;
//             };
//         }
//         var promise = null,
//             self = this;
//         if (this.status === FULFILLED) {
//             promise = new Promise(function (resolve, reject) {
//                 var promise_self = this;
//                 setTimeout(function () {
//                     try {
//                         (function thenable(value) {
//                             if (typeof onFulfilled !== 'function') {
//                                 resolve(value);
//                             } else {
//                                 var then = value.then;
//                                 if (typeof then === 'function') {
//                                     then.call(promise_self, function (y) {
//                                         thenable.call(promise_self, y);
//                                     }, function (r) {
//                                         reject(r);
//                                     });
//                                 } else {
//                                     var x = onFulfilled(value);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             }
//                         })(self.value);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 }, 0);
//             });
//         }
//         if (this.status === REJECTED) {
//             promise = new Promise(function (resolve, reject) {
//                 setTimeout(function () {
//                     try {
//                         if (typeof onRejected !== 'function') {
//                             reject(self.reason);
//                         } else {
//                             var x = onRejected(self.reason);
//                             resolvePromise(promise, x, resolve, reject);
//                         }
//                     } catch (error) {
//                         reject(error);
//                     }
//                 }, 0);
//             });
//         }
//         if (this.status === PENDING) {
//             promise = new Promise(function (resolve, reject) {
//                 var promise_self = this;
//                 self.onFulfilledCallbacks.push(function () {
//                     setTimeout(function () {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     var then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(promise_self, function (y) {
//                                             thenable.call(promise_self, y);
//                                         }, function (r) {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         var x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(self.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//                 self.onRejectedCallbacks.push(function () {
//                     setTimeout(function () {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(self.reason);
//                             } else {
//                                 var x = onRejected(self.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             });
//         }
//         return promise;
//     };
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(function (y) {
//             resolvePromise(promise, y, resolve, reject);
//         }, function (r) {
//             reject(r);
//         });
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return resolve(x);
//             var then = null,
//                 called = false;
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, function (y) {
//                         if (called) return;
//                         called = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, function (r) {
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
// var promise = new MyPromise(function (resolve, reject) {
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
// promise.then(function (value) {
//     console.log(value);
//     return `I love ${value}`;
// }).then(function (value) {
//     console.log(value);
//     throw new TypeError('I love myself~~~~~~');
// }).then(function () {
//
// }, function (reason) {
//     console.error(reason);
// });
// setTimeout(function () {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
//
// ES6
// const MyPromise = (function () {
//     const PENDING = 'pending',
//         FULFILLED = 'fulfilled',
//         REJECTED = 'rejected';
//     class Promise {
//         constructor(fn) {
//             this.value = null;
//             this.reason = null;
//             this.status = PENDING;
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
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     const then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable.call(this, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             }.bind(this))(self.value);
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
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         const then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(this, y => {
//                                                 thenable.call(this, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 }.bind(this))(self.value);
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
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(y => {
//             resolvePromise(promise, y, resolve, reject);
//         }, r => {
//             reject(r);
//         });
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
// const promise = new MyPromise(resolve => {
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
