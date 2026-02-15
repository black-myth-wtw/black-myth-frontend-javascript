// 基本用法✅
// set 代理陷阱-验证对象属性✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 26,
//     gender: false,
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// black_myth_wtw_proxy.birthday = '1994-03-10';
// black_myth_wtw_proxy.hobbies = ['basketball', 'computer games'];
// black_myth_wtw_proxy.lover = 'ZhaoYue';
// console.log(black_myth_wtw_proxy);
// for (const key in black_myth_wtw_proxy) {
//     console.log(`for...in loop => key: ${key}`);
// }
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 26,
//     gender: false,
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError(`当前对象可扩展的属性值 ${value} 必须为数字类型!`);
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     },
// });
// black_myth_wtw_proxy.birthday = '1995-03-03';
// black_myth_wtw_proxy.hobbies = ['Black Myth WuKong', 'Elden Ring', 'Bloodborne'];
// black_myth_wtw_proxy.lover = 'WangJinJin';
// get 代理陷阱-验证对象结构✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 26,
//     gender: true,
//     birthday: '1993-04-27',
//     hobby: {
//         sports: ['running', 'skiing'],
//     },
//     lover: 'ZhengShuAng',
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//         return Reflect.get(target, key, receiver);
//     },
// });
// console.log(black_myth_wtw_proxy.name);
// console.log(black_myth_wtw_proxy.age);
// console.log(black_myth_wtw_proxy.gender);
// console.log(black_myth_wtw_proxy.birthday);
// console.log(black_myth_wtw_proxy.hobby);
// console.log(black_myth_wtw_proxy.hobby.sports);
// console.log(black_myth_wtw_proxy.lover);
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 26,
//     gender: true
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//         }
//         return Reflect.get(target, key, receiver);
//     },
// });
// console.log(black_myth_wtw_proxy.name);
// console.log(black_myth_wtw_proxy.age);
// console.log(black_myth_wtw_proxy.gender);
// console.log(black_myth_wtw_proxy.birthday);
// console.log(black_myth_wtw_proxy.hobby);
// console.log(black_myth_wtw_proxy.hobby.sports);
// console.log(black_myth_wtw_proxy.lover);
// has 代理陷阱-判断是否存在对象属性✅
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 21
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     has(target, key) {
//         return Reflect.has(target, key);
//     },
// });
// black_myth_wtw_proxy.gender = true;
// black_myth_wtw_proxy.birthday = '1993-06-30';
// black_myth_wtw_proxy.hobby = {
//     sports: ['football', 'badminton'],
// };
// black_myth_wtw_proxy.lover = 'WangJinJin';
// console.log('name' in black_myth_wtw_proxy);
// console.log('age' in black_myth_wtw_proxy);
// console.log('gender' in black_myth_wtw_proxy);
// console.log('birthday' in black_myth_wtw_proxy);
// console.log('hobby' in black_myth_wtw_proxy);
// console.log('lover' in black_myth_wtw_proxy);
// const black_myth_wtw = {
//     name: 'black!myth!wtw',
//     age: 22
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     has(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.has(target, key);
//     }
// });
// black_myth_wtw_proxy.gender = false;
// black_myth_wtw_proxy.birthday = '1968-05-11';
// black_myth_wtw_proxy.hobby = {
//     sports: ['soccer', 'baseball', 'volleyball'],
// };
// black_myth_wtw_proxy.lover = 'ZhaoYue';
// console.log('name' in black_myth_wtw_proxy);
// console.log('age' in black_myth_wtw_proxy);
// console.log('gender' in black_myth_wtw_proxy);
// console.log('birthday' in black_myth_wtw_proxy);
// console.log('hobby' in black_myth_wtw_proxy);
// console.log('lover' in black_myth_wtw_proxy);
// deleteProperty 代理陷阱-防止删除对象属性✅
// const black_myth_wtw = {
//     name: 'black~myth~wtw',
//     age: 28,
//     gender: true
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     deleteProperty(target, key) {
//         return Reflect.deleteProperty(target, key);
//     },
// });
// black_myth_wtw_proxy.birthday = '1999-09-28';
// black_myth_wtw_proxy.hobby = {
//     sports: ['soccer', 'baseball', 'volleyball'],
// };
// black_myth_wtw_proxy.lover = 'ZhengShuAng';
// delete black_myth_wtw_proxy.name;
// delete black_myth_wtw_proxy.gender;
// delete black_myth_wtw_proxy.lover;
// console.log(black_myth_wtw_proxy);
// delete black_myth_wtw_proxy.hobby;
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.name);
// console.log(black_myth_wtw_proxy.age);
// console.log(black_myth_wtw_proxy.gender);
// console.log(black_myth_wtw_proxy.birthday);
// console.log(black_myth_wtw_proxy.hobby);
// console.log(black_myth_wtw_proxy.lover);
// const black_myth_wtw = {
//     name: 'black$myth$wtw',
//     age: 30,
//     gender: false
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     deleteProperty(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.deleteProperty(target, key);
//     },
// });
// black_myth_wtw_proxy.birthday = '1999-09-28';
// black_myth_wtw_proxy.hobby = {
//     sports: ['soccer', 'baseball', 'volleyball'],
// };
// black_myth_wtw_proxy.lover = 'ZhengShuAng';
// delete black_myth_wtw_proxy.name;
// delete black_myth_wtw_proxy.gender;
// delete black_myth_wtw_proxy.lover;
// console.log(black_myth_wtw_proxy);
// delete black_myth_wtw_proxy.hobby;
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.name);
// console.log(black_myth_wtw_proxy.age);
// console.log(black_myth_wtw_proxy.gender);
// console.log(black_myth_wtw_proxy.birthday);
// console.log(black_myth_wtw_proxy.hobby);
// console.log(black_myth_wtw_proxy.lover);
// setPrototypeOf/getPrototypeOf 对象原型代理陷阱✅
// 基本用法✅
// const personal = {
//     name: 'black+myth+wtw',
//     age: 19,
//     gender: true,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// };
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 18,
//     gender: true,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['ice skiing', 'table tennis'],
//     },
//     lover: 'WangJinJin',
//     introduce() {
//         return `${super.introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     },
// });
// const black_myth_wtw_set_prototype_of = Object.setPrototypeOf(black_myth_wtw_proxy, personal);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw_set_prototype_of === black_myth_wtw_proxy);
// console.log(Object.getPrototypeOf(black_myth_wtw_proxy) === personal);
// console.log(black_myth_wtw_proxy.__proto__ === personal);
// console.log(black_myth_wtw_proxy.__proto__.__proto__ === Object.prototype);
// console.log(black_myth_wtw_proxy instanceof Object);
// // TypeError: Right-hand side of 'instanceof' is not callable
// // console.log(black_myth_wtw_proxy instanceof personal);
// console.log(personal.isPrototypeOf(black_myth_wtw_proxy));
// function Person(name = 'black/myth/wtw', age = 16, gender = false) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// Person.prototype.introduce = function() {
//     return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
// };
// function Black_Myth_WTW(name = 'black#myth#wtw', age = 18, gender = true, birthday = '1998-08-01', hobby = { sports: ['ice skiing', 'table tennis'] }, lover = 'ZhaoYue') {
//     Person.call(this, name, age, gender);
//     this.birthday = birthday;
//     this.hobby = hobby;
//     this.lover = lover;
// }
// Black_Myth_WTW.prototype.introduce = function() {
//     return `${Object.getPrototypeOf(Black_Myth_WTW.prototype).introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
// };
// const black_myth_wtw_proxy = new Proxy(Black_Myth_WTW.prototype, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     },
// });
// const black_myth_wtw_set_prototype_of = Object.setPrototypeOf(black_myth_wtw_proxy, Person.prototype);
// console.log(black_myth_wtw_set_prototype_of === black_myth_wtw_proxy);
// const black_myth_wtw = new Black_Myth_WTW();
// console.log(black_myth_wtw.introduce());
// console.log(Object.getPrototypeOf(black_myth_wtw) === Black_Myth_WTW.prototype);
// console.log(Object.getPrototypeOf(black_myth_wtw_proxy) === Person.prototype);
// console.log(black_myth_wtw.__proto__ === Black_Myth_WTW.prototype);
// console.log(black_myth_wtw.__proto__.__proto__ === Person.prototype);
// console.log(black_myth_wtw.__proto__.__proto__.__proto__ === Object.prototype);
// console.log(black_myth_wtw instanceof Black_Myth_WTW);
// // TypeError: Right-hand side of 'instanceof' is not callable
// // console.log(black_myth_wtw instanceof black_myth_wtw_proxy);
// console.log(black_myth_wtw instanceof Person);
// console.log(black_myth_wtw instanceof Object);
// console.log(Black_Myth_WTW.prototype.isPrototypeOf(black_myth_wtw));
// const personal = {
//     name: 'black+myth+wtw',
//     age: 19,
//     gender: true,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// };
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 18,
//     gender: true,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['ice skiing', 'table tennis'],
//     },
//     lover: 'WangJinJin',
//     introduce() {
//         return `${super.introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         // TypeError: 'setPrototypeOf' on proxy: trap returned falsish for property 'undefined'
//         // return false;
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         // return null;
//         return Reflect.getPrototypeOf(target);
//     },
// });
// const black_myth_wtw_set_prototype_of = Object.setPrototypeOf(black_myth_wtw_proxy, personal);
// console.log(black_myth_wtw_proxy.introduce());
// console.log(black_myth_wtw_set_prototype_of === black_myth_wtw_proxy);
// console.log(Object.getPrototypeOf(black_myth_wtw_proxy));
// console.log(Object.getPrototypeOf(black_myth_wtw_proxy) === personal);
// console.log(black_myth_wtw_proxy.__proto__ === personal);
// // TypeError: Cannot read properties of null (reading '__proto__')
// // console.log(black_myth_wtw_proxy.__proto__.__proto__ === Object.prototype);
// console.log(personal.isPrototypeOf(black_myth_wtw_proxy));
// 除了主要功能相同以外:
// Object.setPrototypeOf-其是直接绑定至内置对象 [[setPrototypeOf]] 内的,若执行成功,则返回第一个参数,否则直接抛出错误✅
// const personal = {
//     name: 'black+myth+wtw',
//     age: 19,
//     gender: true,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// };
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 18,
//     gender: true,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['ice skiing', 'table tennis'],
//     },
//     lover: 'WangJinJin',
//     introduce() {
//         return `${super.introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// const black_myth_wtw_object_set_prototype_of = Object.setPrototypeOf(black_myth_wtw, personal);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw_object_set_prototype_of === black_myth_wtw);
// Reflect.setPrototypeOf-其是直接绑定至内置对象 [[setPrototypeOf]] 包裹器内的,存在数据验证,只会返回 true/false✅
// const personal = {
//     name: 'black+myth+wtw',
//     age: 19,
//     gender: true,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// };
// const black_myth_wtw = {
//     name: 'black#myth#wtw',
//     age: 18,
//     gender: true,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['ice skiing', 'table tennis'],
//     },
//     lover: 'WangJinJin',
//     introduce() {
//         return `${super.introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// const black_myth_wtw_reflect_set_prototype_of = Reflect.setPrototypeOf(black_myth_wtw, personal);
// console.log(black_myth_wtw.introduce());
// console.log(black_myth_wtw_reflect_set_prototype_of === black_myth_wtw);
// console.log(black_myth_wtw_reflect_set_prototype_of);
// Object.getPrototypeOf-其是直接绑定至内置对象 [[getPrototypeOf]] 内的,可将基本类型数据直接强制类型转换为相关的引用类型的构造对象✅
// const personal = {
//     name: 'black+myth+wtw',
//     age: 29,
//     gender: false,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// };
// const black_myth_wtw = {
//     name: 'black?myth?wtw',
//     age: 31,
//     gender: true,
//     birthday: '1988-08-08',
//     hobby: {
//         sports: ['tennis', 'table tennis'],
//     },
//     lover: 'ZhengShuAng',
//     introduce() {
//         return `${super.introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     }
// });
// const black_myth_wtw_set_prototype_of = Object.setPrototypeOf(black_myth_wtw_proxy, personal);
// console.log(black_myth_wtw_proxy.introduce());
// console.log(black_myth_wtw_set_prototype_of === black_myth_wtw_proxy);
// console.log(Object.getPrototypeOf(black_myth_wtw_proxy) === personal);
// console.log(black_myth_wtw_proxy.__proto__ === personal);
// console.log(black_myth_wtw_proxy.__proto__.__proto__ === Object.prototype);
// console.log(personal.isPrototypeOf(black_myth_wtw_proxy));
// const black_myth_wtw_get_prototype_of = Object.getPrototypeOf(199);
// console.log(black_myth_wtw_get_prototype_of);
// console.log(black_myth_wtw_get_prototype_of === Number.prototype);
// console.log(black_myth_wtw_get_prototype_of instanceof Object);
// Reflect.getPrototypeOf-其是直接绑定至内置对象 [[getPrototypeOf]] 包裹器内的,存在数据验证,参数只接收相关的引用类型的构造对象,若传递基本类型数据,则直接抛出错误✅
// const personal = {
//     name: 'black+myth+wtw',
//     age: 29,
//     gender: false,
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}`;
//     }
// };
// const black_myth_wtw = {
//     name: 'black?myth?wtw',
//     age: 31,
//     gender: true,
//     birthday: '1988-08-08',
//     hobby: {
//         sports: ['tennis', 'table tennis'],
//     },
//     lover: 'ZhengShuAng',
//     introduce() {
//         return `${super.introduce.call(this)}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}, My lover is ${this.lover}!!!!!!`;
//     }
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     }
// });
// const black_myth_wtw_set_prototype_of = Object.setPrototypeOf(black_myth_wtw_proxy, personal);
// console.log(black_myth_wtw_proxy.introduce());
// console.log(black_myth_wtw_set_prototype_of === black_myth_wtw_proxy);
// console.log(Object.getPrototypeOf(black_myth_wtw_proxy) === personal);
// console.log(Reflect.getPrototypeOf(black_myth_wtw_proxy) === personal);
// console.log(black_myth_wtw_proxy.__proto__ === personal);
// console.log(black_myth_wtw_proxy.__proto__.__proto__ === Object.prototype);
// console.log(personal.isPrototypeOf(black_myth_wtw_proxy));
// TypeError: Reflect.getPrototypeOf called on non-object
// const black_myth_wtw_get_prototype_of = Reflect.getPrototypeOf(199);
// console.log(black_myth_wtw_get_prototype_of);
// console.log(black_myth_wtw_get_prototype_of === Number.prototype);
// console.log(black_myth_wtw_get_prototype_of instanceof Object);
// isExtensible/preventExtensions 对象属性可扩展性代理陷阱✅
// 基本用法✅
// const black_myth_wtw = {
//     name: 'black^myth^wtw',
//     age: 16,
//     gender: true,
//     birthday: '1994-03-10'
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         return Reflect.preventExtensions(target);
//     }
// });
// black_myth_wtw_proxy.hobby = {
//     sports: ['baseball', 'volleyball', 'basketball', 'soccer'],
// };
// console.log(black_myth_wtw_proxy);
// console.log(Object.isExtensible(black_myth_wtw_proxy));
// Object.preventExtensions(black_myth_wtw_proxy);
// console.log(Object.isExtensible(black_myth_wtw_proxy));
// black_myth_wtw_proxy.lover = 'ZhaoYue';
// console.log(black_myth_wtw_proxy);
// const black_myth_wtw = {
//     name: 'black^myth^wtw',
//     age: 16,
//     gender: true,
//     birthday: '1994-03-10'
// };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         // TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')
//         // return false;
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         // TypeError: 'preventExtensions' on proxy: trap returned falsish
//         // return false;
//         return Reflect.preventExtensions(target);
//     }
// });
// black_myth_wtw_proxy.hobby = {
//     sports: ['baseball', 'volleyball', 'basketball', 'soccer'],
// };
// console.log(black_myth_wtw_proxy);
// console.log(Object.isExtensible(black_myth_wtw_proxy));
// Object.preventExtensions(black_myth_wtw_proxy);
// console.log(Object.isExtensible(black_myth_wtw_proxy));
// black_myth_wtw_proxy.lover = 'ZhaoYue';
// console.log(black_myth_wtw_proxy);
// 除了主要功能相同以外:
// Object.isExtensible-可将基本类型数据直接强制类型转换为相关的引用类型的构造对象✅
// const black_myth_wtw_object_is_extensible = Object.isExtensible(222);
// console.log(black_myth_wtw_object_is_extensible);
// console.log(black_myth_wtw_object_is_extensible instanceof Object);
// console.log(black_myth_wtw_object_is_extensible === Number.prototype);
// console.log(black_myth_wtw_object_is_extensible instanceof Boolean);
// console.log(black_myth_wtw_object_is_extensible === Boolean.prototype);
// Reflect.isExtensible-存在数据验证,参数只接收相关的引用类型的构造对象,若传递基本类型数据,则直接抛出错误✅
// TypeError: Reflect.isExtensible called on non-object
// const black_myth_wtw_reflect_is_extensible = Reflect.isExtensible(222);
// console.log(black_myth_wtw_reflect_is_extensible);
// console.log(black_myth_wtw_reflect_is_extensible instanceof Boolean);
// console.log(black_myth_wtw_reflect_is_extensible === Boolean.prototype);
// Object.preventExtensions-可将基本类型数据直接强制类型转换为相关的引用类型的构造对象✅
// const black_myth_wtw_object_prevent_extensions = Object.preventExtensions(666);
// console.log(black_myth_wtw_object_prevent_extensions);
// console.log(typeof black_myth_wtw_object_prevent_extensions);
// console.log(typeof black_myth_wtw_object_prevent_extensions === 'number');
// console.log(black_myth_wtw_object_prevent_extensions instanceof Object);
// console.log(black_myth_wtw_object_prevent_extensions === Number.prototype);
// Reflect.preventExtensions-存在数据验证,参数只接收相关的引用类型的构造对象,若传递基本类型数据,则直接抛出错误✅
// TypeError: Reflect.preventExtensions called on non-object
// const black_myth_wtw_reflect_prevent_extensions = Reflect.preventExtensions(666);
// console.log(black_myth_wtw_reflect_prevent_extensions);
// console.log(typeof black_myth_wtw_reflect_prevent_extensions);
// console.log(typeof black_myth_wtw_reflect_prevent_extensions === 'number');
// console.log(black_myth_wtw_reflect_prevent_extensions instanceof Object);
// console.log(black_myth_wtw_reflect_prevent_extensions === Number.prototype);
// defineProperty/getOwnPropertyDescriptor 对象属性描述符代理陷阱✅
// 基本用法✅
// const black_myth_wtw = {
//   name: "black.myth.wtw",
//   age: 23,
//   gender: true,
//   birthday: "1992-02-22",
//   hobby: {
//     sports: ["Black Myth WuKong", "Elden Ring", "Sekiro", "Dark Souls"],
//   },
//   lover: "ZhengShuAng",
// };
// const symbol = Symbol.for("descriptor");
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//   defineProperty(target, key, descriptor) {
//     return Reflect.defineProperty(target, key, descriptor);
//   },
//   getOwnPropertyDescriptor(target, key) {
//     return Reflect.getOwnPropertyDescriptor(target, key);
//   },
// });
// Object.defineProperty(black_myth_wtw_proxy, symbol, {
//   value: ["Knight", "Paladin", "Warrior", "Rogue"],
//   enumerable: true,
//   configurable: true,
//   writable: true,
// });
// console.log(black_myth_wtw_proxy);
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "name"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "age"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "gender"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "birthday"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "hobby"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "lover"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, symbol));
// 通过使用 defineProperty 添加属性限制✅
// const black_myth_wtw = {
//   name: "black,myth,wtw",
//   age: 27,
//   gender: false,
//   birthday: "1996-06-24",
//   hobby: {
//     sports: ["Black Myth WuKong", "Elden Ring", "Sekiro", "Dark Souls"],
//   },
//   lover: "WangJinJin",
// };
// const symbol = Symbol.for("descriptor");
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//   defineProperty(target, key, descriptor) {
//     if (typeof key === 'symbol') {
//         throw new TypeError(`当前对象属性扩展类型不可为 Symbol 未命名标识位!`);
//     }
//     return Reflect.defineProperty(target, key, descriptor);
//   }
// });
// Object.defineProperty(black_myth_wtw_proxy, symbol, {
//     value: ["Knight", "Paladin", "Warrior", "Rogue"],
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(black_myth_wtw_proxy);
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "name"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "age"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "gender"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "birthday"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "hobby"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "lover"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, symbol));
// 描述符属性限制-defineProperty/getOwnPropertyDescriptor 可操作的描述符属性只有 value/get/set/enumerable/configurable/writable✅
// const black_myth_wtw = {
//   name: "black>myth>wtw",
//   age: 28,
//   gender: false,
//   birthday: "1999-09-29",
//   hobby: {
//     sports: ["Black Myth WuKong", "Elden Ring", "Sekiro", "Dark Souls"],
//   },
//   lover: "ZhaoYue",
// };
// const symbol = Symbol.for("descriptor");
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//   defineProperty(target, key, descriptor) {
//     console.log("descriptor_name:", descriptor.name);
//     console.log("descriptor_value:", descriptor.value);
//     return Reflect.defineProperty(target, key, descriptor);
//   },
// });
// Object.defineProperty(black_myth_wtw_proxy, symbol, {
//   value: ["Knight", "Paladin", "Warrior", "Rogue"],
//   name: 'black_myth_wtw_define_property',
//   enumerable: true,
//   configurable: true,
//   writable: true,
// });
// console.log(black_myth_wtw_proxy);
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "name"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "age"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "gender"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "birthday"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "hobby"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, "lover"));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, symbol));
// const black_myth_wtw = {
//   name: "black<myth<wtw",
//   age: 25,
//   gender: false,
//   birthday: "1998-08-28",
//   hobby: {
//     sports: ["Black Myth WuKong", "Elden Ring", "Sekiro", "Dark Souls"],
//   },
//   lover: "WangJinJin",
// };
// const symbol = Symbol.for('descriptor');
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//     getOwnPropertyDescriptor(target, key) {
//         return {
//             ...Reflect.getOwnPropertyDescriptor(target, key),
//             name: 'black_myth_wtw_get_own_property_descriptor',
//         };
//     }
// });
// Object.defineProperty(black_myth_wtw_proxy, symbol, {
//     value: ['Knight', 'Paladin', 'Warrior', 'Rogue'],
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(black_myth_wtw_proxy);
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, 'name'));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, 'age'));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, 'gender'));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, 'birthday'));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, 'hobby'));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, 'lover'));
// console.log(Object.getOwnPropertyDescriptor(black_myth_wtw_proxy, symbol));
// 除了主要功能相同以外:
// Object.defineProperty-若执行成功,则返回第一个参数,否则直接抛出错误✅
// const black_myth_wtw = {
//     name: 'black*myth*wtw',
//     age: 27,
//     gender: false,
//     birthday: '1996-06-26',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring', 'Sekiro', 'Dark Souls'],
//     },
//     lover: 'ZhengShuAng',
// };
// const symbol = Symbol.for('descriptor');
// const black_myth_wtw_object_define_property = Object.defineProperty(black_myth_wtw, symbol, {
//     value: ['Knight', 'Paladin', 'Warrior', 'Rogue'],
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(black_myth_wtw === black_myth_wtw_object_define_property);
// console.log(black_myth_wtw_object_define_property);
// Reflect.defineProperty-存在数据验证,只会返回 true/false✅
// const black_myth_wtw = {
//     name: 'black*myth*wtw',
//     age: 27,
//     gender: false,
//     birthday: '1996-06-26',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring', 'Sekiro', 'Dark Souls'],
//     },
//     lover: 'ZhengShuAng',
// };
// const symbol = Symbol.for('descriptor');
// const black_myth_wtw_reflect_define_property = Reflect.defineProperty(black_myth_wtw, symbol, {
//     value: ['Knight', 'Paladin', 'Warrior', 'Rogue'],
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(black_myth_wtw === black_myth_wtw_reflect_define_property);
// console.log(black_myth_wtw_reflect_define_property);
// Object.getOwnPropertyDescriptor-可将基本类型数据直接强制类型转换为相关的引用类型的构造对象✅
// const symbol = Symbol.for('descriptor');
// const black_myth_wtw_object_get_own_property_descriptor = Object.getOwnPropertyDescriptor(199, symbol);
// console.log(black_myth_wtw_object_get_own_property_descriptor);
// console.log(black_myth_wtw_object_get_own_property_descriptor instanceof Object);
// console.log(black_myth_wtw_object_get_own_property_descriptor === Number.prototype);
// Reflect.getOwnPropertyDescriptor-存在数据验证,参数只接收相关的引用类型的构造对象,若传递基本类型数据,则直接抛出错误✅
// const symbol = Symbol.for('descriptor');
// TypeError: Reflect.getOwnPropertyDescriptor called on non-object
// const black_myth_wtw_reflect_get_own_property_descriptor = Reflect.getOwnPropertyDescriptor(966, symbol);
// console.log(black_myth_wtw_reflect_get_own_property_descriptor);
// console.log(black_myth_wtw_reflect_get_own_property_descriptor instanceof Object);
// console.log(black_myth_wtw_reflect_get_own_property_descriptor === Number.prototype);
// Reflect.ownKeys 代理陷阱✅
// const black_myth_wtw = {
//   name: "black.myth.wtw",
//   age: 26,
//   gender: false,
//   *[Symbol.iterator]() {
//     yield* Object.values(this);
//   },
// };
// const symbol = Symbol.for("own_keys");
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//   ownKeys(target) {
//     return Reflect.ownKeys(target).filter(
//       (key) => typeof key !== "string" || key[0] !== "_",
//     );
//   },
// });
// black_myth_wtw_proxy._name = "black%myth%wtw";
// black_myth_wtw_proxy.birthday = "1997-07-27";
// black_myth_wtw_proxy.hobby = {
//   sports: [
//     "Black Myth WuKong",
//     "Elden Ring",
//     "Sekiro",
//     "Dark Souls",
//     "Cyberpunk 2077",
//   ],
// };
// black_myth_wtw_proxy.lover = "WangJinJin";
// black_myth_wtw_proxy[symbol] = [];
// for (const value of black_myth_wtw_proxy) {
//   console.log(`for...of loop => value: ${value}`);
// }
// for (const key of Object.keys(black_myth_wtw_proxy)) {
//   console.log(`Object.keys loop => key: ${key}`);
// }
// for (const value of Object.values(black_myth_wtw_proxy)) {
//   console.log(`Object.values loop => value: ${value}`);
// }
// for (const [key, value] of Object.entries(black_myth_wtw_proxy)) {
//   console.log(`Object.entries loop => key: ${key}, value: ${value}`);
// }
// for (const key of Reflect.ownKeys(black_myth_wtw_proxy)) {
//   console.log(
//     `Reflect.ownKeys loop => key: ${key.toString()}, value: ${black_myth_wtw_proxy[key].toString()}`,
//   );
// }
// apply/construct 函数/类执行代理陷阱✅
// 基本用法✅
// const black_myth_wtw = {
//   name: "black/myth/wtw",
//   age: 21,
//   gender: false,
//   birthday: "1991-11-11",
//   hobby: {
//     sports: [
//       "Black Myth WuKong",
//       "Elden Ring",
//       "Sekiro",
//       "Dark Souls",
//       "Cyberpunk 2077",
//       "Final Fantasy VII",
//     ],
//   },
//   lover: "ZhengShuAng",
// };
// function Black_Myth_WTW(
//   name = black_myth_wtw.name,
//   age = black_myth_wtw.age,
//   gender = black_myth_wtw.gender,
//   birthday = black_myth_wtw.birthday,
//   hobby = black_myth_wtw.hobby,
//   lover = black_myth_wtw.lover,
// ) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.birthday = birthday;
//   this.hobby = hobby;
//   this.lover = lover;
// }
// Black_Myth_WTW.prototype.introduce = function () {
//   return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? "boy" : "girl"}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(", ")}, My lover is ${this.lover}!!!!!!`;
// };
// const Black_Myth_WTW_Proxy = new Proxy(Black_Myth_WTW, {
//   apply(target, thisArgs, args) {
//     return Reflect.apply(target, thisArgs, args);
//   },
//   construct(target, args) {
//     return Reflect.construct(target, args);
//   },
// });
// const black_myth_wtw_proxy = new Black_Myth_WTW_Proxy();
// console.log(black_myth_wtw_proxy.introduce());
// Black_Myth_WTW_Proxy('black#myth#wtw', 15, true, '1998-01-18', {sports: ['Final Fantasy VII', 'Final Fantasy VIII', 'Final Fantasy IX', 'Final Fantasy X', 'Final Fantasy XI', 'Final Fantasy XII', 'Final Fantasy XIII', 'Final Fantasy XIV', 'Final Fantasy XV', 'Final Fantasy XVI']}, 'WangJinJin');
// console.log(name, age, gender, birthday, hobby, lover);
// 验证函数参数✅
// const black_myth_wtw = {
//   name: "black/myth/wtw",
//   age: 21,
//   gender: false,
//   birthday: "1991-11-11",
//   hobby: {
//     sports: [
//       "Black Myth WuKong",
//       "Elden Ring",
//       "Sekiro",
//       "Dark Souls",
//       "Cyberpunk 2077",
//       "Final Fantasy VII",
//     ],
//   },
//   lover: "ZhengShuAng",
// };
// function Black_Myth_WTW(
//   name = black_myth_wtw.name,
//   age = black_myth_wtw.age,
//   gender = black_myth_wtw.gender,
//   birthday = black_myth_wtw.birthday,
//   hobby = black_myth_wtw.hobby,
//   lover = black_myth_wtw.lover,
// ) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.birthday = birthday;
//   this.hobby = hobby;
//   this.lover = lover;
// }
// Black_Myth_WTW.prototype.introduce = function () {
//   return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? "boy" : "girl"}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(", ")}, My lover is ${this.lover}!!!!!!`;
// };
// const Black_Myth_WTW_Proxy = new Proxy(Black_Myth_WTW, {
//   apply(target, thisArgs, args) {
//     for (const arg_item of args) {
//       if (typeof arg_item === "number") {
//         throw new TypeError("当前函数触发执行时,不可传递数字类型参数!");
//       }
//     }
//     return Reflect.apply(target, thisArgs, args);
//   },
//   construct(target, args) {
//     for (const arg_item of args) {
//       if (typeof arg_item === "number") {
//         throw new TypeError("当前函数 new 构造调用时,不可传递数字类型参数!");
//       }
//     }
//     return Reflect.construct(target, args);
//   },
// });
// // TypeError: 当前函数 new 构造调用时,不可传递数字类型参数!
// // const black_myth_wtw_proxy = new Black_Myth_WTW_Proxy(
// //     "black&myth&wtw",
// //   29,
// //   false,
// //   "1999-12-29",
// //   {
// //     sports: [
// //       "Black Myth WuKong",
// //       "Black Myth ZhongKui",
// //       "Elden Ring",
// //       "Sekiro",
// //       "Dark Souls",
// //       "Cyberpunk 2077",
// //       "Final Fantasy VII",
// //       "Final Fantasy VIII",
// //       "Final Fantasy IX",
// //       "Final Fantasy X",
// //       "Final Fantasy XI",
// //       "Final Fantasy XII",
// //       "Final Fantasy XIII",
// //       "Final Fantasy XIV",
// //       "Final Fantasy XV",
// //       "Final Fantasy XVI",
// //       "Final Fantasy XVII",
// //       "Final Fantasy XVIII",
// //       "Final Fantasy XIX",
// //       "Final Fantasy XX",
// //       "Final Fantasy XXI",
// //       "Final Fantasy XXII",
// //       "Final Fantasy XXIII",
// //       "Final Fantasy XXIV",
// //     ],
// //   },
// //   "ZhaoYue",
// // );
// // console.log(black_myth_wtw_proxy.introduce());
// // TypeError: 当前函数触发执行时,不可传递数字类型参数!
// // Black_Myth_WTW_Proxy(
// //   "black#myth#wtw",
// //   15,
// //   true,
// //   "1998-01-18",
// //   {
// //     sports: [
// //       "Final Fantasy VII",
// //       "Final Fantasy VIII",
// //       "Final Fantasy IX",
// //       "Final Fantasy X",
// //       "Final Fantasy XI",
// //       "Final Fantasy XII",
// //       "Final Fantasy XIII",
// //       "Final Fantasy XIV",
// //       "Final Fantasy XV",
// //       "Final Fantasy XVI",
// //     ],
// //   },
// //   "WangJinJin",
// // );
// // console.log(name, age, gender, birthday, hobby, lover);
// 不使用 new 实行构造调用-通过在 apply 代理陷阱内调用 construct 代理陷阱,即可绕过元属性 new.target new 构造调用校验✅
// const black_myth_wtw = {
//   name: "black/myth/wtw",
//   age: 20,
//   gender: true,
//   birthday: "1990-12-31",
//   hobby: {
//     sports: [
//       "Black Myth WuKong",
//       "Elden Ring",
//       "Sekiro",
//       "Dark Souls",
//       "Cyberpunk 2077",
//       "Final Fantasy VII",
//     ],
//   },
//   lover: "WangJinJin",
// };
// function Black_Myth_WTW(
//   name = black_myth_wtw.name,
//   age = black_myth_wtw.age,
//   gender = black_myth_wtw.gender,
//   birthday = black_myth_wtw.birthday,
//   hobby = black_myth_wtw.hobby,
//   lover = black_myth_wtw.lover,
// ) {
//   if (new.target === undefined) {
//     throw new TypeError("当前函数只可实行 new 构造调用!");
//   }
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.birthday = birthday;
//   this.hobby = hobby;
//   this.lover = lover;
// }
// Black_Myth_WTW.prototype.introduce = function () {
//   return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? "boy" : "girl"}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(", ")}, My lover is ${this.lover}!!!!!!`;
// };
// const Black_Myth_WTW_Proxy = new Proxy(Black_Myth_WTW, {
//   apply(target, thisArgs, args) {
//     return Reflect.construct(target, args);
//   },
//   construct(target, args) {
//     return Reflect.construct(target, args);
//   },
// });
// const black_myth_wtw_proxy = new Black_Myth_WTW_Proxy();
// console.log(black_myth_wtw_proxy.introduce());
// const black_myth_wtw_proxy_apply = Black_Myth_WTW_Proxy('black(myth)wtw', 17, false, '1996-06-06', {sports: ['Final Fantasy VII', 'Final Fantasy VIII', 'Final Fantasy IX', 'Final Fantasy X', 'Final Fantasy XI', 'Final Fantasy XII', 'Final Fantasy XIII', 'Final Fantasy XIV', 'Final Fantasy XV', 'Final Fantasy XVI']}, 'ZhengShuAng');
// console.log(black_myth_wtw_proxy_apply.introduce());
// 覆写抽象基类-通过在 construct 代理陷阱内将 new.target 所代表的参数修改为普通函数/普通类,即可绕过 new.target 抽象基类校验✅
// const black_myth_wtw = {
//   name: "black'myth'wtw",
//   age: 35,
//   gender: false,
//   birthday: "1989-12-12",
//   hobby: {
//     sports: [
//       "Black Myth WuKong",
//       "Elden Ring",
//       "Sekiro",
//       "Dark Souls",
//       "Cyberpunk 2077",
//       "Final Fantasy VII",
//     ],
//   },
//   lover: "ZhaoYue",
// };
// function Black_Myth_WTW(
//   name = black_myth_wtw.name,
//   age = black_myth_wtw.age,
//   gender = black_myth_wtw.gender,
//   birthday = black_myth_wtw.birthday,
//   hobby = black_myth_wtw.hobby,
//   lover = black_myth_wtw.lover,
// ) {
//   if (new.target === Black_Myth_WTW) {
//     throw new TypeError("当前函数作为抽象基类不可实行 new 构造调用!");
//   }
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.birthday = birthday;
//   this.hobby = hobby;
//   this.lover = lover;
// }
// Black_Myth_WTW.prototype.introduce = function () {
//   return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? "boy" : "girl"}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(", ")}, My lover is ${this.lover}!!!!!!`;
// };
// const Black_Myth_WTW_Proxy = new Proxy(Black_Myth_WTW, {
//   apply(target, thisArgs, args) {
//     return Reflect.apply(target, thisArgs, args);
//   },
//   construct(target, args, new_target) {
//     //   return Reflect.construct(target, args, function () {});
//     return Reflect.construct(target, args, new_target);
//   },
// });
// const black_myth_wtw_proxy = new Black_Myth_WTW_Proxy();
// console.log(
//   black_myth_wtw_proxy.name,
//   black_myth_wtw_proxy.age,
//   black_myth_wtw_proxy.gender,
//   black_myth_wtw_proxy.birthday,
//   black_myth_wtw_proxy.hobby,
//   black_myth_wtw_proxy.lover,
// );
// console.log(black_myth_wtw_proxy.introduce());
// Black_Myth_WTW_Proxy(
//   "black(myth)wtw",
//   17,
//   false,
//   "1996-06-06",
//   {
//     sports: [
//       "Final Fantasy VII",
//       "Final Fantasy VIII",
//       "Final Fantasy IX",
//       "Final Fantasy X",
//       "Final Fantasy XI",
//       "Final Fantasy XII",
//       "Final Fantasy XIII",
//       "Final Fantasy XIV",
//       "Final Fantasy XV",
//       "Final Fantasy XVI",
//     ],
//   },
//   "ZhengShuAng",
// );
// console.log(name, age, gender, birthday, hobby, lover);
// 可调用的类-通过在 apply 代理陷阱内调用 construct 代理陷阱/在 apply 代理陷阱内直接使用 new 构造调用,即可绕过 class 类只可使用 new 构造调用校验✅
// const black_myth_wtw = {
//   name: "black`myth`wtw",
//   age: 32,
//   gender: true,
//   birthday: "1988-12-08",
//   hobby: {
//     sports: [
//       "Black Myth WuKong",
//       "Elden Ring",
//       "Sekiro",
//       "Dark Souls",
//       "Cyberpunk 2077",
//       "Final Fantasy VII",
//     ],
//   },
//   lover: "WangJinJin",
// };
// class Black_Myth_WTW {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? "boy" : "girl"}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(", ")}, My lover is ${this.lover}!!!!!!`;
//     }
// }
// const Black_Myth_WTW_Proxy = new Proxy(Black_Myth_WTW, {
//     apply(target, thisArgs, args) {
//         // return Reflect.apply(target, thisArgs, args);
//         // return Reflect.construct(target, args);
//         return new target(...args);
//     },
//     construct(target, args) {
//         return Reflect.construct(target, args);
//     }
// });
// const black_myth_wtw_proxy = new Black_Myth_WTW_Proxy();
// console.log(black_myth_wtw_proxy.introduce());
// // TypeError: Class constructor Black_Myth_WTW cannot be invoked without 'new'
// // Black_Myth_WTW_Proxy('black-myth-wtw', 19, true, '1993-03-31', {sports: ['Final Fantasy VII', 'Final Fantasy VIII', 'Final Fantasy IX', 'Final Fantasy X', 'Final Fantasy XI', 'Final Fantasy XII', 'Final Fantasy XIII', 'Final Fantasy XIV', 'Final Fantasy XV', 'Final Fantasy XVI']}, 'WangJinJin');
// const black_myth_wtw_apply_proxy = Black_Myth_WTW_Proxy('black-myth-wtw', 19, true, '1993-03-31', {sports: ['Final Fantasy VII', 'Final Fantasy VIII', 'Final Fantasy IX', 'Final Fantasy X', 'Final Fantasy XI', 'Final Fantasy XII', 'Final Fantasy XIII', 'Final Fantasy XIV', 'Final Fantasy XV', 'Final Fantasy XVI']}, 'WangJinJin');
// console.log(black_myth_wtw_apply_proxy.introduce());
// 拥有数组特性的类✅
// const black_myth_wtw = { length: 0 };
// const black_myth_wtw_proxy = new Proxy(black_myth_wtw, {
//   set(target, key, value, receiver) {
//     const target_length = Reflect.get(target, "length");
//     if (is_uint_32_numeric(key)) {
//       if (key >= target_length) {
//         Reflect.set(target, "length", Number(key) + 1, receiver);
//       }
//     } else {
//       for (let i = target_length - 1; i >= value; i--) {
//         Reflect.deleteProperty(target, i);
//       }
//     }
//     return Reflect.set(target, key, value, receiver);
//   },
// });
// function uint_32_numeric(numeric_index) {
//   return Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
// }
// function is_uint_32_numeric(numeric_index) {
//   const uint_32_numeric_index = uint_32_numeric(numeric_index);
//   return (
//     String(uint_32_numeric_index) === numeric_index &&
//     uint_32_numeric_index < Math.pow(2, 32) - 1
//   );
// }
// black_myth_wtw_proxy[0] = "red";
// black_myth_wtw_proxy[1] = "yellow";
// black_myth_wtw_proxy[2] = "blue";
// black_myth_wtw_proxy[3] = "green";
// black_myth_wtw_proxy[4] = "purple";
// black_myth_wtw_proxy[5] = "orange";
// black_myth_wtw_proxy[6] = "brown";
// black_myth_wtw_proxy[7] = "gray";
// black_myth_wtw_proxy[8] = "black";
// black_myth_wtw_proxy[9] = "white";
// black_myth_wtw_proxy[20] = "pink";
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.length);
// console.log(black_myth_wtw_proxy[0]);
// console.log(black_myth_wtw_proxy[1]);
// console.log(black_myth_wtw_proxy[2]);
// console.log(black_myth_wtw_proxy[3]);
// console.log(black_myth_wtw_proxy[4]);
// console.log(black_myth_wtw_proxy[5]);
// console.log(black_myth_wtw_proxy[6]);
// console.log(black_myth_wtw_proxy[7]);
// console.log(black_myth_wtw_proxy[8]);
// console.log(black_myth_wtw_proxy[9]);
// console.log(black_myth_wtw_proxy[10]);
// console.log(black_myth_wtw_proxy[11]);
// console.log(black_myth_wtw_proxy[16]);
// console.log(black_myth_wtw_proxy[20]);
// black_myth_wtw_proxy.length = 6;
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.length);
// console.log(black_myth_wtw_proxy[0]);
// console.log(black_myth_wtw_proxy[1]);
// console.log(black_myth_wtw_proxy[2]);
// console.log(black_myth_wtw_proxy[3]);
// console.log(black_myth_wtw_proxy[4]);
// console.log(black_myth_wtw_proxy[5]);
// console.log(black_myth_wtw_proxy[6]);
// console.log(black_myth_wtw_proxy[7]);
// console.log(black_myth_wtw_proxy[8]);
// console.log(black_myth_wtw_proxy[9]);
// console.log(black_myth_wtw_proxy[10]);
// console.log(black_myth_wtw_proxy[11]);
// console.log(black_myth_wtw_proxy[16]);
// console.log(black_myth_wtw_proxy[20]);
// function Black_Myth_WTW(length = 0) {
//   this.length = length;
//   return new Proxy(this, {
//     set(target, key, value, receiver) {
//       const target_length = Reflect.get(target, "length");
//       if (target.is_uint_32_numeric(key)) {
//         if (key >= target_length) {
//           Reflect.set(target, "length", Number(key) + 1, receiver);
//         }
//       } else {
//         for (let i = target_length - 1; i >= value; i--) {
//           Reflect.deleteProperty(target, i);
//         }
//       }
//       return Reflect.set(target, key, value, receiver);
//     },
//   });
// }
// Black_Myth_WTW.prototype.is_uint_32_numeric = function (numeric_index) {
//   const uint_32_numeric_index = this.constructor.uint_32_numeric(numeric_index);
//   return (
//     String(uint_32_numeric_index) === numeric_index &&
//     uint_32_numeric_index < Math.pow(2, 32) - 1
//   );
// };
// Black_Myth_WTW.uint_32_numeric = function (numeric_index) {
//   return Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
// };
// const black_myth_wtw_proxy = new Black_Myth_WTW(25);
// black_myth_wtw_proxy[0] = "red";
// black_myth_wtw_proxy[1] = "yellow";
// black_myth_wtw_proxy[2] = "blue";
// black_myth_wtw_proxy[3] = "green";
// black_myth_wtw_proxy[4] = "purple";
// black_myth_wtw_proxy[5] = "orange";
// black_myth_wtw_proxy[6] = "brown";
// black_myth_wtw_proxy[7] = "gray";
// black_myth_wtw_proxy[8] = "black";
// black_myth_wtw_proxy[9] = "white";
// black_myth_wtw_proxy[28] = "pink";
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.length);
// console.log(black_myth_wtw_proxy[0]);
// console.log(black_myth_wtw_proxy[1]);
// console.log(black_myth_wtw_proxy[2]);
// console.log(black_myth_wtw_proxy[3]);
// console.log(black_myth_wtw_proxy[4]);
// console.log(black_myth_wtw_proxy[5]);
// console.log(black_myth_wtw_proxy[6]);
// console.log(black_myth_wtw_proxy[7]);
// console.log(black_myth_wtw_proxy[8]);
// console.log(black_myth_wtw_proxy[9]);
// console.log(black_myth_wtw_proxy[10]);
// console.log(black_myth_wtw_proxy[11]);
// console.log(black_myth_wtw_proxy[16]);
// console.log(black_myth_wtw_proxy[20]);
// console.log(black_myth_wtw_proxy[28]);
// black_myth_wtw_proxy.length = 8;
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.length);
// console.log(black_myth_wtw_proxy[0]);
// console.log(black_myth_wtw_proxy[1]);
// console.log(black_myth_wtw_proxy[2]);
// console.log(black_myth_wtw_proxy[3]);
// console.log(black_myth_wtw_proxy[4]);
// console.log(black_myth_wtw_proxy[5]);
// console.log(black_myth_wtw_proxy[6]);
// console.log(black_myth_wtw_proxy[7]);
// console.log(black_myth_wtw_proxy[8]);
// console.log(black_myth_wtw_proxy[9]);
// console.log(black_myth_wtw_proxy[10]);
// console.log(black_myth_wtw_proxy[11]);
// console.log(black_myth_wtw_proxy[16]);
// console.log(black_myth_wtw_proxy[20]);
// console.log(black_myth_wtw_proxy[28]);
// class Black_Myth_WTW {
//     constructor(length = 0) {
//         this.length = length;
//         return new Proxy(this, {
//             set(target, key, value, receiver) {
//                 const target_length = Reflect.get(target, "length");
//                 if(target.is_uint_32_numeric(key)) {
//                     if(key >= target_length) {
//                         Reflect.set(target, "length", Number(key) + 1, receiver);
//                     }
//                 } else {
//                     for(let i = target_length - 1; i >= value; i--) {
//                         Reflect.deleteProperty(target, i);
//                     }
//                 }
//                 return Reflect.set(target, key, value, receiver);
//             }
//         });
//     }
//     is_uint_32_numeric(numeric_index) {
//         const uint_32_numeric_index = this.constructor.uint_32_numeric(numeric_index);
//         return (
//             String(uint_32_numeric_index) === numeric_index &&
//             uint_32_numeric_index < Math.pow(2, 32) - 1
//         );
//     }
//     static uint_32_numeric(numeric_index) {
//         return Math.floor(Math.abs(Number(numeric_index))) % Math.pow(2, 32);
//     }
// }
// const black_myth_wtw_proxy = new Black_Myth_WTW(30);
// black_myth_wtw_proxy[0] = "red";
// black_myth_wtw_proxy[1] = "yellow";
// black_myth_wtw_proxy[2] = "blue";
// black_myth_wtw_proxy[3] = "green";
// black_myth_wtw_proxy[4] = "purple";
// black_myth_wtw_proxy[5] = "orange";
// black_myth_wtw_proxy[6] = "brown";
// black_myth_wtw_proxy[7] = "gray";
// black_myth_wtw_proxy[8] = "black";
// black_myth_wtw_proxy[9] = "white";
// black_myth_wtw_proxy[31] = "pink";
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.length);
// console.log(black_myth_wtw_proxy[0]);
// console.log(black_myth_wtw_proxy[1]);
// console.log(black_myth_wtw_proxy[2]);
// console.log(black_myth_wtw_proxy[3]);
// console.log(black_myth_wtw_proxy[4]);
// console.log(black_myth_wtw_proxy[5]);
// console.log(black_myth_wtw_proxy[6]);
// console.log(black_myth_wtw_proxy[7]);
// console.log(black_myth_wtw_proxy[8]);
// console.log(black_myth_wtw_proxy[9]);
// console.log(black_myth_wtw_proxy[10]);
// console.log(black_myth_wtw_proxy[11]);
// console.log(black_myth_wtw_proxy[16]);
// console.log(black_myth_wtw_proxy[20]);
// console.log(black_myth_wtw_proxy[31]);
// black_myth_wtw_proxy.length = 8;
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.length);
// console.log(black_myth_wtw_proxy[0]);
// console.log(black_myth_wtw_proxy[1]);
// console.log(black_myth_wtw_proxy[2]);
// console.log(black_myth_wtw_proxy[3]);
// console.log(black_myth_wtw_proxy[4]);
// console.log(black_myth_wtw_proxy[5]);
// console.log(black_myth_wtw_proxy[6]);
// console.log(black_myth_wtw_proxy[7]);
// console.log(black_myth_wtw_proxy[8]);
// console.log(black_myth_wtw_proxy[9]);
// console.log(black_myth_wtw_proxy[10]);
// console.log(black_myth_wtw_proxy[11]);
// console.log(black_myth_wtw_proxy[16]);
// console.log(black_myth_wtw_proxy[20]);
// console.log(black_myth_wtw_proxy[28]);
// console.log(black_myth_wtw_proxy[31]);
// 可撤回的代理陷阱-通过使用 Proxy.revocable revoke 方法即可实现撤回✅
// const black_myth_wtw = {
//   name: "black&myth&wtw",
//   age: 30,
// };
// const {proxy: black_myth_wtw_proxy, revoke} = Proxy.revocable(black_myth_wtw, {
//   get(target, key, receiver) {
//     if (!target.hasOwnProperty(key)) {
//       throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//     }
//     return Reflect.get(target, key, receiver);
//   },
// });
// black_myth_wtw_proxy.gender = true;
// black_myth_wtw_proxy.birthday = "1995-05-30";
// console.log(black_myth_wtw_proxy);
// console.log(black_myth_wtw_proxy.name);
// console.log(black_myth_wtw_proxy.age);
// console.log(black_myth_wtw_proxy.gender);
// console.log(black_myth_wtw_proxy.birthday);
// // TypeError: 当前对象不可扩展属性 hobby!
// // console.log(black_myth_wtw_proxy.hobby);
// revoke();
// // <Revoked Proxy>
// console.log(black_myth_wtw_proxy);
// // TypeError: Cannot perform 'get' on a proxy that has been revoked
// // console.log(black_myth_wtw_proxy.hobby);
// 将代理陷阱作为原型✅
// 在原型内的 set 代理陷阱✅
// const black_myth_wtw = {
//   name: "black|myth|wtw",
//   age: 27,
// };
// const black_myth_wtw_prototype_proxy = Object.create(
//   new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//       if (!target.hasOwnProperty(key)) {
//         if (isNaN(value)) {
//           throw new TypeError(
//             `当前对象可扩展的属性值 ${value} 必须为数字类型!`,
//           );
//         }
//       }
//       return Reflect.set(target, key, value, receiver);
//     },
//   }),
// );
// black_myth_wtw_prototype_proxy.gender = false;
// console.log(black_myth_wtw_prototype_proxy);
// console.log(black_myth_wtw_prototype_proxy.name);
// console.log(black_myth_wtw_prototype_proxy.age);
// console.log(black_myth_wtw_prototype_proxy.gender);
// // black_myth_wtw_prototype_proxy.birthday = '1997-07-27';
// // black_myth_wtw_prototype_proxy.hobby = {
// //     sports: ['Black Myth WuKong', 'Black Myth ZhongKui', 'Elden Ring', 'Dark Souls', 'Bloodborne', 'The Witcher 3', 'The Last of Us'],
// // };
// for(const key in black_myth_wtw_prototype_proxy) {
//     console.log(`for...in loop => key:${key}`);
// }
// 在原型内的 get 代理陷阱✅
// const black_myth_wtw = {
//   name: "black|myth|wtw",
//   age: 27,
// };
// const black_myth_wtw_prototype_proxy = Object.create(
//   new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//       if (!target.hasOwnProperty(key)) {
//         throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//       }
//       return Reflect.get(target, key, receiver);
//     },
//   }),
// );
// black_myth_wtw_prototype_proxy.gender = true;
// black_myth_wtw_prototype_proxy.birthday = '1994-03-10';
// console.log(black_myth_wtw_prototype_proxy.name);
// console.log(black_myth_wtw_prototype_proxy.age);
// console.log(black_myth_wtw_prototype_proxy.gender);
// console.log(black_myth_wtw_prototype_proxy.birthday);
// // TypeError: 当前对象不可扩展属性 hobby!
// // console.log(black_myth_wtw_prototype_proxy.hobby.sports);
// 在原型内的 has 代理陷阱✅
// const black_myth_wtw = {
//   name: "black|myth|wtw",
//   age: 27,
//   hobby: {
//     sports: [
//         "Black Myth WuKong",
//         "Black Myth ZhongKui",
//         "Elden Ring",
//         "Dark Souls",
//         "Bloodborne",
//         "The Witcher 3",
//         "The Last of Us",
//       ],
//   }
// };
// const black_myth_wtw_prototype_proxy = Object.create(
//   new Proxy(black_myth_wtw, {
//     has(target, key) {
//       if (key === "hobby") return false;
//       return Reflect.has(target, key);
//     },
//   }),
// );
// black_myth_wtw_prototype_proxy.gender = true;
// black_myth_wtw_prototype_proxy.birthday = "1994-03-10";
// console.log(black_myth_wtw_prototype_proxy);
// console.log(black_myth_wtw_prototype_proxy.name);
// console.log(black_myth_wtw_prototype_proxy.age);
// console.log(black_myth_wtw_prototype_proxy.gender);
// console.log(black_myth_wtw_prototype_proxy.birthday);
// console.log(black_myth_wtw_prototype_proxy.hobby);
// console.log("name" in black_myth_wtw_prototype_proxy);
// console.log("age" in black_myth_wtw_prototype_proxy);
// console.log("gender" in black_myth_wtw_prototype_proxy);
// console.log("birthday" in black_myth_wtw_prototype_proxy);
// console.log("hobby" in black_myth_wtw_prototype_proxy);
// 将代理陷阱作为类原型✅
// function Rect(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rect.prototype = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if(!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// class Square extends Rect {
//     constructor(width, height) {
//         super(width, height);
//     }
// }
// const square = new Square(100, 200);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// function Rect(width, height) {
//     this.width = width;
//     this.height = height;
// }
// const rect_prototype_proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if(!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// Rect.prototype = rect_prototype_proxy;
// class Square extends Rect {}
// const square = new Square(200, 400);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// function Rect() {}
// const rect_prototype_proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if(!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// Rect.prototype = rect_prototype_proxy;
// class Square extends Rect {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const square = new Square(400, 800);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// function Rect() {}
// const rect_prototype_proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if(!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不可扩展属性 ${key}!`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// Rect.prototype = rect_prototype_proxy;
// class Square extends Rect {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return Math.PI * square.width * square.height;
//     }
// }
// const square = new Square(800, 1200);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// console.log(square.area());
