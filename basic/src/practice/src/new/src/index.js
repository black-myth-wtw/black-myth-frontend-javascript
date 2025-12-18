// ES5
// 类构造调用
// function my_new(fn) {
//     if (typeof fn !== 'function') throw new TypeError(`The params ${fn.name} must be a function!`);
//     var o = {},
//         args = Array.prototype.slice.call(arguments, 1),
//         result = fn.apply(o, args),
//         isObject = typeof result === 'object' && result !== null,
//         isFunction = typeof result === 'function';
//     if (isObject || isFunction) return result;
//     o.__proto__ = fn.prototype;
//     return o;
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
//
// var black_myth_wtw = my_new(Person, 'black_myth_wtw', 32);
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.__proto__ === Person.prototype);

// ES6
// const my_new = (fn, ...args) => {
//     if (typeof fn !== 'function') throw new TypeError(`The params ${fn.name} must be a function!`);
//     const o = {},
//         result = fn.call(o, ...args),
//         isObject = typeof result === 'object' && result !== null,
//         isFunction = typeof result === 'function';
//     if (isObject || isFunction) return result;
//     o.__proto__ = fn.prototype;
//     return o;
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
//
// const black_myth_wtw = my_new(Person, 'black_myth_wtw', 32);
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.__proto__ === Person.prototype);
