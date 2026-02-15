// export let number = 86;
// export const play = 'Black Myth ZhongKui';
// export const eat = 'chicken';
// export const drink = 'wine';

// export function count() {
//   return number++;
// }

// export function sum() {
//   return (number = number + 2);
// }

// export { sum as default };

// SyntaxError: Duplicate export of 'default'
// export default function pow() {
//     return (number = number + 100);
// }

// export { number, eat, drink, play, default as pow } from './modules/index.mjs';

// Array.prototype.pushAll = function (arr) {
//   if (!Array.isArray(arr)) {
//     throw new TypeError(`The params ${arr} must be an array!`);
//   }
//   return this.push(...arr);
// };
export let number = 168;
export default function sum() {
  return (number = number + 100);
}
const timer = setTimeout(
  () => {
    console.log("new number:", number);
    clearTimeout(timer);
  },
  2 * 60 * 1000,
);
// export let hobby = {
//   sports: [
//     "Black Myth WuKong",
//     "Elden Ring",
//     "Sekiro: Shadows Die Twice",
//     "Dark Souls",
//     "Elder Scrolls V: Skyrim",
//   ],
// };
// export default function love_hobby() {
//   return hobby.sports.join(",");
// }
// const timer = setTimeout(
//   () => {
//     console.log("new hobby:", hobby.sports.join(","));
//     clearTimeout(timer);
//   },
//   2 * 60 * 1000,
// );
