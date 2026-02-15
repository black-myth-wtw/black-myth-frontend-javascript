// 基本用法,可模拟迭代器✅
// function iterator_mock(arr = []) {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     const {length = 0} = arr;
//     let count = 0;
//     return {
//         next() {
//             const is_done = count > length - 1;
//             return {
//                 done: is_done,
//                 value: !is_done ? arr[count++] : undefined,
//             }
//         }
//     };
// }
// const black_myth_wtw = [
//     'black#myth#wtw',
//     24,
//     true,
//     '1994-03-10',
//     {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     'ZhaoYue',
// ];
// const iterator = iterator_mock(black_myth_wtw);
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// 访问默认迭代器: 调用可迭代对象(数组/集合/字典/字符串/NodeList 元素对象集合)的 [Symbol.iterator]() 方法✅
// const black_myth_wtw_arr = ['black*myth*wtw', 30, false, '1993-04-27', {
//     sports: ['basketball', 'computer games']
// }, 'WangJinJin'];
// const iterator = black_myth_wtw_arr[Symbol.iterator]();
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// const black_myth_wtw_set = new Set([
//     'black*myth*wtw', 30, false, '1993-04-27', {
//         sports: ['basketball', 'computer games']
//     }, 'WangJinJin'
// ]);
// const iterator = black_myth_wtw_set[Symbol.iterator]();
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// const black_myth_wtw_map = new Map([[{name: '姓名'}, 'black*myth*wtw'], [{age: '年龄'}, 30], [{gender: '性别'}, false], [{birthday: '生日'}, '1993-04-27'], [{hobby: '爱好'}, {
//     sports: ['basketball', 'computer games']
// }], [{lover: '爱人'}, 'WangJinJin']]);
// const iterator = black_myth_wtw_map[Symbol.iterator]();
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// const black_myth_wtw_str = '𠮷𠮷千兆';
// const iterator = black_myth_wtw_str[Symbol.iterator]();
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// 创建可迭代对象: 对于普通对象模拟迭代器, {*[Symbol.iterator]() { yield *Object.values(this); }},注意这里使用委托生成器✅
// const black_myth_wtw = {
//     name: 'black$myth$wtw',
//     age: 26,
//     gender: false,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['tennis', 'ping pong']
//     },
//     lover: 'WangJinJin',
// };
// TypeError
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// const black_myth_wtw = {
//     name: 'black$myth$wtw',
//     age: 26,
//     gender: false,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['tennis', 'ping pong']
//     },
//     lover: 'ZhengShuAng',
//     [Symbol.iterator]() {
//         const black_myth_wtw_arr = Object.values(this);
//         let count = 0,
//             {length = 0} = black_myth_wtw_arr;
//         return {
//             next() {
//                 const is_done = count > length - 1;
//                 return {
//                     done: is_done,
//                     value: is_done ? undefined : black_myth_wtw_arr[count++],
//                 };
//             }
//         }
//     }
// };
// const iterator = black_myth_wtw[Symbol.iterator]();
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// console.log('iterator_next:', iterator.next());
// 可迭代对象访问默认迭代器遍历: 数组-默认迭代器针对的是数组内的数组元素,实则调用的是其 values 方法✅
//           集合-默认迭代器针对的是集合内的数据,实则调用的是其 values 方法✅
//           字典-默认迭代器针对的是字典内的映射以及其所对应的数据,实则调用的是其 entries 方法✅
//           字符串-默认迭代器针对的是字符串内的字符,注意现已扩展至 utf-16 范围的字符✅
//           NodeList 元素对象集合-默认迭代器针对的是 NodeList 元素对象集合内的 NodeList 对象节点,实则调用的是其 values 方法✅
// const black_myth_wtw_arr = ['black*myth*wtw', 30, false, '1993-04-27', {
//     sports: ['basketball', 'computer games']
// }, 'WangJinJin'];
// for (const value of black_myth_wtw_arr) {
//     console.log(`black_myth_wtw_arr for...of => value:${value}`);
// }
// for (const value of black_myth_wtw_arr.values()) {
//     console.log(`black_myth_wtw_arr values => value:${value}`);
// }
// const black_myth_wtw_set = new Set([
//     'black*myth*wtw', 30, false, '1993-04-27', {
//         sports: ['basketball', 'computer games']
//     }, 'WangJinJin'
// ]);
// for (const value of black_myth_wtw_set) {
//     console.log(`black_myth_wtw_set for...of => value:${value}`);
// }
// for (const value of black_myth_wtw_set.values()) {
//     console.log(`black_myth_wtw_set values => value:${value}`);
// }
// const black_myth_wtw_map = new Map([[{name: '姓名'}, 'black*myth*wtw'], [{age: '年龄'}, 30], [{gender: '性别'}, false], [{birthday: '生日'}, '1993-04-27'], [{hobby: '爱好'}, {
//     sports: ['basketball', 'computer games']
// }], [{lover: '爱人'}, 'WangJinJin']]);
// for (const [key, value] of black_myth_wtw_map) {
//     console.log(`black_myth_wtw_map for...of => key:${key}, value:${value}`);
// }
// for (const [key, value] of black_myth_wtw_map.entries()) {
//     console.log(`black_myth_wtw_map entries => key:${key}, value:${value}`);
// }
// const black_myth_wtw_str = '𠮷𠮷千兆';
// for (const char of black_myth_wtw_str) {
//     console.log(`black_myth_wtw_str for...of => char:${char}`);
// }
// TypeError
// for (const char of black_myth_wtw_str.values()) {
//     console.log(`black_myth_wtw_str values => char:${char}`);
// }
