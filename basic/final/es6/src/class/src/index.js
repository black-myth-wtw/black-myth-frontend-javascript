// 基本用法✅
// class 类的特性✅
// 存在 TDZ 临时死区✅
// 类构造对象不可在类内部实行修改✅
// 只可使用 new 构造调用✅
// 类原型链上的方法不可枚举且不可使用 new 构造调用✅
// 类原型链上的访问器属性不可枚举✅
// 相对于 ES5 继承时,继承是基于派生类的 this,父类只是在此基础上实行修饰;而 ES6 类继承,继承是基于父类的 this,派生类只是在此基础上实行修改,两套继承模式完全相反✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// 存在 TDZ 临时死区✅
// ReferenceError
// Person = class {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
// };
// 类构造对象在类内部不可实行修改✅
// TypeError
// class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//         // Person = class {
//         //     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         //         this.name = name;
//         //         this.age = age;
//         //         this.gender = gender;
//         //         this.birthday = birthday;
//         //         this.hobby = hobby;
//         //         this.lover = lover;
//         //     }
//         //     introduce() {
//         //         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//         //     }
//         // }
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 24, true, '1968-05-11', {
//     sports: ['skiing', 'running']
// }, 'WangJinJin');
// console.log(black_myth_wtw_personal.introduce());
// console.log(black_myth_wtw_personal.getName);
// 只可使用 new 构造调用✅
// TypeError
// const black_myth_wtw_personal = Person('black#myth#wtw', 24, true, '1968-05-11', {
//     sports: ['skiing', 'running']
// }, 'WangJinJin');
// 类原型链上的方法不可枚举且不可使用 new 构造调用✅
// TypeError
// const black_myth_wtw_personal_introduce = new black_myth_wtw_personal.introduce();
// for (const key in black_myth_wtw_personal) {
//     console.log(`for...in => key:${key}`);
// }
// for (const key of Object.keys(black_myth_wtw_personal)) {
//     console.log(`Object.keys => key:${key}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw_personal)) {
//     console.log(`Reflect.ownKeys => key:${key}`);
// }
// for (const key of Object.getOwnPropertyNames(black_myth_wtw_personal)) {
//     console.log(`Object.getOwnPropertyNames => key:${key}`);
// }
// 类原型链上的访问器属性不可枚举✅
// for (const key in black_myth_wtw_personal) {
//     console.log(`for...in => key:${key}`);
// }
// for (const key of Object.keys(black_myth_wtw_personal)) {
//     console.log(`Object.keys => key:${key}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw_personal)) {
//     console.log(`Reflect.ownKeys => key:${key}`);
// }
// for (const key of Object.getOwnPropertyNames(black_myth_wtw_personal)) {
//     console.log(`Object.getOwnPropertyNames => key:${key}`);
// }
// 相对于 ES5 继承时,继承是基于派生类的 this,父类只是在此基础上实行修饰;而对于 ES6 的继承,继承是基于父类的 this,派生类只是在此基础上实行修改,两套继承模式完全相反!!!!!!
// 使用 ES5 去模拟 ES6 class 类✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// 存在 TDZ 临时死区✅
// 类构造对象不可在类内部实行修改✅
// const Person = function (name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//     // 只可使用 new 构造调用✅
//     if (new.target === undefined) {
//         throw new TypeError(`Class constructor ${Person.name} cannot be invoked without 'new'`);
//     }
//     // TypeError
//     // Person = function (name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//     //     this.name = name;
//     //     this.age = age;
//     //     this.gender = gender;
//     //     this.birthday = birthday;
//     //     this.hobby = hobby;
//     //     this.lover = lover;
//     // }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
//     this.lover = lover;
// };
// Object.defineProperties(Person.prototype, {
//     // 类原型链上的方法不可枚举且不可使用 new 构造调用✅
//     introduce: {
//         value: function () {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${this.name} is not a constructor`);
//             }
//             return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//         },
//         enumerable: false,
//     },
//     // 类原型链上的访问器属性不可枚举✅
//     getName: {
//         get: function () {
//             return this.name;
//         },
//         enumerable: false,
//     }
// });
// const black_myth_wtw_personal = Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'WangJinJIn');
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'WangJinJIn');
// console.log(black_myth_wtw_personal.introduce());
// const black_myth_wtw_personal_introduce = new black_myth_wtw_personal.introduce();
// console.log(black_myth_wtw_personal.getName);
// for (const key in black_myth_wtw_personal) {
//     console.log(`for...in => key:${key}`);
// }
// for (const key of Object.keys(black_myth_wtw_personal)) {
//     console.log(`Object.keys => key:${key}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw_personal)) {
//     console.log(`Reflect.ownKeys => key:${key}`);
// }
// for (const key of Object.getOwnPropertyNames(black_myth_wtw_personal)) {
//     console.log(`Object.getOwnPropertyNames => key:${key}`);
// }
// 类表达式✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// const Person = class {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'WangJinJIn');
// console.log(black_myth_wtw_personal.introduce());
// 重命名的类表达式✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// const Person = class Person_Ano {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'WangJinJIn');
// console.log(black_myth_wtw_personal.introduce());
// 使用 ES5 去模拟重命名的类表达式✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// const Person = function Person_Ano(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//     if (new.target === undefined) {
//         throw new TypeError(`Class constructor ${Person.name} cannot be invoked without 'new'`);
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
//     this.lover = lover;
// };
// Object.defineProperties(Person.prototype, {
//     introduce: {
//         value: function () {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${this.name} is not a constructor`);
//             }
//             return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//         },
//         enumerable: false,
//     },
//     getName: {
//         get: function () {
//             return this.name;
//         },
//         enumerable: false,
//     }
// });
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'WangJinJIn');
// console.log(black_myth_wtw_personal.introduce());
// 将类作为参数实行传递✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// function bar(fn, ...args) {
//     return new fn(...args);
// }
// const black_myth_wtw_personal = bar(class {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }, 'black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'ZhaoYue');
// console.log(black_myth_wtw_personal.introduce());
// console.log(black_myth_wtw_personal.getName);
// 类声明的同时使用 new 构造调用✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// function bar(o) {
//     return o;
// }
// const black_myth_wtw_personal = bar(new class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'ZhaoYue'));
// console.log(black_myth_wtw_personal.introduce());
// console.log(black_myth_wtw_personal.getName);
// 可计算的类成员✅
// 类的生成器方法,注意可创建可迭代对象✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'ZhengShuAng');
// for(const value of black_myth_wtw_personal) {
//     console.log(`class generator => value:${value}`, value);
// }
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
//     // 注意这里使用委托生成器
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'ZhengShuAng');
// for (const value of black_myth_wtw_personal) {
//     console.log(`class generator => value:${value}`);
// }
// 类的访问器属性✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'ZhengShuAng');
// console.log(black_myth_wtw_personal.getName);
// 类的静态成员✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//
//     static getHobby() {
//         return `I love ${this.hobby ? this.hobby.sports.join(',') : black_myth_wtw.hobby.sports.join(',')}`;
//     }
//
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}~~~~~~`;
//     }
//     get getName() {
//         return this.name;
//     }
// }
// const black_myth_wtw_personal = new Person('black#myth#wtw', 36, true, '1993-06-30', {sports: ['football', 'soccer']}, 'ZhengShuAng');
// console.log(black_myth_wtw_personal.introduce());
// console.log(black_myth_wtw_personal.getName);
// console.log(Person.getHobby());
// 类的派生与继承✅
// 派生类的方法遮蔽✅
// class Rect {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     get_area() {
//         return this.width * this.height;
//     }
// }
// class Square extends Rect {
//     constructor(width, height) {
//         super(width, height);
//     }
//     get_area() {
//         return super.get_area() * Math.PI;
//     }
// }
// const square = new Square(40, 60);
// console.log(square.width, square.height);
// console.log(square.get_area());
// 派生类继承自普通函数或者函数表达式✅
// function Rect(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rect.prototype.get_area = function () {
//     return this.width * this.height;
// };
// class Square extends Rect {
//     constructor(width, height) {
//         super(width, height);
//     }
//     get_area() {
//         return super.get_area() * Math.PI;
//     }
// }
// const square = new Square(100, 200);
// console.log(square.width, square.height);
// console.log(square.get_area());
// function Rect(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rect.prototype.get_area = function () {
//     return this.width * this.height;
// };
// function bar(foo) {
//     return foo;
// }
// class Square extends bar(Rect) {
//     constructor(width, height) {
//         super(width, height);
//     }
//     get_area() {
//         return super.get_area() * Math.PI;
//     }
// }
// const square = new Square(300, 150);
// console.log(square.width, square.height);
// console.log(square.get_area());
// 派生类继承混入/混合 mixin✅
// const area = {
//     get_area() {
//         return this.width * this.height;
//     },
//     get_perimeter() {
//         return this.width + this.height;
//     }
// };
// function mixin(...mixin_args) {
//     function fBind(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     fBind.prototype = Object.assign({}, fBind.prototype, ...mixin_args);
//     return fBind;
// }
// class Square extends mixin(area) {
//     get_area() {
//         return Math.PI * super.get_area();
//     }
//     get_perimeter() {
//         return 2 * super.get_perimeter();
//     }
// }
// const square = new Square(72, 88);
// console.log(square.width, square.height);
// console.log(square.get_area());
// console.log(square.get_perimeter());
// 派生类所继承的访问器属性✅
// class Rect {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     get_area() {
//         return this.width * this.height;
//     }
//     get get_width() {
//         return this.width;
//     }
//     get get_height() {
//         return this.height;
//     }
//     set set_width(width) {
//         this.width = width;
//     }
// }
// class Square extends Rect {
//     constructor(width, height) {
//         super(width, height);
//     }
//     get_area() {
//         return Math.PI * super.get_area();
//     }
// }
// const square = new Square(100, 200);
// console.log(square.get_width, square.get_height);
// console.log(square.get_area());
// square.set_width = 300;
// console.log(square.get_width, square.get_height);
// console.log(square.get_area());
// 派生类所继承的静态成员✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// class Person {
//     static get_person() {
//         return `Hi,My name is ${black_myth_wtw.name}, ${black_myth_wtw.age} year's old, I'm a ${black_myth_wtw.gender ? 'boy' : 'girl'}, My birthday is ${black_myth_wtw.birthday}, I love ${black_myth_wtw.hobby.sports.join(',')}, My lover is ${black_myth_wtw.lover}~~~~~~`;
//     }
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}`;
//     }
//     get get_name() {
//         return this.name;
//     }
//     get get_age() {
//         return this.age;
//     }
//     set set_name(name) {
//         this.name = name;
//     }
// }
// class Black_Myth_WTW extends Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         super(name, age, gender, birthday, hobby);
//         this.lover = lover;
//     }
//     introduce() {
//         return `${super.introduce()}, My lover is ${this.lover}~~~~~~`;
//     }
// }
// const black_myth_wtw_personal = new Black_Myth_WTW('black@myth@wtw', 25, true, '1993-06-30', {sports: ['badminton', 'baseball']}, 'WangJinJin');
// console.log(black_myth_wtw_personal.introduce());
// console.log(black_myth_wtw_personal.get_name);
// console.log(black_myth_wtw_personal.get_age);
// black_myth_wtw_personal.set_name = 'black*myth*wtw';
// console.log(black_myth_wtw_personal.introduce());
// console.log(black_myth_wtw_personal.get_name);
// console.log(black_myth_wtw_personal.get_age);
// console.log(Black_Myth_WTW.get_person());
// 派生类继承自内置对象✅
// function MyArray(...args) {
//     Array.call(this, ...args);
// }
// // MyArray.prototype = Array.prototype;
// Object.setPrototypeOf(MyArray.prototype, Array.prototype);
// const my_array = new MyArray();
// my_array[0] = 'black_myth_wtw';
// my_array[1] = 24;
// my_array[2] = false;
// my_array[3] = '1994-03-10';
// my_array[4] = {
//     sports: ['basketball', 'volleyball']
// };
// my_array[5] = 'ZhaoYue';
// console.log(my_array.length);
// console.log(my_array);
// my_array.length = 4;
// console.log(my_array.length);
// console.log(my_array);
// class MyArray extends Array {
//     constructor() {
//         super();
//     }
// }
// const my_array = new MyArray();
// my_array[0] = 'black_myth_wtw';
// my_array[1] = 24;
// my_array[2] = false;
// my_array[3] = '1994-03-10';
// my_array[4] = {
//     sports: ['basketball', 'volleyball']
// };
// my_array[5] = 'ZhaoYue';
// console.log(my_array.length);
// console.log(my_array);
// my_array.length = 4;
// console.log(my_array.length);
// console.log(my_array);
// 相对于 ES5 继承时,继承是基于派生类的 this,父类只是在此基础上实行修饰,而 ES6 的继承,则是基于父类的 this,派生类只是在此基础上实行修改,两套继承模式完全相反
// [Symbol.species]-作为静态访问器属性,用于重新自定义派生类对象,确定值类型✅
// class MyArray extends Array {
//     constructor() {
//         super();
//     }
// }
// const my_array = new MyArray();
// my_array[0] = 'black_myth_wtw';
// my_array[1] = 24;
// my_array[2] = false;
// my_array[3] = '1994-03-10';
// my_array[4] = {
//     sports: ['basketball', 'volleyball']
// };
// my_array[5] = 'ZhaoYue';
// console.log(my_array);
// console.log(my_array.length);
// console.log(my_array instanceof MyArray);
// console.log(my_array instanceof Array);
// const my_array_slice_content = my_array.slice(0, 4);
// console.log(my_array_slice_content);
// console.log(my_array_slice_content.length);
// console.log(my_array_slice_content instanceof MyArray);
// console.log(my_array_slice_content instanceof Array);
// class MyArray extends Array {
//     static get [Symbol.species]() {
//         return Array;
//     }
//     constructor() {
//         super();
//     }
// }
// const my_array = new MyArray();
// my_array[0] = 'black_myth_wtw';
// my_array[1] = 24;
// my_array[2] = false;
// my_array[3] = '1994-03-10';
// my_array[4] = {
//     sports: ['basketball', 'volleyball']
// };
// my_array[5] = 'ZhaoYue';
// console.log(my_array);
// console.log(my_array.length);
// console.log(my_array instanceof MyArray);
// console.log(my_array instanceof Array);
// const my_array_slice_content = my_array.slice(0, 4);
// console.log(my_array_slice_content);
// console.log(my_array_slice_content.length);
// console.log(my_array_slice_content instanceof MyArray);
// console.log(my_array_slice_content instanceof Array);
// class Rect {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     get_area() {
//         return this.width * this.height;
//     }
//     clone() {
//         return new Rect[Symbol.species](this.width, this.height);
//     }
// }
// class Square extends Rect {
//     static get [Symbol.species]() {
//         return Square;
//     }
//     constructor(width, height) {
//         super(width, height);
//     }
//     get_area() {
//         return Math.PI * super.get_area();
//     }
//     clone() {
//         return new Square[Symbol.species](this.width, this.height);
//     }
// }
// const square = new Square(200, 400);
// console.log(square.width, square.height);
// console.log(square.get_area());
// console.log(square instanceof Square);
// console.log(square instanceof Rect);
// const square_clone = square.clone();
// console.log(square_clone.width, square_clone.height);
// console.log(square_clone.get_area());
// console.log(square_clone instanceof Square);
// console.log(square instanceof Rect);
// class Rect {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     get_area() {
//         return this.width * this.height;
//     }
//     clone() {
//         return new Rect[Symbol.species](this.width, this.height);
//     }
// }
// class Square extends Rect {
//     static get [Symbol.species]() {
//         return Rect;
//     }
//     constructor(width, height) {
//         super(width, height);
//     }
//     get_area() {
//         return Math.PI * super.get_area();
//     }
//     clone() {
//         return new Square[Symbol.species](this.width, this.height);
//     }
// }
// const square = new Square(200, 400);
// console.log(square.width, square.height);
// console.log(square.get_area());
// console.log(square instanceof Square);
// console.log(square instanceof Rect);
// const square_clone = square.clone();
// console.log(square_clone.width, square_clone.height);
// console.log(square_clone.get_area());
// console.log(square_clone instanceof Square);
// console.log(square instanceof Rect);
// 元属性 new.target 在类中的使用✅
// 作为抽象基类✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 32,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// class Person {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         if (new.target === Person) {
//             throw new TypeError('本 class 类为抽象基类,不可使用 new 构造调用~~~~~~');
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
// }
// const black_myth_wtw_personal = new Person('black@myth@wtw', 25, true, '1993-06-30', {sports: ['badminton', 'baseball']}, 'WangJinJin');
