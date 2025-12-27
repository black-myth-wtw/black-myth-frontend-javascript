// javascript apply 函数显式绑定
// ES5
// Function.prototype.apply_mine = function (context) {
//     if (typeof this !== 'function') throw new TypeError(`当前方法必须被函数调用~~~~~~`);
//     var symbol = Symbol.for('apply-mine'),
//         args = Array.prototype.slice.call(arguments, 1);
//     context[symbol] = this;
//     var result = context[symbol](...args[0]);
//     delete context[symbol];
//     return result;
// };
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
// Person.apply_mine(black_myth_wtw, ['black@myth@wtw', 28, false, '1968-01-28', {sports: ['basketball', 'computer games']}]);
// console.log(black_myth_wtw);
// Person.apply_mine(this, ['black#myth#wtw', 24, true, '1994-03-10', {sports: ['tennis', 'table tennis']}]);
// console.log(name, age, gender, birthday, hobby);
//
// ES6
// Function.prototype.apply_mine = function (context, ...args) {
//     if (typeof this !== 'function') throw new TypeError(`当前方法必须被函数调用~~~~~~`);
//     const symbol = Symbol.for('apply-mine');
//     context[symbol] = this;
//     const result = context[symbol](...args[0]);
//     delete context[symbol];
//     return result;
// };
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
// Person.apply_mine(black_myth_wtw, ['black@myth@wtw', 28, false, '1968-01-28', {sports: ['basketball', 'computer games']}]);
// console.log(black_myth_wtw);
// Person.apply_mine(this, ['black#myth#wtw', 24, true, '1994-03-10', {sports: ['tennis', 'table tennis']}]);
// console.log(name, age, gender, birthday, hobby);
