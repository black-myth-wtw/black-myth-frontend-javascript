// javascript complete promise A+ 完整模拟
// ES5
// var MyPromise = (function () {
//     var PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//     function Promise(fn) {
//         this.status = PENDING;
//         this.value = null;
//         this.reason = null;
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
//                 return value;
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
//     Promise.prototype.catch = function (onRejected) {
//         return this.then(null, onRejected);
//     };
//     Promise.prototype.finally = function (fn) {
//         return this.then(function (value) {
//             return Promise.resolve(fn()).then(function () {
//                 return value;
//             });
//         }, function (reason) {
//             return Promise.resolve(fn()).catch(function () {
//                 throw reason;
//             });
//         });
//     };
//     Promise.resolve = function (params) {
//         if (params instanceof Promise) {
//             return params;
//         }
//         return new Promise(function (resolve) {
//             resolve(params);
//         });
//     };
//     Promise.reject = function (reason) {
//         return new Promise(function (resolve, reject) {
//             reject(reason);
//         });
//     };
//     Promise.all = function (promise_list) {
//         if (!Array.isArray(promise_list)) {
//             throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         }
//         return new Promise(function (resolve, reject) {
//             const {length: promise_list_length} = promise_list,
//                 promise_all_list = [];
//             let count = 0;
//             promise_list.forEach(function (promise, index) {
//                 Promise.resolve(promise).then(function (value) {
//                     count++;
//                     promise_all_list[index] = value;
//                     if (count >= promise_list_length) {
//                         resolve(promise_all_list);
//                     }
//                 }, function (reason) {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = function (promise_list) {
//         if (!Array.isArray(promise_list)) {
//             throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         }
//         return new Promise(function (resolve, reject) {
//             promise_list.forEach(function (promise) {
//                 Promise.resolve(promise).then(function (value) {
//                     resolve(value);
//                 }, function (reason) {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = function (promise_list) {
//         if (!Array.isArray(promise_list)) {
//             throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         }
//         return new Promise(function (resolve, reject) {
//             const {length: promise_list_length} = promise_list,
//                 promise_all_list = [];
//             let count = 0;
//             promise_list.forEach(function (promise, index) {
//                 Promise.resolve(promise).then(function (value) {
//                     count++;
//                     promise_all_list[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(promise_all_list);
//                     }
//                 }, function (reason) {
//                     count++;
//                     promise_all_list[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(promise_all_list);
//                     }
//                 });
//             });
//         });
//     };
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(function (y) {
//             resolvePromise(promise, y, resolve, reject);
//         }, function (y) {
//             reject(y);
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
//     return Promise;
// })();
// var promise = new MyPromise(function (resolve) {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve({
//                                 then(resolve) {
//                                     setTimeout(function () {
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
// promise.then(function (value) {
//     console.log(value);
//     return `I love ${value}`;
// }).then(99).then(function (val) {
//     console.log(val);
//     // throw new TypeError('I love myself~~~~~~');
//     return `I love ${val}`;
// }).then(function (result) {
//     return MyPromise.reject(result);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
// setTimeout(function () {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
// MyPromise.resolve([1, 99, 100]).then(function (values) {
//     console.log(values);
// });
// // MyPromise.resolve([1, Promise.reject(99), 101]).then(function (values) {
// //     console.log(values);
// // }).catch(function (reason) {
// //     console.error('error:', reason);
// // });
// MyPromise.resolve(promise).then(function (value) {
//     console.log(value);
// }).catch(function (reason) {
//     console.log('error:', reason);
// });
// MyPromise.reject('I love complete promise~~~~~').then(function (value) {
//     console.log(value);
// }).catch(function (reason) {
//     console.log('error:', reason);
// });
// MyPromise.all([new MyPromise(function (resolve) {
//     resolve('I love FrontEnd~~~~~~')
// }), MyPromise.resolve(199), true]).then(function (values) {
//     console.log(values);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
// MyPromise.all([new MyPromise(function (resolve) {
//     resolve('I love FrontEnd~~~~~~')
// }), MyPromise.reject(777), true]).then(function (values) {
//     console.log(values);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
// MyPromise.all([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('I love FrontEnd~~~~~~');
//     }, 4500);
// }), MyPromise.resolve(999), true]).then(function (values) {
//     console.log(values);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
// MyPromise.race([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('I love FrontEnd~~~~~~');
//     }, 3000);
// }), new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(777);
//     }, 4000);
// }), true]).then(function (values) {
//     console.log(values);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
// MyPromise.race([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('I love FrontEnd~~~~~~');
//     }, 2800);
// }), new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(777);
//     }, 4000);
// }), new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve(true);
//     }, 2900);
// })]).then(function (values) {
//     console.log(values);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
// MyPromise.allSettled([new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve('I love NodeJS~~~~~~');
//     }, 3100);
// }), new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(1000);
//     }, 4200);
// }), new MyPromise(function (resolve) {
//     setTimeout(function () {
//         resolve(false);
//     }, 2200);
// })]).then(function (values) {
//     console.log(values);
// }).catch(function (reason) {
//     console.error('error:', reason);
// });
//
// ES6
// const MyPromise = (function () {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
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
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     let then = value.then;
//                                     if (typeof then === 'function') {
//                                         try {
//                                             then.call(this, y => {
//                                                 thenable.call(this, y);
//                                             });
//                                         } catch (error) {
//                                             reject(error);
//                                         }
//                                     } else {
//                                         let x = onFulfilled(value);
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
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         let then = value.then;
//                                         if (typeof then === 'function') {
//                                             try {
//                                                 then.call(this, y => {
//                                                     thenable.call(this, y);
//                                                 });
//                                             } catch (error) {
//                                                 reject(error);
//                                             }
//                                         } else {
//                                             let x = onFulfilled(value);
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
//         catch(onRejected) {
//             return this.then(null, onRejected);
//         }
//         finally(fn) {
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).catch(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//     Promise.resolve = params => {
//         if (params instanceof Promise) {
//             return params;
//         }
//         return new Promise(resolve => {
//             resolve(params);
//         });
//     };
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//     Promise.all = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list}} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const {length: promise_list_length} = promise_list,
//                 promise_all_list = [];
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     promise_all_list[index] = value;
//                     if (count >= promise_list_length) resolve(promise_all_list);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list}} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list}} must be an array~~~~~~`);
//         return new Promise(resolve => {
//             const {length: promise_list_length} = promise_list,
//                 promise_all_settled_result = [];
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     promise_all_settled_result[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promise_list_length) resolve(promise_all_settled_result);
//                 }, reason => {
//                     count++;
//                     promise_all_settled_result[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promise_list_length) resolve(promise_all_settled_result);
//                 });
//             });
//         });
//     };
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(y => resolvePromise(promise, y, resolve, reject), r => reject(r));
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
//     return Promise;
// })();
// const promise = new MyPromise(resolve => {
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
//     return MyPromise.reject(result);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// setTimeout(() => {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
// MyPromise.resolve([1, 99, 100]).then(values => console.log(values));
// // MyPromise.resolve([1, Promise.reject(99), 101]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.resolve(promise).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.reject('I love complete promise~~~~~').then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.all([new MyPromise(resolve => resolve('I love FrontEnd~~~~~~')), MyPromise.resolve(199), true]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.all([new MyPromise(resolve => resolve('I love FrontEnd~~~~~~')), MyPromise.reject(777), true]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.all([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 4500);
// }), MyPromise.resolve(999), true]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.race([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 3000);
// }), new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), true]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.race([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 2800);
// }), new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve(true);
//     }, 2900);
// })]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
// MyPromise.allSettled([new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('I love NodeJS~~~~~~');
//     }, 3100);
// }), new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         reject(1000);
//     }, 4200);
// }), new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve(false);
//     }, 2200);
// })]).then(values => console.log(values)).catch(reason => console.error('error:', reason));
