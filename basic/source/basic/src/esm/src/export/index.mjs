// export let number = 16;
// export const name = 'black_myth_wtw';
// export let drink = 'water';
//
// export function count() {
//     return number++;
// }
//
// export function sum() {
//     return (number = number + 2);
// }
// export {sum as default};
//
// export {name, number, drink, count} from './module.mjs';
//
// export default function sum() {
//     return (number = number + 100);
// }
//
// Array.prototype.pushAll = function (arr) {
//     if(!Array.isArray(arr)) {
//         throw new TypeError(`The params ${arr} must be an array!`);
//     }
//     return this.push(...arr);
// };
export let number = 100;
export default function sum() {
    return (number = number + 100);
}
