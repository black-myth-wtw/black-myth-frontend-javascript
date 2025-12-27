// javascript object 对象
// 对象属性方法的简化
// const name = 'black_myth_wtw',
//     age = 30,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {sports: ['basketball', 'computer games']};
// const black_myth_wtw = {
//     name,
//     age,
//     gender,
//     birthday,
//     hobby,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// 可计算的对象属性方法
// const name = 'black_myth_wtw',
//     age = 30,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {sports: ['basketball', 'computer games']};
// const symbol = Symbol.for('object');
// const black_myth_wtw = {
//     name,
//     age,
//     gender,
//     birthday,
//     hobby,
//     [symbol]: 'yes',
//     [`${name}_${age}`]: `${name}_${age}`,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw[`${name}_${age}`]);
// 重复的对象属性方法
// const name = 'black_myth_wtw',
//     age = 30,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {sports: ['basketball', 'computer games']};
// const symbol = Symbol.for('object');
// const black_myth_wtw = {
//     name,
//     name: 'black+myth+wtw',
//     age,
//     gender,
//     birthday,
//     hobby,
//     [symbol]: 'yes',
//     [`${name}_${age}`]: `${name}_${age}`,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw[`${name}_${age}`]);
// 方法
// Object.is
// 判断两个值是否相同,除了 +0/-0,NaN 以外,计算结果与 === 相同/一致
// console.log(Object.is(+0, -0));
// console.log(+0 === -0);
// console.log(Object.is(NaN, NaN));
// console.log(NaN === NaN);
// Object.assign
// 对象浅复制/对象浅拷贝
// 自由属性方法枚举遍历的排序: Object.getOwnPropertyNames/Reflect.ownKeys/for...in/JSON.stringify/Object.keys/Object.entries 在各大厂商内都是按照数字升序排列,字符串按照添加顺序排列
// const black_myth_wtw = {
//     99: 99,
//     100: 100,
//     1: 1,
//     a: 'a',
//     c: 'c',
//     d: 'd',
// };
// black_myth_wtw.b = 'b';
// for (const key of Object.getOwnPropertyNames(black_myth_wtw)) {
//     console.log(`${key}: ${black_myth_wtw[key]}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw)) {
//     console.log(`${key}: ${black_myth_wtw[key]}`);
// }
// for (const key in black_myth_wtw) {
//     console.log(`${key}: ${black_myth_wtw[key]}`);
// }
// console.log(JSON.stringify(black_myth_wtw));
// for (const key of Object.keys(black_myth_wtw)) {
//     console.log(`${key}: ${black_myth_wtw[key]}`);
// }
// for (const [key, value] of Object.entries(black_myth_wtw)) {
//     console.log(`${key}: ${value}`);
// }
// 增强原型: Object.setPrototypeOf/Object.getPrototypeOf
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old`;
// };
// function Black_Myth_WTW(name, age, gender, birthday, hobby) {
//     Person.call(this, name, age);
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// // Black_Myth_WTW.prototype = Person.prototype;
// Object.setPrototypeOf(Black_Myth_WTW.prototype, Person.prototype);
// Black_Myth_WTW.prototype.introduce = function () {
//     return `${Object.getPrototypeOf(Black_Myth_WTW.prototype).introduce.call(this)}, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     // return `${super.introduce.call(this)}, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Black_Myth_WTW('black_myth_wtw', 30, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// // console.log(black_myth_wtw.__proto__ === Black_Myth_WTW.prototype);
// // console.log(black_myth_wtw.__proto__ === Person.prototype);
// // console.log(black_myth_wtw.__proto__.__proto__ === Object.prototype);
// console.log(black_myth_wtw.__proto__ === Black_Myth_WTW.prototype);
// console.log(black_myth_wtw.__proto__.__proto__ === Person.prototype);
// console.log(black_myth_wtw.__proto__.__proto__.__proto__ === Object.prototype);
// console.log(Object.getPrototypeOf(black_myth_wtw) === Black_Myth_WTW.prototype);
// console.log(Black_Myth_WTW.prototype.isPrototypeOf(black_myth_wtw));
// console.log(Person.prototype.isPrototypeOf(Black_Myth_WTW.prototype));
// console.log(black_myth_wtw.introduce());
// 原型访问 super 引用,在正式的对象方法,也就是简化的对象方法内,super 引用通过绑定至内置对象 [[HomeObject]] 内,可直接访问对象原型
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old`;
//     }
// };
// const black_myth_wtw_main = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         // return `${Object.getPrototypeOf(this).introduce.call(this)}, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//         return `${super.introduce.call(this)}, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// Object.setPrototypeOf(black_myth_wtw_main, black_myth_wtw);
// console.log(black_myth_wtw_main.introduce());
// const black_myth_wtw_create = Object.create(black_myth_wtw_main);
// black_myth_wtw_create.name = 'black!myth!wtw';
// black_myth_wtw_create.age = 29;
// console.log(black_myth_wtw_create.introduce());
