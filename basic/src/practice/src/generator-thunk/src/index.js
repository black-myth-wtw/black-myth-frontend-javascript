// javascript generator thunk 异步任务回调函数生成器中间件
// ES5
// var fs = require('fs');
// var path = require('path');
// function thunk(fn) {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return function () {
//         var self = this,
//             args = Array.prototype.slice.call(arguments);
//         return function (callback) {
//             fn.apply(self, args.concat(callback));
//         }
//     }
// }
// function run(generator) {
//     var task = generator();
//     function next(error, data) {
//         if (error) return task.throw(error instanceof Error ? error : new Error(error));
//         var {value, done} = task.next(data);
//         if (done) return true;
//         if (typeof value === 'function') {
//             value(next);
//         } else {
//             next(null, value);
//         }
//     }
//     next();
// }
// var read_file_thunk = thunk(fs.readFile);
// run(function* () {
//     var first_file_question = yield read_file_thunk(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_question:', first_file_question);
//     var second_file_question = yield read_file_thunk(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_question:', second_file_question);
// });

// ES6
// const fs = require('fs');
// const path = require('path');
// const thunk = fn => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return (...args) => callback => fn(...args, callback);
// }
// const run = generator => {
//     const task = generator();
//     function next(error, data) {
//         if (error) return task.throw(error instanceof Error ? error : new Error(error));
//         const {value, done} = task.next(data);
//         if (done) return true;
//         if (typeof value === 'function') value(next);
//         else next(null, value);
//     }
//     next();
// }
// const read_file_thunk = thunk(fs.readFile);
// run(function* () {
//     const first_file_question = yield read_file_thunk(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_question:', first_file_question);
//     const second_file_question = yield read_file_thunk(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_question:', second_file_question);
// });
