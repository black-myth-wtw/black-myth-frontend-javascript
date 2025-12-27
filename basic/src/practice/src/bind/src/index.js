// javascript bind 硬绑定
// 绑定优先级
// new 类构造调用绑定 > 硬绑定 > 显式绑定 > 隐式绑定 > 软绑定 > 默认绑定(window)
// ES5
// Function.prototype.bind_mine = function (context) {
//     if (typeof this !== 'function') throw new TypeError('当前方法必须被函数调用~~~~~~');
//     var self = this,
//         args = Array.prototype.slice.call(arguments, 1),
//         F = function () {
//         },
//         fBind = function () {
//             var fBind_args = Array.prototype.slice.call(arguments);
//             return self.apply(this instanceof fBind ? this : context, args.concat(fBind_args));
//         };
//     F.prototype = self.prototype;
//     fBind.prototype = F.prototype;
//     return fBind;
// }
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// var black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// var black_myth_lily = {
//     name: 'black&myth&lily',
//     age: 20,
//     gender: false,
//     birthday: '1993-04-27',
//     hobby: {
//         sports: ['table', 'table tennis']
//     }
// };
// var bind_mine = Person.bind_mine(black_myth_wtw);
// var black_myth_wu_kong = new bind_mine('black@myth@wtw', 24, false, '1994-03-10', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wu_kong);
// console.log(black_myth_wu_kong.__proto__ === Person.prototype);
// console.log(black_myth_wu_kong.introduce());
// console.log(black_myth_wtw);
// bind_mine('black*myth*wtw', 28, false, '1999-09-09', {sports: ['volleyball', 'badminton']});
// console.log(black_myth_wtw);
// bind_mine.call(black_myth_lily, 'black%myth%wtw', 26, true, '2000-10-10', {sports: ['running', 'skiing']});
// console.log(black_myth_wtw);
// console.log(black_myth_lily);
//
// ES6
// Function.prototype.bind_mine = function (context, ...args) {
//     if (typeof this !== 'function') throw new TypeError('当前方法必须被函数调用~~~~~~');
//     const self = this,
//         F = function () {
//         },
//         fBind = function (...fBind_args) {
//             return self.apply(this instanceof fBind ? this : context, [...args, ...fBind_args]);
//         };
//     Object.setPrototypeOf(F.prototype, self.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// }
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// const black_myth_lily = {
//     name: 'black&myth&lily',
//     age: 20,
//     gender: false,
//     birthday: '1993-04-27',
//     hobby: {
//         sports: ['table', 'table tennis']
//     }
// };
// const bind_mine = Person.bind_mine(black_myth_wtw);
// const black_myth_wu_kong = new bind_mine('black@myth@wtw', 24, false, '1994-03-10', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wu_kong);
// console.log(black_myth_wu_kong.__proto__ === Person.prototype);
// console.log(black_myth_wu_kong.__proto__.__proto__.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(black_myth_wu_kong));
// console.log(black_myth_wu_kong.introduce());
// console.log(black_myth_wtw);
// bind_mine('black*myth*wtw', 28, false, '1999-09-09', {sports: ['volleyball', 'badminton']});
// console.log(black_myth_wtw);
// bind_mine.call(black_myth_lily, 'black%myth%wtw', 26, true, '2000-10-10', {sports: ['running', 'skiing']});
// console.log(black_myth_wtw);
// console.log(black_myth_lily);
