// ES5
// instanceof 判断对象原型链
// function my_instanceof(target_object, target_class) {
//     if (!target_object || !target_class || !target_object.__proto__ || !target_class.prototype) {
//         throw new TypeError(`The params ${target_object} must be an object!The params ${target_class} must be a class!`);
//     }
//     var current = target_object;
//     while (current) {
//         if (current.__proto__ === target_class.prototype) {
//             return true;
//         }
//         current = current.__proto__;
//     }
//     return false;
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
//
// var black_myth_wtw = new Person('black_myth_wtw', 32);
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// console.log(my_instanceof(black_myth_wtw, Person));
// console.log(my_instanceof(black_myth_wtw, Object));
// console.log(my_instanceof({}, Object));
// console.log(my_instanceof({}, Person));

// ES6
// const my_instanceof = (target_object, target_class) => {
//     if (!target_object || !target_class || !target_object.__proto__ || !target_class.prototype) {
//         throw new TypeError(`The params ${target_object} must be an object!The params ${target_class} must be a class!`);
//     }
//     let current = target_object;
//     while (current) {
//         if (current.__proto__ === target_class.prototype) {
//             return true;
//         }
//         current = current.__proto__;
//     }
//     return false;
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name},${this.age} year's old~~~~~~`;
// };
//
// const black_myth_wtw = new Person('black_myth_wtw', 32);
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// console.log(my_instanceof(black_myth_wtw, Person));
// console.log(my_instanceof(black_myth_wtw, Object));
// console.log(my_instanceof({}, Object));
// console.log(my_instanceof({}, Person));
