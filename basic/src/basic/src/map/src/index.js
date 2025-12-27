// javascript map 字典
// 基本用法
// 属性
// size 用于获取字典的大小
// 方法
// set 用于向字典内添加映射以及其所对应的数据
// get 用于根据指定的映射获取字典内所对应的数据
// has 用于根据指定的映射判断字典内是否存在所对应的数据
// delete 用于根据指定的映射删除字典内所对应的数据
// clear 用于清空字典内所有的映射以及其所对应的数据
// forEach 用于循环字典内的映射以及其所对应的数据并实行操作
// keys 用于循环字典内的映射并实行操作
// values 用于循环字典内的数据并实行操作
// entries 用于循环字典内的映射以及其所对应的数据并实行操作
// const map = new Map();
// const symbol = Symbol.for('map'),
//     hobby = {sports: ['basketball', 'computer games']};
// map.set('name', 'black_myth_wtw');
// map.set('age', 30);
// map.set('gender', true);
// map.set('birthday', '1993-06-30');
// map.set(symbol, 'yes');
// map.set(hobby, {sports: ['Black Myth WuKong', 'Elden Ring']});
// map.set('another', undefined);
// console.log(map.size);
// console.log(map.get(hobby));
// console.log(map.get('birthday'));
// console.log(map.get('gender'));
// console.log(map.has(symbol));
// console.log(map.has({sports: ['basketball', 'computer games']}));
// map.delete(symbol);
// console.log(map.size);
// console.log(map.get(symbol));
// console.log(map.has(symbol));
// map.delete('gender');
// console.log(map.size);
// console.log(map.get('gender'));
// console.log(map.has('gender'));
// map.clear();
// console.log(map.size);
// console.log(map.get(hobby));
// console.log(map.has(hobby));
// 初始化声明并添加映射以及其所对应的数据
// const symbol = Symbol.for('map'),
//     hobby = {sports: ['basketball', 'computer games']};
// const map = new Map([['name', 'black_myth_wtw'], ['age', 30], ['gender', true], ['birthday', '1993-06-30'], [symbol, 'yes'], [hobby, {sports: ['Black Myth WuKong', 'Elden Ring']}]]);
// console.log(map);
// console.log(...map);
// console.log([...map]);
// console.log(map.size);
// console.log(map.get(hobby));
// console.log(map.get('birthday'));
// console.log(map.get('gender'));
// console.log(map.has(symbol));
// console.log(map.has({sports: ['basketball', 'computer games']}));
// map.delete(symbol);
// console.log(map.size);
// console.log(map.get(symbol));
// console.log(map.has(symbol));
// map.delete('gender');
// console.log(map.size);
// console.log(map.get('gender'));
// console.log(map.has('gender'));
// map.forEach((value, key) => {
//     console.log(`forEach:key-${key} ======> value-${value}`);
// });
// for (const key of map.keys()) {
//     console.log(`keys:key-${key}`);
// }
// for (const value of map.values()) {
//     console.log(`values:value-${value}`);
// }
// for (const [key, value] of map.entries()) {
//     console.log(`entries:key-${key} ======> value-${value}`);
// }
// WeakMap
// 基本用法
// 只能向弱类型的字典内添加引用类型的映射以及其所对应的数据
// 属性 size 方法 clear forEach keys values entries 失效
// 一旦与引用类型的映射失去绑定或者引用类型的映射失效,那么此字典内的映射以及其所对应的数据就会被释放,并被垃圾回收机制及时清理,以防止产生堆栈溢出、内存泄漏的情况
// const weak_map = new WeakMap();
// let name = {name: 'black_myth_wtw'},
//     age = {age: 32},
//     gender = {gender: false},
//     birthday = {birthday: '1993-04-27'},
//     symbol = {symbol: Symbol.for('weak_map')},
//     hobby = {sports: ['basketball', 'computer games']};
// // weak_map.set('name', 'black_myth_wtw');
// weak_map.set(name, 'black_myth_wtw');
// weak_map.set(age, 30);
// weak_map.set(gender, true);
// weak_map.set(birthday, '1993-06-30');
// weak_map.set(symbol, 'yes');
// weak_map.set(hobby, {sports: ['Black Myth WuKong', 'Elden Ring']});
// console.log(weak_map.size);
// console.log(weak_map.get(hobby));
// console.log(weak_map.get(birthday));
// console.log(weak_map.get(gender));
// console.log(weak_map.has(symbol));
// console.log(weak_map.has({sports: ['basketball', 'computer games']}));
// weak_map.delete(symbol);
// console.log(weak_map.size);
// console.log(weak_map.get(symbol));
// console.log(weak_map.has(symbol));
// weak_map.delete(gender);
// console.log(weak_map.size);
// console.log(weak_map.get(gender));
// console.log(weak_map.has(gender));
// // weak_map.clear();
// console.log(weak_map.size);
// console.log(weak_map.get(hobby));
// console.log(weak_map.has(hobby));
// hobby = null;
// console.log(weak_map.get(hobby));
// console.log(weak_map.has(hobby));
// // weak_map.forEach((value, key) => {
// //     console.log(`forEach:key-${key} ======> value-${value}`);
// // });
// // for (const key of weak_map.keys()) {
// //     console.log(`keys:key-${key}`);
// // }
// // for (const value of weak_map.values()) {
// //     console.log(`values:value-${value}`);
// // }
// // for (const [key, value] of weak_map.entries()) {
// //     console.log(`entries:key-${key} ======> value-${value}`);
// // }
// 私有数据存储
// ES5 使用私有对象存储私有数据,闭包内的内存数据永远无法被清除,久而久之就会产生堆栈溢出、内存泄漏的情况
// const Person = (function () {
//     const personal = {};
//     let person_id = 0;
//     function Person(name) {
//         Object.defineProperty(this, '_id', {
//             value: ++person_id,
//             enumerable: false,
//             configurable: false,
//             writable: false,
//         });
//         personal[this._id] = name;
//     }
//     Person.prototype.getName = function () {
//         return personal[this._id];
//     };
//     return Person;
// })();
// let gary = new Person('gary'),
//     lily = new Person('lily'),
//     simon = new Person('simon'),
//     frank = new Person('frank'),
//     paul = new Person('paul');
// console.log(gary.getName());
// console.log(lily.getName());
// console.log(simon.getName());
// console.log(frank.getName());
// console.log(paul.getName());
// lily = null;
// console.log(lily.getName());
// ES6 使用 WeakMap 存储私有数据,更加简洁,且永远不会产生任何堆栈溢出、内存泄漏的情况
// const Person = (function () {
//     const personal = new WeakMap();
//     class Person {
//         constructor(name) {
//             personal.set(this, name);
//         }
//         getName() {
//             return personal.get(this);
//         }
//     }
//     return Person;
// })();
// let gary = new Person('gary'),
//     lily = new Person('lily'),
//     simon = new Person('simon'),
//     frank = new Person('frank'),
//     paul = new Person('paul');
// console.log(gary.getName());
// console.log(lily.getName());
// console.log(simon.getName());
// console.log(frank.getName());
// console.log(paul.getName());
// lily = null;
// console.log(lily.getName());
