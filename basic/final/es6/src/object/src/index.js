// 对象属性方法的简化✅
// const name = 'black&myth&wtw',
//     age = 32,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {
//         sports: []
//     };
// const black_myth_wtw = {
//     name,
//     age,
//     gender,
//     birthday,
//     hobby,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// 对象的方法✅
// Object.is,判断两个值是否相同,除了 +0/0,NaN 以外,执行结果与 === 全等于相同
// Object.assign,对象浅拷贝/对象浅复制
// false
// console.log(Object.is(+0, -0));
// true
// console.log(+0 === -0);
// false
// console.log(NaN === NaN);
// true
// console.log(Object.is(NaN, NaN));
// 重复的对象属性方法✅
// const name = 'black&myth&wtw',
//     age = 32,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {
//         sports: []
//     };
// const black_myth_wtw = {
//     name,
//     age,
//     gender,
//     birthday,
//     hobby,
//     name: 'black*myth*wtw',
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// 可计算的对象属性方法✅
// const name = 'black&myth&wtw',
//     age = 32,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {
//         sports: []
//     };
// const black_myth_wtw = {
//     name,
//     age,
//     gender,
//     birthday,
//     hobby,
//     [`${name}_${age}`]: 'black(myth)wtw(24)',
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw[`${name}_${age}`]);
// 对象自有属性方法枚举的排列顺序: Object.getOwnPropertyNames/Reflect.ownKeys/for...in/JSON.stringify/Object.keys/Object.entries 在各大浏览器厂商内都是按照数字提升升序排列,字符串按照添加顺序排列✅
// const name = 'black&myth&wtw',
//     age = 32,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {
//         sports: []
//     };
// const black_myth_wtw = {
//     0: '0',
//     100: '100',
//     99: true,
//     88: '八十八',
//     name,
//     age,
//     gender,
//     birthday,
//     hobby,
//     [`${name}_${age}`]: 'black(myth)wtw(24)',
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     },
//     a: 'a',
//     c: 'c',
//     d: 'd',
// };
// black_myth_wtw.b = 'b';
// for (const property_names of Object.getOwnPropertyNames(black_myth_wtw)) {
//     console.log(`Object.getOwnPropertyNames => key:${property_names}`);
// }
// for (const reflect_own_keys of Reflect.ownKeys(black_myth_wtw)) {
//     console.log(`Reflect.ownKeys => key:${reflect_own_keys}`);
// }
// for (const key in black_myth_wtw) {
//     console.log(`for...in => key:${key}`);
// }
// console.log(JSON.stringify(black_myth_wtw));
// for (const object_keys of Object.keys(black_myth_wtw)) {
//     console.log(`object.keys => key:${object_keys}`);
// }
// for (const [object_keys, object_values] of Object.entries(black_myth_wtw)) {
//     console.log(`object.entries => key:${object_keys},value:${object_values}`);
// }
// 增强原型: Object.getPrototypeOf,Object.setPrototypeOf,Object.isPrototypeOf✅
// function Person(name = 'black@myth@wtw', age = 24, gender = true, birthday = '1993-06-30', hobby = {
//     sports: ['Black Myth WuKong', 'Elden Ring']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}`;
// };
// function Black_Myth_WTW(name = 'black^myth^wtw', age = 28, gender = false, birthday = '1994-03-10', hobby = {
//     sports: ['ping-pong', 'computer games']
// }, lover = 'zhaoYue') {
//     Person.call(this, name, age, gender, birthday, hobby);
//     this.lover = lover;
// }
// Black_Myth_WTW.prototype.introduce = function () {
//     return `${Object.getPrototypeOf(Black_Myth_WTW.prototype).introduce.call(this)}, My lover is ${this.lover}!!!!!!`;
// };
// Object.setPrototypeOf(Black_Myth_WTW.prototype, Person.prototype);
// const black_myth_wtw = new Black_Myth_WTW('black&myth&wtw', 22, true, '1995-03-03', {
//     sports: ['badminton', 'tennis']
// }, 'zhengShuAng');
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.__proto__ === Black_Myth_WTW.prototype);
// console.log(Object.getPrototypeOf(black_myth_wtw) === Black_Myth_WTW.prototype);
// console.log(Black_Myth_WTW.prototype.isPrototypeOf(black_myth_wtw));
// console.log(black_myth_wtw.__proto__.__proto__ === Person.prototype);
// console.log(Object.getPrototypeOf(Black_Myth_WTW.prototype) === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Black_Myth_WTW.prototype));
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));
// 原型访问 super 引用: 在正式的属性方法也就是简化的对象属性方法内,super 引用通过绑定至内置对象 [[HomeObject]] 内,可直接访问对象原型✅
// const person = {
//     name: 'black@myth@wtw',
//     age: 24,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}`;
//     }
// };
// const black_myth_wtw = {
//     lover: 'WangJinJin',
//     introduce() {
//         return `${Object.getPrototypeOf(this).introduce.call(this)}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// Object.setPrototypeOf(black_myth_wtw, person);
// console.log(black_myth_wtw.introduce());
// const black_myth_white_than_wood = Object.create(black_myth_wtw);
// console.log(black_myth_white_than_wood.introduce());
// const person = {
//     name: 'black@myth@wtw',
//     age: 24,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}`;
//     }
// };
// const black_myth_wtw = {
//     lover: 'WangJinJin',
//     introduce() {
//         return `${super.introduce.call(this)}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// Object.setPrototypeOf(black_myth_wtw, person);
// console.log(black_myth_wtw.introduce());
// const black_myth_white_than_wood = Object.create(black_myth_wtw);
// console.log(black_myth_white_than_wood.introduce());
