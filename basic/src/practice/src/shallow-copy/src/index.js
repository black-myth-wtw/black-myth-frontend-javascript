// javascript shallow copy 对象浅复制/对象浅拷贝
// ES5
// function shallow_copy(o) {
//     var _o = Array.isArray(o) ? [] : {};
//     for (var key in o) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
// }
// var symbol = Symbol.for('shallow-copy');
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
// var black_myth_wtw_shallow_copy = shallow_copy(black_myth_wtw);
// black_myth_wtw_shallow_copy.name = 'black@myth@wtw';
// black_myth_wtw_shallow_copy.birthday = '1968-01-28';
// black_myth_wtw_shallow_copy.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_shallow_copy);
//
// ES6
// const shallow_copy = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key in o) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
// };
// const symbol = Symbol.for('shallow-copy');
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
// const black_myth_wtw_shallow_copy = shallow_copy(black_myth_wtw);
// black_myth_wtw_shallow_copy.name = 'black@myth@wtw';
// black_myth_wtw_shallow_copy.birthday = '1968-01-28';
// black_myth_wtw_shallow_copy.hobby.sports = ['Black Myth WuKong', 'Elden Ring'];
// console.log(black_myth_wtw, black_myth_wtw_shallow_copy);
