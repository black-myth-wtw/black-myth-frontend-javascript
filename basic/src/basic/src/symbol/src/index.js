// javascript symbol 未命名标识位
// 基本用法,其是直接绑定至内置对象 [[Description]] 内的
// const uid = Symbol('uid'),
//     uid_ano = Symbol('uid');
// console.log(uid, uid_ano, uid === uid_ano);
// console.log(Object.is(uid, uid_ano));
// console.log(typeof uid, typeof uid_ano);
// const black_myth_wtw = {
//     [uid]: '370683199306300013'
// };
// console.log(black_myth_wtw[uid], black_myth_wtw[uid_ano]);
// 共享体系,Symbol.for/Symbol.keyFor
// const uid = Symbol.for('uid'),
//     uid_ano = Symbol.for('uid');
// console.log(uid, uid_ano, uid === uid_ano);
// console.log(Object.is(uid, uid_ano));
// console.log(typeof uid, typeof uid_ano);
// const black_myth_wtw = {
//     [uid]: '370683199306300013'
// };
// console.log(black_myth_wtw[uid], black_myth_wtw[uid_ano]);
// console.log(Symbol.keyFor(uid), Symbol.keyFor(uid_ano));
// 属性遍历,Object.getOwnPropertySymbols/Reflect.ownKeys
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old`;
// };
// function Black_Myth_WTW(name, age, gender, birthday, hobby) {
//     Person.call(this, name, age);
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Object.setPrototypeOf(Black_Myth_WTW.prototype, Person.prototype);
// const symbol = Symbol.for('iterator');
// const black_myth_wtw = new Black_Myth_WTW('black_myth_wtw', 32, true, '1993-06-30', {sports: ['Black_Myth_WuKong', 'Elden Ring']});
// black_myth_wtw[symbol] = 'symbol-iterator';
// for (const key in black_myth_wtw) {
//     console.log(`for...in: key-${key} -> value-${black_myth_wtw[key]}`);
// }
// for (const key of Object.keys(black_myth_wtw)) {
//     console.log(`Object.keys: key-${key} -> value-${black_myth_wtw[key]}`);
// }
// for (const [key, value] of Object.entries(black_myth_wtw)) {
//     console.log(`Object.entries: key-${key} ======> value-${value}`);
// }
// for (const key of Object.getOwnPropertyNames(black_myth_wtw)) {
//     console.log(`Object.getOwnPropertyNames: key-${key} -> value-${black_myth_wtw[key]}`);
// }
// for (const key of Object.getOwnPropertySymbols(black_myth_wtw)) {
//     console.log(`Object.getOwnPropertySymbols: key-${String(key)} -> value-${black_myth_wtw[key]}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw)) {
//     console.log(`Reflect.ownKeys: key-${String(key)} -> value-${black_myth_wtw[key]}`);
// }
// 强制类型转换
// const symbol = Symbol.for('transformer');
// console.log(symbol);
// console.log(String(symbol));
// console.log(symbol.toString());
// console.log(symbol.valueOf());
// // TypeError
// // console.log(Number(symbol));
// // TypeError
// // console.log(symbol / 2);
// console.log(Boolean(symbol));
// // TypeError
// // console.log(symbol + '%');
// Well-Known Symbols
// Symbol.hasInstance: 作为方法,用于重新定义 instanceof,判断构造对象是否在其原型链上
// const arr = ['black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// Object.defineProperty(Array, Symbol.hasInstance, {
//     value() {
//         return false;
//     }
// });
// const arr = ['black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// Symbol.isConcatSpreadable: 作为属性,用于重新定义类数组对象,判断其是否可被合并
// const black_myth_wtw = ['black_myth_wtw', 32];
// const information = [true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(black_myth_wtw.concat(information));
// // const information_o = {
// //     0: false,
// //     1: '1994-03-10',
// //     2: {sports: ['Black Myth WuKong', 'Elden Ring']},
// //     length: 3
// // };
// // console.log(black_myth_wtw.concat(information_o));
// const information_o = {
//     0: false,
//     1: '1994-03-10',
//     2: {sports: ['Black Myth WuKong', 'Elden Ring']},
//     length: 3,
//     [Symbol.isConcatSpreadable]: true,
// };
// console.log(black_myth_wtw.concat(information_o));
// Symbol.search/Symbol.match/Symbol.split/Symbol.replace: 作为方法,用于重新定义字符串的查找、匹配、替换以及分割的方法
// const symbol_collapse = {
//     [Symbol.search](value) {
//         return value.length > 11 ? value.length : 0;
//     },
//     [Symbol.match](value) {
//         return value.length > 11 ? [value] : null;
//     },
//     [Symbol.replace](source_value, target_value) {
//         return source_value.length > 11 ? target_value : source_value;
//     },
//     [Symbol.split](value) {
//         return value.length > 11 ? [value] : [];
//     }
// };
// const source_value = 'hello_world~',
//     target_value = 'hello_world';
// console.log(source_value.search(symbol_collapse));
// console.log(target_value.search(symbol_collapse));
// console.log(source_value.match(symbol_collapse));
// console.log(target_value.match(symbol_collapse));
// console.log(source_value.split(symbol_collapse));
// console.log(target_value.split(symbol_collapse));
// console.log(source_value.replace(symbol_collapse, target_value));
// console.log(target_value.replace(symbol_collapse, source_value));
// Symbol.toPrimitive: 作为方法,用于重新定义对象的强制类型转换(包含字符串模式、数字模式以及默认模式)
// 字符串模式: 会优先调用 toString 方法,如果是原始值,则返回,否则调用 valueOf 方法,如果是原始值,则返回,否则没有任何内容抛出,则直接抛出错误
// 数字模式: 会优先调用 valueOf 方法,如果是原始值,则返回,否则调用 toString 方法,如果是原始值,则返回,否则没有任何内容抛出,则直接抛出错误
// function Temperature(temperature) {
//     this.temperature = temperature;
// }
// const temperature = new Temperature(32);
// temperature[Symbol.toPrimitive] = function (hint) {
//     switch (hint) {
//         case 'default':
//             return `摄氏度: ${this.temperature}度`;
//         case 'number':
//             return this.temperature / 2;
//         case 'string':
//             return `温度: ${this.temperature}℃`;
//     }
// }
// console.log(String(temperature));
// // console.log(temperature.valueOf());
// // console.log(temperature.toString());
// console.log(temperature / 4);
// console.log(temperature + '');
// Symbol.toStringTag: 作为属性,用于重新定义对象的类型识别
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old`;
// };
// const black_myth_wtw = new Person('black_myth_wtw', 22);
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Object]');
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Person]');
// black_myth_wtw[Symbol.toStringTag] = 'Person';
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Object]');
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Person]');
// const arr = ['black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// arr[Symbol.toStringTag] = 'List';
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// console.log(Object.prototype.toString.call(arr) === '[object List]');
