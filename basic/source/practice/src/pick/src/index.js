// ES5
// pick 对象属性筛选
// function pick(o) {
//     var pick_loop_weak_map = new WeakMap(),
//         properties = Array.prototype.slice.call(arguments, 1);
//
//     function pick_fn(o) {
//         var _o = Array.isArray(o) ? [] : {},
//             exist_o = pick_loop_weak_map.get(o);
//         if (exist_o) return exist_o;
//         pick_loop_weak_map.set(o, o);
//         for (var key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key) && properties.includes(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = pick_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//
//     return pick_fn(o);
// }
//
// const symbol = Symbol('shallow_copy');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce: function () {
//         return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     another: undefined,
//     [symbol]: 'yes'
// };
// black_myth_wtw.me = black_myth_wtw;
// // const black_myth_gary = pick(black_myth_wtw, 'name', 'age', 'hobby', 'introduce', symbol);
// const black_myth_gary = pick(black_myth_wtw, 'name', 'age', 'hobby', 'introduce', symbol, 'me');
// black_myth_gary.name = 'black_myth_gary';
// black_myth_gary.age = 23;
// black_myth_gary.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_gary.introduce());
// console.log(black_myth_wtw, black_myth_gary);

// ES6
// const pick = (o, ...properties) => {
//     const pick_loop_weak_map = new WeakMap();
//
//     const pick_fn = (o) => {
//         const _o = Array.isArray(o) ? [] : {},
//             exist_o = pick_loop_weak_map.get(o);
//         if (exist_o) return exist_o;
//         pick_loop_weak_map.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key) && properties.includes(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = pick_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//
//     return pick_fn(o);
// }
//
// const symbol = Symbol('shallow_copy');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce: function () {
//         return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     another: undefined,
//     [symbol]: 'yes'
// };
// black_myth_wtw.me = black_myth_wtw;
// // const black_myth_gary = pick(black_myth_wtw, 'name', 'age', 'hobby', 'introduce', symbol);
// const black_myth_gary = pick(black_myth_wtw, 'name', 'age', 'hobby', 'introduce', symbol, 'me');
// black_myth_gary.name = 'black_myth_gary';
// black_myth_gary.age = 23;
// black_myth_gary.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_gary.introduce());
// console.log(black_myth_wtw, black_myth_gary);
