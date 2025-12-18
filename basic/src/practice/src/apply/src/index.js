// ES5 apply 函数显式绑定
// Function.prototype.my_apply = function (o) {
//     if (typeof this !== 'function') {
//         throw new TypeError('调用当前此 my_apply 方法的对象必须为一个函数!');
//     }
//     var symbol = Symbol('my_apply'),
//         args = Array.prototype.slice.call(arguments, 1);
//     o[symbol] = this;
//     var result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
//
// var wtw = {
//     name: 'wtw',
//     age: 26,
// };
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old~~~~~~`;
// };
//
// Person.my_apply(wtw, 'black@myth@wtw', 32);
// console.log(wtw);

// ES6
// Function.prototype.my_apply = function (o, args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('调用当前此 my_apply 方法的对象必须为一个函数!');
//     }
//     const symbol = Symbol('my_apply');
//     o[symbol] = this;
//     const result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
//
// const wtw = {
//     name: 'wtw',
//     age: 26,
// };
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old~~~~~~`;
// };
//
// Person.my_apply(wtw, ['black@myth@wtw', 32]);
// console.log(wtw);
