// javascript deep clone loop 对象循环深复制/对象循环深拷贝
// ES5
// function deep_clone_loop(o) {
//     const deep_clone_loop_map = new WeakMap();
//     function deep_clone_loop_fn(o) {
//         var _o = Array.isArray(o) ? [] : {},
//             exist_o = deep_clone_loop_map.get(o);
//         if (exist_o) return exist_o;
//         deep_clone_loop_map.set(o, o);
//         for (var key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deep_clone_loop_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//     return deep_clone_loop_fn(o);
// }
// var symbol = Symbol.for('deep-clone-loop');
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
// black_myth_wtw.me = black_myth_wtw;
// var black_myth_wtw_deep_clone_loop = deep_clone_loop(black_myth_wtw);
// black_myth_wtw_deep_clone_loop.name = 'black@myth@wtw';
// black_myth_wtw_deep_clone_loop.birthday = '1968-01-28';
// black_myth_wtw_deep_clone_loop.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_deep_clone_loop);
//
// ES6
// const deep_clone_loop = o => {
//     const deep_clone_loop_map = new WeakMap();
//     function deep_clone_loop_fn(o) {
//         const _o = Array.isArray(o) ? [] : {},
//             exist_o = deep_clone_loop_map.get(o);
//         if (exist_o) return exist_o;
//         deep_clone_loop_map.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deep_clone_loop_fn(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//     return deep_clone_loop_fn(o);
// };
// const symbol = Symbol.for('deep-clone-loop');
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
// black_myth_wtw.me = black_myth_wtw;
// const black_myth_wtw_deep_clone_loop = deep_clone_loop(black_myth_wtw);
// black_myth_wtw_deep_clone_loop.name = 'black@myth@wtw';
// black_myth_wtw_deep_clone_loop.birthday = '1968-01-28';
// black_myth_wtw_deep_clone_loop.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_deep_clone_loop);
