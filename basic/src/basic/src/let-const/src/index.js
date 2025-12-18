// var 存在一些缺陷特性
// 变量提升
// function doIt(condition) {
//     console.log(name);
//
//     if (condition) var name = 'black_myth_wtw';
//
//     console.log(name);
// }
//
// doIt();
// 重复声明
// function bar() {
//     var name = 'black_myth_wtw';
//     var name = 'black@myth@wtw';
//     var age = 26;
//     console.log(name, 26);
// }
//
// bar();
// 全局作用域绑定
// var name,
//     age;
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person('black#myth#wtw', 29);
// console.log(name, age);
// console.log(window.name === name);
// console.log(window.age === age);
// var name = 'black&myth&wtw',
//     age = 20;
// var black_myth_wtw = {
//     name: 'black*myth*wtw',
//     age: 30,
//     introduce: () => {
//         console.log(`Hi,My name is ${this.name},${this.age} year's old~~~~~~`);
//     }
// };
// black_myth_wtw.introduce();
// let,const
// 不再拥有 var 的全部缺陷特性
// 不再拥有变量提升
// ReferenceError
// function doIt(condition) {
//     console.log(name);
//     if (condition) {
//         let name = 'black^myth^wtw';
//     }
//     console.log(name);
// }
// doIt();
// 不再拥有重复声明
// SyntaxError
// function bar() {
//     let name = 'black$myth$wtw';
//     let name = 'black%myth%wtw';
//     let age = 32;
//     console.log(name, age);
// }
// bar();
// 不再拥有全局作用域绑定
// let name,
//     age;
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person('black+myth+wtw', 29);
// console.log(name, age);
// console.log(window.name === name);
// console.log(window.age === age);
// let name = 'black-myth_wtw',
//     age = 35;
// const black_myth_wtw = {
//     name: 'black=myth=wtw',
//     age: 34,
//     introduce: () => {
//         console.log(`Hi,My name is ${this.name},${this.age} year's old~~~~~~`);
//     }
// };
// black_myth_wtw.introduce();
// 存在 TDZ 临时死区
// ReferenceError
// function Person(name = age, age = 32) {
//     this.name = name;
//     this.age = age;
// }
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw.name, black_myth_wtw.age);
// 块级作用域绑定
// 在无 es6 let,const 之前,使用闭包来存储异步私有数据
// var arr = [];
// for (var i = 0; i <= 50; i++) {
//     arr.push(function () {
//         console.log(i);
//     });
// }
// arr.forEach(function (callback) {
//     callback();
// });
// for (var i = 0; i <= 50; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// 在无 es6 let,const 之前,使用闭包来存储异步私有数据
// var arr = [];
// for (var i = 0; i <= 50; i++) {
//     arr.push((function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i));
// }
// arr.forEach(function (callback) {
//     callback();
// });
// for (var i = 0; i <= 50; i++) {
//     setTimeout((function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i), i * 1000);
// }
// 在 es6 出现之后 let,const 存在块级作用域绑定来存储私有数据
// const arr = []
// for (let i = 0; i <= 50; i++) {
//     arr.push(function () {
//         console.log(i);
//     });
// }
// arr.forEach(function (callback) {
//     callback();
// });
// for (let i = 0; i <= 50; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// let 用于声明变量
// const 用于声明常量
// ReferenceError
// console.log(name);
// let name = '';
// console.log(window.name);
// TypeError
// let name = 'black.myth.wtw';
// name = 'black/myth/wtw';
// const age = 24;
// age = 25;
// console.log(name, age);
// TypeError
// for (const i = 0; i <= 50; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// const 是块级作用域绑定的最佳实践
