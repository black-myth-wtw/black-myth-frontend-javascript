// set 集合
// 基本用法
// 属性: size-获取集合长度
// 方法: add-向集合内添加数据
//      has-判断集合内是否存在指定的数据
//      delete-删除集合内指定的数据
//      clear-清空集合内的所有数据
//      forEach-循环集合内的数据索引与数据并实行操作
//      keys-循环集合内的所用数据索引并实行操作
//      values-循环集合内的数据并实行操作
//      entries-循环集合内的数据索引与数据并实行操作
// const sports = {sports: ['basketball', 'computer games']};
// let set = new Set();
// set.add('black^myth^wtw');
// set.add(25);
// set.add(true);
// set.add(sports);
// set.add(function introduce(name, age) {
//     return `Hi,My name is ${name},${age} year's old~~~~~~`;
// });
// console.log(set.size);
// console.log(set.has({sports: ['basketball', 'computer games']}));
// console.log(set.has(sports));
// console.log(set.has(true));
// console.log(set.has(25));
// set.delete(sports);
// console.log(set.has(sports));
// console.log(set.size);
// set.clear();
// console.log(set.size);
// console.log(set.has(true));
// console.log(set.has(25));
// set = new Set(['black!myth!wtw', 29, true, sports, function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]);
// set.forEach((set_value, set_index, own_set) => {
//     console.log(`set_index: ${set_index} -> set_value: ${set_value}`);
//     console.log(set === own_set);
// });
// for (const value of set) {
//     console.log(`value: ${value}`);
// }
// for (const key of set.keys()) {
//     console.log(`key: ${key}`);
// }
// for (const value of set.values()) {
//     console.log(`value: ${value}`);
// }
// for (const [key, value] of set.entries()) {
//     console.log(`key: ${key} -> value: ${value}`);
// }
// 初始化声明并添加数据
// const sports = {sports: ['basketball', 'computer games']};
// const set = new Set(['black!myth!wtw', 29, true, sports, function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]);
// console.log(set, set.size);
// 转化为数组: [...set],注意 set 构造对象必须与展开运算符、数组配合才可以实行转换
// const sports = {sports: ['basketball', 'computer games']};
// const set = new Set(['black!myth!wtw', 29, true, sports, function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]);
// const arr = [...set];
// console.log(arr);
// 去重
// const unique = arr => [...new Set(arr)];
// let arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// console.log(arr.length);
// arr = unique(arr);
// console.log(arr, arr.length);
// WeakMap
// 基本用法
// 特性:
// 只能向弱类型的集合当中添加引用类型的数据
// 属性 size 方法 clear forEach keys values entries 失效
// 一旦与引用类型的数据失去绑定或者引用类型的数据失效,那么此集合当中引用类型的数据就会被释放并被垃圾回收机制及时清理,以防止产生堆栈溢出、内存泄漏的情况
// let weak_set = new WeakSet(),
//     sports = {sports: ['basketball', 'computer games']},
//     gender = {gender: true};
// weak_set.add('black^myth^wtw');
// weak_set.add(25);
// weak_set.add(true);
// weak_set.add({name: 'black^myth^wtw'});
// weak_set.add({age: 25});
// weak_set.add(gender);
// weak_set.add(sports);
// weak_set.add(function introduce(name, age) {
//     return `Hi,My name is ${name},${age} year's old~~~~~~`;
// });
// console.log(weak_set.size);
// console.log(weak_set.has({name: 'black^myth^wtw'}));
// console.log(weak_set.has(gender));
// console.log(weak_set.has(sports));
// weak_set.delete({name: 'black^myth^wtw'});
// weak_set.delete(gender);
// console.log(weak_set.size);
// console.log(weak_set);
// console.log(weak_set.has(gender));
// console.log(weak_set.has(sports));
// weak_set.forEach((set_value, set_index, own_set) => {
//     console.log(`set_index: ${set_index} -> set_value: ${set_value}`);
//     console.log(weak_set === own_set);
// });
// for (const value of weak_set) {
//     console.log(`value: ${value}`);
// }
// for (const key of weak_set.keys()) {
//     console.log(`key: ${key}`);
// }
// for (const value of weak_set.values()) {
//     console.log(`value: ${value}`);
// }
// for (const [key, value] of weak_set.entries()) {
//     console.log(`key: ${key} -> value: ${value}`);
// }
// weak_set.clear();
// sports = null;
// console.log(weak_set.has(sports));
