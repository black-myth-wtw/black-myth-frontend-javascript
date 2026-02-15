// 基本用法✅
// function* black_myth_wtw() {
//     yield 'black@myth@wtw';
//     yield 27;
//     yield true;
//     yield '1993-04-27';
//     yield {
//         sports: ['basketball', 'computer games']
//     };
//     yield 'WangJinJin';
// }
// const iterator = black_myth_wtw();
// console.log('generator_basic:', iterator.next());
// console.log('generator_basic:', iterator.next());
// console.log('generator_basic:', iterator.next());
// console.log('generator_basic:', iterator.next());
// console.log('generator_basic:', iterator.next());
// console.log('generator_basic:', iterator.next());
// console.log('generator_basic:', iterator.next());
// 生成器的函数表达式✅
// const black_myth_wtw = ['black&myth&wtw', 25, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']}, 'ZhengShuAng'];
// const generator = function* () {
//     for (const item of black_myth_wtw) {
//         yield item;
//     }
// };
// const iterator = generator();
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// const black_myth_wtw = ['black&myth&wtw', 25, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']}, 'ZhengShuAng'];
// const generator = function* () {
//     for (let i = 0; i < black_myth_wtw.length; i++) {
//         yield black_myth_wtw[i];
//     }
// };
// const iterator = generator();
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// console.log('generator_function:', iterator.next());
// 生成器的对象方法✅
// const black_myth_wtw = {
//     name: 'black!myth!wtw',
//     age: 28,
//     gender: false,
//     birthday: '1993-06-30',
//     hobby: { sports: ['skiing', 'running'] },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         for (const value of Object.values(this)) {
//             yield value;
//         }
//     }
// };
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// const black_myth_wtw = {
//     name: 'black!myth!wtw',
//     age: 28,
//     gender: false,
//     birthday: '1993-06-30',
//     hobby: { sports: ['skiing', 'running'] },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         const values = Object.values(this);
//         for (let i = 0; i < values.length; i++) {
//             yield values[i];
//         }
//     }
// };
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// console.log('generator_object_function:', iterator.next());
// const black_myth_wtw = {
//     name: 'black!myth!wtw',
//     age: 28,
//     gender: false,
//     birthday: '1993-06-30',
//     hobby: {sports: ['skiing', 'running']},
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         for (const value of Object.values(this)) {
//             yield value;
//         }
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log('generator_object_value:', value);
// }
// 给生成器传递参数✅
// function* generator_params() {
//     const first_value = yield 22;
//     console.log('first_value:', first_value);
//     const second_value = yield first_value + 36;
//     console.log('second_value:', second_value);
// }
// const iterator = generator_params();
// console.log('generator_params:', iterator.next());
// console.log('generator_params:', iterator.next(24));
// console.log('generator_params:', iterator.next(88));
// console.log('generator_params:', iterator.next());
// function* generator_params() {
//     const first_value = yield 22;
//     console.log('first_value:', first_value);
//     const second_value = yield first_value + 36;
//     console.log('second_value:', second_value);
// }
// const iterator = generator_params();
// let result = iterator.next();
// console.log('generator_params:', result);
// while (!result.done) {
//     result = iterator.next(result.value);
//     if (!result.done) {
//         console.log('generator_params:', result);
//     }
// }
// 在生成器内抛出错误,注意抛出错误后,无 try/catch 的情况下,会立即停止运行,不再继续迭代✅
// function* generator_throw() {
//     const first_value = yield 22;
//     console.log('first_value:', first_value);
//     const second_value = yield first_value + 36;
//     console.log('second_value:', second_value);
// }
// const iterator = generator_throw();
// console.log('generator_throw_error:', iterator.next());
// console.log('generator_throw_error:', iterator.next(24));
// console.log('generator_throw_error:', iterator.throw(88));
// function* generator_throw() {
//     const first_value = yield 22;
//     console.log('first_value:', first_value);
//     let second_value;
//     try {
//         second_value = yield first_value + 36;
//     } catch (error) {
//         second_value = 99;
//     }
//     console.log('second_value:', second_value);
// }
// const iterator = generator_throw();
// console.log('generator_throw_error:', iterator.next());
// console.log('generator_throw_error:', iterator.next(24));
// console.log('generator_throw_error:', iterator.throw(88));
// console.log('generator_throw_error:', iterator.next());
// function* generator_throw() {
//     const first_value = yield 22;
//     console.log('first_value:', first_value);
//     let second_value;
//     try {
//         second_value = yield first_value + 36;
//     } catch (error) {
//         second_value = 99;
//     }
//     console.log('second_value:', second_value);
// }
// const iterator = generator_throw();
// let result = iterator.next();
// console.log('generator_throw_error:', result);
// while (!result.done) {
//     result = iterator.next(result.value);
//     if (!result.done) {
//         console.log('generator_throw_error:', result);
//     }
// }
// 生成器内的返回值✅
// function* generator_return() {
//     const first_value = yield 22;
//     console.log('first_value:', first_value);
//     const second_value = yield first_value + 36;
//     console.log('second_value:', second_value);
//     return second_value;
// }
// const iterator = generator_return();
// let result = iterator.next();
// console.log('iterator_return:', result);
// while (!result.done) {
//     result = iterator.next(result.value);
//     console.log('generator_return:', result);
// }
// 委托生成器,注意对于数组和函数的委托生成,会对其中的每一个可迭代元素实行分别迭代✅
// function* hobby() {
//     yield {
//         computer_games: ['Black_Myth_WuKong', 'Elden Ring']
//     };
//     return {
//         computer_games: ['Black_Myth_WuKong', 'Elden Ring']
//     };
// }
// function* generator_commission() {
//     yield 'black^myth^wtw';
//     yield 24;
//     yield false;
//     yield '1994-03-10';
//     yield {sports: ['football', 'soccer']};
//     yield 'ZhaoYue';
//     const hobby_commission = yield* hobby();
//     console.log('hobby:', hobby_commission);
//     return hobby_commission;
// }
// const iterator = generator_commission();
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// const black_myth_wtw = {
//     name: 'black!myth!wtw',
//     age: 28,
//     gender: false,
//     birthday: '1993-06-30',
//     hobby: {sports: ['skiing', 'running']},
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// console.log('generator_commission:', iterator.next());
// const black_myth_wtw = {
//     name: 'black!myth!wtw',
//     age: 28,
//     gender: false,
//     birthday: '1993-06-30',
//     hobby: {sports: ['skiing', 'running']},
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// for(const value of black_myth_wtw) {
//     console.log('generator_commission:', value);
// }
// 异步任务生成器,注意异步执行时的 Event Loop 事件循环执行机制✅
// const fs = require('fs');
// const path = require('path');
// function generator_callback(...args) {
//     return function (callback) {
//         fs.readFile(...args, callback);
//     }
// }
// function run(generator) {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (done) return true;
//         if (typeof value === 'function') {
//             value(function (error, data) {
//                 if (error) return task.throw(error instanceof Error ? error : new Error(error));
//                 result = task.next(data);
//                 step();
//             });
//         } else {
//             result = task.next(value);
//             step();
//         }
//     })();
// }
// run(function* () {
//     let first_result = yield generator_callback(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_result:', first_result);
//     let second_result = yield generator_callback(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_result:', second_result);
// });
// const fs = require('fs');
// const path = require('path');
// function generator_callback(...args) {
//     return function (callback) {
//         fs.readFile(...args, callback);
//     }
// }
// function run(generator, callback) {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (done) return callback(null, value);
//         if (typeof value === 'function') {
//             value(function (error, data) {
//                 if (error) return task.throw(error instanceof Error ? error : new Error(error));
//                 result = task.next(data);
//                 step();
//             });
//         } else {
//             result = task.next(value);
//             step();
//         }
//     })();
// }
// run(function* () {
//     let first_result = yield generator_callback(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_result:', first_result);
//     let second_result = yield generator_callback(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_result:', second_result);
//     // return second_result;
//     return `${first_result}
// ${second_result}`;
// }, (error, result) => {
//     if (error) return console.error(error.message);
//     console.log('final_result:', result);
// });
