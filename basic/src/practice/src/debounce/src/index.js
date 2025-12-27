// javascript debounce 函数防抖
// ES5
// function debounce(fn, timeout) {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
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
//
// ES6
// const debounce = (fn, timeout) => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     let timer = null;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//         }, timeout);
//     };
// };
