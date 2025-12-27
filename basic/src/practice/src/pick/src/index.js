// javascript pick 对象属性筛选
// ES5
// function pick(o, ...properties) {
//     const pick_map = new WeakMap();
//     function pick_fn(o) {
//         var _o = Array.isArray(o) ? [] : {},
//             exist_o = pick_map.get(o);
//         if (exist_o) return exist_o;
//         pick_map.set(o, o);
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
//     return pick_fn(o);
// }
// var symbol = Symbol.for('pick');
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
// var black_myth_wtw_pick = pick(black_myth_wtw, 'name', 'birthday', 'hobby', 'me', symbol);
// black_myth_wtw_pick.name = 'black@myth@wtw';
// black_myth_wtw_pick.birthday = '1968-01-28';
// black_myth_wtw_pick.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_pick);
//
// ES6
// const pick = (o, ...properties) => {
//     const pick_map = new WeakMap();
//     function pick_fn(o) {
//         const _o = Array.isArray(o) ? [] : {},
//             exist_o = pick_map.get(o);
//         if (exist_o) return exist_o;
//         pick_map.set(o, o);
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
//     return pick_fn(o);
// };
// const symbol = Symbol.for('pick');
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
// const black_myth_wtw_pick = pick(black_myth_wtw, 'name', 'birthday', 'hobby', 'me', symbol, 'another');
// black_myth_wtw_pick.name = 'black@myth@wtw';
// black_myth_wtw_pick.birthday = '1968-01-28';
// black_myth_wtw_pick.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_pick);
