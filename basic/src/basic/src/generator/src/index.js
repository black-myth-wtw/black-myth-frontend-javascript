// javascript generator 生成器
// 基本用法
// function* black_myth_wtw_generator() {
//     yield 'black_myth_wtw';
//     yield 30;
//     yield true;
//     yield '1993-06-30';
//     yield {sports: ['basketball', 'computer games']};
// }
// const iterator = black_myth_wtw_generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 生成器的函数表达式
// const arr = ['black$myth$wtw', 23, true, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']}];
// const black_myth_wtw_generator = function* (arr) {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     for (const value of arr.values()) {
//         yield value;
//     }
// };
// const iterator = black_myth_wtw_generator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 生成器的对象方法
// const black_myth_wtw = {
//     name: 'black$myth$wtw',
//     age: 23,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     * [Symbol.iterator]() {
//         for (const value of Object.values(this)) {
//             yield value;
//         }
//     }
// };
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// for (const value of black_myth_wtw) {
//     console.log(`object:values-value:${value}`);
// }
// 向迭代器内传递数据/参数
// function* generator() {
//     const first_value = yield 5 + 6;
//     console.log(first_value);
//     const second_value = yield first_value + 16;
//     console.log(second_value);
// }
// // const iterator = generator();
// // let result = iterator.next();
// // console.log(result);
// // result = iterator.next(20);
// // console.log(result);
// // result = iterator.next(66);
// // console.log(result);
// const iterator = generator();
// let result= {};
// while (result && !result.done) {
//     result = iterator.next(result.value);
//     console.log(result);
// }
// 在生成器中抛出错误,注意抛出错误后,在没有 try-catch 的情况下,会立即停止运行,不再继续迭代
// function* generator() {
//     const first_value = yield 5 + 6;
//     console.log(first_value);
//     const second_value = yield first_value + 16;
//     console.log(second_value);
// }
// const iterator = generator();
// let result = iterator.next();
// console.log(result);
// result = iterator.next(20);
// console.log(result);
// iterator.throw(new TypeError('generator iterator throw type error~~~~~~'));
// result = iterator.next(66);
// console.log(result);
// function* generator() {
//     const first_value = yield 5 + 6;
//     console.log(first_value);
//     let second_value;
//     try {
//         second_value = yield first_value + 16;
//     } catch (error) {
//         second_value = 88;
//     }
//     console.log(second_value);
//     const third_value = yield second_value + 20;
//     console.log(third_value);
// }
// const iterator = generator();
// let result = iterator.next();
// console.log(result);
// result = iterator.next(20);
// console.log(result);
// result = iterator.throw(new TypeError('generator iterator throw type error~~~~~~'));
// console.log(result);
// result = iterator.next(66);
// console.log(result);
// 生成器内的返回语句
// function* generator() {
//     const first_value = yield 5 + 6;
//     console.log(first_value);
//     const second_value = yield first_value + 16;
//     console.log(second_value);
//     return second_value;
// }
// const iterator = generator();
// let result = {};
// while (result && !result.done) {
//     result = iterator.next(result.value);
//     console.log(result);
// }
// function* black_myth_wtw() {
//     const hobby = yield* information();
//     console.log(hobby);
//     yield hobby;
// }
// function* information() {
//     yield 'black_myth_wtw';
//     yield 24;
//     yield true;
//     yield '1994-03-10';
//     return {sports: ['basketball', 'computer games']}
// }
// const iterator = black_myth_wtw();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 委托生成器,注意对于数组和函数的委托生成,会对其中的每一个可迭代元素实行分别迭代
// const black_myth_wtw = {
//     name: 'black$myth$wtw',
//     age: 23,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// // const iterator = black_myth_wtw[Symbol.iterator]();
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// for (const value of black_myth_wtw) {
//     console.log(`object:values-value:${value}`);
// }
// 异步任务生成器,注意异步执行时的事件循环执行机制
// 异步任务回调函数生成器
// const fs = require('fs');
// const path = require('path');
// const read_file = (...args) => callback => fs.readFile(...args, callback);
// function run(generator, callback) {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (!done) {
//             if (typeof value === 'function') {
//                 value(function (error, data) {
//                     if (error) return task.throw(error instanceof Error ? error : new Error(error));
//                     result = task.next(data);
//                     step();
//                 });
//             } else {
//                 result = task.next(value);
//                 step();
//             }
//         } else {
//             callback(null, value);
//         }
//     })();
// }
// run(function* () {
//     const first_value = yield read_file(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_value:', first_value);
//     const second_value = yield read_file(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_value:', second_value);
//     return second_value;
// }, function (error, result) {
//     if (error) return console.error(error);
//     console.log('result_value:', result);
// });
// 异步任务状态机生成器
// const fs = require('fs');
// const path = require('path');
// const read_file = (...args) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(...args, function (error, data) {
//             error ? reject(error) : resolve(data);
//         });
//     });
// };
// function run(generator) {
//     return new Promise((resolve, reject) => {
//         const task = generator();
//         let result = task.next();
//         (function step() {
//             const {value, done} = result;
//             if (done) return resolve(value);
//             const promise = Promise.resolve(value);
//             promise.then(data => {
//                 result = task.next(data);
//                 step();
//             }, error => {
//                 reject(task.throw(error instanceof Error ? error : new Error(error)));
//             });
//         })();
//     });
// }
// run(function* () {
//     const first_value = yield read_file(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_value:', first_value);
//     const second_value = yield read_file(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_value:', second_value);
//     return second_value;
// }).then(val => console.log('result_value:', val)).catch(error => console.error(error));
