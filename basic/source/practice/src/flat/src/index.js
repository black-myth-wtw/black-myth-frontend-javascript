// ES5
// flat 数组扁平化
// function flat(arr, initial) {
//     initial = initial || [];
//
//     return arr.reduce(function (a, b) {
//         if (Array.isArray(b)) {
//             return flat(b, a);
//         }
//
//         return a.concat(b);
//     }, initial);
// }
//
// var flat_arr = [1, [2, 3, [4, 5, 6, [7, 8]]], [9, 10, 11, 12, [13]], [14, 15, 16, 17, 18, [19, 20, [21, [22, [23]]], 24]]];
// console.log(flat(flat_arr));

// ES6
// const flat = (arr, initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const flat_arr = [1, [2, 3, [4, 5, 6, [7, 8]]], [9, 10, 11, 12, [13]], [14, 15, 16, 17, 18, [19, 20, [21, [22, [23]]], 24]]];
// console.log(flat(flat_arr));
