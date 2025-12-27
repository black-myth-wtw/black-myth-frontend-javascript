// class 类
// 基本用法
// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// // Person.call(this, 'black$myth$wtw', 28);
// // const introduce = new black_myth_wtw.introduce();
// for (const key in black_myth_wtw) {
//     console.log(key);
// }
// 类的特性
// 存在 TDZ 临时死区
// 类赋值不可在类内部实行修改
// 只可使用 new 构造调用
// 类原型链上的方法不可枚举且不可使用 new 构造调用
// 类原型链上的访问器属性不可枚举
// 相对于 ES5 时,继承是基于派生类的 this,父类只是在此基础上实行修饰,而在 ES6 中,则是继承基于父类的 this,派生类在此基础上实行修改,两套继承模式完全相反
// ES5 模拟 ES6 类
// let Person = (() => {
//     const Person = function (name, age, gender) {
//         if (new.target === undefined) {
//             throw new TypeError(`Class constructor ${Person.name} cannot be invoked without 'new'!`);
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     };
//     Object.defineProperty(Person.prototype, "introduce", {
//         value() {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${Person.name} is not a constructor!`);
//             }
//             return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//         },
//         enumerable: false,
//         configurable: false,
//         writable: false,
//     });
//     return Person;
// })();
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// // Person.call(this, 'black$myth$wtw', 28);
// // new black_myth_wtw.introduce();
// for(const key in black_myth_wtw) {
//     console.log(key);
// }
// 类的表达式
// const Person = class {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// };
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// 命名的类的表达式
// const Person = class Information {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// };
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// 使用 ES5 模拟命名的类的表达似乎
// let Person = (() => {
//     const Black_Myth_WTW = function (name, age, gender) {
//         if (new.target === undefined) {
//             throw new TypeError(`Class constructor ${Black_Myth_WTW.name} cannot be invoked without 'new'!`);
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     };
//     Object.defineProperty(Black_Myth_WTW.prototype, "introduce", {
//         value() {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${Black_Myth_WTW.name} is not a constructor!`);
//             }
//             return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//         },
//         enumerable: false,
//         configurable: false,
//         writable: false,
//     });
//     return Black_Myth_WTW;
// })();
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// // Person.call(this, 'black$myth$wtw', 28);
// // new black_myth_wtw.introduce();
// for(const key in black_myth_wtw) {
//     console.log(key);
// }
// 将类作为参数实行传递
// function new_class(class_obj, ...args) {
//     return new class_obj(...args);
// }
// const black_myth_wtw = new_class(class {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// }, 'black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// 类声明的同时使用 new 构造调用
// const black_myth_wtw = new class {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// }('black_myth_wtw', 32, true);
// console.log(black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// // new black_myth_wtw.introduce();
// for (const key in black_myth_wtw) {
//     console.log(key);
// }
// 类的访问器属性
// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
//     get get_name() {
//         return this.name;
//     }
//     set set_name(name) {
//         this.name = name;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(typeof black_myth_wtw, black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// black_myth_wtw.set_name = 'black@myth@wtw';
// console.log(black_myth_wtw.introduce());
// for (const key in black_myth_wtw) {
//     console.log(key);
// }
// ES5 模拟类的访问器属性
// 可计算的类成员
// 类的生成器方法,注意可创建可迭代对象
// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(typeof black_myth_wtw, black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// for (const key in black_myth_wtw) {
//     console.log(key);
// }
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// 类的静态成员
// class Person {
//     static getName() {
//         return `I'm Black Myth WuKong~~~~~~`;
//     }
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true);
// console.log(typeof black_myth_wtw, black_myth_wtw instanceof Person, black_myth_wtw instanceof Object);
// console.log(black_myth_wtw.introduce());
// for (const key in black_myth_wtw) {
//     console.log(key);
// }
// console.log(Person.getName());
// 类的派生与继承
// 派生类的方法遮蔽
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
// }
// class Square extends RectAngle {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 20);
// console.log(square, square.width, square.height);
// console.log(square.area());
// console.log(square instanceof Square, square instanceof RectAngle);
// ES5 模拟派生类方法遮蔽
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype.area = function () {
//     return this.width * this.height;
// };
// function Square(width, height) {
//     RectAngle.call(this, width, height);
// }
// Square.prototype.area = function () {
//     return Math.PI * RectAngle.prototype.area.call(this);
// };
// Object.setPrototypeOf(Square.prototype, RectAngle.prototype);
// const square = new Square(10, 20);
// console.log(square, square.width, square.height);
// console.log(square.area());
// console.log(square instanceof Square, square instanceof RectAngle);
// 派生类所继承的访问器属性
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     get get_width() {
//         return this.width;
//     }
//     set set_width(width) {
//         this.width = width;
//     }
// }
// class Square extends RectAngle {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 20);
// console.log(square, square.width, square.height);
// console.log(square.area());
// square.set_width = 20;
// console.log(square.area());
// console.log(square instanceof Square, square instanceof RectAngle);
// 派生类所继承的静态成员
// class Person {
//     static getName() {
//         return `I'm Black Myth WuKong~~~~~~`;
//     }
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}!`;
//     }
// }
// class Black_Myth_WuKong extends Person {
//     constructor(name, age, gender, hobby) {
//         super();
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `${super.introduce()}I love ${this.hobby.sports.join(',')}`;
//     }
// }
// const black_myth_wtw = new Black_Myth_WuKong('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw, black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.hobby);
// console.log(black_myth_wtw.introduce());
// console.log(Black_Myth_WuKong.getName());
// 派生类继承自普通函数或者函数表达式
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype.area = function () {
//     return this.width * this.height;
// }
// class Square extends RectAngle {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 20);
// console.log(square, square.width, square.height);
// console.log(square.area());
// console.log(square instanceof RectAngle, square instanceof Square);
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
// }
//
// function getRect() {
//     return RectAngle;
// }
//
// class Square extends getRect() {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 20);
// console.log(square, square.width, square.height);
// console.log(square.area());
// console.log(square instanceof RectAngle, square instanceof Square);
// function mix_in(...mixins) {
//     const fBind = function(width, height) {
//         this.width = width;
//         this.height = height;
//     };
//     fBind.prototype = Object.assign({}, fBind.prototype, ...mixins);
//     console.log(fBind.prototype.area);
//     return fBind;
// }
// const area = {
//     area() {
//         return this.width * this.height;
//     }
// };
// const perimeter = {
//     perimeter() {
//         return 2 * this.width * this.height;
//     }
// };
// class Square extends mix_in(area, perimeter) {
//     area () {
//         return Math.PI * super.area();
//     }
//     perimeter() {
//         return Math.PI * super.perimeter();
//     }
// }
// const square = new Square(10, 20);
// console.log(square, square.width, square.height);
// console.log(square.area(), square.perimeter());
// console.log(square instanceof Square);
// 内置对象继承
// function MyArray(...args) {
//     Array.call(this, ...args);
// }
// Object.setPrototypeOf(MyArray.prototype, Array.prototype);
// const black_myth_wtw = new MyArray();
// black_myth_wtw[0] = 'black_myth_wtw';
// black_myth_wtw[1] = 28;
// black_myth_wtw[2] = true;
// console.log(black_myth_wtw.length);
// black_myth_wtw[4] = {sports: ['basketball', 'computer games']};
// console.log(black_myth_wtw.length);
// console.log(black_myth_wtw);
// console.log(black_myth_wtw[2]);
// black_myth_wtw.length = 0;
// console.log(black_myth_wtw[2]);
// class MyArray extends Array {}
// const black_myth_wtw = new MyArray();
// black_myth_wtw[0] = 'black_myth_wtw';
// black_myth_wtw[1] = 28;
// black_myth_wtw[2] = true;
// console.log(black_myth_wtw.length);
// black_myth_wtw[4] = {sports: ['basketball', 'computer games']};
// console.log(black_myth_wtw.length);
// console.log(black_myth_wtw);
// console.log(black_myth_wtw[1]);
// console.log(black_myth_wtw[2]);
// black_myth_wtw.length = 0;
// console.log(black_myth_wtw[2]);
// Symbol.species
// 作为静态访问器属性,用于重新定义创建派生类对象,确定值类型
// class MyArray extends Array {
// }
// const black_myth_wtw = new MyArray();
// black_myth_wtw[0] = 'black_myth_wtw';
// black_myth_wtw[1] = 28;
// black_myth_wtw[2] = true;
// black_myth_wtw[4] = {sports: ['basketball', 'computer games']};
// console.log(black_myth_wtw instanceof MyArray);
// console.log(black_myth_wtw instanceof Array);
// const black_myth_wtw_slice = black_myth_wtw.slice(0, 2);
// console.log(black_myth_wtw_slice instanceof Array);
// console.log(black_myth_wtw_slice instanceof MyArray);
// class MyArray extends Array {
//     static get [Symbol.species]() {
//         return Array;
//     }
// }
// const black_myth_wtw = new MyArray();
// black_myth_wtw[0] = 'black_myth_wtw';
// black_myth_wtw[1] = 28;
// black_myth_wtw[2] = true;
// black_myth_wtw[4] = {sports: ['basketball', 'computer games']};
// console.log(black_myth_wtw instanceof MyArray);
// console.log(black_myth_wtw instanceof Array);
// const black_myth_wtw_slice = black_myth_wtw.slice(0, 2);
// console.log(black_myth_wtw_slice);
// console.log(black_myth_wtw_slice.length);
// console.log(black_myth_wtw_slice instanceof Array);
// console.log(black_myth_wtw_slice instanceof MyArray);
// class RectAngle {
//     static get [Symbol.species]() {
//         return this;
//     }
//
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
//
//     clone() {
//         return new RectAngle[Symbol.species](this.width, this.height);
//     }
// }
// class Square extends RectAngle {
//     static get [Symbol.species]() {
//         return RectAngle;
//     }
//     area() {
//         return Math.PI * super.area();
//     }
//     clone() {
//         return new Square[Symbol.species](this.width, this.height);
//     }
// }
// const rect_angle = new RectAngle(20, 20),
//     rect_angle_clone = rect_angle.clone();
// console.log(rect_angle.area());
// console.log(rect_angle_clone.area());
// console.log(rect_angle_clone instanceof RectAngle);
// const square = new Square(20, 20),
//     square_clone = square.clone();
// console.log(square.area());
// console.log(square_clone.area());
// console.log(square_clone instanceof Square);
// console.log(square_clone instanceof RectAngle);
// 元属性 new.target 在类中的使用
// 抽象基类
