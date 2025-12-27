// 解构赋值
// 对象解构
// 解构赋值
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 23,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
// const {name, age} = black_myth_wtw;
// console.log(name, age);
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 23,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
// function person(val, condition = true) {
//     if (condition) {
//         console.log(val === black_myth_wtw);
//     }
// }
// function person({...val}, condition = true) {
//     if (condition) {
//         console.log(val === black_myth_wtw);
//         console.log(val);
//     }
// }
// person({name, age} = black_myth_wtw);
// console.log(name, age);
// 默认值
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 23,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
// const {name, age, gender = true, hobby = {sports: ['Black Myth WuKong', 'Elden Ring']}} = black_myth_wtw;
// console.log(name, age, gender, hobby);
// 非同名变量赋值
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 23,
//     introduce() {
//         return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
//     }
// };
// const {
//     name: black_myth_wtw_name,
//     age: black_myth_wtw_age,
//     gender: black_myth_wtw_gender = true,
//     hobby = {sports: ['Black Myth WuKong', 'Elden Ring']}
// } = black_myth_wtw;
// console.log(black_myth_wtw_name, black_myth_wtw_age, black_myth_wtw_gender, hobby);
// 嵌套解构
// 数组解构
// 解构赋值
// let a = 10, b = 30;
// [a, b] = [b, a];
// console.log(a, b);
// 默认值
// const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
// const [red, , , yellow, , purple = 'dark purple', grey = 'light grey'] = colors;
// console.log(red, yellow, purple, grey);
// 嵌套解构
// 不定元素,注意与不定参数一致,元素集合必须位于数组末尾
// const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
// const [, , , ...special_colors] = colors;
// console.log(special_colors);
// console.log(...special_colors);
// 混合解构
// 解构参数
// 必须传值
// 默认值
// const default_person_params = {
//     name: 'black+myth+wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     }
// };
// function person({
//                     name = default_person_params.name,
//                     age = default_person_params.age,
//                     gender = default_person_params.gender,
//                     birthday = default_person_params.birthday,
//                     hobby = default_person_params.hobby,
//                     university = '山东工商学院'
//                 } = default_person_params) {
//     console.log(name, age, gender, birthday, hobby, university);
// }
// person();
