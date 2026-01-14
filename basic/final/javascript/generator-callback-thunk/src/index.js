// javascript generator callback thunk 异步任务回调函数生成器中间件
// const fs = require('fs');
// const path = require('path');
// const generator_callback_thunk = fn => (...args) => callback => fn(...args, callback);
// const run = generator => {
//     const task = generator();
//     function next(error, data) {
//         if (error) return task.throw(error instanceof Error ? error : new Error(error));
//         const {value, done} = task.next(data);
//         if (done) return true;
//         if (typeof value === 'function') {
//             value(next);
//         } else {
//             next(null, value);
//         }
//     }
//     next();
// };
// const fs_read_file_generator_callback_thunk = generator_callback_thunk(fs.readFile);
// run(function* () {
//     const first_file_content = yield fs_read_file_generator_callback_thunk(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_content:', first_file_content);
//     const second_file_content = yield fs_read_file_generator_callback_thunk(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_content:', second_file_content);
// });
// const fs = require('fs');
// const path = require('path');
// const generator_callback_thunk = fn => (...args) => callback => fn(...args, callback);
// const run = (generator, callback) => {
//     const task = generator();
//     function next(error, data) {
//         if (error) return task.throw(error instanceof Error ? error : new Error(error));
//         const {value, done} = task.next(data);
//         if (done) return callback(null, value);
//         if (typeof value === 'function') {
//             value(next);
//         } else {
//             next(null, value);
//         }
//     }
//     next();
// };
// const fs_read_file_generator_callback_thunk = generator_callback_thunk(fs.readFile);
// run(function* () {
//     const first_file_content = yield fs_read_file_generator_callback_thunk(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file_content:', first_file_content);
//     const second_file_content = yield fs_read_file_generator_callback_thunk(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file_content:', second_file_content);
//     return second_file_content;
// }, function (error, value) {
//     if (error) return console.error(error);
//     console.log('result_file_content:', value);
// });
