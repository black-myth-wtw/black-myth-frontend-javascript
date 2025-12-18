// 参数的默认值,注意 TDZ 临时死区
// function Person(name = 'black_myth_wtw', age = 29) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`Hi,My name is ${this.name},${this.age} year's old~~~~~~`);
// };
// const black_myth_wtw = new Person();
// black_myth_wtw.introduce();
// ReferenceError
// function Person(name = age, age = 29) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`Hi,My name is ${this.name},${this.age} year's old~~~~~~`);
// };
// const black_myth_wtw = new Person();
// black_myth_wtw.introduce();
// 不定参数,注意参数集合必须位于参数末尾
// function pick(o, ...properties) {
//     const pick_weak_map = new WeakMap();
//
//     function pick_loop(o) {
//         const _o = Array.isArray(o) ? [] : {},
//             exist_o = pick_weak_map.get(o);
//         if (exist_o) return exist_o;
//         pick_weak_map.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key) && properties.includes(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = pick_loop(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//
//     return pick_loop(o);
// }
// const symbol = Symbol.for('pick');
// const black_myth_wtw = {
//     name: 'black-myth-wtw',
//     age: 32,
//     gender: true,
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     },
//     [symbol]: true,
//     another: undefined
// };
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_pick = pick(black_myth_wtw, 'name', 'age', 'hobby', symbol, 'me');
// black_myth_wtw_pick.name = 'black@myth@wtw';
// black_myth_wtw_pick.age = 33;
// black_myth_wtw_pick.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw);
// console.log(black_myth_wtw_pick);
// 展开运算符
// const arr = [2, 99, 100, 32, 28, 77, 88, 66, 96, 55, 0, 1, 199, 123];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// 功能增强的 Function 构造声明方式
// name 属性捕获函数名称,以便于堆栈追踪错误
// const fn = new Function();
// console.log(fn.name);
// const black_myth_wtw = {
//     name: 'black-myth-wtw',
//     age: 32,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     love: () => {
//         return `I love ${this.hobby.sports.join(',')}`
//     },
//     get get_name() {
//         return this.name;
//     }
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.age = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
// const black_myth_wtw_bind = Person.bind(black_myth_wtw);
// console.log(black_myth_wtw_bind.name);
// console.log(black_myth_wtw.introduce.name);
// console.log(Person.name);
// console.log(black_myth_wtw.love.name);
// console.log(black_myth_wtw.get_name.name);
// 元属性 new.target,其是直接绑定至内置对象 [[Construct]] 内的,当函数触发执行内置对象 [[Call]] 时,直接返回 undefined
// function Person(name, age) {
//     if (!(this instanceof Person)) {
//         throw new TypeError('当前函数只能被类 new 构造调用~~~~~~');
//     }
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
// // Person('black_myth_wtw', 29);
// const black_myth_wtw = new Person('black_myth_wtw', 32);
// console.log(black_myth_wtw.name);
// console.log(black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// Person.call(black_myth_wtw, 'black@myth@wtw', 36);
// console.log(black_myth_wtw.name);
// console.log(black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// function Person(name, age) {
//     if (new.target === undefined) {
//         throw new TypeError('当前函数只能被类 new 构造调用~~~~~~');
//     }
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
// // Person('black_myth_wtw', 29);
// const black_myth_wtw = new Person('black_myth_wtw', 32);
// console.log(black_myth_wtw.name);
// console.log(black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// Person.call(black_myth_wtw, 'black@myth@wtw', 36);
// console.log(black_myth_wtw.name);
// console.log(black_myth_wtw.age);
// console.log(black_myth_wtw.introduce());
// 块级函数声明
// function doIt(condition) {
//     console.log(bar);
//     if (condition) {
//         function bar() {
//         }
//     }
//     console.log(bar);
// }
// doIt();
// Reference
// function doIt(condition) {
//     console.log(bar);
//     if (condition) {
//         const bar = function () {
//         }
//     }
//     console.log(bar);
// }
// doIt();
// 箭头函数
// 特性: 无 this,arguments,super 以及 new.target
// 无原型链
// 不可使用类 new 构造调用
// 基本用法
// this 以及 arguments 都会继承自最近的词法作用域执行时的上下文对象
// const add = (a, b) => {
//     return a + b
// };
// console.log(add(3, 109));
// const multiply = x => x * x;
// console.log(multiply(33));
// const person = (name, age) => ({name, age});
// console.log(person('black@myth@wtw', 32));
// const subtract = (a, b) => a - b;
// console.log(subtract(100, 7));
// var name = 'black_myth_wtw',
//     age = 26;
// const wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     introduce: () => {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
// console.log(wtw.introduce());
// var name = 'black_myth_wtw',
//     age = 26;
// const wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     introduce() {
//         setTimeout(function () {
//             console.log(`Hi,My name is ${this.name},${this.age} year's old~~~~~~`);
//         }, 888);
//     }
// };
// wtw.introduce();
// var name = 'black_myth_wtw',
//     age = 26;
// const wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     introduce() {
//         setTimeout(() => {
//             console.log(`Hi,My name is ${this.name},${this.age} year's old~~~~~~`);
//         }, 888);
//     }
// };
// wtw.introduce();
// function person() {
//     console.log(arguments[0], arguments[1]);
// }
// person('black-myth-wtw', 32);
// var name = 'black_myth_wtw',
//     age = 26;
// const wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     introduce() {
//         setTimeout(() => {
//             console.log(arguments[0], arguments[1]);
//         }, 888);
//     }
// };
// wtw.introduce('black*myth*wtw', 24);
// function person() {
//     return () => arguments[0];
// }
// console.log(person('black&myth&wtw')(22));
// 尾调用优化
// 特性:
// 必须作为函数内最后一步执行
// 执行时的结果必须实行返回
// 执行时不得操作和计算词法作用域内的变量和函数,以避免产生闭包
// 原理: 避免多堆栈存储,以防止产生堆栈溢出、内存泄漏的情况,实行单堆栈循环使用以提高运行效率
// 应用: 递归
// 推行: 并没有得到大规模推行,目前只在 safari 浏览器内得以实现,在其他浏览器内极易出现堆栈溢出、内存泄漏的情况
// 尾调用优化斐波那契数列
// function fibonacci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));
// console.log(fibonacci(10));
// console.log(fibonacci(20));
// console.log(fibonacci(30));
// console.log(fibonacci(40));
// console.log(fibonacci(50));
// console.log(fibonacci(100));
// console.log(fibonacci(200));
// function fibonacci(n, n1, n2) {
//     if (typeof n1 === 'undefined' && typeof n2 === 'undefined') {
//         n1 = 0;
//         n2 = 1;
//     }
//     if (n === 0) return n1;
//     return fibonacci(n - 1, n2, n1 + n2);
// }
// console.log(fibonacci(5));
// console.log(fibonacci(10));
// console.log(fibonacci(20));
// console.log(fibonacci(30));
// console.log(fibonacci(40));
// console.log(fibonacci(50));
// console.log(fibonacci(100));
// console.log(fibonacci(200));
// const fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// console.log(fibonacci(5));
// console.log(fibonacci(10));
// console.log(fibonacci(20));
// console.log(fibonacci(30));
// console.log(fibonacci(40));
// console.log(fibonacci(50));
// console.log(fibonacci(100));
// console.log(fibonacci(200));
