// javascript throttle 函数节流
// ES5
// function throttle(fn, timeout) {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     var timer = null,
//         first = true;
//     return function () {
//         if (timer) return false;
//         var self = this,
//             args = Array.prototype.slice.call(arguments);
//         if (first) {
//             fn.apply(this, args);
//             first = false;
//             return true;
//         }
//         timer = setTimeout(function () {
//             fn.apply(self, args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     }
// }
//
// ES6
// const throttle = (fn, timeout) => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     let timer = null,
//         first = true;
//     return function (...args) {
//         if (timer) return false;
//         if (first) {
//             fn(...args);
//             first = false;
//             return true;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     };
// };
