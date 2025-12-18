// ES5
// bind 函数硬绑定
// Function.prototype.my_bind = function (context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('调用当前此 my_bind 方法的对象必须为一个函数!');
//     }
//
//     var self = this,
//         args = Array.prototype.slice.call(arguments, 1),
//         F = function () {
//         },
//         fBind = function () {
//             var fBind_args = Array.prototype.slice.call(arguments);
//             return self.apply(this instanceof fBind ? this : context, args.concat(fBind_args));
//         }
//
//     Object.setPrototypeOf(F.prototype, self.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// };
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
// var wtw = {
//     name: 'wtw',
//     age: 26,
//     introduce: function () {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
//
// var lily = {
//     name: 'lily',
//     age: 28,
//     introduce: function () {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
//
// var black_myth_wtw = Person.my_bind(wtw);
// black_myth_wtw('black_myth_wtw', 32);
// console.log(wtw);
// console.log(wtw.introduce());
// var black_myth_wuKong = new black_myth_wtw('black@myth@wuKong', 18);
// console.log(black_myth_wuKong);
// console.log(black_myth_wuKong.introduce());
// console.log(wtw);
// console.log(wtw.introduce());
// black_myth_wtw.call(lily, 'black$myth$lily', 16);
// console.log(lily);
// console.log(lily.introduce());
// console.log(wtw);
// console.log(wtw.introduce());

// ES6
// Function.prototype.my_bind = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('调用当前此 my_bind 方法的对象必须为一个函数!');
//     }
//
//     const self = this,
//         F = function () {
//         },
//         fBind = function (...fBind_args) {
//             return self.apply(this instanceof fBind ? this : context, [...args, ...fBind_args]);
//         }
//
//     Object.setPrototypeOf(F.prototype, self.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// };
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
// const wtw = {
//     name: 'wtw',
//     age: 26,
//     introduce: function () {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
// const lily = {
//     name: 'lily',
//     age: 28,
//     introduce: function () {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
//
// const black_myth_wtw = Person.my_bind(wtw);
// black_myth_wtw('black_myth_wtw', 32);
// console.log(wtw);
// console.log(wtw.introduce());
// const black_myth_wuKong = new black_myth_wtw('black@myth@wuKong', 18);
// console.log(black_myth_wuKong);
// console.log(black_myth_wuKong.introduce());
// console.log(wtw);
// console.log(wtw.introduce());
// black_myth_wtw.call(lily, 'black$myth$lily', 16);
// console.log(lily);
// console.log(lily.introduce());
// console.log(wtw);
// console.log(wtw.introduce());

