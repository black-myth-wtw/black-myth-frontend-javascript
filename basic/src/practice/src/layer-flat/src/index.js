// ES5
// layer flat 数组分层扁平化
// function layer_flat(arr, layer, initial) {
//     initial = initial || [];
//     layer = layer || 1;
//
//     return arr.reduce(function (a, b) {
//         if (Array.isArray(b) && layer > 1) {
//             return layer_flat(b, layer - 1, a);
//         }
//         return a.concat(b);
//     }, initial);
// }
//
// var layer_flat_arr = [1, [2, 3, [4, 5, 6, [7, 8]]], [9, 10, 11, 12, [13]], [14, 15, 16, 17, 18, [19, 20, [21, [22, [23]]], 24]]];
// console.log(layer_flat(layer_flat_arr));
// console.log(layer_flat(layer_flat_arr, 2));
// console.log(layer_flat(layer_flat_arr, 3));
// console.log(layer_flat(layer_flat_arr, 4));

// ES6
// const layer_flat = (arr, layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? layer_flat(b, layer - 1, a) : a.concat(b), initial);
// const layer_flat_arr = [1, [2, 3, [4, 5, 6, [7, 8]]], [9, 10, 11, 12, [13]], [14, 15, 16, 17, 18, [19, 20, [21, [22, [23]]], 24]]];
// console.log(layer_flat(layer_flat_arr));
// console.log(layer_flat(layer_flat_arr, 2));
// console.log(layer_flat(layer_flat_arr, 3));
// console.log(layer_flat(layer_flat_arr, 4));
