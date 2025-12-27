// javascript class 类
// 基本用法
// ReferenceError
// console.log('Person:', Person);
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         // TypeError
//         // Person = class Black_Myth_WTW {
//         // }
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
//     get get_hobby() {
//         return this.hobby;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.get_hobby);
// for (const key in black_myth_wtw) {
//     console.log(`class:for...in-key:${key}`);
// }
// TypeError
// const black_myth_wtw_introduce = new black_myth_wtw.introduce();
// console.log(black_myth_wtw_introduce);
// TypeError
// Person.call(this, 'black@myth@wtw', 30, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// 使用 ES5 模拟 ES6 class 类
// ReferenceError
// console.log(Person);
// const Person = (function () {
//     function Person_Class(name, age, gender, birthday, hobby) {
//         if (new.target === undefined) {
//             throw new TypeError(`Class constructor ${Person.name} cannot be invoked without 'new'`);
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         // Person = class Black_Myth_WTW {}
//     }
//     Object.defineProperty(Person_Class.prototype, 'introduce', {
//         value() {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${this.name} is not a constructor`);
//             }
//             return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//         },
//         enumerable: false,
//         writable: true,
//         configurable: false,
//     });
//     Object.defineProperty(Person_Class.prototype, 'get_hobby', {
//         get() {
//             return this.hobby;
//         },
//         enumerable: false,
//         // writable: false,
//         configurable: false,
//     });
//     return Person_Class;
// })();
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.get_hobby);
// for (const key in black_myth_wtw) {
//     console.log(`class:for...in-key:${key}`);
// }
// TypeError
// const black_myth_wtw_introduce = new black_myth_wtw.introduce();
// console.log(black_myth_wtw_introduce);
// TypeError
// Person.call(this, 'black@myth@wtw', 30, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// 特性
// 存在 TDZ 临时死区
// 类赋值变量不可在类内部实行修改
// 只可使用 new 构造调用
// 类原型链上的方法不可枚举且不可使用 new 构造调用
// 类原型链上的访问器属性不可枚举
// 相对于 ES5 继承时,继承是基于派生类的 this,父类只是在此基础上实行修复;而 ES6 类的继承,继承是基于父类的 this,派生类只是在此基础上实行修改,两套继承模式完全相反
// 类表达式
// const Person = class {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// 重命名的类表达式
// const Person = class Person_Real {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// 使用 ES5 模拟重命名的类表达式
// const Person = (function () {
//     function Person_Class(name, age, gender, birthday, hobby) {
//         if (new.target === undefined) {
//             throw new TypeError(`Class constructor ${Person.name} cannot be invoked without 'new'`);
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         // Person = class Black_Myth_WTW {}
//     }
//     Object.defineProperty(Person_Class.prototype, 'introduce', {
//         value() {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${this.name} is not a constructor`);
//             }
//             return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//         },
//         enumerable: false,
//         writable: true,
//         configurable: false,
//     });
//     Object.defineProperty(Person_Class.prototype, 'get_hobby', {
//         get() {
//             return this.hobby;
//         },
//         enumerable: false,
//         // writable: false,
//         configurable: false,
//     });
//     return Person_Class;
// })();
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// 将类作为参数实行传递
// function class_obj(class_params, ...args) {
//     return new class_params(...args);
// }
// const black_myth_wtw = class_obj(class {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }, 'black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// 在类声明的同时使用 new 构造调用
// const black_myth_wtw = new class {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// 类的访问器属性c
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
//     get get_hobby() {
//         return this.hobby;
//     }
//     set set_hobby(hobby) {
//         this.hobby = hobby;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.get_hobby);
// black_myth_wtw.set_hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// console.log(black_myth_wtw.get_hobby);
// console.log(black_myth_wtw.introduce());
// 可计算的类成员
// 类的生成器方法,注意可创建可迭代对象
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// for (const val of black_myth_wtw) {
//     console.log(`class:values-value:${val}`);
// }
// 类的静态成员
// class Person {
//     static get_name() {
//         return 'I\'m  black*myth*wtw~~~~~~';
//     }
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(Person.get_name());
// 类的派生与继承
// - 派生类的方法遮蔽
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
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
// console.log('square_area:', square.area());
// - 派生类继承的访问器属性
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
// console.log('square_area:', square.area());
// console.log('square_width:', square.get_width);
// square.set_width = 30;
// console.log('square_width:', square.get_width);
// console.log('square_area:', square.area());
// - 派生类继承的静态成员
// class Person {
//     static get_name() {
//         return 'I\'m  black@myth@wtw~~~~~~';
//     }
//     constructor(name, age, gendery) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// }
// class Black_Myth_WTW extends Person {
//     constructor(name, age, gender, birthday, hobby) {
//         super(name, age, gender);
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `${super.introduce()},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }
// const black_myth_wtw = new Black_Myth_WTW('black!myth!wtw', 30, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(Black_Myth_WTW.get_name());
// - 派生类继承自普通函数或者普通函数表达式
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype.area = function () {
//     return this.width * this.height;
// };
// class Square extends RectAngle {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 30);
// console.log('square_area:', square.area());
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
// }
// function bar() {
//     return RectAngle;
// }
// class Square extends bar() {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(40, 30);
// console.log('square_area:', square.area());
// const area = {
//     area() {
//         return this.width * this.height;
//     }
// };
// const perimeter = {
//     perimeter() {
//         return this.width + this.height;
//     }
// };
// function mix_ins(...mix_ins_params) {
//     function fBind(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     fBind.prototype = Object.assign({}, fBind.prototype, ...mix_ins_params);
//     return fBind;
// }
// class Square extends mix_ins(perimeter, area) {
//     area() {
//         return Math.PI * super.area();
//     }
//     perimeter() {
//         return 2 * super.perimeter();
//     }
// }
// const square = new Square(35, 30);
// console.log('square_perimeter:', square.perimeter());
// console.log('square_area:', square.area());
// - 内置对象继承
// ES5
// function MyArray(...args) {
//     Array.call(this, ...args);
// }
// Object.setPrototypeOf(MyArray.prototype, Array.prototype);
// const arr = new MyArray();
// arr[0] = 'black_myth_wtw';
// arr[1] = 28;
// arr[2] = true;
// arr[4] = {sports: ['basketball', 'computer games']};
// console.log(arr, arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr.length);
// arr.length = 0;
// console.log(arr, arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr.length);
// class MyArray extends Array {
// }
// const arr = new MyArray();
// arr[0] = 'black_myth_wtw';
// arr[1] = 28;
// arr[2] = true;
// arr[4] = {sports: ['basketball', 'computer games']};
// console.log(arr, arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr.length);
// arr.length = 3;
// console.log(arr, arr[0], arr[1], arr[2]);
// console.log(arr.length);
// arr.length = 0;
// console.log(arr, arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr.length);
// - [Symbol.species]-作为静态访问器属性,用于重新自定义创建派生类对象,确定值类型
// class MyArray extends Array {
// }
// const arr = new MyArray();
// arr[0] = 'black_myth_wtw';
// arr[1] = 28;
// arr[2] = true;
// arr[3] = '1993-06-30';
// arr[4] = {sports: ['basketball', 'computer games']};
// console.log(arr, arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr.length);
// const arr_slice = arr.slice(0, 4);
// console.log(arr_slice);
// console.log(arr_slice instanceof MyArray);
// console.log(arr_slice instanceof Array);
// class MyArray extends Array {
//     static get [Symbol.species]() {
//         return Array;
//     }
// }
// const arr = new MyArray();
// arr[0] = 'black_myth_wtw';
// arr[1] = 28;
// arr[2] = true;
// arr[3] = '1993-06-30';
// arr[4] = {sports: ['basketball', 'computer games']};
// console.log(arr, arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr.length);
// const arr_slice = arr.slice(0, 4);
// console.log(arr_slice);
// console.log(arr_slice instanceof MyArray);
// console.log(arr_slice instanceof Array);
// class RectAngle {
//     static get [Symbol.species]() {
//         return this;
//     }
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     clone() {
//         return new RectAngle[Symbol.species](this.width, this.height);
//     }
// }
// class Square extends RectAngle {
//     // static get [Symbol.species]() {
//     //     return this;
//     // }
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
// const square = new Square(20, 30),
//     square_clone = square.clone();
// console.log(square.area());
// console.log(square_clone instanceof Square);
// console.log(square_clone instanceof RectAngle);
// 元属性 new.target 在类中的使用
// - 作为抽象基类
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         if (new.target === Person) {
//             throw new TypeError('当前抽象基类不可使用 new 构造调用~~~~~~');
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }
// const black_myth_wtw = new Person('black!myth!wtw', 30, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
