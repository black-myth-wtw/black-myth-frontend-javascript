// javascript instanceof 判断对象原型链;
// const instanceof_mock = (source_class, target_object) => {
//   if (
//     !source_class ||
//     !target_object ||
//     !source_class.prototype ||
//     !target_object.__proto__
//   ) {
//     throw new TypeError(
//       `The current source_class:${source_class} and target_object:${target_object} have no structural relationship~~~~~~`,
//     );
//   }
//   let current_target_object = target_object.__proto__;
//   while (current_target_object) {
//     if (current_target_object === source_class.prototype) return true;
//     current_target_object = current_target_object.__proto__;
//   }
//   return false;
// };
// function Person(name, age, gender, birthday, hobby) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.birthday = birthday;
//   this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//   return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {
//   sports: ['computer games', 'basketball'],
// });
// console.log(
//   black_myth_wtw,
//   black_myth_wtw.name,
//   black_myth_wtw.age,
//   black_myth_wtw.gender,
//   black_myth_wtw.birthday,
//   black_myth_wtw.hobby,
// );
// console.log(black_myth_wtw.introduce());
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));
// console.log(instanceof_mock(Person, black_myth_wtw));
// console.log(instanceof_mock(Object, black_myth_wtw));
// console.log(instanceof_mock(Person, {}));
// console.log(instanceof_mock(Object, {}));
// console.log(Object.prototype.isPrototypeOf(Person.prototype));
// console.log(Object.prototype.isPrototypeOf(black_myth_wtw.__proto__));
