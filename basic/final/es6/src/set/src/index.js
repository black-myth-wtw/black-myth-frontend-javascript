// 基本用法✅
// 属性 size,用于获取集合的长度✅
// 方法 add,用于向集合内添加数据✅
//     has,用于判断集合内是否存在指定的数据✅
//     delete,用于删除集合内指定的数据✅
//     clear,用于清空集合内的所有数据✅
//     forEach,用于循环集合内的数据下标与数据,并实行操作✅
//     keys,用于循环集合内的数据下标,并实行操作✅
//     values,用于循环集合内的数据,并实行操作✅
//     entries,用于循环集合内的数据下标与数据,并实行操作✅
// const set = new Set();
// const hobby = {
//     sports: ['Black Myth WuKong', 'Elden Ring']
// };
// set.add('black@myth@wtw');
// set.add(30);
// set.add(true);
// set.add('1993-06-30');
// set.add({sports: ['basketball', 'computer games']});
// set.add(hobby);
// set.add('ZhengShuAng');
// console.log('set_size:', set.size);
// console.log(set.has(30));
// console.log(set.has(true));
// console.log(set.has('1993-06-30'));
// console.log(set.has({sports: ['basketball', 'computer games']}));
// console.log(set.has(hobby));
// set.delete(true);
// set.delete({sports: ['basketball', 'computer games']});
// console.log('set_size:', set.size);
// console.log(set.has('1993-06-30'));
// console.log(set.has(true));
// console.log(set.has({sports: ['basketball', 'computer games']}));
// set.delete(hobby);
// console.log('set_size:', set.size);
// console.log(set.has(hobby));
// // set.clear();
// // console.log(set.has('1993-06-30'));
// // console.log(set.has(true));
// // console.log(set.has(hobby));
// set.forEach((value, key) => {
//     console.log(`set forEach => key:${key}, value:${value}~~~~~~`);
// });
// for (const key of set.keys()) {
//     console.log(`set keys => key:${key}`);
// }
// for (const value of set.values()) {
//     console.log(`set values => values:${value}`);
// }
// for (const [key, value] of set.entries()) {
//     console.log(`set entries => key:${key}, values:${value}`);
// }
// 初始化声明并添加数据,通过 new Set([]);✅
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 24,
//     gender: false,
//     birthday: '1995-03-03',
//     hobby: {
//         sports: ['badminton', 'ping-pong']
//     }
// };
// const set = new Set(Object.values(black_myth_wtw));
// console.log(`set:${set}}`);
// set.forEach((value, key) => {
//     console.log(`set forEach => key:${key}, value:${value}`);
// });
// 将集合转化为普通数组,通过 set 构造对象、展开运算符与数组 [...set],注意 set 构造对象必须与 数组、展开运算符配合才可实行转化✅
// const set = new Set();
// const hobby = {
//     sports: ['Black Myth WuKong', 'Elden Ring']
// };
// set.add('black@myth@wtw');
// set.add(30);
// set.add(true);
// set.add('1993-06-30');
// set.add({sports: ['basketball', 'computer games']});
// set.add(hobby);
// set.add('ZhengShuAng');
// console.log('set_size:', set.size);
// console.log(set.has(30));
// console.log(set.has(true));
// console.log(set.has('1993-06-30'));
// console.log(set.has({sports: ['basketball', 'computer games']}));
// console.log(set.has(hobby));
// set.delete(true);
// set.delete({sports: ['basketball', 'computer games']});
// console.log('set_size:', set.size);
// console.log(set.has('1993-06-30'));
// console.log(set.has(true));
// console.log(set.has({sports: ['basketball', 'computer games']}));
// set.delete(hobby);
// console.log('set_size:', set.size);
// console.log(set.has(hobby));
// // set.clear();
// // console.log(set.has('1993-06-30'));
// // console.log(set.has(true));
// // console.log(set.has(hobby));
// set.forEach((value, key) => {
//     console.log(`set forEach => key:${key}, value:${value}~~~~~~`);
// });
// for (const key of set.keys()) {
//     console.log(`set keys => key:${key}`);
// }
// for (const value of set.values()) {
//     console.log(`set values => values:${value}`);
// }
// for (const [key, value] of set.entries()) {
//     console.log(`set entries => key:${key}, values:${value}`);
// }
// console.log(`set transform array:`, [...set]);
// duplicate 去重✅
// const arr_integer = [1, 100, 99, 88, 77, 99, 101, 24, 33, 44, 56, 24, 33, 64, 55, 22, 32, 44, 66, 88];
// function duplicate(arr) {
//     return [...new Set(arr)];
// }
// const arr_integer_duplicate = duplicate(arr_integer);
// console.log('arr_integer_duplicate:', arr_integer_duplicate);
// WeakMap✅
// 基本用法✅
// 特性✅
// 只能向弱类型的集合当中添加引用类型的数据✅
// 属性 size,方法 clear、forEach、keys、values 与 entries 失效✅
// 一旦与集合内引用类型的数据失去绑定,或者集合内引用类型的数据失效,那么集合内引用类型的数据就会被释放并被垃圾回收机制及时清理,以防止产生堆栈溢出、内存泄漏的情况✅
// const weak_set = new WeakSet();
// const name = {
//     name: 'black*myth*wtw'
// };
// let hobby = {
//     sports: ['Black Myth WuKong', 'Elden Ring']
// };
// // weak_set.add('black@myth@wtw');
// // weak_set.add(30);
// // weak_set.add(true);
// // weak_set.add('1993-06-30');
// weak_set.add(name);
// weak_set.add({[Symbol.for('weak_set')]: ['赵悦', '王津津', '郑爽']});
// weak_set.add(hobby);
// // weak_set.add('ZhengShuAng');
// // weak_set_size: undefined
// // console.log('weak_set_size:', weak_set.size);
// console.log(weak_set.has({[Symbol.for('weak_set')]: ['赵悦', '王津津', '郑爽']}));
// console.log(weak_set.has(name));
// console.log(weak_set.has(hobby));
// weak_set.delete(name);
// // weak_set_size: undefined
// // console.log('weak_set_size:', weak_set.size);
// console.log(weak_set.has({[Symbol.for('weak_set')]: ['赵悦', '王津津', '郑爽']}));
// console.log(weak_set.has(name));
// console.log(weak_set.has(hobby));
// weak_set.delete({[Symbol.for('weak_set')]: ['赵悦', '王津津', '郑爽']});
// console.log(weak_set.has({[Symbol.for('weak_set')]: ['赵悦', '王津津', '郑爽']}));
// console.log(weak_set.has(name));
// console.log(weak_set.has(hobby));
// // weak_set_size: undefined
// // console.log('weak_set_size:', weak_set.size);
// // TypeError
// // weak_set.clear();
// // TypeError
// // weak_set.forEach((value, key) => {
// //     console.log(`weak_set forEach => key:${key}, value:${value}`);
// // });
// // TypeError
// // for (const key of weak_set.keys()) {
// //     console.log(`weak_set keys => key:${key}`);
// // }
// // TypeError
// // for (const value of weak_set.values()) {
// //     console.log(`weak_set values => value:${value}`);
// // }
// // TypeError
// // for (const [key, value] of weak_set.entries()) {
// //     console.log(`weak_set entries => key:${key},value:${value}`);
// // }
// hobby = null;
// console.log(weak_set.has(hobby));
// // weak_set size: undefined
// // console.log('weak_set size:', weak_set.size);
