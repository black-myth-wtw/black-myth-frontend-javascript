// ES5
// shallow copy 对象浅拷贝
// function shallow_copy(o) {
//     var _o = Array.isArray(o) ? [] : {};
//     for (var key in o) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
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
// var black_myth_gary = shallow_copy(black_myth_wtw);
// black_myth_gary.name = 'black_myth_gary';
// black_myth_gary.age = 23;
// black_myth_gary.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_gary.introduce());
// console.log(black_myth_wtw, black_myth_gary);

// ES6
// const shallow_copy = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key in o) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
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
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     },
//     another: undefined,
//     [symbol]: 'yes'
// };
// const black_myth_gary = shallow_copy(black_myth_wtw);
// black_myth_gary.name = 'black_myth_gary';
// black_myth_gary.age = 23;
// black_myth_gary.hobby.sports = ['basketball', 'computer games'];
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_gary.introduce());
// console.log(black_myth_wtw, black_myth_gary);
