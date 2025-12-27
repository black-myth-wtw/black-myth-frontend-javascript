// ES5
// deep clone 对象深拷贝
// function deep_clone(o) {
//     function deep_clone_fn(o) {
//         var _o = Array.isArray(o) ? [] : {};
//
//         for (var key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deep_clone_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//
//         return _o;
//     }
//
//     return deep_clone_fn(o);
// }
//
// var symbol = Symbol('shallow_copy');
// var black_myth_wtw = {
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
// // black_myth_wtw.me = black_myth_wtw;
// var black_myth_gary = deep_clone(black_myth_wtw);
// black_myth_gary.name = 'black_myth_gary';
// black_myth_gary.age = 23;
// black_myth_gary.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_gary.introduce());
// console.log(black_myth_wtw, black_myth_gary);

// ES6
// const deep_clone = o => {
//     const deep_clone_fn = o => {
//         const _o = Array.isArray(o) ? [] : {};
//         for (let key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deep_clone_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return deep_clone_fn(o);
// };
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
// // black_myth_wtw.me = black_myth_wtw;
// const black_myth_gary = deep_clone(black_myth_wtw);
// black_myth_gary.name = 'black_myth_gary';
// black_myth_gary.age = 23;
// black_myth_gary.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_gary.introduce());
// console.log(black_myth_wtw, black_myth_gary);
