// iterator 迭代器
// 基本用法,可模拟迭代器
// function iterator_func(arr) {
//     if (!Array.isArray(arr)) {
//         throw new TypeError(`The params ${arr} must be an array!`);
//     }
//     const arr_length = arr.length;
//     let count = 0,
//         done = false;
//     return {
//         next() {
//             done = count >= arr_length;
//             return {
//                 done,
//                 value: arr[count++],
//             };
//         }
//     };
// }
// const arr = ['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}];
// const iterator = iterator_func(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const arr = ['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 访问默认迭代器:实际上就是调用可迭代对象(数组、集合、字典、字符串以及 NodeList 元素集合)的 [Symbol.iterator]() 方法
// const arr = ['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const symbol = Symbol.for('set');
// const set = new Set(['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}, symbol, function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]);
// const iterator = set[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// const symbol = Symbol.for('map');
// const map = new Map([['name', 'black_myth_wtw'], ['age', 28], ['gender', true], ['birthday', '1993-06-30'], ['hobby', {sports: ['Black Myth WuKong', 'Elden Ring']}], [symbol, 'yes'], ['introduce', function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]]);
// const iterator = map[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
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
// console.log(iterator.next());
// 创建可迭代对象: 实际上就是对于普通对象模拟迭代器,*[Symbol.iterator]() {yield *Object.values()},注意这里使用委托生成器
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-04-27',
//     introduce(name, age, gender) {
//         return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     [Symbol.iterator]() {
//         let count = 0,
//             done = false,
//             values = Object.values(this),
//             {length: values_length} = values;
//         return {
//             next() {
//                 done = count >= values_length;
//                 return {
//                     done,
//                     value: !done ? values[count++] : undefined,
//                 }
//             }
//         }
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-04-27',
//     introduce(name, age, gender) {
//         return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
//     },
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// for (const value of black_myth_wtw) {
//     console.log(value);
// }
// 可迭代对象:
//     数组: 默认迭代器针对的是数组内的数组元素,实际上调用的是其 values() 方法
// const arr = ['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}];
// for (const value of arr) {
//     console.log(value);
// }
//     集合: 默认迭代器针对的是集合内的数据,实际上调用的是其 values() 方法
// const symbol = Symbol.for('set');
// const set = new Set(['black_myth_wtw', 28, true, '1993-06-30', {sports: ['Black Myth WuKong', 'Elden Ring']}, symbol, function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]);
// for (const value of set) {
//     console.log(value);
// }
//     字典: 默认迭代器针对的是字典内的映射以及其所对应的数据,实际上调用的是其 entries 方法
// const symbol = Symbol.for('map');
// const map = new Map([['name', 'black_myth_wtw'], ['age', 28], ['gender', true], ['birthday', '1993-06-30'], ['hobby', {sports: ['Black Myth WuKong', 'Elden Ring']}], [symbol, 'yes'], ['introduce', function introduce(name, age, gender) {
//     return `Hi,My name is ${name},${age} year's old,I'm a ${gender ? 'boy' : 'girl'}~~~~~~`;
// }]]);
// for (const [key, value] of map) {
//     console.log(`${key.toString()} ======> ${value}`);
// }
//     字符串: 默认迭代器针对的是字符串内的字符,注意现已扩展至 UTF-16 范围内的字符
// const string = '𠮷𠮷千兆';
// for (const value of string) {
//     console.log(value);
// }
///    NodeList 元素集合: 默认迭代器针对的是 NodeList 元素集合内的元素对象,实际上调用的是其 values 方法
