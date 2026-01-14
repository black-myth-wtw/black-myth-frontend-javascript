// javascript apply 显式绑定
// Function.prototype.apply_mock = function (context, args) {
//     if (typeof this !== 'function') throw new TypeError(`The type of this:${this} method calling the current method must be a function`);
//     const symbol = Symbol.for('apply_mock');
//     context[symbol] = this;
//     const result = context[symbol](...args);
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
// Person.apply_mock(black_myth_wtw, ['black@myth@wtw', 28, false, '1968-01-28', {sports: ['basketball', 'computer games', 'volleyball']}]);
// console.log(black_myth_wtw);
// Person.apply_mock(this, ['black#myth#wtw', 24, true, '1994-03-10', {sports: ['tennis', 'table tennis', 'badminton']}]);
// console.log(name, age, gender, birthday, hobby);
