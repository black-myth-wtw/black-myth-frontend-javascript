// 对象解构✅
// 解构赋值✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 24,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
// function personal(personal_black_myth_wtw) {
//     console.log('personal_name:', name);
//     console.log('personal_age:', age);
//     console.log(personal_black_myth_wtw === black_myth_wtw);
// }
// personal({name, age} = black_myth_wtw);
// console.log('name:', name);
// console.log('age:', age);
// 默认值✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 24,
// };
// function personal(personal_black_myth_wtw) {
//     console.log('personal_name:', name);
//     console.log('personal_age:', age);
//     console.log('personal_gender:', gender);
//     console.log('personal_birthday:', birthday);
//     console.log('personal_hobby:', hobby);
//     console.log(personal_black_myth_wtw === black_myth_wtw);
// }
// personal({
//     name = 'black@myth@wtw',
//     age = 28,
//     gender = false,
//     birthday = '1995-03-03',
//     hobby = {sports: ['Black_Myth_WuKong', 'Elden_Ring']}
// } = black_myth_wtw);
// console.log('name:', name);
// console.log('age:', age);
// console.log('gender:', gender);
// console.log('birthday:', birthday);
// console.log('hobby:', hobby);
// 非同名变量赋值✅
// const black_myth_wtw = {
//     name: 'black*myth*wtw',
//     age: 26,
// };
// function personal(personal_black_myth_wtw) {
//     console.log('personal_name:', black_myth_wtw_name);
//     console.log('personal_age:', black_myth_wtw_age);
//     console.log('personal_gender:', black_myth_wtw_gender);
//     console.log('personal_birthday:', black_myth_wtw_birthday);
//     console.log('personal_hobby:', black_myth_wtw_hobby);
//     console.log(personal_black_myth_wtw === black_myth_wtw);
// }
// personal({
//     name: black_myth_wtw_name = 'black@myth@wtw',
//     age: black_myth_wtw_age = 28,
//     gender: black_myth_wtw_gender = true,
//     birthday: black_myth_wtw_birthday = '1994-03-10',
//     hobby: black_myth_wtw_hobby = {sports: ['Black_Myth_WuKong', 'Elden_Ring']}
// } = black_myth_wtw);
// console.log('name:', black_myth_wtw_name);
// console.log('age:', black_myth_wtw_age);
// console.log('gender:', black_myth_wtw_gender);
// console.log('birthday:', black_myth_wtw_birthday);
// console.log('hobby:', black_myth_wtw_hobby);
// 嵌套解构✅
// 数组解构✅
// 解构赋值✅
// const personal_arr = ['red', 'orange', 'green', 'blue', 'yellow', 'black', 'white', 'pink', 'purple'];
// const [, , , , , , white, pink, purple] = personal_arr;
// console.log('white:', white);
// console.log('pink:', pink);
// console.log('purple:', purple);
// let a = 101, b = 99;
// [a, b] = [b, a];
// console.log('a:', a);
// console.log('b:', b);
// 默认值✅
// const personal_arr = ['red', 'orange', 'green', 'blue', 'yellow', 'black', 'white', 'pink', 'purple'];
// const [, , , , , , white, pink, purple, grey = 'grey', brown = 'brown'] = personal_arr;
// console.log('white:', white);
// console.log('pink:', pink);
// console.log('purple:', purple);
// console.log('grey:', grey);
// console.log('brown:', brown);
// 嵌套解构✅
// 不定元素,注意与不定参数一致,元素集合必须位于数组的末尾✅
// const personal = ['black^myth^wtw', 27, true, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']}, 'ZhaoYue'];
// const [, , , , ...hobby_lover] = personal;
// console.log(hobby_lover);
// console.log(...hobby_lover);
// 混合解构✅
// 函数参数解构✅
// 必须传值✅
// 默认值✅
// const default_personal_information = {
//     name: 'black$myth$wtw',
//     age: 30,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'WangJinJin'
// };
// function Person({
//                     name = default_personal_information.name,
//                     age = default_personal_information.age,
//                     gender = default_personal_information.gender,
//                     birthday = default_personal_information.birthday,
//                     hobby = default_personal_information.hobby,
//                     lover = default_personal_information.lover,
//                 } = default_personal_information) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
//     this.lover = lover;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
// };
// const black_myth_wtw = new Person();
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
