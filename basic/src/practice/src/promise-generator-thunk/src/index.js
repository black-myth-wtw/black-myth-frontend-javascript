// javascript promise generator thunk 异步任务状态机生成器中间件
// ES5
// var fs = require('fs');
// var path = require('path');
// function thunk(fn) {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return function () {
//         var self = this,
//             args = Array.prototype.slice.call(arguments);
//         return function (callback) {
//             return fn.apply(self, args.concat(callback));
//         };
//     };
// }
// function run(generator) {
//     return new Promise(function (resolve, reject) {
//         var task = generator();
//         function next(error, data) {
//             if (error) return reject(task.throw(new Error(error instanceof Error ? error : new Error(error))));
//             var {value, done} = task.next(data);
//             if (done) return resolve(value);
//             if (typeof value === 'function') {
//                 return value(next);
//             }
//             Promise.resolve(value).then(function (val) {
//                 next(null, val);
//             }, function (reason) {
//                 next(reason);
//             });
//         }
//         next();
//     });
// }
// var read_file = thunk(fs.readFile);
// run(function* () {
//     var first_file_question = yield read_file(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_question:', first_file_question);
//     var second_file_question = yield read_file(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_question:', second_file_question);
//     return second_file_question;
// }).then(function (value) {
//     console.log('result:', value);
// }).catch(function (error) {
//     console.error('error:', error);
// });

// ES6
// const fs = require('fs');
// const path = require('path');
// const thunk = fn => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return (...args) => callback => fn(...args, callback);
// }
// function run(generator) {
//     return new Promise(function (resolve, reject) {
//         const task = generator();
//         function next(error, data) {
//             if (error) return reject(task.throw(error instanceof Error ? error : new Error(error)));
//             const {value, done} = task.next(data);
//             if (done) return resolve(value);
//             if (typeof value === 'function') {
//                 return value(next);
//             }
//             Promise.resolve(value).then(val => {
//                 next(null, val);
//             }, reason => {
//                 next(reason);
//             });
//         }
//         next();
//     });
// }
// const read_file = thunk(fs.readFile);
// run(function* () {
//     const first_file_question = yield read_file(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_question:', first_file_question);
//     const second_file_question = yield read_file(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_question:', second_file_question);
//     return second_file_question;
// }).then(result => {
//     console.log('result:', result);
// }).catch(error => {
//     console.error('error:', error);
// });
