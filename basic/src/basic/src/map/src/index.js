// map 字典
// 基本用法
// 属性: size-获取字典的大小
// 方法: set-向字典当中添加映射与数据
//      get-根据指定的映射获取字典内所对应的数据
//      has-根据指定的映射判断字典内是否存在所对应的数据
//      delete-根据指定的映射删除字典内所对应的数据
//      clear-清空字典内的映射与数据
//      forEach-循环字典内的映射与数据并实行操作
//      keys-循环字典内的映射并实行操作
//      values-循环字典内的数据并实行操作
//      entries-循环字典内的映射与数据并实行操作
// const sports = {sports: ['basketball', 'computer games']},
//     games = ['Black Myth WuKong', 'Elden Ring'],
//     symbol = Symbol.for('map');
// let map = new Map();
// map.set('name', 'black^myth^wtw');
// map.set('age', 25);
// map.set('gender', true);
// map.set('hobby', sports);
// map.set('introduce', function introduce(name, age) {
//     return `Hi,My name is ${name},${age} year's old~~~~~~`;
// });
// map.set(symbol, 'yes');
// map.set(sports, games);
// console.log(map.get('name'));
// console.log(map.get('age'));
// console.log(map.get('gender'));
// console.log(map.get('hobby'));
// console.log(map.get(symbol));
// console.log(map.get(sports));
// console.log(map.size);
// console.log(map.has({sports: ['basketball', 'computer games']}));
// console.log(map.has(sports));
// console.log(map.has(true));
// console.log(map.has('age'));
// map.delete(sports);
// console.log(map.has(sports));
// console.log(map.size);
// map.clear();
// console.log(map.size);
// console.log(map.has(true));
// console.log(map.has('age'));
// map = new Map([['name', 'black!myth!wtw'], ['age', 29], ['gender', true], ['hobby', sports], ['introduce', function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }], [symbol, 'yes'], [sports, games]]);
// map.forEach((map_value, map_key, own_map) => {
//     console.log(`map_index: ${map_key.toString()} ======> map_value: ${map_value}`);
//     console.log(map === own_map);
// });
// for (const [key, value] of map) {
//     console.log(`key: ${key.toString()} ======> value: ${value}`);
// }
// for (const key of map.keys()) {
//     console.log(`key: ${key.toString()}`);
// }
// for (const value of map.values()) {
//     console.log(`value: ${value}`);
// }
// for (const [key, value] of map.entries()) {
//     console.log(`key: ${key.toString()} ======> value: ${value}`);
// }
// 初始化声明并添加映射与数据
// const sports = {sports: ['basketball', 'computer games']},
//     games = ['Black Myth WuKong', 'Elden Ring'],
//     symbol = Symbol.for('map');
// const map = new Map([['name', 'black!myth!wtw'], ['age', 29], ['gender', true], ['hobby', sports], ['introduce', function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }], [symbol, 'yes'], [sports, games]]);
// console.log(map, map.size);
// WeakMap
// 基本用法
// 特性:
// 只能向弱类型的字典当中添加引用类型的映射以及其所对应的数据
// 属性 size 方法 clear forEach keys values entries 失效
// 一旦与引用类型的映射失去绑定或者引用类型的映射失效,那么此字典当中的引用类型的映射以及其所对应的数据就会被释放并被垃圾回收机制及时清理,以防止产生堆栈溢出、内存泄漏的情况
// let weak_map = new WeakMap(),
//     games = ['Black Myth WuKong', 'Elden Ring'],
//     sports = {sports: ['basketball', 'computer games']},
//     gender = {gender: true},
//     symbol = Symbol.for('map');
// weak_map.set('name', 'black^myth^wtw');
// weak_map.set('age', 25);
// weak_map.set(symbol, 'yes');
// weak_map.set(sports, games);
// weak_map.set({name: 'black^myth^wtw'}, 'black*myth*wtw');
// weak_map.set(gender, false);
// console.log(weak_map.size);
// console.log(weak_map.clear());
// console.log(weak_map.get({name: 'black^myth^wtw'}));
// console.log(weak_map.get(sports));
// console.log(weak_map.get(gender));
// console.log(weak_map.delete(gender));
// console.log(weak_map.has(gender));
// console.log(weak_map.get(gender));
// console.log(weak_map.has(sports));
// weak_map = new WeakMap([[sports, games], [gender, false], [{name: 'black^myth^wtw'}, 'black*myth*wtw']]);
// weak_map.forEach((weak_map_value, weak_map_key, own_weak_map) => {
//     console.log(`weak_map_index: ${weak_map_key.toString()} ======> weak_map_value: ${weak_map_value}`);
//     console.log(weak_map === own_weak_map);
// });
// for (const [key, value] of weak_map) {
//     console.log(`key: ${key.toString()} ======> value: ${value}`);
// }
// for (const key of weak_map.keys()) {
//     console.log(`key: ${key.toString()}`);
// }
// for (const value of weak_map.values()) {
//     console.log(`value: ${value}`);
// }
// for (const [key, value] of weak_map.entries()) {
//     console.log(`key: ${key.toString()} ======> value: ${value}`);
// }
// 私有数据存储
// ES5 存储私有数据: 使用私有对象来存储私有数据,闭包当中的内存数据永远无法被清楚,久而久之就会产生堆栈溢出、内存泄漏的情况
// ES6 存储私有数据: 使用 WeakMap 来存储私有数据,更加简洁,且永远不会出现任何的堆栈溢出、内存泄漏的情况
// ES5 存储私有数据
// const Person = (function () {
//     const personal_list = {};
//     let personal_id = 0;
//     function Person(name) {
//         Object.defineProperty(this, '_id', {
//             value: ++personal_id,
//             enumerable: false,
//             configurable: false,
//             writable: false,
//         });
//         personal_list[this._id] = name;
//     }
//     Person.prototype.get_name = function () {
//         return personal_list[this._id];
//     };
//     return Person;
// })();
// const black_myth_wtw = new Person('black_myth_wtw'),
//     simon = new Person('simon'),
//     frank = new Person('frank'),
//     lily = new Person('lily'),
//     tom = new Person('tom'),
//     gary = new Person('gary');
// console.log(black_myth_wtw.get_name());
// console.log(simon.get_name());
// console.log(frank.get_name());
// console.log(lily.get_name());
// console.log(tom.get_name());
// console.log(gary.get_name());
// ES6 存储私有数据
// const Person = (function () {
//     const personal = new WeakMap();
//     class Person {
//         constructor(name) {
//             personal.set(this, name);
//         }
//         get_name() {
//             return personal.get(this);
//         }
//     }
//     return Person;
// })();
// let black_myth_wtw = new Person('black_myth_wtw'),
//     simon = new Person('simon'),
//     frank = new Person('frank'),
//     lily = new Person('lily'),
//     tom = new Person('tom'),
//     gary = new Person('gary');
// console.log(black_myth_wtw.get_name());
// console.log(simon.get_name());
// console.log(frank.get_name());
// console.log(lily.get_name());
// console.log(tom.get_name());
// console.log(gary.get_name());
// simon = null;
// console.log(black_myth_wtw.get_name());
// // console.log(simon.get_name());
// console.log(frank.get_name());
// console.log(lily.get_name());
// console.log(tom.get_name());
// console.log(gary.get_name());
