// 基本用法,注意 symbol 是直接绑定内置对象 [[Description]] 内的✅
// const uid = Symbol('uid'),
//     uid_ano = Symbol('uid');
// console.log(typeof uid, typeof uid_ano);
// console.log(uid, uid_ano);
// console.log(uid === uid_ano);
// console.log(Object.is(uid, uid_ano));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     [uid]: '370683199306300013'
// };
// console.log(black_myth_wtw[uid]);
// console.log(black_myth_wtw[uid_ano]);
// 共享体系: Symbol.for/Symbol.keyFor✅
// const uid = Symbol.for('uid'),
//     uid_ano = Symbol.for('uid');
// console.log(typeof uid, typeof uid_ano);
// console.log(uid, uid_ano);
// console.log(uid === uid_ano);
// console.log(Object.is(uid, uid_ano));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     [uid]: '370683199306300013'
// };
// console.log(black_myth_wtw[uid]);
// console.log(black_myth_wtw[uid_ano]);
// console.log(Symbol.keyFor(uid));
// console.log(Symbol.keyFor(uid_ano));
// 属性方法遍历: Object.getOwnPropertySymbols/Reflect.ownKeys✅
// function Person(name = 'black@myth@wtw', age = 32, gender = true, birthday = '1993-06-30', hobby = {
//     sports: ['Black_Myth_WuKong', 'Elden Ring']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}`;
// };
// const symbol = Symbol.for('black*myth*wtw');
// function Black_Myth_WTW(name = 'black@myth@wtw', age = 32, gender = true, birthday = '1993-06-30', hobby = {
//     sports: ['Black_Myth_WuKong', 'Elden Ring']
// }, lover = 'ZhengShuAng') {
//     Person.call(this, name, age, gender, birthday, hobby);
//     this.lover = lover;
//     this[symbol] = 'black&myth&wtw';
// }
// Object.setPrototypeOf(Black_Myth_WTW.prototype, Person.prototype);
// const black_myth_wtw = new Black_Myth_WTW('black%myth%wtw', 30, false, '1994-03-10', {sports: ['basketball', 'computer games']}, 'ZhaoYue');
// for (const key in black_myth_wtw) {
//     console.log(`for...in => ${key}:${black_myth_wtw[key]}`);
// }
// for (const key of Object.getOwnPropertyNames(black_myth_wtw)) {
//     console.log(`Object.getOwnPropertyNames => ${key}:${black_myth_wtw[key]}`);
// }
// for (const key of Object.getOwnPropertySymbols(black_myth_wtw)) {
//     console.log(`Object.getOwnPropertySymbols => ${String(key)}:${black_myth_wtw[key]}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw)) {
//     console.log(`Reflect.ownKeys => ${String(key)}:${black_myth_wtw[key]}`);
// }
// for (const key of Object.keys(black_myth_wtw)) {
//     console.log(`Object.keys => ${String(key)}:${black_myth_wtw[key]}`);
// }
// for (const [key, value] of Object.entries(black_myth_wtw)) {
//     console.log(`Object.entries => ${String(key)}:${value}`);
// }
// 未命名标识位强制类型转换✅
// const uid = Symbol.for('uid');
// console.log(String(uid));
// console.log(uid.toString());
// console.log(uid.valueOf());
// console.log(Boolean(uid));
// TypeError
// console.log(uid + 0);
// TypeError
// console.log(0 / uid);
// TypeError
// console.log(Number(uid));
// TypeError
// console.log(uid + '');
// TypeError
// console.log(uid / 0);
// WellKnown-Symbols✅
// Symbol.hasInstance,作为方法,用于重新自定义 instanceof,判断构造对象是否在其原型链上✅
// let arr = ['black_myth_wtw', 24, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// Object.defineProperty(Array, Symbol.hasInstance, {
//     value() {
//         return false;
//     },
//     enumerable: false,
//     configurable: false,
//     writable: false
// });
// arr = ['black_myth_wtw', 24, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// function Animal(name = 'tiger') {
//     this.name = name;
// }
// Object.defineProperty(Animal, Symbol.hasInstance, {
//     value() {
//         return true;
//     },
//     writable: false,
//     configurable: false,
//     enumerable: false,
// });
// console.log('kangaroo' instanceof Animal);
// Symbol.isConcatSpreadable,作为属性,用于重新自定义类数组对象,判断其是否可被合并✅
// const black_myth_wtw = ['black&myth&wtw', 26, true],
//     black_myth_wtw_split = ['1993-06-30', {sports: ['basketball', 'computer games']}, 'ZhengShuAng'];
// console.log(black_myth_wtw.concat(black_myth_wtw_split));
// const black_myth_wtw = {
//         0: 'black&myth&wtw',
//         1: 26,
//         2: true,
//         length: 3,
//         [Symbol.isConcatSpreadable]: true,
//     },
//     black_myth_wtw_split = ['1993-06-30', {sports: ['basketball', 'computer games']}, 'ZhengShuAng'];
// console.log(black_myth_wtw_split.concat(black_myth_wtw));
// console.log(black_myth_wtw[Symbol.isConcatSpreadable]);
// black_myth_wtw[Symbol.isConcatSpreadable] = false;
// console.log(black_myth_wtw_split.concat(black_myth_wtw));
// console.log(black_myth_wtw[Symbol.isConcatSpreadable]);
// Symbol.search/Symbol.match/Symbol.split/Symbol.replace,作为方法,用于重新自定义字符串的查询/匹配/分割/替换的操作✅
// const operate = {
//     [Symbol.search](value) {
//         return value.length > 11 ? value.length : 0;
//     },
//     [Symbol.match](value) {
//         return value.length > 11 ? [value] : null;
//     },
//     [Symbol.split](value) {
//         return value.length > 11 ? [value] : [];
//     },
//     [Symbol.replace](source_value, target_value) {
//         return target_value.length > 11 ? target_value : source_value;
//     }
// };
// const source_black_myth_wtw = 'hello world',
//     target_black_myth_wtw = 'hello world~';
// console.log(source_black_myth_wtw.search(operate));
// console.log(target_black_myth_wtw.search(operate));
// console.log(source_black_myth_wtw.match(operate));
// console.log(target_black_myth_wtw.match(operate));
// console.log(source_black_myth_wtw.split(operate));
// console.log(target_black_myth_wtw.split(operate));
// console.log(source_black_myth_wtw.replace(operate, target_black_myth_wtw));
// console.log(target_black_myth_wtw.replace(operate, source_black_myth_wtw));
// Symbol.toPrimitive,作为方法,用于重新自定义对象的强制类型转换(包含默认模式、字符串模式与数字模式)✅
// 字符串模式✅
// 会先调用 toString 方法,若为原始值则返回,否则会调用 valueOf 方法,若为原始值则返回,否则如果没有其他任何返回,则直接抛出错误✅
// 数字模式✅
// 会先调用 valueOf 方法,若为原始值则返回,否则会调用 toString 方法,若为原始值则返回,否则如果没有其他任何返回,则直接抛出错误✅
// function Temperature(temperature) {
//     this.temperature = temperature;
// }
// Temperature.prototype[Symbol.toPrimitive] = function (hint) {
//     switch (hint) {
//         case 'default':
//             return `${this.temperature}℃`;
//         case 'number':
//             return this.temperature / 2;
//         case 'string':
//             return `摄氏度: ${this.temperature},${this.temperature > 30 ? '太热啦!!!!!!' : this.temperature < 10 ? '太冷啦!!!!!!' : '正常!!!!!!'}`;
//     }
// };
// const temp = new Temperature(32);
// console.log(String(temp));
// console.log(temp / 4);
// console.log(temp + ',华氏摄氏度');
// Symbol.toStringTag,作为属性,用于重新自定义对象的类型识别✅
// function Person(name = 'black@myth@wtw', age = 32, gender = true, birthday = '1993-06-30', hobby = {
//     sports: ['Black_Myth_WuKong', 'Elden Ring']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}`;
// };
// const black_myth_wtw = new Person('black%myth%wtw', 30, false, '1994-03-10', {sports: ['basketball', 'computer games']}, 'ZhaoYue');
// console.log(black_myth_wtw.introduce());
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Object]');
// black_myth_wtw[Symbol.toStringTag] = 'Person';
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Object]');
// console.log(Object.prototype.toString.call(black_myth_wtw) === '[object Person]');
// const arr = ['black_myth_wtw', 24, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// console.log(Object.prototype.toString.call(arr) === '[object Object]');
// arr[Symbol.toStringTag] = 'Person';
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// console.log(Object.prototype.toString.call(arr) === '[object Person]');
// arr[Symbol.toStringTag] = 'Object';
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// console.log(Object.prototype.toString.call(arr) === '[object Person]');
// console.log(Object.prototype.toString.call(arr) === '[object Object]');
// Symbol.unscopables,作为属性,用于重新自定义 with 对于对象的黑名单设置✅
// const o = {
//     foo: ['black&myth&wtw', 28, true],
//     bar: ['1993-06-30', {sports: ['basketball', 'computer games']}, 'ZhengShuAng']
// };
// o[Symbol.unscopables] = {
//     foo: true,
//     foo: false,
//     bar: true,
// };
// console.log(o.foo);
// console.log(o.bar);
// with(o) {
//     console.log(foo);
//     console.log(bar);
// }
