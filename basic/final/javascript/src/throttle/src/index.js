// javascript throttle 函数节流
// const throttle = (fn, timeout) => {
//     let timer = null,
//         first = true;
//     return function (...args) {
//         if (timer) return false;
//         if (first) {
//             fn.call(this, ...args);
//             first = false;
//             return true;
//         }
//         timer = setTimeout(() => {
//             fn.call(this, ...args);
//         }, timeout);
//     };
// };
