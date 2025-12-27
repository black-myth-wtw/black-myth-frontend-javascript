// javascript set 集合
// 基本用法
// 属性
// size 用于获取集合的长度
// 方法
// add 用于向集合内添加数据
// has 用于判断集合内是否存在指定的数据
// delete 用于删除集合内指定的数据
// clear 用于情况集合内所有的数据
// forEach 用于循环集合内的数据索引、数据并实行操作
// keys 用于循环集合内的数据索引并实行操作
// values 用于循环集合内的数据并实行操作
// entries 用于循环集合内的数据索引、数据并实行操作
// const set = new Set(),
//     symbol = Symbol.for('set'),
//     hobby = {sports: ['basketball', 'computer games']};
// set.add('black_myth_wtw');
// set.add(32);
// set.add(true);
// set.add('1993-06-30');
// set.add(hobby);
// set.add(symbol);
// console.log(set.size);
// console.log(set.has(symbol));
// console.log(set.has(hobby));
// set.delete('birthday');
// console.log(set.size);
// set.delete(symbol);
// console.log(set.size);
// console.log(set.has(symbol));
// console.log(set.has(hobby));
// set.clear();
// console.log(set.has(hobby));
// console.log(set.size);
// 初始化声明并添加数据 new Set([])
// const symbol = Symbol.for('set'),
//     hobby = {sports: ['basketball', 'computer games']};
// const set = new Set([
//     'black_myth_wtw',
//     32,
//     true,
//     '1993-06-30',
//     hobby,
//     symbol
// ]);
// console.log(set.size);
// console.log(set.has(symbol));
// console.log(set.has(hobby));
// set.delete('birthday');
// console.log(set.size);
// set.delete(symbol);
// console.log(set.size);
// console.log(set.has(symbol));
// console.log(set.has(hobby));
// set.forEach((value, key) => {
//     console.log(`forEach:key-${key.toString()} ======> value-${value.toString()}`);
// });
// for (const key of set.keys()) {
//     console.log(`keys:key-${key.toString()}`);
// }
// for (const value of set.values()) {
//     console.log(`values:value-${value.toString()}`);
// }
// for (const [key, value] of set.entries()) {
//     console.log(`entries:key-${key.toString()} ======> value-${value.toString()}`);
// }
// 将集合转化为数组: [...set],注意 set 构造对象必须与数组、展开运算符配合才可以实行转化
// const symbol = Symbol.for('set'),
//     hobby = {sports: ['basketball', 'computer games']};
// const set = new Set([
//     'black_myth_wtw',
//     32,
//     true,
//     '1993-06-30',
//     hobby,
//     symbol
// ]);
// console.log([...set]);
// 去重
// const arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// function deduplicate(arr) {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     return [...new Set([...arr])];
// }
// console.log(deduplicate(arr));
// WeakSet
// 基本用法
// 只能向弱类型的集合当中添加应用类型的数据
// 属性 size 方法 clear/forEach/keys/values/entries 失效
// 一旦与引用类型的数据失去绑定或者引用类型的数据失效,那么此集合内的引用类型数据就会被释放并被垃圾回收机制及时清理,以防止产生堆栈溢出、内存泄漏的情况
// const weak_set = new WeakSet();
// let name = {name: 'black_myth_wtw'},
//     age = {age: 30},
//     gender = {gender: true},
//     hobby = {sports: ['basketball', 'computer games']};
// weak_set.add(name);
// weak_set.add(age);
// weak_set.add(gender);
// weak_set.add(hobby);
// // weak_set.add('1993-06-30');
// console.log(weak_set.size);
// console.log(weak_set.has(hobby));
// weak_set.delete(hobby);
// console.log(weak_set.size);
// console.log(weak_set.has(hobby));
// console.log(weak_set.has(name));
// console.log(weak_set.has(age));
// console.log(weak_set.has(gender));
// // weak_set.clear();
// weak_set.delete(gender);
// console.log(weak_set.has(gender));
// console.log(weak_set.has(name));
// console.log(weak_set.has(age));
// name = null;
// console.log(weak_set.has(name));
// // weak_set.forEach((value, key) => {
// //     console.log(`forEach:key-${key.toString()} ======> value-${value.toString()}`);
// // });
// // for (const key of weak_set.keys()) {
// //     console.log(`keys:key-${key.toString()}`);
// // }
// // for (const value of weak_set.values()) {
// //     console.log(`values:value-${value.toString()}`);
// // }
// // for (const [key, value] of weak_set.entries()) {
// //     console.log(`entries:key-${key.toString()} ======> value-${value.toString()}`);
// // }
