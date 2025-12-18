// generator 生成器
// 基本用法
// function* generator_fn() {
//     yield 'black_myth_wtw';
//     yield 28 + 4;
//     yield true;
//     yield '1993-06-30';
//     yield {sports: ['Black Myth WuKong', 'Elden Ring']};
// }
// const task = generator_fn();
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// 生成器的函数表达式
// const arr = ['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}];
// const generator_fn = function* (arr) {
//     for (const value of arr) {
//         yield value;
//     }
// };
// const task = generator_fn(arr);
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// console.log(task.next());
// 生成器的对象方法
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-04-27',
//     introduce(name, age, gender) {
//         return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     [Symbol.iterator]() {
//         let count = 0,
//             done = false,
//             values = Object.values(this),
//             {length: values_length} = values;
//         return {
//             next() {
//                 done = count >= values_length;
//                 return {
//                     done,
//                     value: !done ? values[count++] : undefined,
//                 };
//             }
//         }
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-04-27',
//     introduce(name, age, gender) {
//         return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-04-27',
//     introduce(name, age, gender) {
//         return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     * [Symbol.iterator]() {
//         for (const value of Object.values(this)) {
//             yield value;
//         }
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// 向迭代器传递参数
// function* generator_fn() {
//     const first = yield 4 + 5;
//     console.log('first:', first);
//     const second = yield first + 7;
//     console.log('second:', second);
// }
// const task = generator_fn();
// const {value} = task.next();
// const {value: value_ano} = task.next(value);
// task.next(value_ano);
// 在生成器中抛出错误,注意抛出错误后,在没有 try-catch 的情况下,会立即停止运行,不再继续迭代
// function* generator_fn() {
//     const first = yield 4 + 5;
//     console.log('first:', first);
//     const second = yield first + 7;
//     console.log('second:', second);
// }
// const task = generator_fn();
// const {value} = task.next();
// const {value: value_ano} = task.next(value);
// task.throw(new Error('failed'));
// task.next(value_ano);
// function* generator_fn() {
//     const first = yield 4 + 5;
//     console.log('first:', first);
//     let second;
//     try {
//         second = yield first + 7;
//     } catch (error) {
//         second = 18;
//     }
//     console.log('second:', second);
//     const third = yield second + 6;
//     console.log('third:', third);
// }
// const task = generator_fn();
// const {value} = task.next();
// console.log(task.next(value));
// console.log(task.throw(new Error('failed')));
// console.log(task.next(36));
// 在生成器中的返回语句
// function *information() {
//     yield 'black@myth@wtw';
//     yield 28 + 4;
//     yield true;
//     yield '1993-06-30';
//     return {sports: ['Black Myth WuKong', 'Elden Ring']}
// }
// const iterator = information();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// function* generator_fn() {
//     const first = yield 4 + 5;
//     console.log('first:', first);
//     const second = yield first + 7;
//     console.log('second:', second);
//     return second;
// }
// const task = generator_fn();
// const yield_first = task.next();
// console.log(yield_first);
// const yield_second = task.next(yield_first.value);
// console.log(yield_second);
// const yield_third = task.next(yield_second.value);
// console.log(yield_third);
// 委托生成器,注意对于数组、函数的委托生成,会对其中的每一个可迭代元素实行分别迭代
// function* information() {
//     yield 'black@myth@wtw';
//     yield 28 + 4;
//     yield true;
//     yield '1993-06-30';
//     return {sports: ['Black Myth WuKong', 'Elden Ring']}
// }
// function* person() {
//     const hobby = yield* information();
//     console.log(hobby);
//     // yield hobby;
//     return hobby;
// }
// const iterator = person();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-04-27',
//     introduce(name, age, gender) {
//         return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// 异步任务回调函数生成器,注意异步执行时的事件循环执行机制
// const fs = require('fs');
// const path = require('path');
// const question_start = path.resolve(__dirname, './questions/1.txt'),
//     question_end = path.resolve(__dirname, './questions/2.txt');
// function run(generator, callback) {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (!done) {
//             if (typeof value === 'function') {
//                 value(function (error, data) {
//                     result = error ? task.throw(error instanceof Error ? error : new Error(error)) : task.next(data);
//                     step();
//                 });
//             } else {
//                 result = task.next(value);
//                 step();
//             }
//         } else {
//             if (typeof value !== 'undefined') callback(null, value);
//         }
//     })();
// }
// function readFile(...args) {
//     return function (callback) {
//         fs.readFile(...args, callback);
//     }
// }
// run(function* () {
//     const start_file = yield readFile(question_start, 'utf-8');
//     console.log('start_file:', start_file);
//     const start_end = yield readFile(question_end, 'utf-8');
//     console.log('end file:', start_end);
//     return start_end;
// }, function (error, result) {
//     if (error) return console.error(error.message);
//     console.log('result:', result);
// });
// 异步任务状态机生成器,注意异步执行时的事件循环执行机制
// const fs = require('fs');
// const path = require('path');
// const question_start = path.resolve(__dirname, './questions/1.txt'),
//     question_end = path.resolve(__dirname, './questions/2.txt');
// function run(generator, callback) {
//     return new Promise((resolve, reject) => {
//         const task = generator();
//         let result = task.next();
//         (function step() {
//             const {value, done} = result;
//             if (!done) {
//                 if (typeof value === 'function') {
//                     value(function (error, data) {
//                         result = error ? reject(task.throw(error instanceof Error ? error : new Error(error))) : task.next(data);
//                         step();
//                     });
//                 } else {
//                     Promise.resolve(value).then(val => {
//                         result = task.next(val);
//                         step();
//                     }, reason => {
//                         reject(reason instanceof Error ? reason : new Error(reason));
//                     });
//                 }
//             } else {
//                 if (typeof value !== 'undefined') resolve(value);
//             }
//         })();
//     });
// }
// function readFile(...args) {
//     return function (callback) {
//         fs.readFile(...args, callback);
//     }
// }
// run(function* () {
//     const start_file = yield readFile(question_start, 'utf-8');
//     console.log('start_file:', start_file);
//     const start_end = yield readFile(question_end, 'utf-8');
//     console.log('end file:', start_end);
//     return start_end;
// }).then(result => {
//     console.log('promise result:', result);
// }).catch(error => {
//     console.error('promise error:', error.message);
// });
