// javascript iterator 迭代器
// 基本用法,注意可模拟迭代器
// function iterator_mock(iterator) {
//     if (typeof iterator[Symbol.iterator] !== 'function') {
//         return new TypeError(`The params iterator:${iterator} must be a function~~~~~~`);
//     }
//     const {length: iterator_length = 0} = iterator;
//     let count = 0;
//     return {
//         next() {
//             const is_done = count > iterator_length - 1;
//             return {
//                 value: !is_done ? iterator[count++] : null,
//                 done: is_done,
//             }
//         }
//     };
// }
// const arr = ['black@myth@wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// const iterator = iterator_mock(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 访问默认迭代器: 实际上就是调用可迭代对象(数组、集合、字典、字符串以及 NodeList 元素集合)的 [Symbol.iterator]() 方法
// const arr = ['black@myth@wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const symbol = Symbol.for('iterator'),
//     hobby = {sports: ['basketball', 'computer games']};
// const set = new Set(['black@myth@wtw', 32, true, '1993-06-30', hobby, symbol]);
// const iterator = set[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const symbol = Symbol.for('iterator'),
//     hobby = {sports: ['basketball', 'computer games']};
// const map = new Map([['name', 'black@myth@wtw'], ['age', 32], ['gender', true], ['birthday', '1993-06-30'], [hobby, {sports: ['Black Myth WuKong', 'Elden Ring']}], [symbol, 'yes']]);
// const iterator = map[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const string = '𠮷𠮷千兆';
// const iterator = string[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 创建可迭代对象: 实际上就是对于普通对象模拟迭代器,通过生成 *[Symbol.iterator]() {yield Object.values(values)},注意这里使用委托生成器
// const symbol = Symbol.for('iterator');
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     symbol: 'yes',
//     [Symbol.iterator]() {
//         const values = Object.values(this),
//             {length: values_length} = values;
//         let count = 0;
//         return {
//             next() {
//                 const is_done = count > values_length - 1;
//                 return {
//                     value: !is_done ? values[count++] : null,
//                     done: is_done,
//                 }
//             }
//         };
//     }
// };
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// for (const value of black_myth_wtw) {
//     console.log(`values:value-${value}`);
// }
// 可迭代对象
// 数组
// 默认迭代器针对的是数组内的数组元素,实际上调用的是其 values 方法
// const arr = ['black@myth@wtw', 32, true, '1993-06-30', {sports: ['basketball', 'computer games']}];
// for (const value of arr) {
//     console.log(`arr-values:value-${value}`);
// }
// for (const value of arr.values()) {
//     console.log(`arr-values:value-${value}`);
// }
// 集合
// 默认迭代器针对的是集合内的数据,实际上调用的是其 values 方法
// const symbol = Symbol.for('iterator'),
//     hobby = {sports: ['basketball', 'computer games']};
// const set = new Set(['black@myth@wtw', 32, true, '1993-06-30', hobby, symbol]);
// for (const value of set) {
//     console.log(`set-values:value-${value.toString()}`);
// }
// for (const value of set.values()) {
//     console.log(`set-values:value-${value.toString()}`);
// }
// 字典
// 默认迭代器针对的是字典内的映射以及其所对应的数据,实际上调用的是其 entries 方法
// const symbol = Symbol.for('iterator'),
//     hobby = {sports: ['basketball', 'computer games']};
// const map = new Map([['name', 'black@myth@wtw'], ['age', 32], ['gender', true], ['birthday', '1993-06-30'], [hobby, {sports: ['Black Myth WuKong', 'Elden Ring']}], [symbol, 'yes']]);
// for (const [key, value] of map) {
//     console.log(`map-entries:key-${key.toString()},value-${value}`);
// }
// for (const [key, value] of map.entries()) {
//     console.log(`map-entries:key-${key.toString()},value-${value}`);
// }
// 字符串
// 默认迭代器针对的是字符串内的字符,注意现已扩展至 utf-16 范围内的字符
// const string = '𠮷𠮷千兆';
// for (const char of string) {
//     console.log(`string:char-${char}`);
// }
// NodeList 元素集合
// 默认迭代器针对的是 NodeList 元素集合内的对象元素,实际上调用的是其 values 方法
