// ES5
// debounce 函数防抖
// function debounce(fn, timeout) {
//     var timer = null;
//     return function () {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         var self = this,
//             args = Array.prototype.slice.call(arguments);
//         timer = setTimeout(function () {
//             fn.apply(self, args);
//         }, timeout);
//     }
// }

// ES6
// const debounce = (fn, timeout) => {
//     let timer = null;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         let self = this;
//         timer = setTimeout(() => {
//             fn(...args);
//         }, timeout);
//     };
// };
