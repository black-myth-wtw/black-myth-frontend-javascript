// ES5
// complete promise test A+ 完整模拟并规范测试
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
//     Promise.prototype.catch = function (onRejected) {
//         return this.then(null, onRejected);
//     }
//
//     Promise.prototype.finally = function (fn) {
//         if (typeof fn !== 'function') {
//             throw new TypeError(`The params ${fn.name} must be a function.`);
//         }
//         return this.then(function (value) {
//             return Promise.resolve(fn()).then(function () {
//                 return value;
//             });
//         }, function (reason) {
//             return Promise.resolve(fn()).catch(function () {
//                 throw reason;
//             });
//         });
//     }
//
//     Promise.resolve = function (params) {
//         if (params instanceof Promise) {
//             return params;
//         }
//         return new Promise(function (resolve) {
//             resolve(params);
//         });
//     };
//
//     Promise.reject = function (reason) {
//         return new Promise(function (resolve, reject) {
//             reject(reason);
//         });
//     };
//
//     Promise.all = function (promises) {
//         if (!Array.isArray(promises)) {
//             throw new TypeError(`The params ${promises} must be an Array.`);
//         }
//         return new Promise(function (resolve, reject) {
//             const result = [],
//                 promises_length = promises.length;
//             let count = 0;
//
//             promises.forEach(function (promise, index) {
//                 return Promise.resolve(promise).then(function (value) {
//                     count++;
//                     result[index] = value;
//                     if (count >= promises_length) {
//                         resolve(result);
//                     }
//                 }, function (reason) {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//
//     Promise.race = function (promises) {
//         if (!Array.isArray(promises)) {
//             throw new TypeError(`The params ${promises} must be an Array.`);
//         }
//         return new Promise(function (resolve, reject) {
//             promises.forEach(function (promise) {
//                 return Promise.resolve(promise).then(function (value) {
//                     resolve(value);
//                 }, function (reason) {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//
//     Promise.allSettled = function (promises) {
//         if (!Array.isArray(promises)) {
//             throw new TypeError(`The params ${promises} must be an Array.`);
//         }
//         return new Promise(function (resolve) {
//             const result = [],
//                 promises_length = promises.length;
//             let count = 0;
//
//             promises.forEach(function (promise, index) {
//                 return Promise.resolve(promise).then(function (value) {
//                     count++;
//                     result[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promises_length) {
//                         resolve(result);
//                     }
//                 }, function (reason) {
//                     count++;
//                     result[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promises_length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//
//     Promise.deferred = function () {
//         var dd = {};
//         dd.promise = new Promise(function (resolve, reject) {
//             dd.resolve = resolve;
//             dd.reject = reject;
//         });
//         return dd;
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
//                     setTimeout(function () {
//                         resolve({
//                             then(resolve) {
//                                 resolve('I love ZhaoYue!!!!!!');
//                             }
//                         });
//                     }, 2000);
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
// }).catch(function (reason) {
//     console.error(`error: ${reason.message}`);
// });
// setTimeout(function () {
//     console.log('I love myself~~~~~~');
// }, 0);
// console.log('I love WangJinJin!!!!!!');
// MyPromise.resolve([1, 2, 3]).then(function (value) {
//     console.log(value);
// });
// MyPromise.resolve([1, MyPromise.reject('666666'), 3]).then(function (value) {
//     console.log(value);
// }).catch(function (reason) {
//     console.log(reason);
// });
// MyPromise.reject('666666').then(function (value) {
//     console.log(value);
// }).catch(function (reason) {
//     console.log(reason);
// });
// MyPromise.all([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('6688');
//     }, 3000);
// }), MyPromise.resolve('black_myth_wtw'), 777777]).then(function (results) {
//     console.log(results);
// }).catch(function (reason) {
//     console.error(reason);
// });
// MyPromise.all([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('6688');
//     }, 3000);
// }), MyPromise.reject(new TypeError('爱说实言的灵吉')), 777777]).then(function (results) {
//     console.log(results);
// }).catch(function (reason) {
//     console.error(reason);
// });
// MyPromise.race([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('6688');
//     }, 4000);
// }), MyPromise.reject(false), 777777]).then(function (results) {
//     console.log(results);
// }).catch(function (reason) {
//     console.error(reason);
// });
// MyPromise.race([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('6688');
//     }, 4000);
// }), new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(false);
//     }, 5000)
// }), 777777]).then(function (results) {
//     console.log(results);
// }).catch(function (reason) {
//     console.error(reason);
// });
// MyPromise.allSettled([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('6688');
//     }, 4000);
// }), new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(false);
//     }, 5000)
// }), 777777]).then(function (results) {
//     console.log(results);
// }).catch(function (reason) {
//     console.error(reason);
// });
//
// module.exports = MyPromise;

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
//
//         catch(onRejected) {
//             return this.then(null, onRejected);
//         }
//
//         finally(fn) {
//             if (typeof fn !== 'function') {
//                 throw new TypeError(`The params ${fn.name} must be a function.`);
//             }
//             return this.then(value => Promise.resolve(fn()).then(() => value), reason => Promise.resolve(fn()).catch(() => {
//                 throw reason;
//             }));
//         }
//     }
//
//     Promise.resolve = params => params instanceof Promise ? params : new Promise((resolve) => resolve(params));
//
//     Promise.reject = reason => new Promise((resolve, reject) => reject(reason));
//
//     Promise.all = promises => {
//         if (!Array.isArray(promises)) {
//             throw new TypeError(`The params ${promises} must be an Array.`);
//         }
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 promises_length = promises.length;
//             let count = 0;
//
//             promises.forEach((promise, index) => {
//                 return Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = value;
//                     if (count >= promises_length) {
//                         resolve(result);
//                     }
//                 }, reason => reject(reason));
//             });
//         });
//     };
//
//     Promise.race = promises => {
//         if (!Array.isArray(promises)) {
//             throw new TypeError(`The params ${promises} must be an Array.`);
//         }
//         return new Promise((resolve, reject) => {
//             promises.forEach(promise => {
//                 return Promise.resolve(promise).then(value => {
//                     resolve(value);
//                 }, reason => reject(reason));
//             });
//         });
//     };
//
//     Promise.allSettled = promises => {
//         if (!Array.isArray(promises)) {
//             throw new TypeError(`The params ${promises} must be an Array.`);
//         }
//         return new Promise(resolve => {
//             const result = [],
//                 promises_length = promises.length;
//             let count = 0;
//
//             promises.forEach((promise, index) => {
//                 return Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promises_length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     count++;
//                     result[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promises_length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//
//     Promise.deferred = () => {
//         var dd = {};
//         dd.promise = new Promise((resolve, reject) => {
//             dd.resolve = resolve;
//             dd.reject = reject;
//         });
//         return dd;
//     };
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
//                     setTimeout(() => {
//                         resolve({
//                             then(resolve) {
//                                 resolve('I love ZhaoYue!!!!!!');
//                             }
//                         });
//                     }, 2000);
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
// }).catch(reason => {
//     console.error(`error: ${reason.message}`);
// });
// setTimeout(() => {
//     console.log('I love myself~~~~~~');
// }, 0);
// console.log('I love WangJinJin!!!!!!');
// MyPromise.resolve([1, 2, 3]).then(value => console.log(value));
// MyPromise.resolve([1, MyPromise.reject('666666'), 3]).then(value => console.log(value)).catch(reason => console.error(reason));
// MyPromise.reject('666666').then(value => console.log(value)).catch(reason => console.error(reason));
// MyPromise.all([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('6688');
//     }, 3000);
// }), MyPromise.resolve('black_myth_wtw'), 777777]).then(value => console.log(value)).catch(reason => console.error(reason));
// MyPromise.all([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('6688');
//     }, 3000);
// }), MyPromise.reject(new TypeError('爱说实言的灵吉')), 777777]).then(value => console.log(value)).catch(reason => console.error(reason));
// ;
// MyPromise.race([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('6688');
//     }, 4000);
// }), MyPromise.reject(false), 777777]).then(value => console.log(value)).catch(reason => console.error(reason));
// MyPromise.race([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('6688');
//     }, 4000);
// }), new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         reject(false);
//     }, 5000)
// }), 777777]).then(value => console.log(value)).catch(reason => console.error(reason));
// MyPromise.allSettled([new MyPromise((resolve) => {
//     setTimeout(() => {
//         resolve('6688');
//     }, 4000);
// }), new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         reject(false);
//     }, 5000)
// }), 777777]).then(value => console.log(value)).catch(reason => console.error(reason));
// module.exports = MyPromise;
