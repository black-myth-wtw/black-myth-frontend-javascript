// 对象属性方法的简化
// const name = 'black@myth@wtw',
//     age = 32;
// const black_myth_wtw = {
//     name,
//     age,
//     gender: true,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.name, black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// 可计算的对象属性方法
// const name = 'black@myth@wtw',
//     age = 32,
//     symbol = Symbol.for('object');
// const black_myth_wtw = {
//     name,
//     age,
//     gender: true,
//     [symbol]: 'yes',
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}~~~~~~`;
//     }
// };
// black_myth_wtw[`${name}_${age}`] = black_myth_wtw;
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.name, black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw[`${name}_${age}`]);
// 方法
// Object.is,判断两个值是否相同,除了 +0,-0,NaN 以外,计算结果与 === 相同
// true
// false
// false
// true
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));
// Object.assign,对象浅拷贝/对象浅复制,对象循环浅拷贝/对象循环浅复制
// const name = 'black@myth@wtw',
//     age = 32,
//     symbol = Symbol.for('object');
// const black_myth_wtw = {
//     name,
//     age,
//     gender: true,
//     hobby: {
//         sports: ['Black My WuKong', 'Elden Ring']
//     },
//     [symbol]: 'yes',
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}~~~~~~`;
//     }
// };
// black_myth_wtw[`${name}_${age}`] = black_myth_wtw;
// console.log(black_myth_wtw.hobby.sports);
// const black_myth_wtw_shallow_copy = Object.assign({}, black_myth_wtw, {name: 'black$myth$wtw'});
// black_myth_wtw_shallow_copy.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw, black_myth_wtw_shallow_copy);
// 重复的对象属性方法
// const name = 'black@myth@wtw',
//     age = 32;
// const black_myth_wtw = {
//     name,
//     name: 'black&myth&wtw',
//     age,
//     gender: true,
//     gender: false,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.name, black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// 自有属性方法枚举遍历排序: Object.getOwnPropertyNames,Reflect.ownKeys,for...in,JSON.stringify,Object.keys 以及 Object.entries 在各大厂商内都是按照数字升序排列,字符串按照添加顺序排列
// const symbol = Symbol.for('object');
// const black_myth_wtw = {
//     100: 'I get one hundred record',
//     1: 'I\'m the first one',
//     3: '',
//     a: () => arguments[1],
//     c: symbol,
//     d: 444
// };
// black_myth_wtw.b = true;
// for (const property_name_key of Object.getOwnPropertyNames(black_myth_wtw)) {
//     console.log(property_name_key);
// }
// for (const own_keys_key of Reflect.ownKeys(black_myth_wtw)) {
//     console.log(own_keys_key);
// }
// for (const in_key in black_myth_wtw) {
//     console.log(in_key);
// }
// for (const key in Object.keys(black_myth_wtw)) {
//     console.log(key);
// }
// for (const [entries_key] of Object.entries(black_myth_wtw)) {
//     console.log(entries_key);
// }
// console.log(JSON.stringify(black_myth_wtw));
// 增强原型: Object.getPropertyOf,Object.setPropertyOf
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old`;
// };
// function Black_Myth_WTW(name, age, gender) {
//     Person.call(this, name, age);
//     this.gender = gender;
// }
// Object.setPrototypeOf(Black_Myth_WTW.prototype, Person.prototype);
// const black_myth_wtw = new Black_Myth_WTW('black@myth@wtw', 24, true);
// console.log(black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender);
// console.log(black_myth_wtw.introduce());
// console.log(Object.getPrototypeOf(black_myth_wtw) === Black_Myth_WTW.prototype);
// console.log(Object.getPrototypeOf(Black_Myth_WTW.prototype) === Person.prototype);
// console.log(Object.getPrototypeOf(Black_Myth_WTW.prototype.__proto__) === Object.prototype);
// console.log(Object.getPrototypeOf(Black_Myth_WTW.prototype.__proto__.__proto__) === null);
// console.log(Black_Myth_WTW.prototype.isPrototypeOf(black_myth_wtw));
// console.log(Person.prototype.isPrototypeOf(Black_Myth_WTW.prototype));
// console.log(Object.prototype.isPrototypeOf(Person.prototype));
// 原型访问 super 引用: 在正式对象的方法也就是简化的对象方法内,super 引用通过绑定至内置对象 [[HomeObject]] 内以直接访问对象原型
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 25,
//     gender: true,
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}~~~~~~`;
//     }
// };
// const black_myth_wtw_call = {
//     name: 'black%myth%wtw',
//     age: 26,
//     gender: false,
//     hobby: {sports: ['Black Myth WuKong', 'Elden Ring']},
//     introduce() {
//         return `${Object.getPrototypeOf(this).introduce.call(this)}I love ${this.hobby.sports.join(',')}`;
//     }
// };
// Object.setPrototypeOf(black_myth_wtw_call, black_myth_wtw);
// console.log(black_myth_wtw_call.introduce());
// const black_myth_wtw_create = Object.create(black_myth_wtw_call);
// console.log(black_myth_wtw_create.introduce());
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 25,
//     gender: true,
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}~~~~~~`;
//     }
// };
// const black_myth_wtw_call = {
//     name: 'black%myth%wtw',
//     age: 26,
//     gender: false,
//     hobby: {sports: ['Black Myth WuKong', 'Elden Ring']},
//     introduce() {
//         return `${super.introduce.call(this)}I love ${this.hobby.sports.join(',')}`;
//     }
// };
// Object.setPrototypeOf(black_myth_wtw_call, black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw_call.introduce());
// const black_myth_wtw_create = Object.create(black_myth_wtw_call);
// black_myth_wtw_create.name = 'black&myth&wtw';
// black_myth_wtw_create.age = 22;
// black_myth_wtw_create.gender = true;
// console.log(black_myth_wtw_create.introduce());
