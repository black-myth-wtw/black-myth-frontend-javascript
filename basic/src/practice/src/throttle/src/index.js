// ES5
// throttle 函数节流
// function throttle(fn, timeout) {
//     var timer = null,
//         first = true;
//     return function () {
//         if (timer) return false;
//         var args = Array.prototype.slice.call(arguments),
//             self = this;
//         if (first) {
//             fn.apply(self, args);
//             first = false;
//             return true;
//         }
//         timer = setTimeout(function () {
//             fn.apply(self, args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     };
// }

// ES6
// const throttle = (fn, timeout) => {
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
//     }
// }
