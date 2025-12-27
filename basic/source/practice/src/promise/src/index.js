// ES5
// promise A+ 模拟
// var MyPromise = (function () {
//     var PENDING = 'pending',
//         FULFILLED = 'fulfilled',
//         REJECTED = 'rejected';
//
//     function Promise(fn) {
//         this.status = PENDING;
//         this.value = null;
//         this.reason = null;
//         this.onFulfilledCallbacks = [];
//         this.onRejectedCallbacks = [];
//
//         var that = this;
//
//         var resolve = function (value) {
//             if (that.status === PENDING) {
//                 that.status = FULFILLED;
//                 that.value = value;
//                 that.onFulfilledCallbacks.forEach(callback => {
//                     callback(value);
//                 });
//             }
//         };
//
//         var reject = function (reason) {
//             if (that.status === PENDING) {
//                 that.status = REJECTED;
//                 that.reason = reason;
//                 that.onRejectedCallbacks.forEach(callback => {
//                     callback(reason);
//                 });
//             }
//         };
//
//         try {
//             fn(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }
//
//     Promise.prototype.then = function (onFulfilled, onRejected) {
//         if (typeof onFulfilled === 'undefined') {
//             onFulfilled = function (value) {
//                 return value;
//             };
//         }
//         if (typeof onRejected === 'undefined') {
//             onRejected = function (reason) {
//                 throw reason;
//             }
//         }
//
//         var promise = null,
//             that = this;
//
//         if (this.status === FULFILLED) {
//             promise = new Promise(function (resolve, reject) {
//                 setTimeout(function () {
//                     try {
//                         (function thenable(value) {
//                             if (typeof onFulfilled !== 'function') {
//                                 resolve(value);
//                             } else {
//                                 var then = value.then,
//                                     self = this;
//
//                                 if (typeof then === 'function') {
//                                     try {
//                                         then.call(this, function (y) {
//                                             thenable.call(self, y);
//                                         }, function (r) {
//                                             reject(r);
//                                         });
//                                     } catch (error) {
//                                         reject(error);
//                                     }
//                                 } else {
//                                     var x = onFulfilled(value);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             }
//                         }.bind(that))(that.value);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 }, 0);
//             });
//         }
//
//         if (this.status === REJECTED) {
//             promise = new Promise(function (resolve, reject) {
//                 setTimeout(function () {
//                     try {
//                         if (typeof onRejected !== 'function') {
//                             reject(that.reason);
//                         } else {
//                             var x = onRejected(that.reason);
//                             resolvePromise(promise, x, resolve, reject);
//                         }
//                     } catch (error) {
//                         reject(error);
//                     }
//                 }, 0);
//             });
//         }
//
//         if (this.status === PENDING) {
//             promise = new Promise(function (resolve, reject) {
//                 that.onFulfilledCallbacks.push(function () {
//                     setTimeout(function () {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     var then = value.then,
//                                         self = this;
//
//                                     if (typeof then === 'function') {
//                                         try {
//                                             then.call(this, function (y) {
//                                                 thenable.call(self, y);
//                                             }, function (r) {
//                                                 reject(r);
//                                             });
//                                         } catch (error) {
//                                             reject(error);
//                                         }
//                                     } else {
//                                         var x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             }.bind(that))(that.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//                 that.onRejectedCallbacks.push(function () {
//                     setTimeout(function () {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(that.reason);
//                             } else {
//                                 var x = onRejected(that.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             });
//         }
//
//         return promise;
//     };
//
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new ReferenceError('The promise and the return value are the same!'));
//         if (x instanceof Promise) x.then(function (y) {
//             resolve(promise, y, resolve, reject);
//         });
//         if (typeof x === 'function' || typeof x === 'object') {
//             if (x === null) return resolve(x);
//
//             var then = null,
//                 called = false;
//
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//
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
//
//     return Promise;
// })();
//
// var promise = new MyPromise(function (resolve) {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve('I love ZhaoYue!!!!!!');
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });
//
// promise.then(function (value) {
//     console.log(value);
//
//     return `I love ${value}`;
// }).then(1).then(function (value) {
//     console.log(value);
//     throw new TypeError('I love ZhengShuAng!!!!!!');
// }).then(function () {
//
// }, function (reason) {
//     console.error(`error: ${reason.message}`);
// });
// setTimeout(function () {
//     console.log('I love myself~~~~~~');
// }, 0);
// console.log('I love WangJinJin!!!!!!');

// ES6
// const MyPromise = (() => {
//     const PENDING = 'pending',
//         FULFILLED = 'fulfilled',
//         REJECTED = 'rejected';
//
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             };
//
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             };
//
//             try {
//                 fn(resolve, reject);
//             } catch (error) {
//                 reject(error);
//             }
//         }
//
//         then(onFulfilled = value => value, onRejected = reason => {
//             throw reason;
//         }) {
//             let promise = null;
//
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     const then = value.then;
//
//                                     if (typeof then === 'function') {
//                                         try {
//                                             then.call(this, y => {
//                                                 thenable.call(this, y);
//                                             }, (r) => {
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
//                             }.bind(this))(this.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//
//             if (this.status === REJECTED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(this.reason);
//                             } else {
//                                 const x = onRejected(this.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, reject) => {
//                     this.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         const then = value.then;
//
//                                         if (typeof then === 'function') {
//                                             try {
//                                                 then.call(this, y => {
//                                                     thenable.call(this, y);
//                                                 }, (r) => {
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
//                                 }.bind(this))(this.value);
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(this.reason);
//                                 } else {
//                                     const x = onRejected(this.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//
//             return promise;
//         }
//     }
//
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new ReferenceError('The promise and the return value are the same!'));
//         if (x instanceof Promise) x.then(y => {
//             resolve(promise, y, resolve, reject);
//         });
//         if (typeof x === 'function' || typeof x === 'object') {
//             if (x === null) return resolve(x);
//
//             let then = null,
//                 called = false;
//
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//
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
//
//     return Promise;
// })();
//
// const promise = new MyPromise((resolve) => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve('I love ZhaoYue!!!!!!');
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });
//
// promise.then(value => {
//     console.log(value);
//
//     return `I love ${value}`;
// }).then(1).then(value => {
//     console.log(value);
//     throw new TypeError('I love ZhengShuAng!!!!!!');
// }).then(() => {
//
// }, reason => {
//     console.error(`error: ${reason.message}`);
// });
// setTimeout(() => {
//     console.log('I love myself~~~~~~');
// }, 0);
// console.log('I love WangJinJin!!!!!!');
