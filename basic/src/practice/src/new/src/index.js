// javascript new 类构造调用
// ES5
// function new_main(fn) {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     }
//     var o = {},
//         args = Array.prototype.slice.call(arguments, 1),
//         result = fn.apply(o, args),
//         is_function = typeof result === 'function',
//         is_object = typeof result === 'object' && result !== null;
//     if (is_function || is_object) {
//         return result;
//     }
//     o.__proto__ = fn.prototype;
//     return o;
// }
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// }
// var black_myth_wtw = new_main(Person, 'black_myth_wtw', 32, true, '1993-06-30', {sports: ['computer games', 'basketball']});
// console.log(black_myth_wtw, black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.birthday, black_myth_wtw.hobby);
// console.log(black_myth_wtw.introduce());
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));

//
// ES6
// const new_main = function (fn, ...args) {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     }
//     const o = {},
//         result = fn.call(o, ...args),
//         is_function = typeof result === 'function',
//         is_object = typeof result === 'object' && result !== null;
//     if (is_function || is_object) {
//         return result;
//     }
//     o.__proto__ = fn.prototype;
//     return o;
// }
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// }
// const black_myth_wtw = new_main(Person, 'black_myth_wtw', 32, true, '1993-06-30', {sports: ['computer games', 'basketball']});
// console.log(black_myth_wtw, black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.birthday, black_myth_wtw.hobby);
// console.log(black_myth_wtw.introduce());
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));
