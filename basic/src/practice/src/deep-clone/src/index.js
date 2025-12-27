// javascript deep clone 对象深复制/对象深拷贝
// ES5
// function deep_clone(o) {
//     var _o = Array.isArray(o) ? [] : {};
//     for (var key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             if (o[key] && typeof o[key] === 'object') {
//                 _o[key] = deep_clone(o[key]);
//             } else {
//                 _o[key] = o[key];
//             }
//         }
//     }
//     return _o;
// }
// var symbol = Symbol.for('deep-clone');
// var black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined,
// };
// // black_myth_wtw.me = black_myth_wtw;
// var black_myth_wtw_deep_clone = deep_clone(black_myth_wtw);
// black_myth_wtw_deep_clone.name = 'black@myth@wtw';
// black_myth_wtw_deep_clone.birthday = '1968-01-28';
// black_myth_wtw_deep_clone.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_deep_clone);
//
// ES6
// const deep_clone = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             if (o[key] && typeof o[key] === 'object') {
//                 _o[key] = deep_clone(o[key]);
//             } else {
//                 _o[key] = o[key];
//             }
//         }
//     }
//     return _o;
// };
// const symbol = Symbol.for('deep-clone');
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     [symbol]: 'yes',
//     another: undefined,
// };
// // black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_deep_clone = deep_clone(black_myth_wtw);
// black_myth_wtw_deep_clone.name = 'black@myth@wtw';
// black_myth_wtw_deep_clone.birthday = '1968-01-28';
// black_myth_wtw_deep_clone.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_deep_clone);
