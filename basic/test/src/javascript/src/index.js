// think of javascript✅
// 1. compose 函数组合✅
// const compose = (...fn) => x => fn.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// console.log(compose(add, multiply)(50));
// console.log(compose(add, multiply)(60));
// 2. pipe 函数管道✅
// const pipe = (...fns) => x => fns.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => Math.pow(x, 2);
// // const pipe_result = pipe(add, multiply)(65);
// const pipe_result = pipe(add, multiply)(85);
// console.log('pipe_result:', pipe_result);
// 3. flat 数组扁平化✅
// const flat = (arr, initial = []) => {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     return arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// }
// const arr = [[1, 2, [3, 4, 5], [6, 7], [8, 9, [10, 11, [12]]]], [13, [14, 15], [16, [[17], 18, [19]], [20, 21, [[22, 23], 24, [25, [26, [27]]]]]]]];
// const flat_arr = flat(arr);
// console.log('flat_arr:', flat_arr);
// layer flat 数组分层扁平化✅
// const layer_flat = (arr, layer = 1, initial = []) => {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     return arr.reduce((a, b) => Array.isArray(b) && layer > 1 ? layer_flat(b, layer - 1, a) : a.concat(b), initial);
// }
// const arr = [[1, 2, [3, 4, 5], [6, 7], [8, 9, [10, 11, [12]]]], [13, [14, 15], [16, [[17], 18, [19]], [20, 21, [[22, 23], 24, [25, [26, [27]]]]]]]];
// // const layer_flat_arr = layer_flat(arr);
// const layer_flat_arr = layer_flat(arr, 5);
// console.log('layer_flat_arr:', layer_flat_arr);
// fibonacci 斐波那契数列✅
// const fibonacci = n => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// console.log(fibonacci(5));
// console.log(fibonacci(10));
// console.log(fibonacci(20));
// console.log(fibonacci(30));
// console.log(fibonacci(40));
// console.log(fibonacci(50));
// cache fibonacci 缓存斐波那契数列✅
// const fibonacci = n => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const cache_fibonacci = (fn, hasher) => {
//     const cache_fibonacci_fn = (...args) => {
//         const cache = cache_fibonacci_fn.cache,
//             hash_key = hasher ? hasher(...args) : args[0];
//         return cache[hash_key] ?? (cache[hash_key] = fn(...args));
//     };
//     cache_fibonacci_fn.cache = {};
//     return cache_fibonacci_fn;
// };
// const cache_fibonacci_fn = cache_fibonacci(fibonacci);
// console.log('cache_fibonacci_fn:', cache_fibonacci_fn(40));
// console.log('cache_fibonacci_fn_again:', cache_fibonacci_fn(40));
// tail call fibonacci 尾调用优化斐波那契数列✅
// const tail_call_fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : tail_call_fibonacci(n - 1, n2, n1 + n2);
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(5));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(10));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(20));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(30));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(40));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(50));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(60));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(70));
// console.log('tail_call_fibonacci_result:', tail_call_fibonacci(80));
// curry 函数参数柯里化✅
// const curry = fn => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return function callee(...callee_args) {
//         return callee_args.length >= fn.length ? fn(...callee_args) : (...args) => callee(...[...callee_args, ...args]);
//     }
// }
// const curry_fn = (a, b, c, d) => a * b + c * d;
// const curried = curry(curry_fn);
// console.log(curried(2, 3, 4, 5));
// console.log(curried(2, 3)(4, 5));
// console.log(curried(2, 3, 4)(5));
// console.log(curried(2)(3, 4)(5));
// console.log(curried(2)(3)(4)(5));
// console.log(curried(2)(3)(4, 5));
// console.log(curried(2)(3, 4, 5));
// debounce 函数防抖✅
// const debounce = (fn, timeout) => {
//     let timer = null;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, timeout);
//     }
// }
// throttle 函数节流✅
// const throttle = (fn, timeout) => {
//     let timer = null,
//         first = true;
//     return function (...args) {
//         if (timer) return false;
//         if (first) {
//             fn.apply(this, args);
//             first = false;
//             return true;
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     }
// }
// factorial 阶乘✅
// const factorial = n => n === 1 ? n : n * factorial(n - 1);
// console.log(factorial(5));
// console.log(factorial(10));
// console.log(factorial(20));
// console.log(factorial(30));
// console.log(factorial(40));
// console.log(factorial(50));
// console.log(factorial(100));
// console.log(factorial(200));
// console.log(factorial(300));
// tail call factorial 尾调用优化阶乘✅
// const tail_call_factorial = (n, p = 1) => n === 1 ? p : tail_call_factorial(n - 1, p * n);
// console.log(tail_call_factorial(5));
// console.log(tail_call_factorial(10));
// console.log(tail_call_factorial(20));
// console.log(tail_call_factorial(30));
// console.log(tail_call_factorial(40));
// console.log(tail_call_factorial(50));
// console.log(tail_call_factorial(100));
// console.log(tail_call_factorial(200));
// console.log(tail_call_factorial(300));
// shallow copy 对象浅拷贝/对象浅复制✅
// const shallow_copy = o => {
//     let _o = Array.isArray(o) ? [] : {};
//     for (const key in o) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
// };
// const symbol = Symbol.for('shallow-copy');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined,
// };
// const black_myth_wtw_shallow_copy = shallow_copy(black_myth_wtw);
// black_myth_wtw_shallow_copy.name = 'black@myth@wtw';
// black_myth_wtw_shallow_copy.birthday = '1968-01-28';
// black_myth_wtw_shallow_copy.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_shallow_copy);
// deep clone 对象深拷贝/对象深复制✅
// const deep_clone = o => {
//     // const deep_clone_map = new WeakMap();
//     const deep_clone_fn = o => {
//         let _o = Array.isArray(o) ? [] : {};
//         // const exist_o = deep_clone_map.get(o);
//         // if (exist_o) return exist_o;
//         // deep_clone_map.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (typeof o[key] === 'object') {
//                     _o[key] = deep_clone_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return deep_clone_fn(o);
// };
// const symbol = Symbol.for('deep-clone');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined,
// };
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_deep_clone = deep_clone(black_myth_wtw);
// black_myth_wtw_deep_clone.name = 'black@myth@wtw';
// black_myth_wtw_deep_clone.birthday = '1968-01-28';
// black_myth_wtw_deep_clone.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_deep_clone);
// deep clone loop 对象循环深拷贝/对象循环深复制✅
// const deep_clone_loop = o => {
//     const deep_clone_map = new WeakMap();
//     const deep_clone_loop_fn = o => {
//         let _o = Array.isArray(o) ? [] : {};
//         const exist_o = deep_clone_map.get(o);
//         if (exist_o) return exist_o;
//         deep_clone_map.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (typeof o[key] === 'object') {
//                     _o[key] = deep_clone_loop_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return deep_clone_loop_fn(o);
// };
// const symbol = Symbol.for('deep-clone');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined,
// };
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_deep_clone_loop = deep_clone_loop(black_myth_wtw);
// black_myth_wtw_deep_clone_loop.name = 'black@myth@wtw';
// black_myth_wtw_deep_clone_loop.birthday = '1968-01-28';
// black_myth_wtw_deep_clone_loop.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_deep_clone_loop);
// pick 对象属性筛选✅
// const pick = (o, ...properties) => {
//     const pick_map = new WeakMap();
//     const pick_fn = o => {
//         let _o = Array.isArray(o) ? [] : {};
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
//     };
//     return pick_fn(o);
// };
// const symbol = Symbol.for('pick');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined,
// };
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_pick = pick(black_myth_wtw, 'name', 'birthday', 'hobby', 'me', symbol, 'another');
// black_myth_wtw_pick.name = 'black@myth@wtw';
// black_myth_wtw_pick.birthday = '1968-01-28';
// black_myth_wtw_pick.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_pick);
// new 类构造调用✅
// const new_mine = (fn, ...args) => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     const o = {};
//     const result = fn.apply(o, args),
//         is_function = typeof result === 'function',
//         is_object = typeof result === 'object' && result !== null;
//     if (is_function || is_object) return result;
//     o.__proto__ = fn.prototype;
//     return o;
// };
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// }
// const black_myth_wtw = new_mine(Person, 'black_myth_wtw', 32, true, '1993-06-30', {sports: ['computer games', 'basketball']});
// console.log(black_myth_wtw, black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.birthday, black_myth_wtw.hobby);
// console.log(black_myth_wtw.introduce());
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));
// instanceof 判断对象原型链✅
// const instanceof_mine = (target_object, source_class) => {
//     if (!target_object || !source_class || !target_object.__proto__ || !source_class.prototype) throw new TypeError(`构造对象 target_object:${target_object} 并不是一个对象/构造类函数 source_class:${source_class} 也并不是一个函数~~~~~~`);
//     let current = target_object.__proto__;
//     while (current) {
//         if (current === source_class.prototype) return true;
//         current = current.__proto__;
//     }
//     return false;
// }
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['computer games', 'basketball']});
// console.log(black_myth_wtw, black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.birthday, black_myth_wtw.hobby);
// console.log(black_myth_wtw.introduce());
// console.log(Person.prototype.isPrototypeOf(black_myth_wtw));
// console.log(instanceof_mine(black_myth_wtw, Person));
// console.log(instanceof_mine(black_myth_wtw, Object));
// console.log(instanceof_mine({}, Person));
// console.log(instanceof_mine({}, Object));
// console.log(Object.prototype.isPrototypeOf(Person.prototype));
// console.log(Object.prototype.isPrototypeOf(black_myth_wtw.__proto__));
// unit 单元测试✅
// const unit = (desc, fn) => {
//     try {
//         fn();
//         console.log(`${desc} is PASS~~~~~~`);
//     } catch (error) {
//         // console.error(error.message);
//         console.error(`${desc} is FAILED:`, error.message);
//     }
// };
// const test = result => {
//     return {
//         to_be(expected_result) {
//             if (expected_result !== result) {
//                 throw new Error(`期望值-${expected_result},现获值-${result}`);
//             }
//         }
//     };
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit('1 + 2', function () {
//     test(add(1, 2)).to_be(3);
// });
// unit('1 + 99', function () {
//     test(add(1, 99)).to_be(100);
// });
// unit('2 + 99', function () {
//     test(add(2, 99)).to_be(101);
// });
// unit('1 * 99', function () {
//     test(multiply(1, 99)).to_be(99);
// });
// unit('2 * 99', function () {
//     test(multiply(2, 99)).to_be(198);
// });
// unit('3 * 99', function () {
//     test(multiply(3, 99)).to_be(297);
// });
// unit('4 * 99', function () {
//     test(multiply(4, 99)).to_be(400);
// });
// call 显式绑定✅
// Function.prototype.call_mine = function (o, ...args) {
//     if (typeof this !== 'function') throw new TypeError(`调用当前此 call_mine:${this.name} 方法的构造对象必须为一个函数!`);
//     const symbol = Symbol.for('call_mine');
//     o[symbol] = this;
//     const result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// Person.call_mine(black_myth_wtw, 'black@myth@wtw', 28, false, '1968-01-28', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// Person.call_mine(this, 'black#myth#wtw', 24, true, '1994-03-10', {sports: ['tennis', 'table tennis']});
// console.log(name, age, gender, birthday, hobby);
// apply 显式绑定✅
// Function.prototype.apply_mine = function (o, args) {
//     if (typeof this !== 'function') throw new TypeError(`调用当前此 apply_mine:${this.name} 方法的构造对象必须为一个函数!`);
//     const symbol = Symbol.for('apply_mine');
//     o[symbol] = this;
//     const result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// Person.apply_mine(black_myth_wtw, ['black@myth@wtw', 28, false, '1968-01-28', {sports: ['basketball', 'computer games']}]);
// console.log(black_myth_wtw);
// Person.apply_mine(this, ['black#myth#wtw', 24, true, '1994-03-10', {sports: ['tennis', 'table tennis']}]);
// console.log(name, age, gender, birthday, hobby);
// bind 硬绑定✅
// Function.prototype.bind_mine = function (context, ...args) {
//     const self = this,
//         F = function () {
//         },
//         f_bind = function (...inner_args) {
//             return self.apply(this instanceof f_bind ? this : context, [...args, ...inner_args]);
//         };
//     Object.setPrototypeOf(F.prototype, self.prototype);
//     Object.setPrototypeOf(f_bind.prototype, F.prototype);
//     return f_bind;
// };
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// const black_myth_lily = {
//     name: 'black&myth&lily',
//     age: 20,
//     gender: false,
//     birthday: '1993-04-27',
//     hobby: {
//         sports: ['table', 'table tennis']
//     }
// };
// const bind_mine = Person.bind_mine(black_myth_wtw);
// const black_myth_wu_kong = new bind_mine('black@myth@wtw', 24, false, '1994-03-10', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wu_kong);
// console.log(black_myth_wu_kong.__proto__ === Person.prototype);
// console.log(black_myth_wu_kong.__proto__.__proto__.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(black_myth_wu_kong));
// console.log(black_myth_wu_kong.introduce());
// console.log(black_myth_wtw);
// bind_mine('black*myth*wtw', 28, false, '1999-09-09', {sports: ['volleyball', 'badminton']});
// console.log(black_myth_wtw);
// bind_mine.call(black_myth_lily, 'black%myth%wtw', 26, true, '2000-10-10', {sports: ['running', 'skiing']});
// console.log(black_myth_wtw);
// console.log(black_myth_lily);
// soft bind 软绑定✅
// Function.prototype.soft_bind_mine = function (context, ...args) {
//     const self = this,
//         F = function () {
//         },
//         f_bind = function (...inner_args) {
//             return self.apply(this === window || this === undefined ? context : this, [...args, ...inner_args]);
//         };
//     Object.setPrototypeOf(F.prototype, self.prototype);
//     Object.setPrototypeOf(f_bind.prototype, F.prototype);
//     return f_bind;
// };
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// const black_myth_lily = {
//     name: 'black&myth&lily',
//     age: 20,
//     gender: false,
//     birthday: '1993-04-27',
//     hobby: {
//         sports: ['table', 'table tennis']
//     }
// };
// const soft_bind_mine = Person.soft_bind_mine(black_myth_wtw);
// const black_myth_wu_kong = new soft_bind_mine('black@myth@wtw', 24, false, '1994-03-10', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wu_kong);
// console.log(black_myth_wu_kong.__proto__.__proto__.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(black_myth_wu_kong));
// console.log(black_myth_wu_kong.introduce());
// console.log(black_myth_wtw);
// soft_bind_mine('black*myth*wtw', 28, false, '1999-09-09', {sports: ['volleyball', 'badminton']});
// console.log(black_myth_wtw);
// soft_bind_mine.call(black_myth_lily, 'black%myth%wtw', 26, true, '2000-10-10', {sports: ['running', 'skiing']});
// console.log(black_myth_wtw);
// console.log(black_myth_lily);
// 函数绑定优先级: new 类构造调用绑定 > bind 硬绑定 > call、apply 显式绑定 > 对象调用隐式绑定 > soft bind 软绑定 > 默认绑定(window 绑定)✅
// promise A+ 模拟✅
// const Promise_Mine = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             }
//             try {
//                 fn(resolve, reject);
//             } catch (error) {
//                 reject(error);
//             }
//         }
//
//         then(onFulfilled = value => value, onRejected = reason => {
//             throw reason;
//         }) {
//             let promise = null,
//                 self = this;
//             if (this.status === FULFILLED) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     let then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(promise_self, y => {
//                                             thenable.call(promise_self, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         let x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(self.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise(function (resolve, reject) {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(self.reason);
//                             } else {
//                                 let x = onRejected(self.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         let then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(promise_self, y => {
//                                                 thenable.call(promise_self, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             let x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 })(self.value);
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                     self.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(self.reason);
//                                 } else {
//                                     let x = onRejected(self.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//     }
//
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(y => resolvePromise(promise, y, resolve, reject), r => reject(r));
//         if (typeof x === 'function' || typeof x === 'object') {
//             if (x === null) return resolve(x);
//             let then = null,
//                 called = false;
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (called) return;
//                         called = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (called) return;
//                         called = true;
//                         reject(r);
//                     });
//                 } catch (error) {
//                     if (called) return;
//                     reject(error);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//
//     return Promise;
// })();
// const promise = new Promise_Mine(resolve => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve('I love WangJinJin~~~~~~');
//                 }
//             })
//         }
//     });
// });
// promise.then(value => {
//     console.log(value);
//     return `I love ${value}`;
// }).then(val => {
//     console.log(val);
//     throw new TypeError('I love myself~~~~~~');
// }).then(() => {
// }, reason => {
//     console.error(reason);
// });
// setTimeout(() => {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
// promise A+ 完整模拟✅
// const Promise_Mine = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             }
//             try {
//                 fn(resolve, reject);
//             } catch (error) {
//                 reject(error);
//             }
//         }
//
//         then(onFulfilled = value => value, onRejected = reason => {
//             throw reason;
//         }) {
//             let promise = null,
//                 self = this;
//             if (this.status === FULFILLED) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     let then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(promise_self, y => {
//                                             thenable.call(promise_self, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         let x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(self.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise(function (resolve, reject) {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(self.reason);
//                             } else {
//                                 let x = onRejected(self.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         let then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(promise_self, y => {
//                                                 thenable.call(promise_self, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             let x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 })(self.value);
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                     self.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(self.reason);
//                                 } else {
//                                     let x = onRejected(self.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//
//         catch(onRejected = reason => {
//             throw reason;
//         }) {
//             return this.then(null, onRejected);
//         }
//
//         finally(fn) {
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).catch(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//
//     Promise.resolve = promise => {
//         if (promise instanceof Promise) {
//             return promise;
//         }
//         return new Promise(resolve => {
//             resolve(promise);
//         });
//     };
//
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//
//     Promise.all = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 promise_list_length = promise_list.length;
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = value;
//                     if (count >= promise_list_length) {
//                         resolve(result);
//                     }
//                 }).catch(error => reject(error));
//             });
//         });
//     };
//
//     Promise.race = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             promise_list.forEach(promise => {
//                 Promise.resolve(promise).then(value => resolve(value)).catch(error => reject(error));
//             });
//         });
//     };
//
//     Promise.allSettled = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 promise_list_length = promise_list.length;
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(result);
//                     }
//                 }).catch(reason => {
//                     count++;
//                     result[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(y => resolvePromise(promise, y, resolve, reject), r => reject(r));
//         if (typeof x === 'function' || typeof x === 'object') {
//             if (x === null) return resolve(x);
//             let then = null,
//                 called = false;
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (called) return;
//                         called = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (called) return;
//                         called = true;
//                         reject(r);
//                     });
//                 } catch (error) {
//                     if (called) return;
//                     reject(error);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//
//     return Promise;
// })();
// const promise = new Promise_Mine((resolve) => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve({
//                                 then(resolve) {
//                                     setTimeout(() => {
//                                         resolve('I love WangJinJin~~~~~~');
//                                     }, 2000);
//                                 }
//                             });
//                         }
//                     });
//                 }
//             })
//         }
//     });
// });
// promise.then(value => {
//     console.log(value);
//     return `I love ${value}`;
// }).then(99).then(val => {
//     console.log(val);
//     // throw new TypeError('I love myself~~~~~~');
//     return `I love ${val}`;
// }).then(result => {
//     return Promise_Mine.reject(result);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// setTimeout(() => {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
// Promise_Mine.resolve([1, 99, 100]).then(values => {
//     console.log(values);
// });
// Promise_Mine.resolve([1, Promise_Mine.reject(99), 101]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.resolve(promise).then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log('error:', reason);
// });
// Promise_Mine.reject('I love complete promise~~~~~').then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log('error:', reason);
// });
// Promise_Mine.all([new Promise_Mine(resolve => {
//     resolve('I love FrontEnd~~~~~~')
// }), Promise_Mine.resolve(199), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.all([new Promise_Mine(resolve => {
//     resolve('I love FrontEnd~~~~~~')
// }), Promise_Mine.reject(777), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.all([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 4500);
// }), Promise_Mine.resolve(999), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.race([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 3000);
// }), new Promise_Mine((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.race([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 2800);
// }), new Promise_Mine((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve(true);
//     }, 2900);
// })]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.allSettled([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love NodeJS~~~~~~');
//     }, 3100);
// }), new Promise_Mine((resolve, reject) => {
//     setTimeout(() => {
//         reject(1000);
//     }, 4200);
// }), new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve(false);
//     }, 2200);
// })]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// promise A+ 完整模拟并规范测试✅
// const Promise_Mine = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             }
//             try {
//                 fn(resolve, reject);
//             } catch (error) {
//                 reject(error);
//             }
//         }
//
//         then(onFulfilled = value => value, onRejected = reason => {
//             throw reason;
//         }) {
//             let promise = null,
//                 self = this;
//             if (this.status === FULFILLED) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     let then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(promise_self, y => {
//                                             thenable.call(promise_self, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         let x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(self.value);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise(function (resolve, reject) {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(self.reason);
//                             } else {
//                                 let x = onRejected(self.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (error) {
//                             reject(error);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise(function (resolve, reject) {
//                     const promise_self = this;
//                     self.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         let then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(promise_self, y => {
//                                                 thenable.call(promise_self, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             let x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 })(self.value);
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                     self.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(self.reason);
//                                 } else {
//                                     let x = onRejected(self.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (error) {
//                                 reject(error);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//
//         catch(onRejected = reason => {
//             throw reason;
//         }) {
//             return this.then(null, onRejected);
//         }
//
//         finally(fn) {
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).catch(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//
//     Promise.resolve = promise => {
//         if (promise instanceof Promise) {
//             return promise;
//         }
//         return new Promise(resolve => {
//             resolve(promise);
//         });
//     };
//
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//
//     Promise.all = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 promise_list_length = promise_list.length;
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = value;
//                     if (count >= promise_list_length) {
//                         resolve(result);
//                     }
//                 }).catch(error => reject(error));
//             });
//         });
//     };
//
//     Promise.race = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             promise_list.forEach(promise => {
//                 Promise.resolve(promise).then(value => resolve(value)).catch(error => reject(error));
//             });
//         });
//     };
//
//     Promise.allSettled = promise_list => {
//         if (!Array.isArray(promise_list)) throw new TypeError(`The params promise_list:${promise_list} must be an array~~~~~~`);
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 promise_list_length = promise_list.length;
//             let count = 0;
//             promise_list.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = {
//                         status: 'fulfilled',
//                         value,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(result);
//                     }
//                 }).catch(reason => {
//                     count++;
//                     result[index] = {
//                         status: 'rejected',
//                         reason,
//                     };
//                     if (count >= promise_list_length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//
//     Promise.deferred = () => {
//         const dd = {};
//         dd.promise = new Promise((resolve, reject) => {
//             dd.resolve = resolve;
//             dd.reject = reject;
//         });
//         return dd;
//     };
//
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same~~~~~~'));
//         if (x instanceof Promise) x.then(y => resolvePromise(promise, y, resolve, reject), r => reject(r));
//         if (typeof x === 'function' || typeof x === 'object') {
//             if (x === null) return resolve(x);
//             let then = null,
//                 called = false;
//             try {
//                 then = x.then;
//             } catch (error) {
//                 return reject(error);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (called) return;
//                         called = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (called) return;
//                         called = true;
//                         reject(r);
//                     });
//                 } catch (error) {
//                     if (called) return;
//                     reject(error);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//
//     return Promise;
// })();
// const promise = new Promise_Mine((resolve) => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve({
//                                 then(resolve) {
//                                     setTimeout(() => {
//                                         resolve('I love WangJinJin~~~~~~');
//                                     }, 2000);
//                                 }
//                             });
//                         }
//                     });
//                 }
//             })
//         }
//     });
// });
// promise.then(value => {
//     console.log(value);
//     return `I love ${value}`;
// }).then(99).then(val => {
//     console.log(val);
//     // throw new TypeError('I love myself~~~~~~');
//     return `I love ${val}`;
// }).then(result => {
//     return Promise_Mine.reject(result);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// setTimeout(() => {
//     console.log('I love ZhengShuAng~~~~~~');
// }, 0);
// console.log('I love ZhaoYue~~~~~~');
// Promise_Mine.resolve([1, 99, 100]).then(values => {
//     console.log(values);
// });
// Promise_Mine.resolve([1, Promise_Mine.reject(99), 101]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.resolve(promise).then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log('error:', reason);
// });
// Promise_Mine.reject('I love complete promise~~~~~').then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log('error:', reason);
// });
// Promise_Mine.all([new Promise_Mine(resolve => {
//     resolve('I love FrontEnd~~~~~~')
// }), Promise_Mine.resolve(199), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.all([new Promise_Mine(resolve => {
//     resolve('I love FrontEnd~~~~~~')
// }), Promise_Mine.reject(777), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.all([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 4500);
// }), Promise_Mine.resolve(999), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.race([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 3000);
// }), new Promise_Mine((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), true]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.race([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love FrontEnd~~~~~~');
//     }, 2800);
// }), new Promise_Mine((resolve, reject) => {
//     setTimeout(() => {
//         reject(777);
//     }, 4000);
// }), new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve(true);
//     }, 2900);
// })]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// Promise_Mine.allSettled([new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve('I love NodeJS~~~~~~');
//     }, 3100);
// }), new Promise_Mine((resolve, reject) => {
//     setTimeout(() => {
//         reject(1000);
//     }, 4200);
// }), new Promise_Mine(resolve => {
//     setTimeout(() => {
//         resolve(false);
//     }, 2200);
// })]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.error('error:', reason);
// });
// module.exports = Promise_Mine;
// generator thunk 异步任务回调函数生成器中间件✅
// const fs = require('fs');
// const path = require('path');
// const generator_thunk = fn => (...args) => callback => fn(...args, callback);
// const run = (generator, callback) => {
//     const task = generator();
//
//     function next(error, data) {
//         if (error) return task.throw(error instanceof Error ? error : new Error(error));
//         const {value, done} = task.next(data);
//         if (done) return callback(null, value);
//         if (typeof value === 'function') {
//             value(next);
//         } else {
//             next(null, value);
//         }
//     }
//
//     next();
// };
// const read_file = generator_thunk(fs.readFile);
// run(function* () {
//     const first_file = yield read_file(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file:', first_file);
//     const second_file = yield read_file(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file:', second_file);
//     return second_file;
// }, function (error, result) {
//     if (error) return console.error(error);
//     console.log('result:', result);
// });
// promise generator thunk 异步任务状态机生成器中间件✅
// const fs = require('fs');
// const path = require('path');
// const promise_generator_thunk = fn => (...args) => callback => fn(...args, callback);
// const run = generator => {
//     return new Promise((resolve, reject) => {
//         const task = generator();
//         function next(error, data) {
//             if (error) return reject(task.throw(error instanceof Error ? error : new Error(error)));
//             const {value, done} = task.next(data);
//             if (done) return resolve(value);
//             if (typeof value === 'function') {
//                 return value(next);
//             }
//             Promise.resolve(value).then(val => {
//                 next(null, val);
//             }).catch(reason => {
//                 next(reason);
//             });
//         }
//         next();
//     });
// };
// const read_file = promise_generator_thunk(fs.readFile);
// run(function* () {
//     const first_file = yield read_file(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_file:', first_file);
//     const second_file = yield read_file(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_file:', second_file);
//     return second_file;
// }).then(result => console.log('result:', result)).catch(reason => console.error(reason));
// promise timeout 异步状态机请求超时中间件✅
// const promise_timeout = (promises, timeout) => Promise.race([...promises.map(promise => Promise.resolve(promise).then(value => typeof value === 'object' && value.hasOwnProperty('status') ? value : {
//     status: 'fulfilled',
//     value
// }).catch(reason => ({
//     status: 'rejected',
//     reason,
// }))), new Promise((resolve, reject) => setTimeout(() => reject({
//     status: 'rejected',
//     reason: '请求超时~~~~~~'
// }), timeout))]);
// promise_timeout([new Promise(resolve => {
//     // resolve('I love ZhengShuAng~~~~~~');
//     // resolve({
//     //     status: 'fulfilled',
//     //     value: 'I love ZhaoYue~~~~~~'
//     // });
//     // setTimeout(() => {
//     //     resolve('I love WangJinJin~~~~~~');
//     // }, 3100);
//     // setTimeout(() => {
//     //     resolve('I love myself~~~~~~');
//     // }, 3000);
//     setTimeout(() => {
//         resolve('I love yin_wen_kai~~~~~~');
//     }, 2900);
// })], 3000).then(value => console.log('result:', value)).catch(error => console.error(error));
// 判断是否是一个 utf-16 字符✅
// const is_utf_16_character = str => (String(str) || str.toString()).codePointAt(0) > 0xFFFF;
// const utf_16_string = '𠮷𠮷千兆';
// console.log(is_utf_16_character(utf_16_string));
// 获取 utf-16 字符串长度✅
// const get_utf_16_string_length = str => (String(str) || str.toString()).match(/[\s\S]/ug).length;
// const utf_16_string = '𠮷𠮷千兆';
// console.log(get_utf_16_string_length(utf_16_string));
// 获取 utf-16 字符串字符数组✅
// const get_utf_16_string_arr = str => (String(str) || str.toString()).match(/[\s\S]/ug);
// const utf_16_string = '𠮷𠮷千兆';
// console.log(get_utf_16_string_arr(utf_16_string));
// 获取 utf-16 字符串字符数组并获取字符位、字符编码与编码转换✅
// const is_utf_16_character = str => (String(str) || str.toString()).codePointAt(0) > 0xFFFF;
// const get_utf_16_string_length = str => (String(str) || str.toString()).match(/[\s\S]/ug).length;
// const get_utf_16_string_arr = str => (String(str) || str.toString()).match(/[\s\S]/ug);
// const get_utf_16_string_all = str => {
//     const utf_16_string_arr = get_utf_16_string_arr(str),
//         utf_16_string_length = get_utf_16_string_length(str);
//     for (let i = 0; i < utf_16_string_length; i++) {
//         if (is_utf_16_character(utf_16_string_arr[i])) {
//             console.log('char:', utf_16_string_arr[i]);
//             const utf_16_string_arr_code_point_at = utf_16_string_arr[i].codePointAt(0);
//             console.log('code_point_at:', utf_16_string_arr_code_point_at);
//             console.log('from_code_point:', String.fromCodePoint(utf_16_string_arr_code_point_at));
//         } else {
//             console.log('char:', utf_16_string_arr[i]);
//             console.log('char_at:', utf_16_string_arr[i].charAt(0));
//             const utf_16_string_arr_char_code_at = utf_16_string_arr[i].charCodeAt(0);
//             console.log('char_code_at:', utf_16_string_arr_char_code_at);
//             console.log('from_char_code:', String.fromCharCode(utf_16_string_arr_char_code_at));
//         }
//     }
// };
// const utf_16_string = '𠮷𠮷千兆';
// get_utf_16_string_all(utf_16_string);
// 模拟获取描述符内容✅
// const get_reg_exp_flags = reg_exp => {
//     if (!(reg_exp instanceof RegExp)) {
//         throw new TypeError(`The params reg_exp:${reg_exp} must be a RegExp~~~~~~`);
//     }
//     const reg_exp_string = String(reg_exp) || reg_exp.toString()
//     return reg_exp_string.substring(reg_exp_string.lastIndexOf('/') + 1);
// }
// const reg_exp = new RegExp(/\u{20bb7}{2}.{2}/uig, 'uigy');
// const reg_exp_flags = get_reg_exp_flags(reg_exp);
// console.log('reg_exp_flags:', reg_exp_flags);
// class 完整模拟✅
// 存在 TDZ 临时死区
// 类赋值在类内部不可实行修改
// 只可使用 new 构造调用
// 类原型链上的方法不可枚举且不可使用 new 构造调用
// 类原型链上的访问器属性不可枚举
// 相对于 ES5 继承时,继承是基于派生类的 this,父类只是在此基础上实行修饰,而对于 ES6 的继承时,继承是基于父类的 this,派生类只是在此基础上实行修改,两套继承模式完全相反
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         // TypeError
//         // 类赋值在类内部不可实行修改
//         // Person = null;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
//     get get_birthday() {
//         return this.birthday;
//     }
// }
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.get_birthday);
// for (const key in black_myth_wtw) {
//     console.log(`class:for...in-key:${key}`);
// }
// TypeError
// 类原型链上的方法不可枚举且不可使用 new 构造调用
// const black_myth_wtw_introduce = new black_myth_wtw.introduce();
// console.log(black_myth_wtw_introduce);
// TypeError
// 只可使用 new 构造调用
// Person.call(this, 'black@myth@wtw', 30, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// const Person = (function () {
//     const Person = function (name, age, gender, birthday, hobby) {
//         if (new.target === undefined) {
//             throw new TypeError(`Class constructor ${Person.name} cannot be invoked without 'new'`);
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         // TypeError
//         // 类赋值在类内部不可实行修改
//         // Person = null;
//     }
//     Object.defineProperty(Person.prototype, 'introduce', {
//         value() {
//             if (new.target !== undefined) {
//                 throw new TypeError(`${this.name} is not a constructor`);
//             }
//             return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
//         },
//         enumerable: false,
//         configurable: true,
//         writable: false,
//     });
//     Object.defineProperty(Person.prototype, 'get_birthday', {
//         get() {
//             return this.birthday;
//         },
//         enumerable: false,
//         configurable: true,
//     });
//     return Person;
// })();
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.get_birthday);
// for (const key in black_myth_wtw) {
//     console.log(`class:for...in-key:${key}`);
// }
// TypeError
// 类原型链上的方法不可枚举且不可使用 new 构造调用
// const black_myth_wtw_introduce = new black_myth_wtw.introduce();
// console.log(black_myth_wtw_introduce);
// TypeError
// 只可使用 new 构造调用
// Person.call(this, 'black@myth@wtw', 30, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// 拥有数组特性的类✅
// class Array_Mine {
//     constructor(length = 0) {
//         this.length = length;
//         return new Proxy(this, {
//             set(target, key, value, receiver) {
//                 const current_length = Reflect.get(target, 'length');
//                 if (target.is_numeric_index(key)) {
//                     if (key >= current_length) {
//                         Reflect.set(target, 'length', Number(key) + 1, receiver);
//                     }
//                 } else {
//                     for (let i = current_length - 1; i >= value; i--) {
//                         Reflect.deleteProperty(target, i);
//                     }
//                 }
//                 return Reflect.set(target, key, value, receiver);
//             }
//         });
//     }
//
//     is_numeric_index(numeric_index) {
//         const u_int_32_numeric_index = Array_Mine.u_int_32_numeric(numeric_index);
//         return String(u_int_32_numeric_index) === numeric_index && u_int_32_numeric_index < Math.pow(2, 32) - 1;
//     }
//
//     static u_int_32_numeric(numeric_index) {
//         return Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
//     }
// }
// const proxy_arr_mine = new Array_Mine(7);
// proxy_arr_mine[0] = 'red';
// proxy_arr_mine[1] = 'green';
// proxy_arr_mine[2] = 'blue';
// proxy_arr_mine[3] = 'yellow';
// proxy_arr_mine[4] = 'purple';
// proxy_arr_mine[5] = 'pink';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine[10] = 'brown';
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// proxy_arr_mine.length = 5;
// console.log(proxy_arr_mine, proxy_arr_mine.length);
// console.log(proxy_arr_mine[0], proxy_arr_mine[1], proxy_arr_mine[2], proxy_arr_mine[3], proxy_arr_mine[4], proxy_arr_mine[5], proxy_arr_mine[10]);
