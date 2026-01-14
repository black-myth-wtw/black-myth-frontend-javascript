// javascript new 类构造调用
// const new_mock = (fn, ...args) => {
//    z if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     const o = {};
//     const new_mock_result = fn.apply(o, args);
//     const is_object = typeof new_mock_result === 'object' && new_mock_result !== null,
//         is_function = typeof new_mock_result === 'function';
//     if (is_object || is_function) return new_mock_result;
//     o.__proto__ = fn.prototype;
//     return o;
// };
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
// const black_myth_wtw = new_mock(Person, 'black_myth_wtw', 33, true, '1993-06-30', {sports: ['computer games', 'basketball']});
// console.log(black_myth_wtw, black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.birthday, black_myth_wtw.hobby);
// console.log(black_myth_wtw.introduce());
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));
