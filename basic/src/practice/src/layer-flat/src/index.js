// javascript layer flat 数组分层扁平化
// ES5
// function layer_flat(arr, layer, initial) {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     initial = initial || [];
//     layer = layer || 1;
//     return arr.reduce(function (a, b) {
//         if (Array.isArray(b) && layer > 1) {
//             return layer_flat(b, layer - 1, a);
//         }
//         return a.concat(b);
//     }, initial);
// }
// var arr = [[1, 2, [3, 4, 5], [6, 7], [8, 9, [10, 11, [12]]]], [13, [14, 15], [16, [[17], 18, [19]], [20, 21, [[22, 23], 24, [25, [26, [27]]]]]]]];
// // var layer_flat_arr = layer_flat(arr);
// var layer_flat_arr = layer_flat(arr, 5);
// console.log('layer_flat_arr:', layer_flat_arr);
// ES6
// const layer_flat = (arr, layer = 1, initial = []) => {
//     if (!Array.isArray(arr)) throw new TypeError(`The params arr:${arr} must be an array~~~~~~`);
//     return arr.reduce((a, b) => Array.isArray(b) && layer > 1 ? layer_flat(b, layer - 1, a) : a.concat(b), initial);
// };
// const arr = [[1, 2, [3, 4, 5], [6, 7], [8, 9, [10, 11, [12]]]], [13, [14, 15], [16, [[17], 18, [19]], [20, 21, [[22, 23], 24, [25, [26, [27]]]]]]]];
// // const layer_flat_arr = layer_flat(arr);
// const layer_flat_arr = layer_flat(arr, 5);
// console.log('layer_flat_arr:', layer_flat_arr);
