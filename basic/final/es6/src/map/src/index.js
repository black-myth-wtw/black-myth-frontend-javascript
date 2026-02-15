// 基本用法✅
// 属性 size,用于获取字典的大小✅
// 方法 set,用于向字典内添加映射以及其所对应的数据✅
//     get,用于根据指定的映射去获取字典内所对应的数据✅
//     has,用于根据指定的映射去判断字典内是否存在所对应的数据✅
//     delete,用于根据指定的映射去删除字典内所对应的数据✅
//     clear,用于清空字典内的映射以及其所对应的数据✅
//     forEach,用于循环字典内的映射以及其所对应的数据,并实行操作✅
//     keys,用于循环字典内的映射,并实行操作✅
//     values,用于循环字典内的数据,并实行操作✅
//     entries,用于循环字典内的映射以及其所对应的数据,并实行操作✅
// const map = new Map();
// const hobby = {},
//     symbol_map = Symbol.for('map');
// map.set('name', 'black&myth&wtw');
// map.set('age', 32);
// map.set('gender', true);
// map.set('birthday', '1994-03-10');
// map.set(hobby, {sports: ['soccer', 'football']});
// map.set({lover: '爱人'}, '赵悦');
// map.set(symbol_map, ['赵悦', '王津津', '郑爽']);
// console.log('map_size:', map.size);
// console.log(map.get({lover: '爱人'}));
// console.log(map.get(hobby));
// console.log(map.get('name'));
// console.log(map.get('birthday'));
// console.log(map.has({lover: '爱人'}));
// console.log(map.has(hobby));
// console.log(map.has(symbol_map));
// map.delete({lover: '爱人'});
// console.log('map_size:', map.size);
// map.delete('gender');
// console.log('map_size:', map.size);
// console.log(map.has(hobby));
// console.log(map.has(symbol_map));
// console.log(map.has('name'));
// console.log(map.has('gender'));
// console.log(map.has('birthday'));
// map.delete(hobby);
// console.log('map_size:', map.size);
// console.log(map.has(hobby));
// console.log(map.has(symbol_map));
// console.log(map.has('name'));
// console.log(map.has('gender'));
// console.log(map.has('birthday'));
// // map.clear();
// // console.log('map_size:', map.size);
// // console.log(map.has(hobby));
// // console.log(map.has(symbol_map));
// // console.log(map.has('name'));
// // console.log(map.has('gender'));
// // console.log(map.has('birthday'));
// map.forEach((value, key) => {
//     console.log(`map forEach => key:${key.toString()}, value:${value}`);
// });
// for (const key of map.keys()) {
//     console.log(`map keys => key:${key.toString()}`);
// }
// for (const value of map.values()) {
//     console.log(`map values => value:${value}`);
// }
// for (const [key, value] of map.entries()) {
//     console.log(`map entries => key:${key.toString()}, value:${value}`);
// }
// 初始化声明并添加映射以及其所对应的数据,通过 new Map([[]])✅
// const hobby = {},
//     symbol_map = Symbol.for('map');
// const map = new Map([['name', 'black&myth&wtw'], ['age', 32], ['gender', true], ['birthday', '1994-03-10'], [hobby, {sports: ['soccer', 'football']}], [{lover: '爱人'}, '赵悦'], [symbol_map, ['赵悦', '王津津', '郑爽']]]);
// map.forEach((value, key) => {
//     console.log(`map forEach => key:${key.toString()}, value:${value}`);
// });
// for (const key of map.keys()) {
//     console.log(`map keys => key:${key.toString()}`);
// }
// for (const value of map.values()) {
//     console.log(`map values => value:${value}`);
// }
// for (const [key, value] of map.entries()) {
//     console.log(`map entries => key:${key.toString()}, value:${value}`);
// }
// 将字典转化为普通二维数组,通过 map 构造对象、展开运算符与数组,map 构造对象必须与展开运算符、数组配合才可实行转化✅
// const map = new Map();
// const hobby = {},
//     symbol_map = Symbol.for('map');
// map.set('name', 'black&myth&wtw');
// map.set('age', 32);
// map.set('gender', true);
// map.set('birthday', '1994-03-10');
// map.set(hobby, {sports: ['soccer', 'football']});
// map.set({lover: '爱人'}, '赵悦');
// map.set(symbol_map, ['赵悦', '王津津', '郑爽']);
// console.log('map_size:', map.size);
// console.log(map.get({lover: '爱人'}));
// console.log(map.get(hobby));
// console.log(map.get('name'));
// console.log(map.get('birthday'));
// console.log(map.has({lover: '爱人'}));
// console.log(map.has(hobby));
// console.log(map.has(symbol_map));
// map.delete({lover: '爱人'});
// console.log('map_size:', map.size);
// map.delete('gender');
// console.log('map_size:', map.size);
// console.log(map.has(hobby));
// console.log(map.has(symbol_map));
// console.log(map.has('name'));
// console.log(map.has('gender'));
// console.log(map.has('birthday'));
// map.delete(hobby);
// console.log('map_size:', map.size);
// console.log(map.has(hobby));
// console.log(map.has(symbol_map));
// console.log(map.has('name'));
// console.log(map.has('gender'));
// console.log(map.has('birthday'));
// // map.clear();
// // console.log('map_size:', map.size);
// // console.log(map.has(hobby));
// // console.log(map.has(symbol_map));
// // console.log(map.has('name'));
// // console.log(map.has('gender'));
// // console.log(map.has('birthday'));
// map.forEach((value, key) => {
//     console.log(`map forEach => key:${key.toString()}, value:${value}`);
// });
// for (const key of map.keys()) {
//     console.log(`map keys => key:${key.toString()}`);
// }
// for (const value of map.values()) {
//     console.log(`map values => value:${value}`);
// }
// for (const [key, value] of map.entries()) {
//     console.log(`map entries => key:${key.toString()}, value:${value}`);
// }
// console.log('map transform dimension arr:', [...map]);
// WeakMap✅
// 基本用法✅
// 特性✅
// 只能向弱类型的字典内添加引用类型的映射以及其所对应的数据✅
// 属性 size,方法 clear/forEach/keys/values/entries 失效✅
// 一旦与字典内的引用类型的映射失去绑定,或者字典内的引用类型的映射失效,那么字典内的引用类型的映射就会被释放并被垃圾回收机制及时清理,以防止产生堆栈溢出/内存泄漏的情况✅
// const weak_map = new WeakMap();
// let hobby = {
//         hobby: '爱好'
//     },
//     symbol_weak_map = {[Symbol.for('weak_map')]: 'weak_map_lover'};
// weak_map.set({name: '姓名'}, 'black&myth&wtw');
// weak_map.set({age: '年龄'}, 32);
// weak_map.set({gender: '性别'}, true);
// weak_map.set({birthday: '生日'}, '1994-03-10');
// weak_map.set(hobby, {sports: ['soccer', 'football']});
// weak_map.set({lover: '爱人'}, '赵悦');
// weak_map.set(symbol_weak_map, ['赵悦', '王津津', '郑爽']);
// // weak_map_size: undefined
// console.log('weak_map_size:', weak_map.size);
// console.log(weak_map.get({lover: '爱人'}));
// console.log(weak_map.get(hobby));
// console.log(weak_map.get({name: '姓名'}));
// console.log(weak_map.get({birthday: '生日'}));
// console.log(weak_map.has({lover: '爱人'}));
// console.log(weak_map.has(hobby));
// console.log(weak_map.has(symbol_weak_map));
// weak_map.delete({lover: '爱人'});
// // weak_map_size: undefined
// console.log('weak_map_size:', weak_map.size);
// weak_map.delete({gender: '性别'});
// // weak_map_size: undefined
// console.log('weak_map_size:', weak_map.size);
// console.log(weak_map.has(hobby));
// console.log(weak_map.has(symbol_weak_map));
// console.log(weak_map.has({name: '姓名'}));
// console.log(weak_map.has({gender: '性别'}));
// console.log(weak_map.has({birthday: '生日'}));
// weak_map.delete(hobby);
// // weak_map_size: undefined
// console.log('weak_map_size:', weak_map.size);
// console.log(weak_map.has(hobby));
// console.log(weak_map.has(symbol_weak_map));
// console.log(weak_map.has({name: '姓名'}));
// console.log(weak_map.has({gender: '性别'}));
// console.log(weak_map.has({birthday: '生日'}));
// // TypeError
// // weak_map.clear();
// // console.log('weak_map_size:', weak_map.size);
// // console.log(weak_map.has(hobby));
// // console.log(weak_map.has(symbol_weak_map));
// // console.log(weak_map.has({name: '姓名'}));
// // console.log(weak_map.has({gender: '性别'}));
// // console.log(weak_map.has({birthday: '生日'}));
// // TypeError
// // weak_map.forEach((value, key) => {
// //     console.log(`weak_map forEach => key:${key.toString()}, value:${value}`);
// // });
// // TypeError
// // for (const key of weak_map.keys()) {
// //     console.log(`weak_map keys => key:${key.toString()}`);
// // }
// // TypeError
// // for (const value of weak_map.values()) {
// //     console.log(`weak_map values => value:${value}`);
// // }
// // TypeError
// // for (const [key, value] of weak_map.entries()) {
// //     console.log(`weak_map entries => key:${key.toString()}, value:${value}`);
// // }
// symbol_weak_map = null;
// // weak_map_size: undefined
// console.log('weak_map_size:', weak_map.size);
// console.log(weak_map.has(hobby));
// console.log(weak_map.has(symbol_weak_map));
// console.log(weak_map.has({name: '姓名'}));
// console.log(weak_map.has({gender: '性别'}));
// console.log(weak_map.has({birthday: '生日'}));
// 私有数据存储✅
// ES5: 在 ES5 中,我们经常使用私有对象来存储私有数据,闭包内的内存数据永远无法被清除,久而久之就会产生堆栈溢出/内存泄漏的情况✅
// ES6: 在 ES6 中,我们使用 WeakMap 来存储私有数据,更加简洁,且永远不会出现产生堆栈溢出/内存泄漏的情况✅
// var Person = (function () {
//     var personal = {},
//         personal_count = 0;
//     function Person(name) {
//         Object.defineProperty(this, '__id', {
//             value: ++personal_count,
//             enumerable: false,
//             configurable: false,
//             writable: false,
//         });
//         personal[this.__id] = name;
//     }
//     Person.prototype.get_name = function () {
//         return personal[this.__id];
//     };
//     return Person;
// })();
// var gary = new Person('Gary'),
//     lily = new Person('Lily'),
//     simon = new Person('Simon'),
//     frank = new Person('Frank'),
//     alice = new Person('Alice'),
//     aaron = new Person('Aaron'),
//     tom = new Person('Tom'),
//     abby = new Person('Abby');
// console.log('private object:', gary.get_name());
// console.log('private object:', lily.get_name());
// console.log('private object:', simon.get_name());
// console.log('private object:', frank.get_name());
// console.log('private object:', alice.get_name());
// console.log('private object:', aaron.get_name());
// console.log('private object:', tom.get_name());
// console.log('private object:', abby.get_name());
// abby = null;
// alice = null;
// tom = null;
// lily = null;
// const Person = (() => {
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
// let gary = new Person('Gary'),
//     lily = new Person('Lily'),
//     simon = new Person('Simon'),
//     frank = new Person('Frank'),
//     alice = new Person('Alice'),
//     aaron = new Person('Aaron'),
//     tom = new Person('Tom'),
//     abby = new Person('Abby');
// console.log('weak map:', gary.get_name());
// console.log('weak map:', lily.get_name());
// console.log('weak map:', simon.get_name());
// console.log('weak map:', frank.get_name());
// console.log('weak map:', alice.get_name());
// console.log('weak map:', aaron.get_name());
// console.log('weak map:', tom.get_name());
// console.log('weak map:', abby.get_name());
// abby = null;
// alice = null;
// tom = null;
// lily = null;
