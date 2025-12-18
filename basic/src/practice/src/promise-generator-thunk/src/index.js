// ES5
// promise generator thunk 异步任务状态机生成器中间件
// var path = require('path'),
//     fs = require('fs');
//
// var path_start = path.resolve(__dirname, './questions/1.txt'),
//     path_end = path.resolve(__dirname, './questions/2.txt');
//
// var thunk = function (fn) {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params ${fn.name} must be a function!`);
//     }
//     return function () {
//         var self = this,
//             args = Array.prototype.slice.call(arguments);
//         return function (callback) {
//             return fn.apply(self, [...args, callback]);
//         }
//     }
// };
//
// var run = function (generator) {
//     return new Promise(function (resolve, reject) {
//         var task = generator();
//
//         function next(err, data) {
//             if (err) return reject(task.next(err instanceof Error ? err : new Error(err)));
//             const {value, done} = task.next(data);
//             if (done) return resolve(value);
//             if (typeof value === 'function') return value(next);
//
//             Promise.resolve(value).then(function (val) {
//                 next(null, val);
//             }, function (reason) {
//                 next(reason);
//             });
//         }
//
//         next();
//     });
// };
//
// var readFile = thunk(fs.readFile);
// run(function* () {
//     var file_start = yield readFile(path_start, 'utf-8');
//     console.log('file one:', file_start);
//     var file_end = yield readFile(path_end, 'utf-8');
//     console.log('file end:', file_end);
//     return file_end;
// }).then(function (value) {
//     console.log('file_final:', value);
// }).catch(function (error) {
//     console.error('error:', error);
// });

// ES6
// const path = require('path'),
//     fs = require('fs');
//
// const path_start = path.resolve(__dirname, './questions/1.txt'),
//     path_end = path.resolve(__dirname, './questions/2.txt');
//
// const thunk = fn => (...args) => callback => fn(...args, callback);
//
// const run = generator => new Promise((resolve, reject) => {
//     const task = generator();
//
//     const next = (err, data) => {
//         if (err) return reject(task.throw(err instanceof Error ? err : new Error(err)));
//         const {value, done} = task.next(data);
//         if (done) return resolve(value);
//         if (typeof value === 'function') return value(next);
//
//         Promise.resolve(value).then(val => next(null, val), reason => next(reason));
//     }
//
//     next();
// });
//
// const readFile = thunk(fs.readFile);
// run(function* () {
//     const file_start = yield readFile(path_start, 'utf-8');
//     console.log('file one:', file_start);
//     const file_end = yield readFile(path_end, 'utf-8');
//     console.log('file end:', file_end);
//     return file_end;
// }).then(value => console.log('file_final:', value)).catch(error => console.error('error:', error));
