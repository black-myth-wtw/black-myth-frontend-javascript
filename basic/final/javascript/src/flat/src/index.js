// javascript flat 数组扁平化
// const flat = (arr = [], initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const arr = [[1, 2, [3, 4, 5], [6, 7], [8, 9, [10, 11, [12]]]], [13, [14, 15], [16, [[17], 18, [19]], [20, 21, [[22, 23], 24, [25, [26, [27]]]]]]]];
// const flat_arr = flat(arr);
// console.log('flat_arr:', flat_arr);
