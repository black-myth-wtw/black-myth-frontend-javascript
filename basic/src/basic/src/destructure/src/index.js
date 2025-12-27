// javascript destructure 解构赋值
// 对象解构
// 解构赋值
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32
// };
// const {name, age} = black_myth_wtw;
// console.log(name, age);
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32
// };
// function do_it(val) {
//     console.log(val === black_myth_wtw);
// }
// do_it({name, age} = black_myth_wtw);
// console.log(name, age);
// 默认值
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
// };
// const {
//     name = 'black@myth@wtw',
//     age = 30,
//     gender = false,
//     birthday = '1993-04-27',
//     hobby = {sports: ['basketball', 'computer games']}
// } = black_myth_wtw;
// console.log(name, age, gender, birthday, hobby);
// 非同名变量赋值
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 28,
// };
// function do_it(val) {
//     console.log(val === black_myth_wtw);
//     const {name: val_name = 'black$myth$wtw', age: val_age = 36} = val;
//     console.log(val_name, val_age);
// }
// do_it({name: black_myth_wtw_name, age: black_myth_wtw_age} = black_myth_wtw);
// console.log(black_myth_wtw_name, black_myth_wtw_age);
// 嵌套解构
// 数组解构
// 解构赋值
// let a = 1, b = 102;
// [a, b] = [b, a];
// console.log(a, b);
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// const [, , , , ...extra_colors] = colors;
// console.log(extra_colors);
// 默认值
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// const [, , , , pink, purple, brown = 'brown'] = colors;
// console.log(pink, purple, brown);
// 嵌套解构
// 不定元素,注意与不定参数一致,元素集合必须位于数组的末尾
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// const [, , , , ...extra_colors] = colors;
// console.log(extra_colors);
// 混合解构
// 解构参数
// 必须传值
// 默认值
// const default_information = {
//     name: 'black@myth@wtw',
//     age: 24,
//     gender: false,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
// function Person({
//                     name = default_information.name,
//                     age = default_information.age,
//                     gender = default_information.gender,
//                     birthday = default_information.birthday,
//                     hobby = default_information.hobby,
//                     introduce_myself
//                 } = default_information) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
//     this.introduce_myself = introduce_myself;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},My birthday is ${this.birthday},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw.introduce_myself);
