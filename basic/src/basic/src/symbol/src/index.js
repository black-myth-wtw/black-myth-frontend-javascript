// symbol 未命名标识位
// 基本用法,注意其是直接绑定至内置对象 [[Description]] 内的
// const uid = Symbol('uid'),
//     uid_ano = Symbol('uid');
// console.log(uid, uid_ano, uid === uid_ano);
// console.log(typeof uid, typeof uid_ano);
// console.log(Object.is(uid, uid_ano));
// const black_myth_wtw = {
//     [uid]: '37068319306300013'
// };
// console.log(black_myth_wtw[uid]);
// console.log(black_myth_wtw[uid_ano]);
// 共享体系: Symbol.for(),Symbol.keyFor()
// const uid = Symbol.for('uid'),
//     uid_ano = Symbol.for('uid');
// console.log(uid, uid_ano, uid === uid_ano);
// console.log(typeof uid, typeof uid_ano);
// console.log(Object.is(uid, uid_ano));
// const black_myth_wtw = {
//     [uid]: '37068319306300013'
// };
// console.log(black_myth_wtw[uid]);
// console.log(black_myth_wtw[uid_ano]);
// symbol 强制类型转换
// const uid = Symbol('uid');
// console.log(uid.valueOf());
// console.log(uid.toString());
// console.log(String(uid));
// console.log(Boolean(uid));
// TypeError
// console.log(uid + 3);
// TypeError
// console.log(uid + '');
// TypeError
// console.log(Number(uid));
// TypeError
// console.log(uid / 2);
// 属性遍历: Object.getOwnPropertySymbols(),Reflect.ownKeys()
// const symbol = Symbol.for('iterator');
// const black_myth_wtw = {
//     name: 'black-myth-wtw',
//     age: 32,
//     gender: true,
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~I love ${this.hobby.sports.join(',')}`;
//     },
//     [symbol]: true,
//     another: undefined,
//     * [Symbol.iterator]() {
//         const vals = Object.values(this);
//         for (let value of vals) {
//             yield value;
//         }
//     }
// };
// const complete_black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 33,
//     gender: false,
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `${super.introduce().call(this)},I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday}`;
//     },
//     birthday: '1993-06-30'
// };
// Object.setPrototypeOf(complete_black_myth_wtw, black_myth_wtw);
// // for......in
// console.log('for......in');
// for (const key in complete_black_myth_wtw) {
//     console.log(key);
// }
// console.log();
// // Object.keys
// console.log('Object.keys');
// for (const key of Object.keys(complete_black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// for (const key of Object.keys(black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// // Object.getOwnPropertyNames
// console.log('Object.getOwnPropertyNames');
// for (const key of Object.getOwnPropertyNames(complete_black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// for (const key of Object.getOwnPropertyNames(black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// // Object.getOwnPropertySymbols
// console.log('Object.getOwnPropertySymbols');
// for (const key of Object.getOwnPropertySymbols(complete_black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// for (const key of Object.getOwnPropertySymbols(black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// // Reflect.ownKeys
// console.log('Reflect.ownKeys');
// for (const key of Reflect.ownKeys(complete_black_myth_wtw)) {
//     console.log(key);
// }
// console.log();
// for (const key of Reflect.ownKeys(black_myth_wtw)) {
//     console.log(key);
// }
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// Well-Known Symbols
// Symbol.hasInstance: 作为方法,用于重新定义 instanceof,判断其是否在其原型链上
// const arr = ['black+myth+wtw', 28, true, {sports: ['Black Myth WuKong', 'Elden Ring']}];
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// Object.defineProperty(Array, Symbol.hasInstance, {
//     value(values) {
//         return false
//     },
//     enumerable: false,
//     configurable: false,
//     writable: false,
// });
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// Symbol.isConcatSpreadable: 作为属性,用于重新定义类数组对象,判断其是否可被合并
// const black_myth_wtw = ['black+myth+wtw', 28, true, {sports: ['Black Myth WuKong', 'Elden Ring']}],
//     black_myth_wtw_expand = ['1993-06-30', function introduce(name, age) {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }];
// console.log(black_myth_wtw.concat(black_myth_wtw_expand));
// // const black_myth_wtw_o = {
// //     0: 'black+myth+wtw',
// //     1: 28,
// //     2: true,
// //     3: {sports: ['Black Myth WuKong', 'Elden Ring']},
// // };
// const black_myth_wtw_o = {
//     0: 'black+myth+wtw',
//     1: 28,
//     2: true,
//     3: {sports: ['Black Myth WuKong', 'Elden Ring']},
//     length: 4,
//     [Symbol.isConcatSpreadable]: true,
// };
// console.log(black_myth_wtw_expand.concat(black_myth_wtw_o));
// Symbol.search,Symbol.match,Symbol.replace,Symbol.split: 作为方法,用于重新定义字符串的查找、匹配、替换以及分割的方法
// const resolve = {
//     [Symbol.search](value) {
//         return value.length > 11;
//     },
//     [Symbol.match](value) {
//         // return value.length > 11 ? value.length : null;
//         return value.length > 11 ? [value] : null;
//     },
//     [Symbol.replace](source_value, target_value) {
//         return source_value.length > 11 ? target_value : source_value;
//     },
//     [Symbol.split](value) {
//         return value.length > 11 ? [value] : value;
//     }
// };
// const black_myth_wtw_target = 'hello,world~',
//     black_myth_wtw_source = 'hello,world';
// console.log(black_myth_wtw_source.search(resolve));
// console.log(black_myth_wtw_target.search(resolve));
// console.log(black_myth_wtw_source.replace(resolve, black_myth_wtw_target));
// console.log(black_myth_wtw_target.replace(resolve, black_myth_wtw_source));
// console.log(black_myth_wtw_source.split(resolve));
// console.log(black_myth_wtw_target.split(resolve));
// console.log(black_myth_wtw_source.match(resolve));
// console.log(black_myth_wtw_target.match(resolve));
// console.log(black_myth_wtw_source.match(/hello/));
// Symbol.toPrimitive: 作为方法,用于重新定义对象的强制类型转换(包含字符串模式、数字模式与默认模式)
// function Temperature(temperature) {
//     this.temperature = temperature;
// }
// const temperature = new Temperature(32);
// temperature[Symbol.toPrimitive] = function (hint) {
//     switch (hint) {
//         case 'default': {
//             return `${this.temperature}℃`;
//         }
//         case 'number': {
//             return this.temperature / 2;
//         }
//         case 'string': {
//             return `摄氏度: ${this.temperature} 度`;
//         }
//     }
// }
// console.log(temperature + '');
// console.log(temperature / 4);
// console.log(String(temperature));
// Symbol.toStringTag: 作为属性,用于重新定义对象的类型识别
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
// const person = new Person('black*myth*wtw', 32);
// console.log(Object.prototype.toString.call(person) === '[object Object]');
// console.log(Object.prototype.toString.call(person) === '[object Person]');
// person[Symbol.toStringTag] = 'Person';
// console.log(Object.prototype.toString.call(person) === '[object Object]');
// console.log(Object.prototype.toString.call(person) === '[object Person]');
// person[Symbol.toStringTag] = 'Lily';
// console.log(Object.prototype.toString.call(person) === '[object Object]');
// console.log(Object.prototype.toString.call(person) === '[object Person]');
// console.log(Object.prototype.toString.call(person) === '[object Lily]');
