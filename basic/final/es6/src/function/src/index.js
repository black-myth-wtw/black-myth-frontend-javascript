// 函数的参数的默认值,注意 TDZ 临时死区✅
// function Person(name = 'black_myth_wtw', age = 24, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['running', 'skiing']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Person();
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// console.log(`black_myth_wtw_introduce:${black_myth_wtw_introduce}`);
// ReferenceError
// function Person(name = age, age = 24, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['running', 'skiing']
// }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Person();
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// console.log(`black_myth_wtw_introduce:${black_myth_wtw_introduce}`);
// 不定参数,注意参数集合必须位于参数末尾✅
// function pick(o, ...properties) {
//     const pick_weak_map = new WeakMap();
//     function pick_fn(o) {
//         const _o = Array.isArray(o) ? [] : {};
//         const exist_o = pick_weak_map.get(o);
//         if (exist_o) return exist_o;
//         pick_weak_map.set(o, o);
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
// const symbol_pick = Symbol.for('pick');
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol_pick]: 'yes',
//     another: undefined
// };
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_pick = pick(black_myth_wtw, 'name', 'age', 'gender', 'hobby', symbol_pick, 'me');
// console.log('black_myth_wtw:', black_myth_wtw);
// console.log('black_myth_wtw_pick:', black_myth_wtw_pick);
// 展开运算符✅
// const arr = [88, 8, 16, 101, 25, 42, 56, 64, 32, 89, 77, 108, 69];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// 功能增强的 Function 构造声明方式✅
// 通过获取 name 去捕获函数名称,以便于堆栈追踪错误✅
// const symbol_pick = Symbol.for('pick');
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     love: () => {
//         return `I love ${this.name}~~~~~~`;
//     },
//     get get_name() {
//         return this.name;
//     },
//     [symbol_pick]: 'yes',
//     another: undefined
// };
// const Person = new Function();
// const bind_introduce = black_myth_wtw.introduce.bind(Person);
// console.log('introduce name:', black_myth_wtw.introduce.name);
// console.log('get_name name:', black_myth_wtw.get_name.name);
// console.log('love name:', black_myth_wtw.love.name);
// console.log('Person name:', Person.name);
// console.log('bind_introduce name:', bind_introduce.name);
// 元属性 new.target,其是直接绑定至内置对象 [[Construct]] 内的,当函数触发执行内置对象 [[Call]] 时,直接返回 undefined✅
// function Person(name = 'black_myth_wtw', age = 24, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['running', 'skiing']
// }) {
//     if (new.target === undefined) {
//         throw new TypeError('当前函数只可被 new 构造调用!!!!!!');
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw.introduce());
// function Person(name = 'black_myth_wtw', age = 24, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['running', 'skiing']
// }) {
//     if (new.target === undefined) {
//         throw new TypeError('当前函数只可被 new 构造调用!!!!!!');
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = Person('black%myth%wtw', 33, false, '1994-03-10', {sports: ['badminton', 'golf']});
// console.log(black_myth_wtw.introduce());
// 块级函数声明✅
// function do_it(condition) {
//     console.log(Person);
//     if (condition) {
//         const Person = function (name = 'black_myth_wtw', age = 24, gender = true, birthday = '1993-04-27', hobby = {sports: ['running', 'skiing']}) {
//             this.name = name;
//             this.age = age;
//             this.gender = gender;
//             this.birthday = birthday;
//             this.hobby = hobby;
//         };
//         Person.prototype.introduce = function () {
//             return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//         };
//     }
//     console.log(Person);
// }
// do_it();
// 箭头函数✅
// 无 this/arguments/super/new.target✅
// 无原型链✅
// 不可使用 new 构造调用✅
// this 与 arguments 会继承自最近的词法作用域执行时的上下文对象✅
// var name = 'black@myth@wtw',
//     age = 28,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce: () => {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// ReferenceError
// let name = 'black@myth@wtw',
//     age = 28,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce: () => {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// var name = 'black@myth@wtw',
//     age = 28,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce() {
//         const timer = setTimeout(() => {
//             console.log(`Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`);
//             clearTimeout(timer);
//         }, 3000);
//     }
// };
// black_myth_wtw.introduce();
// var name = 'black@myth@wtw',
//     age = 28,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce() {
//         const timer = setTimeout(function (){
//             console.log(`Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`);
//             clearTimeout(timer);
//         }, 3000);
//     }
// };
// black_myth_wtw.introduce();
// var name = 'black@myth@wtw',
//     age = 28,
//     gender = false,
//     birthday = '1994-03-10',
//     hobby = {sports: ['Black Myth WuKong', 'Elden Ring']};
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce: () => {
//         const timer = setTimeout(() => {
//             console.log(`Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`);
//             clearTimeout(timer);
//         }, 3000);
//     }
// };
// black_myth_wtw.introduce();
// function Person(name = 'black_myth_wtw', age = 24, gender = true, birthday = '1993-04-27', hobby = {
//     sports: ['running', 'skiing']
// }) {
//     return `${arguments[0]}, ${arguments[1]}, ${arguments[2]}, ${arguments[3]}, ${arguments[4]}, ${arguments[5]}`;
// }
// console.log(Person('black@myth@wtw', 32, false, '1993-03-10'));
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce() {
//         return `${arguments[0] + arguments[1]}`;
//     }
// };
// console.log(black_myth_wtw.introduce(black_myth_wtw.name, black_myth_wtw.age));
// ReferenceError
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce: () => {
//         return `${arguments[0] + arguments[1]}`;
//     }
// };
// console.log(black_myth_wtw.introduce(black_myth_wtw.name, black_myth_wtw.age));
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 32,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['football', 'soccer']
//     },
//     introduce(){
//         return () => `${arguments[0] + arguments[1]}`;
//     }
// };
// const arguments_introduce = black_myth_wtw.introduce(black_myth_wtw.name, black_myth_wtw.birthday);
// console.log(arguments_introduce(black_myth_wtw.age, black_myth_wtw.gender));
// 尾调用优化✅
// 必须作为函数内最后一步执行✅
// 执行后的结果必须实行返回✅
// 执行时不得操作或者计算函数词法作用域内的变量或者函数,以防止产生闭包,导致堆栈溢出/内存泄漏的情况✅
// 尾调用优化的原理: 避免多堆栈存储,实行单堆栈的循环使用,以防止产生堆栈溢出/内存泄漏的情况✅
// 应用: 递归✅
// 推行: 并没有得到大规模推行,目前只在 safari 浏览器内得以实行,在其他浏览器内极容易出现/发生堆栈溢出/内存泄漏的情况✅
// fibonacci 斐波那契数列✅
// function fibonacci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log('fibonacci:', fibonacci(5));
// console.log('fibonacci:', fibonacci(10));
// console.log('fibonacci:', fibonacci(20));
// console.log('fibonacci:', fibonacci(30));
// console.log('fibonacci:', fibonacci(40));
// console.log('fibonacci:', fibonacci(50));
// tail call fibonacci 尾调用优化斐波那契数列✅
// function tail_call_fibonacci(n, n1, n2) {
//     if (typeof n1 === 'undefined' && typeof n2 === 'undefined') {
//         n1 = 0;
//         n2 = 1;
//     }
//     if (n === 0) {
//         return n1;
//     }
//     return tail_call_fibonacci(n - 1, n2, n1 + n2);
// }
// console.log('tail_call_fibonacci:', tail_call_fibonacci(5));
// console.log('tail_call_fibonacci:', tail_call_fibonacci(10));
// console.log('tail_call_fibonacci:', tail_call_fibonacci(20));
// console.log('tail_call_fibonacci:', tail_call_fibonacci(30));
// console.log('tail_call_fibonacci:', tail_call_fibonacci(40));
// console.log('tail_call_fibonacci:', tail_call_fibonacci(50));
// factorial 阶乘✅
// function factorial(n) {
//     if (n === 1) return n;
//     return n * factorial(n - 1);
// }
// console.log('factorial:', factorial(5));
// console.log('factorial:', factorial(10));
// console.log('factorial:', factorial(20));
// console.log('factorial:', factorial(30));
// console.log('factorial:', factorial(40));
// console.log('factorial:', factorial(50));
// console.log('factorial:', factorial(100));
// console.log('factorial:', factorial(150));
// console.log('factorial:', factorial(200));
// tail call factorial 尾调用优化阶乘✅
// function tail_call_factorial(n, p) {
//     if (typeof p === 'undefined') {
//         p = 1;
//     }
//     if (n === 1) return p;
//     return tail_call_factorial(n - 1, p * n);
// }
// console.log('tail_call_factorial:', tail_call_factorial(5));
// console.log('tail_call_factorial:', tail_call_factorial(10));
// console.log('tail_call_factorial:', tail_call_factorial(20));
// console.log('tail_call_factorial:', tail_call_factorial(30));
// console.log('tail_call_factorial:', tail_call_factorial(40));
// console.log('tail_call_factorial:', tail_call_factorial(50));
// console.log('tail_call_factorial:', tail_call_factorial(100));
// console.log('tail_call_factorial:', tail_call_factorial(150));
// console.log('tail_call_factorial:', tail_call_factorial(200));
