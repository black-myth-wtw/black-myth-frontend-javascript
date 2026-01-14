// javascript generator promise thunk 异步任务状态机生成器中间件
// const fs = require('fs');
// const path = require('path');
// const generator_promise_thunk = fn => (...args) => callback => fn(...args, callback);
// const run = generator => {
//     return new Promise((resolve, reject) => {
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
// };
// const fs_read_file_generator_promise_thunk = generator_promise_thunk(fs.readFile);
// run(function* () {
//     const first_file_content = yield fs_read_file_generator_promise_thunk(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_content:', first_file_content);
//     const second_file_content = yield fs_read_file_generator_promise_thunk(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_content:', second_file_content);
//     return second_file_content;
// }).then(result => {
//     console.log('result_file_content:', result);
// }).catch(error => {
//     console.error(error);
// });
