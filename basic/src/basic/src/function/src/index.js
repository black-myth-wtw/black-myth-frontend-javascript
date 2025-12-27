// javascript function 函数
// 参数的默认值,注意 TDZ 临时死区
// function Person(name = 'black$myth$wtw', age = 26, gender = true, birthday = '1993-06-30', hobby = {sports: ['basketball', 'computer games']}) {
// ReferenceError
// function Person(name = age, age = 26, gender = true, birthday = '1993-06-30', hobby = {sports: ['basketball', 'computer games']}) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw.introduce());
// 不定参数,注意参数集合必须位于参数末尾
// pick 对象属性筛选
// function pick(o, ...properties) {
//     const pick_map = new WeakMap();
//     function pick_fn(o) {
//         const _o = Array.isArray(o) ? [] : {};
//         const exist_o = pick_map.get(o);
//         if (exist_o) return exist_o;
//         pick_map.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key) && properties.includes(key)) {
//                 if (typeof o[key] === 'object') {
//                     _o[key] = pick_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//     return pick_fn(o);
// }
// const symbol = Symbol.for('function');
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined
// };
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_pick = pick(black_myth_wtw, 'name', 'age', 'gender', 'birthday', 'hobby', 'introduce', symbol, 'me');
// black_myth_wtw_pick.name = 'black*myth*wtw';
// black_myth_wtw_pick.age = 30;
// black_myth_wtw_pick.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_pick);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw_pick.introduce());
// 展开运算符
// const arr = [22, 11, 16, 66, 88, 99, 32, 77, 55, 44, 3];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// 功能增强的 Function 构造声明方式
// name 属性用于捕获函数名称,以便于堆栈追踪错误
// const symbol = Symbol.for('function');
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     say_hi() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     introduce: () => {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     myself: new Function(),
//     get get_name() {
//         return this.name;
//     },
//     [symbol]: 'yes',
//     another: undefined
// };
// console.log(black_myth_wtw.introduce.name);
// console.log(black_myth_wtw.say_hi.name);
// console.log(black_myth_wtw.myself.name);
// console.log(black_myth_wtw.get_name.name);
// const f_bind_introduce = black_myth_wtw.introduce.bind(black_myth_wtw);
// console.log(f_bind_introduce.name);
// 元属性 new.target 其是直接绑定至内置对象 [[Construct]] 内的,当函数触发执行内置对象 [[Call]] 时,直接返回 undefined
// function Person(name, age, gender, birthday, hobby) {
//     if (new.target === undefined) {
//         throw new TypeError('当前函数必须被 new 类构造调用~~~~~~');
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// Person.call(this, 'black$myth$wtw', 26, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// 块级函数声明
// function do_it(condition) {
//     console.log(Person);
//     if (condition) {
//         function Person() {
//         }
//     }
//     console.log(Person);
// }
// do_it();
// ReferenceError
// function do_it(condition) {
//     console.log(Person);
//     if (condition) {
//         let Person = function () {
//         };
//     }
//     console.log(Person);
// }
// do_it();
// 箭头函数
// 无 this arguments super 以及 new.target
// 无原型链
// this 以及 arguments 都会继承自最近的词法作用域执行时的上下文对象
// var name = 'black&myth&wtw',
//     age = 32,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     };
// const symbol = Symbol.for('function');
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     say_hi() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     introduce: () => {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     myself() {
//         // setTimeout(() => {
//         //     console.log(`Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`);
//         // }, 3000);
//         setTimeout(function () {
//             console.log(`Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`);
//         }, 3000);
//     },
//     me() {
//         setTimeout(function () {
//             console.log(arguments[0], arguments[1]);
//         }, 4000);
//         // setTimeout(() => {
//         //     console.log(arguments[0], arguments[1]);
//         // }, 4000);
//     },
//     [symbol]: 'yes',
//     another: undefined
// };
// console.log(black_myth_wtw.say_hi());
// console.log(black_myth_wtw.introduce());
// black_myth_wtw.myself();
// black_myth_wtw.me('black+myth+wtw', 16);
// javascript curry 函数参数柯里化
// const curry = (fn) => {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     }
//     return function callee() {
//         const args = Array.prototype.slice.call(arguments);
//         if (args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return function () {
//                 const callee_args = Array.prototype.slice.call(arguments);
//                 return callee(...[...args, ...callee_args]);
//             };
//         }
//     }
// };
// const curry = (fn) => {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     }
//     return function callee() {
//         const args = Array.prototype.slice.call(arguments);
//         if (args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return () => {
//                 console.log(arguments);
//                 const callee_args = Array.prototype.slice.call(arguments);
//                 return callee(...[...args, ...callee_args]);
//             };
//         }
//     }
// };
// function curry_fn(a, b, c, d) {
//     return a * b + c * d;
// }
// const curried = curry(curry_fn);
// console.log('curry_result:', curried(2, 3, 4, 5));
// console.log('curry_result:', curried(2, 3)(4, 5));
// console.log('curry_result:', curried(2, 3, 4)(5));
// console.log('curry_result:', curried(2)(3)(4)(5));
// console.log('curry_result:', curried(2)(3, 4)(5));
// console.log('curry_result:', curried(2)(3, 4, 5));
// console.log('curry_result:', curried(2)(3)(4, 5));
// console.log('curry_result:', curried(2, 3)(4)(5));
// function do_it() {
//     console.log(arguments[0] + arguments[1]);
// }
// do_it('black_myth_wtw', 26);
// function do_it() {
//     return function () {
//         console.log(arguments[0] + arguments[1]);
//     }
// }
// const callee = do_it('black_myth_wtw', 26);
// callee(true, '1993-06-30');
// function do_it() {
//     return () => {
//         console.log(arguments[0] + arguments[1]);
//     }
// }
// const callee = do_it('black_myth_wtw', 26);
// callee(true, '1993-06-30');
// 尾调用优化
// 必须作为函数内最后一步执行
// 执行时的结果必须实行返回
// 执行时不得操作或者计算函数词法作用域内的变量或者函数,以防止产生闭包,导致堆栈溢出、内存泄漏的情况
// 原理: 实际上就是避免多堆栈存储,实行单堆栈循环使用以提高运行效率,防止产生堆栈溢出、内存泄漏的情况
// 应用: 递归
// 推行: 并没有得到大规模推行,目前只在 safari 浏览器内得以实现,在其他的浏览器内极其容易出现堆栈溢出、内存泄漏的情况
// fibonacci 斐波那契数列
// function fibonacci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const fibonacci_result = fibonacci(5);
// const fibonacci_result = fibonacci(10);
// const fibonacci_result = fibonacci(20);
// const fibonacci_result = fibonacci(30);
// const fibonacci_result = fibonacci(40);
// const fibonacci_result = fibonacci(50);
// console.log('fibonacci_result:', fibonacci_result);
// tail call fibonacci 尾调用优化斐波那契数列
// function tail_call_fibonacci(n, n1 = 0, n2 = 1) {
//     if (n === 0) return n1;
//     return tail_call_fibonacci(n - 1, n2, n1 + n2);
// }
// const tail_call_fibonacci_result = tail_call_fibonacci(5);
// const tail_call_fibonacci_result = tail_call_fibonacci(10);
// const tail_call_fibonacci_result = tail_call_fibonacci(20);
// const tail_call_fibonacci_result = tail_call_fibonacci(30);
// const tail_call_fibonacci_result = tail_call_fibonacci(40);
// const tail_call_fibonacci_result = tail_call_fibonacci(50);
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci_result);
