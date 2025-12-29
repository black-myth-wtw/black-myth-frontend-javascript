// think of outline
// 1. let const 与 var 常变量声明✅
// 2. string 字符串✅
// 3. function 函数✅
// 4. object 对象✅
// 5. destructure 解构赋值✅
// 6. symbol 未命名标识位✅
// 7. set 集合✅
//    去重
// const unique = arr => {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     return [...new Set(arr)];
// }
// let arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// console.log(arr.length);
// arr = unique(arr);
// console.log(arr, arr.length);
// 8. map 字典✅
//    ES5 私有对象存储私有数据
// const Person = (function () {
//     const personal = {};
//     let personal_id = 0;
//
//     function Person(name) {
//         Object.defineProperty(this, '_id', {
//             value: personal_id++,
//             enumerable: false,
//             configurable: false,
//             writable: false,
//         });
//         personal[this._id] = name;
//     }
//
//     Person.prototype.get_name = function () {
//         return personal[this._id];
//     };
//
//     return Person;
// })();
// const black_myth_wtw = new Person('black_myth_wtw'),
//     simon = new Person('simon'),
//     frank = new Person('frank'),
//     lily = new Person('lily'),
//     tom = new Person('tom'),
//     gary = new Person('gary');
// console.log(black_myth_wtw.get_name());
// console.log(simon.get_name());
// console.log(frank.get_name());
// console.log(lily.get_name());
// console.log(tom.get_name());
// console.log(gary.get_name());
//    ES6 WeakMap 存储私有数据
// const Person = (function () {
//     const personal_weak_map = new WeakMap();
//
//     class Person {
//         constructor(name) {
//             personal_weak_map.set(this, name);
//         }
//
//         get_name() {
//             return personal_weak_map.get(this);
//         }
//     }
//
//     return Person;
// })();
// const black_myth_wtw = new Person('black_myth_wtw'),
//     simon = new Person('simon'),
//     frank = new Person('frank'),
//     lily = new Person('lily'),
//     tom = new Person('tom'),
//     gary = new Person('gary');
// console.log(black_myth_wtw.get_name());
// console.log(simon.get_name());
// console.log(frank.get_name());
// console.log(lily.get_name());
// console.log(tom.get_name());
// console.log(gary.get_name());
// 9. iterator 迭代器✅
//    创建可迭代对象,实际上就是对于普通对象模拟迭代器,*[Symbol.iterator]() {yield *Object.values(this)},注意这里使用委托生成器
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     [Symbol.iterator]() {
//         let count = 0;
//         const values = Object.values(this),
//             {length: values_length} = values;
//         return {
//             next() {
//                 const is_done = count > values_length - 1;
//                 return {
//                     done: is_done,
//                     value: is_done ? undefined : values[count++]
//                 };
//             }
//         }
//     }
// };
// for (const black_myth_wtw_val of black_myth_wtw) {
//     console.log(`for...of-value:${black_myth_wtw_val}`);
// }
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 10. generator 生成器✅
//     异步任务生成器: 注意异步执行时的 Event Loop 事件循环执行机制
//     异步任务回调函数生成器
// const fs = require('fs');
// const path = require('path');
// const thunk = (...args) => callback => fs.readFile(...args, callback);
// const run = (generator, callback) => {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (done) return callback(null, value);
//         if (typeof value === 'function') {
//             value((error, data) => {
//                 if (error) return task.throw(error instanceof Error ? error : new Error(error));
//                 result = task.next(data);
//                 step();
//             });
//         } else {
//             result = task.next(value);
//             step();
//         }
//     })();
// };
// run(function* () {
//     const first_file = yield thunk(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file:', first_file);
//     const second_file = yield thunk(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file:', second_file);
//     return second_file;
// }, (error, result) => {
//     if (error) return console.error(error);
//     console.log('callback result:', result);
// });
//     异步任务状态机生成器
// const fs = require('fs');
// const path = require('path');
// const promise = (...args) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(...args, (error, data) => {
//             if (error) return reject(error);
//             resolve(data);
//         })
//     });
// };
// const run = generator => {
//     return new Promise((resolve, reject) => {
//         const task = generator();
//         let result = task.next();
//         (function step() {
//             const {value, done} = result;
//             if (done) return resolve(value);
//             Promise.resolve(value).then(val => {
//                 result = task.next(val);
//                 step();
//             }, reason => {
//                 result = task.throw(reason instanceof Error ? reason : new Error(reason));
//                 step();
//             });
//         })();
//     });
// };
// run(function* () {
//     const first_file = yield promise(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file:', first_file);
//     const second_file = yield promise(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file:', second_file);
//     return second_file;
// }).then(result => console.log('promise result:', result)).catch(reason => console.error(reason));
// 11. class 类✅
//     内置对象继承
// function Array_Mine(...args) {
//     Array.apply(null, args);
// }
// Object.defineProperties(Array_Mine.prototype, Array.prototype);
// const arr_mine = new Array_Mine(5);
// arr_mine[0] = 'black_myth_wtw';
// arr_mine[1] = 28;
// arr_mine[2] = true;
// arr_mine[3] = '1993-06-30';
// arr_mine[4] = {
//     sports: ['basketball', 'computer games']
// };
// console.log(arr_mine, arr_mine.length);
// arr_mine.length = 3;
// console.log(arr_mine, arr_mine.length);
// class Array_Mine extends Array {}
// const arr_mine = new Array_Mine(5);
// arr_mine[0] = 'black_myth_wtw';
// arr_mine[1] = 28;
// arr_mine[2] = true;
// arr_mine[3] = '1993-06-30';
// arr_mine[4] = {
//     sports: ['basketball', 'computer games']
// };
// console.log(arr_mine, arr_mine.length);
// arr_mine.length = 3;
// console.log(arr_mine, arr_mine.length);
//     Symbol.species 作为静态访问器属性,用于重新自定义创建派生类对象,确定值类型
// class Array_Mine extends Array {}
// const arr_mine = new Array_Mine(5);
// arr_mine[0] = 'black_myth_wtw';
// arr_mine[1] = 28;
// arr_mine[2] = true;
// arr_mine[3] = '1993-06-30';
// arr_mine[4] = {
//     sports: ['basketball', 'computer games']
// };
// const arr_mine_slice = arr_mine.slice(1);
// console.log(arr_mine_slice);
// console.log(arr_mine_slice instanceof Array_Mine);
// console.log(arr_mine_slice instanceof Array);
// class Array_Mine extends Array {
//     static get [Symbol.species]() {
//         return Array;
//     }
// }
// const arr_mine = new Array_Mine(5);
// arr_mine[0] = 'black_myth_wtw';
// arr_mine[1] = 28;
// arr_mine[2] = true;
// arr_mine[3] = '1993-06-30';
// arr_mine[4] = {
//     sports: ['basketball', 'computer games']
// };
// const arr_mine_slice = arr_mine.slice(1);
// console.log(arr_mine_slice);
// console.log(arr_mine_slice instanceof Array_Mine);
// console.log(arr_mine_slice instanceof Array);
// class RectAngle {
//     static get [Symbol.species]() {
//         return this;
//     }
//
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
//
//     clone() {
//         return new RectAngle[Symbol.species](this.width, this.height);
//     }
// }
//
// class Square extends RectAngle {
//     static get [Symbol.species]() {
//         // return this;
//         return RectAngle;
//     }
//
//     area() {
//         return Math.PI * super.area();
//     }
//
//     clone() {
//         return new Square[Symbol.species](this.width, this.height);
//     }
// }
//
// const square = new Square(20, 30),
//     square_clone = square.clone();
// console.log(square.area(), square_clone.area());
// console.log(square instanceof Square);
// console.log(square instanceof RectAngle);
// console.log(square_clone instanceof Square);
// console.log(square_clone instanceof RectAngle);
// 12. typed array 改进的数组✅
//     通过自定义的数组缓冲区来创建视图
// const array_buffer = new ArrayBuffer(9),
//     data_view = new DataView(array_buffer);
// console.log(data_view, data_view.byteLength, data_view.byteOffset);
// data_view.setInt8(0, 1);
// data_view.setInt8(1, 2);
// data_view.setInt8(2, 3);
// data_view.setInt8(3, 4);
// data_view.setInt8(4, 5);
// data_view.setInt8(5, 6);
// data_view.setInt8(6, 7);
// data_view.setInt8(7, 8);
// data_view.setInt8(8, 256);
// console.log(data_view.getInt8(0));
// console.log(data_view.getInt8(1));
// console.log(data_view.getInt8(2));
// console.log(data_view.getInt8(3));
// console.log(data_view.getInt8(4));
// console.log(data_view.getInt8(5));
// console.log(data_view.getInt8(6));
// console.log(data_view.getInt8(7));
// console.log(data_view.getInt8(8));
// // console.log(data_view.getInt8(9));
// console.log(data_view.getInt16(0));
// console.log(data_view.getInt16(1));
// console.log(data_view.getInt16(2));
// console.log(data_view.getInt16(3));
// console.log(data_view.getInt16(4));
// console.log(data_view.getInt16(5));
// console.log(data_view.getInt16(6));
// console.log(data_view.getInt16(7));
// // console.log(data_view.getInt16(8));
// console.log(data_view.getInt32(0));
// console.log(data_view.getInt32(1));
// console.log(data_view.getInt32(2));
// console.log(data_view.getInt32(3));
// console.log(data_view.getInt32(4));
// console.log(data_view.getInt32(5));
// console.log(data_view.getInt32(6));
// 13. promise 异步状态机✅
// 14. proxy 代理陷阱✅
//     拥有数组特性的类
// const u_int_32_numeric = numeric_index => Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
// const is_numeric_index = numeric_index => {
//     const u_int_32_numeric_index = u_int_32_numeric(numeric_index);
//     return String(u_int_32_numeric_index) === numeric_index && u_int_32_numeric_index < Math.pow(2, 32) - 1;
// };
// const arr_mine = {length: 0};
// const proxy_arr_mine = new Proxy(arr_mine, {
//     set(target, key, value, receiver) {
//         const current_length = Reflect.get(target, 'length');
//         if (is_numeric_index(key)) {
//             if (key >= current_length) Reflect.set(target, 'length', Number(key) + 1, receiver);
//         } else {
//             for (let i = current_length - 1; i >= value; i--) {
//                 Reflect.deleteProperty(target, i);
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// proxy_arr_mine[0] = 'red';
// proxy_arr_mine[1] = 'green';
// proxy_arr_mine[2] = 'blue';
// proxy_arr_mine[3] = 'yellow';
// proxy_arr_mine[4] = 'purple';
// proxy_arr_mine[5] = 'pink';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine[10] = 'brown';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine.length = 5;
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// console.log(proxy_arr_mine[0], proxy_arr_mine[1], proxy_arr_mine[2], proxy_arr_mine[3], proxy_arr_mine[4], proxy_arr_mine[5], proxy_arr_mine[10]);
// function Array_Mine(length = 0) {
//     this.length = length;
//     return new Proxy(this, {
//         set(target, key, value, receiver) {
//             const current_length = Reflect.get(target, 'length');
//             if (target.is_numeric_index(key)) {
//                 if (key >= current_length) Reflect.set(target, 'length', Number(key) + 1, receiver);
//             } else {
//                 for (let i = current_length - 1; i >= value; i--) {
//                     Reflect.deleteProperty(target, i);
//                 }
//             }
//             return Reflect.set(target, key, value, receiver);
//         }
//     });
// }
// Array_Mine.prototype.is_numeric_index = function (numeric_index) {
//     const u_int_32_numeric_index = Array_Mine.u_int_32_numeric(numeric_index);
//     return (String(u_int_32_numeric_index) === numeric_index) && u_int_32_numeric_index < Math.pow(2, 32) - 1;
// };
// Array_Mine.u_int_32_numeric = function (numeric_index) {
//     return Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
// };
// const proxy_arr_mine = new Array_Mine(6);
// proxy_arr_mine[0] = 'red';
// proxy_arr_mine[1] = 'green';
// proxy_arr_mine[2] = 'blue';
// proxy_arr_mine[3] = 'yellow';
// proxy_arr_mine[4] = 'purple';
// proxy_arr_mine[5] = 'pink';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine[10] = 'brown';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine.length = 5;
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// console.log(proxy_arr_mine[0], proxy_arr_mine[1], proxy_arr_mine[2], proxy_arr_mine[3], proxy_arr_mine[4], proxy_arr_mine[5], proxy_arr_mine[10]);
// class Array_Mine {
//     constructor(length) {
//         this.length = length;
//         return new Proxy(this, {
//             set(target, key, value, receiver) {
//                 const current_length = Reflect.get(target, 'length');
//                 if (target.is_numeric_index(key)) {
//                     if (key >= current_length) {
//                         Reflect.set(target, 'length', Number(key) + 1, receiver);
//                     }
//                 } else {
//                     for (let i = current_length - 1; i >= value; i--) {
//                         Reflect.deleteProperty(target, i);
//                     }
//                 }
//                 return Reflect.set(target, key, value, receiver);
//             }
//         });
//     }
//
//     is_numeric_index(numeric_index) {
//         const u_int_32_numeric_index = Array_Mine.u_int_32_numeric(numeric_index);
//         return String(u_int_32_numeric_index) === numeric_index && u_int_32_numeric_index < Math.pow(2, 32) - 1;
//     }
//
//     static u_int_32_numeric(numeric_index) {
//         return Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
//     }
// }
//
// const proxy_arr_mine = new Array_Mine(7);
// proxy_arr_mine[0] = 'red';
// proxy_arr_mine[1] = 'green';
// proxy_arr_mine[2] = 'blue';
// proxy_arr_mine[3] = 'yellow';
// proxy_arr_mine[4] = 'purple';
// proxy_arr_mine[5] = 'pink';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine[10] = 'brown';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine.length = 5;
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// console.log(proxy_arr_mine[0], proxy_arr_mine[1], proxy_arr_mine[2], proxy_arr_mine[3], proxy_arr_mine[4], proxy_arr_mine[5], proxy_arr_mine[10]);
//     将代理陷阱作为原型
//     在原型中的 set 代理陷阱
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
// };
// const proxy = Object.create(new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('当前对象新添加的属性值必须为数组类型~~~~~~');
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// }));
// proxy.age = 32;
// proxy.gender = true;
// // proxy.birthday = '1993-06-30';
// // proxy.hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// console.log(proxy, proxy.name, proxy.age, proxy.gender, proxy.birthday, proxy.hobby);
//     在原型中的 get 代理陷阱
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
// };
// const proxy = Object.create(new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 此属性~~~~~~`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// console.log(proxy, proxy.name, proxy.age, proxy.gender);
// console.log(proxy.birthday, proxy.hobby);
//     在原型中的 has 代理陷阱
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     hobby: {sports: ['Black Myth WuKong', 'Elden Ring']}
// };
// const proxy = Object.create(new Proxy(black_myth_wtw, {
//     has(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.has(target, key);
//     }
// }));
// proxy.gender = false;
// proxy.birthday = '1993-04-27';
// // proxy.hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// for (const key in proxy) {
//     console.log(`for...in-key:${key}`);
// }
// console.log('name' in proxy);
// console.log('age' in proxy);
// console.log('gender' in proxy);
// console.log('birthday' in proxy);
// console.log('hobby' in proxy);
//     将代理陷阱作为类原型
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         // if(key in target) {
//         // if (target.hasOwnProperty(key)) {
//         if (key in Reflect.ownKeys(target)) {
//             throw new TypeError(`当前对象不存在 ${key.toString()} 此属性~~~~~~`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// class Square extends RectAngle {
// }
// const square = new Square(20, 30);
// console.log(square);
// console.log(Math.PI * square.width * square.height);
// function RectAngle(width, height) {
// }
// RectAngle.prototype = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         // if(key in target) {
//         // if (target.hasOwnProperty(key)) {
//         if (key in Reflect.ownKeys(target)) {
//             throw new TypeError(`当前对象不存在 ${key.toString()} 此属性~~~~~~`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const square = new Square(30, 30);
// console.log(square);
// console.log(Math.PI * square.width * square.height);
// function RectAngle(width, height) {
// }
// const proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         // if(key in target) {
//         // if (target.hasOwnProperty(key)) {
//         if (key in Reflect.ownKeys(target)) {
//             throw new TypeError(`当前对象不存在 ${key.toString()} 此属性~~~~~~`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const square = new Square(40, 30);
// console.log(square);
// console.log(Math.PI * square.width * square.height);
// function RectAngle(width, height) {
// }
// const proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         // if(key in target) {
//         // if (target.hasOwnProperty(key)) {
//         if (key in Reflect.ownKeys(target)) {
//             throw new TypeError(`当前对象不存在 ${key.toString()} 此属性~~~~~~`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return Math.PI * this.width * this.height;
//     }
// }
// const square = new Square(50, 60);
// console.log(square);
// console.log(Math.PI * square.width * square.height);
// 15. esm 导入导出模块✅
// 16. 数字✅
// 17. async/await✅
// 18. Environment Record✅
// 19. Environment Record this 绑定✅
// 20. 类型判断✅
