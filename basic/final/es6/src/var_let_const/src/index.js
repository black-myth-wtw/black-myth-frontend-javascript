// var 存在一些缺陷特性✅
// 变量提升✅
// function do_it(condition) {
//     console.log(name);
//     if(condition) var name = 'black_myth_wtw';
//     console.log(name);
// }
// do_it();
// 重复声明✅
// var name = 'black_myth_wukong';
// var name = 'black_myth_wtw';
// console.log(name);
// 全局作用域绑定✅
// var name = null,
//     age = null,
//     gender = null,
//     birthday = null,
//     hobby = null;
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(name, age, gender, birthday, hobby);
// console.log(name === window.name);
// console.log(age === window.age);
// console.log(gender === window.gender);
// console.log(birthday === window.birthday);
// console.log(hobby === window.hobby);
// var name = 'black@myth@wtw',
//     age = 24,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {
//         sports: ['badminton', 'tennis']
//     };
// var black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce: () => {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// let/const✅
// 不再拥有 var 任何/全部的缺陷特性✅
// 不再拥有 var 的变量提升缺陷特性✅
// ReferenceError
// function do_it(condition) {
//     console.log(name);
//     if (condition) {
//         let name = 'black&myth&wtw';
//     }
//     console.log(name);
// }
// do_it();
// 不再拥有 var 的重复声明缺陷特性✅
// SyntaxError
// let name = 'black_myth_wtw';
// let name = 'black!myth!wtw';
// console.log(name);
// 不再拥有 var 的全局作用域绑定缺陷特性✅
// let name = null,
//     age = null,
//     gender = null,
//     birthday = null,
//     hobby = null;
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(name, age, gender, birthday, hobby);
// console.log(name === window.name);
// console.log(age === window.age);
// console.log(gender === window.gender);
// console.log(birthday === window.birthday);
// console.log(hobby === window.hobby);
// ReferenceError
// let name = 'black@myth@wtw',
//     age = 24,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {
//         sports: ['badminton', 'tennis']
//     };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce: () => {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// 存在 TDZ 临时死区✅
// function Person(name = 'black_myth_wtw', age = 33, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['volleyball', 'table tennis']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
// };
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw.introduce());
// ReferenceError
// function Person(name = age, age = 33, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['volleyball', 'table tennis']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
// };
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw.introduce());
// 块级作用域绑定✅
// const arr_integer = [];
// for (var i = 0; i < 50; i++) {
//     arr_integer.push(function () {
//         console.log(i);
//     });
// }
// arr_integer.forEach(function (callback) {
//     callback();
// });
// const arr_integer = [];
// for (var i = 0; i < 50; i++) {
//     arr_integer.push((function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i));
// }
// arr_integer.forEach(function (callback) {
//     callback();
// });
// const arr_integer = [];
// for (let i = 0; i < 50; i++) {
//     arr_integer.push(function () {
//         console.log(i);
//     });
// }
// arr_integer.forEach(function (callback) {
//     callback();
// });
// for (var i = 0; i < 100; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// for (var i = 0; i < 100; i++) {
//     setTimeout((function (i) {
//         return function () {
//             console.log(i);
//         }
//     }(i)), i * 1000);
// }
// for (let i = 0; i < 100; i++) {
//     setTimeout((function () {
//         console.log(i);
//     }), i * 1000);
// }
// let 用于声明变量✅
// let name = 'black_myth_wtw';
// console.log(name);
// name = 'black&myth&wtw';
// console.log(name);
// name = 'black@myth@wtw';
// console.log(name);
// const 用于声明常量✅
// TypeError
// const name = 'black_myth_wtw';
// console.log(name);
// name = 'black&myth&wtw';
// console.log(name);
// name = 'black@myth@wtw';
// console.log(name);
// TypeError
// for(const i = 0; i < 100; i++) {
//     setTimeout((function () {
//         console.log(i);
//     }), i * 1000);
// }
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce: () => {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// for (const key in black_myth_wtw) {
//     console.log(`key: ${key}`);
// }
// const 块级作用域绑定的最佳实践✅
