// javascript let const 常变量声明
// var 存在一些缺陷特性
// 变量提升
// function do_it(condition) {
//     console.log(name);
//     if (condition) {
//         var name = 'black_myth_wtw';
//     }
//     console.log(name);
// }
// do_it();
// 重复声明
// function do_it() {
//     var name = 'black_myth_wtw';
//     var age = 32;
//     var name = 'black#myth#wtw';
//     console.log(name, age);
// }
// do_it();
// 全局作用域绑定
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.call(this, 'black_myth_wtw', 28);
// console.log(name, age);
// console.log(window.name === name);
// console.log(window.age === age);
// var name,
//     age;
// var name = 'black&myth&wtw',
//     age = 32,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     };
// var black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 30,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     // introduce() {
//     //     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     // }
//     introduce: () => `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`
// };
// console.log(name, age);
// console.log(black_myth_wtw.introduce());
// let const
// 不再拥有 var 全部的权限特性
// 不再拥有 var 的变量提升
// ReferenceError
// function do_it(condition) {
//     console.log(name);
//     if (condition) {
//         let name = 'black@myth@wtw';
//     }
//     console.log(name);
// }
// do_it();
// 不再拥有 var 的重复声明
// SyntaxError
// function do_it() {
//     let name = 'black*myth*wtw';
//     let age = 24;
//     let name = 'black!myth!wtw';
//     console.log(name, age);
// }
// do_it();
// 不再拥有 var 的全局作用域绑定
// let name,
//     age;
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.call(this, 'black$myth$wtw', 32);
// console.log(name, age);
// console.log(window.name === name);
// console.log(window.age === age);
// ReferenceError
// const name = 'black&myth&wtw',
//     age = 32,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 30,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     // introduce() {
//     //     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     // }
//     introduce: () => `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`
// };
// console.log(black_myth_wtw.introduce());
// 存在 TDZ 临时死区
// ReferenceError
// console.log(name);
// let name = 'black%myth%wtw';
// function Person(name = 'black^myth^wtw', age = 32) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
// const person = new Person();
// console.log(person.introduce());
// ReferenceError
// function Person(name = age, age = 32) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
// const person = new Person();
// console.log(person.introduce());
// 块级作用域绑定
// var arr = [];
// for (var i = 0; i < 50; i++) {
//     arr.push(function () {
//         console.log(i);
//     });
// }
// arr.forEach(function (callback) {
//     callback();
// });
// for (var i = 0; i < 50; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// var arr = [];
// for (var i = 0; i < 50; i++) {
//     arr.push((function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i));
// }
// arr.forEach((function (callback) {
//     callback();
// }));
// for (var i = 0; i < 50; i++) {
//     setTimeout((function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i), i * 1000);
// }
// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr.push(function () {
//         console.log(i);
//     });
// }
// arr.forEach(function (callback) {
//     callback();
// });
// for (let i = 0; i < 50; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// let
// 用于声明变量
// let name = 'black*myth*wtw',
//     age = 26;
// name = 'black%myth%wtw';
// console.log(name, age);
// const
// 用于声明常量
// TypeError
// const name = 'black*myth*wtw',
//     age = 26;
// name = 'black%myth%wtw';
// console.log(name, age);
// TypeError
// for (const i = 0; i < 100; i++) {
//     console.log(i);
// }
// const black_myth_wtw = {
//     name: 'black+myth+wtw',
//     age: 22,
//     gender: true,
//     birthday: '1993-04-27',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// for (const key in black_myth_wtw) {
//     console.log(`${key}: ${black_myth_wtw[key]}`);
// }
// 块级作用域绑定的最佳实践
