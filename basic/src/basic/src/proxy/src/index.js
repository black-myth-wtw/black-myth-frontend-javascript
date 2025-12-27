// javascript proxy 代理陷阱
// 基本用法
// set 代理陷阱 用于验证对象属性
// const black_myth_wtw = {
//     name: 'black&myth&wtw'
// };
// const proxy = new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('当前代理陷阱新添加的属性值数据类型必须为数字~~~~~~')
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// proxy.age = 28;
// // proxy.gender = true;
// // proxy.birthday = '1993-06-30';
// console.log(proxy);
// get 代理陷阱 用于验证对象结构
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 28,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//         // if (!target.hasOwnProperty(key)) {
//         //     throw new TypeError(`当前代理陷阱不存在 key:${key} 对象属性~~~~~~`);
//         // }
//         if (!(key in target)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key} 对象属性~~~~~~`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// });
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.hobby);
// has 代理陷阱 用于隐藏对象属性
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
// const proxy = new Proxy(black_myth_wtw, {
//     has(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.has(target, key);
//     }
// });
// // for (const key in proxy) {
// //     console.log(`for...in-key:${key}`);
// // }
// console.log('name' in proxy);
// console.log('age' in proxy);
// console.log('gender' in proxy);
// console.log('birthday' in proxy);
// console.log('hobby' in proxy);
// deleteProperty 代理陷阱 用于防止删除对象属性
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
// const proxy = new Proxy(black_myth_wtw, {
//     deleteProperty(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.deleteProperty(target, key);
//     }
// });
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.gender);
// console.log(proxy.birthday);
// console.log(proxy.hobby);
// delete proxy.birthday;
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.gender);
// console.log(proxy.birthday);
// console.log(proxy.hobby);
// delete proxy.gender;
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.gender);
// console.log(proxy.birthday);
// console.log(proxy.hobby);
// delete proxy.hobby;
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.gender);
// console.log(proxy.birthday);
// console.log(proxy.hobby);
// 原型代理陷阱
// Object.setPrototypeOf
// Object.getPrototypeOf
// Reflect.setPrototypeOf
// Reflect.getPrototypeOf
// 除了主要功能相同以外
// Object.setPrototypeOf,其是直接绑定至内置对象 [[setPrototypeOf]] 内的,执行结果成功则返回第一个参数,否则直接抛出错误
// Reflect.setPrototypeOf,其是直接绑定至内置对象 [[setPrototypeOf]] 的包裹器上的,存在数据验证,只会返回 true 或者 false
// Object.getPrototypeOf,其是直接绑定至内置对象 [[getPrototypeOf]] 内的,可将基本类型数据直接强制类型转换为相关的引用类型的构造对象
// Reflect.getPrototypeOf,其是直接绑定至内置对象 [[getPrototypeOf]] 的包裹器上的,存在数据验证,参数只接收引用类型对象,如果传递基本类型数据,则直接抛出错误
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     }
// });
// const proxy_set = Object.setPrototypeOf(proxy, {});
// console.log(proxy_set === proxy);
// console.log(Object.getPrototypeOf(proxy).__proto__ === Object.prototype);
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         //TypeError
//         // return false;
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return null;
//     }
// });
// // TypeError
// const proxy_set = Object.setPrototypeOf(proxy, {});
// console.log(proxy_set === proxy);
// console.log(Object.getPrototypeOf(proxy));
// // TypeError
// console.log(Object.getPrototypeOf(proxy).__proto__ === Object.prototype);
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     }
// });
// const proxy_object_set = Object.setPrototypeOf(proxy, {});
// console.log(proxy_object_set === proxy);
// const proxy_reflect_set = Reflect.setPrototypeOf(proxy, {});
// console.log(proxy_reflect_set === proxy);
// console.log(proxy_reflect_set);
// const proxy_object_get = Object.getPrototypeOf(101);
// console.log(proxy_object_get === Number.prototype);
// console.log(proxy_object_get instanceof Object);
// // TypeError
// const reflect_object_get = Reflect.getPrototypeOf(101);
// console.log(reflect_object_get === Number.prototype);
// console.log(reflect_object_get instanceof Object);
// 对象可扩展性代理陷阱
// Object.isExtensible
// Reflect.isExtensible
// Object.preventExtensions()
// Reflect.preventExtensions()
// 除了主要功能相同以外
// Object.isExtensible,可将基本类型数据直接强制类型转换为相关的引用类型的构造对象
// Reflect.isExtensible,参数只接收引用类型对象,如果传递基本类型数据,会直接抛出错误
// Object.preventExtensions,可将基本类型数据直接强制类型转换为相关的引用类型的构造对象
// Reflect.preventExtensions,参数只接收引用类型对象,如果传递基本类型数据,会直接抛出错误
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         return Reflect.preventExtensions(target);
//     }
// });
// console.log(Object.isExtensible(proxy));
// proxy.gender = true;
// proxy.birthday = '1993-06-30';
// console.log(proxy);
// console.log(Object.preventExtensions(proxy));
// console.log(Object.isExtensible(proxy));
// proxy.hobby = {
//     sports: ['basketball', 'computer games']
// };
// console.log(proxy);
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         return false;
//     }
// });
// console.log(Object.isExtensible(proxy));
// proxy.gender = true;
// proxy.birthday = '1993-06-30';
// console.log(proxy);
// // TypeError
// Object.preventExtensions(proxy);
// proxy.hobby = {sports: ['basketball', 'computer games']};
// console.log(proxy);
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         return Reflect.preventExtensions(target);
//     }
// });
// const proxy_object_is_extensible = Object.isExtensible(108);
// console.log(proxy_object_is_extensible);
// console.log(proxy_object_is_extensible === Number.prototype);
// console.log(proxy_object_is_extensible === Boolean.prototype);
// console.log(proxy_object_is_extensible instanceof Number);
// console.log(proxy_object_is_extensible instanceof Boolean);
// TypeError
// const proxy_reflect_is_extensible = Reflect.isExtensible(122);
// console.log(proxy_reflect_is_extensible);
// console.log(proxy_reflect_is_extensible === Number.prototype);
// console.log(proxy_reflect_is_extensible === Boolean.prototype);
// console.log(proxy_reflect_is_extensible instanceof Number);
// console.log(proxy_reflect_is_extensible instanceof Boolean);
// const proxy_object_prevent_extensions = Object.preventExtensions(16);
// console.log(proxy_object_prevent_extensions);
// console.log(proxy_object_prevent_extensions === Number.prototype);
// console.log(proxy_object_prevent_extensions instanceof Number);
// TypeError
// const proxy_reflect_prevent_extensions = Reflect.preventExtensions(66);
// console.log(proxy_reflect_prevent_extensions);
// console.log(proxy_reflect_prevent_extensions === Number.prototype);
// console.log(proxy_reflect_prevent_extensions instanceof Number);
// 对象属性描述符代理陷阱
// Object.defineProperty
// Reflect.defineProperty
// Object.getOwnPropertyDescriptor
// Reflect.getOwnPropertyDescriptor
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         return Reflect.getOwnPropertyDescriptor(target, key);
//     }
// });
// Object.defineProperty(proxy, 'hobby', {
//     value: {sports: ['basketball', 'computer games']},
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, 'hobby'));
// 通过 defineProperty 添加属性限制
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         if (typeof key === 'symbol') {
//             return false;
//         }
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         return Reflect.getOwnPropertyDescriptor(target, key);
//     }
// });
// Object.defineProperty(proxy, 'hobby', {
//     value: {sports: ['basketball', 'computer games']},
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, 'hobby'));
// const symbol = Symbol.for('defineProperty');
// Object.defineProperty(proxy, symbol, {
//     value: 'yes',
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, symbol));
// 描述符属性限制,注意 defineProperty、getOwnPropertyDescriptor 可操作的描述符属性只有 value、set、get、enumerable、configurable 以及 writable
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         // console.log(descriptor.value);
//         // console.log(descriptor.name);
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         // TypeError
//         // return {
//         //     value: target[key],
//         //     name: 'getOwnPropertyDescriptor',
//         // };
//         return Reflect.getOwnPropertyDescriptor(target, key);
//     }
// });
// Object.defineProperty(proxy, 'hobby', {
//     value: {sports: ['basketball', 'computer games']},
//     // name: 'proxy_defineProperty',
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, 'hobby'));
// Object.defineProperty 执行结果成功则返回第一个参数,否则直接抛出错误
// Reflect.defineProperty 只会返回 true 或者 false
// Object.getOwnPropertyDescriptor 可将基本类型数据直接强制类型转换为相关的引用类型的构造对象
// Reflect.getOwnPropertyDescriptor 参数只接收引用类型对象,如果传递基本类型数据,会直接抛出错误
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         return Reflect.getOwnPropertyDescriptor(target, key);
//     }
// });
// const proxy_object_define_property = Object.defineProperty(proxy, 'hobby', {
//     value: {sports: ['basketball', 'computer games']},
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(proxy_object_define_property, proxy);
// console.log(proxy_object_define_property === proxy);
// const proxy_reflect_define_property = Reflect.defineProperty(proxy, 'hobby', {
//     value: {sports: ['basketball', 'computer games']},
//     enumerable: true,
//     configurable: true,
//     writable: true,
// });
// console.log(proxy_reflect_define_property, proxy);
// console.log(proxy_reflect_define_property === proxy);
// const proxy_object_get_own_property_descriptor = Object.getOwnPropertyDescriptor(188, 'hobby');
// console.log(proxy_object_get_own_property_descriptor);
// console.log(proxy_object_get_own_property_descriptor === Number.prototype);
// console.log(proxy_object_get_own_property_descriptor instanceof Number);
// TypeError
// const proxy_reject_get_own_property_descriptor = Reflect.getOwnPropertyDescriptor(188, 'hobby');
// console.log(proxy_reject_get_own_property_descriptor);
// console.log(proxy_reject_get_own_property_descriptor === Number.prototype);
// console.log(proxy_reject_get_own_property_descriptor instanceof Number);
// Reflect.ownKeys 代理陷阱
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const proxy = new Proxy(black_myth_wtw, {
//     ownKeys(target) {
//         return Reflect.ownKeys(target).filter(key => typeof key !== 'string' || key[0] !== '_');
//     }
// });
// const symbol = Symbol.for('ownKeys');
// proxy['_name'] = 'black@myth@wtw';
// proxy[symbol] = 'yes';
// for (const key in proxy) {
//     console.log(`for...in-key:${key}`);
// }
// for (const value of proxy) {
//     console.log(`for...of-value:${value}`);
// }
// for (const key of Object.keys(proxy)) {
//     console.log(`Object.keys-key:${key}`);
// }
// for (const value of Object.values(proxy)) {
//     console.log(`Object.values-value:${value}`);
// }
// for (const [key, value] of Object.entries(proxy)) {
//     console.log(`Object.entries-key:${key},value:${value}`);
// }
// 函数或者类执行 apply 与 construct 代理陷阱
// 验证函数参数
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const Person_Proxy = new Proxy(Person, {
//     apply(target, thisArgs, args) {
//         return Reflect.apply(target, thisArgs, args);
//     },
//     construct(target, args) {
//         return Reflect.construct(target, args);
//     }
// });
// Person_Proxy.call(this, 'black_myth_wtw', 28, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(name, age, gender, birthday, hobby);
// const black_myth_wtw = new Person_Proxy('black*myth*wtw', 32, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// console.log(black_myth_wtw.introduce());
// function Person(name, age, gender, birthday, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const Person_Proxy = new Proxy(Person, {
//     apply(target, thisArgs, args) {
//         for (const arg of args) {
//             if (typeof arg === 'number') {
//                 throw new TypeError('函数触发执行传递的参数不可为数字~~~~~~');
//             }
//         }
//         return Reflect.apply(target, thisArgs, args);
//     },
//     construct(target, args, new_target) {
//         for (const arg of args) {
//             if (typeof arg === 'number') {
//                 throw new TypeError('class new 构造调用传递的参数不可为数字~~~~~~');
//             }
//         }
//         return Reflect.construct(target, args, new_target);
//     }
// });
// Person_Proxy.call(this, 'black_myth_wtw', 28, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(name, age, gender, birthday, hobby);
// const black_myth_wtw = new Person_Proxy('black*myth*wtw', 32, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// console.log(black_myth_wtw.introduce());
// 不使用 new 实行构造调用: 通过在 apply 代理陷阱内调用 construct 代理陷阱,即可绕过元属性 new.target new 构造调用校验
// function Person(name, age, gender, birthday, hobby) {
//     if (new.target === undefined) {
//         throw new TypeError('当前函数只可使用 new 构造调用~~~~~~');
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const Person_Proxy = new Proxy(Person, {
//     apply(target, thisArgs, args) {
//         return Reflect.construct(target, args);
//     }
// });
// const black_myth_wtw  = Person_Proxy.call(this, 'black_myth_wtw', 28, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// 可调用的类: 通过在 apply 代理陷阱内调用 construct 代理陷阱或者是在 apply 代理陷阱内直接使用 new 构造调用,即可绕过类只可使用 new 构造调用校验
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }
// const Person_Proxy = new Proxy(Person, {
//     apply(target, thisArgs, args) {
//         return Reflect.construct(target, args);
//     }
// });
// const black_myth_wtw  = Person_Proxy.call(this, 'black_myth_wtw', 28, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// class Person {
//     constructor(name, age, gender, birthday, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//     }
//     introduce() {
//         return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
//     }
// }
// const Person_Proxy = new Proxy(Person, {
//     apply(target, thisArgs, args) {
//         return new target(...args);
//     }
// });
// const black_myth_wtw  = Person_Proxy.call(this, 'black_myth_wtw', 28, true, '1993-06-30', {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.introduce());
// 覆写抽象基类: 通过在 construct 代理陷阱内将 new.target 所代表的参数改写为普通函数或者普通类,即可绕过元属性 new.target 抽象基类校验
// function Person(name, age, gender, birthday, hobby) {
//     if (new.target === Person) {
//         throw new TypeError('当前函数为抽象基类,不可使用 new 构造调用~~~~~~');
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.birthday = birthday;
//     this.hobby = hobby;
// }
// Person.prototype.introduce = function () {
//     return `Hi,My name is ${this.name}, ${this.age} year's old,I'm a ${this.gender ? 'boy' : 'girl'},I love ${this.hobby.sports.join(',')}~~~~~~`;
// };
// const Person_Proxy = new Proxy(Person, {
//     construct(target, args) {
//         return Reflect.construct(target, args, function () {
//
//         });
//     }
// });
// const black_myth_wtw = new Person_Proxy('black*myth*wtw', 32, false, '1994-03-10', {sports: ['Black Myth WuKong', 'Elden Ring']});
// console.log(black_myth_wtw);
// 可撤回的代理陷阱: 通过 Proxy.revocable revoke 方法即可实现撤回
// const black_myth_wtw = {
//     name: 'black^myth^wtw',
//     age: 32,
// };
// const {proxy, revoke} = Proxy.revocable(black_myth_wtw, {
//     get(target, key) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key} 对象属性~~~~~~`);
//         }
//     }
// });
// proxy.gender = true;
// proxy.birthday = '1994-03-10';
// // console.log(proxy.hobby);
// revoke();
// console.log(proxy.hobby);
// 拥有数组特性的类
// const black_myth_wtw_arr = {length: 0};
// const uint_32 = numeric => Math.floor(Math.abs(Number(numeric))) % Math.pow(2, 32);
// const is_numeric_index = numeric_index => {
//     const uint_32_numeric_index = uint_32(numeric_index);
//     return String(uint_32_numeric_index) === numeric_index && uint_32_numeric_index < Math.pow(2, 32) - 1;
// };
// const black_myth_wtw_arr_proxy = new Proxy(black_myth_wtw_arr, {
//     set(target, key, value, receiver) {
//         const current_black_myth_wtw_arr_length = Reflect.get(target, 'length');
//         if (is_numeric_index(key)) {
//             if (key >= current_black_myth_wtw_arr_length) {
//                 Reflect.set(target, 'length', Number(key) + 1, receiver);
//             }
//         } else {
//             for (let i = current_black_myth_wtw_arr_length - 1; i >= value; i--) {
//                 Reflect.deleteProperty(target, i);
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// black_myth_wtw_arr_proxy[0] = 'red';
// black_myth_wtw_arr_proxy[1] = 'green';
// black_myth_wtw_arr_proxy[2] = 'blue';
// black_myth_wtw_arr_proxy[3] = 'yellow';
// black_myth_wtw_arr_proxy[4] = 'purple';
// black_myth_wtw_arr_proxy[5] = 'pink';
// console.log(black_myth_wtw_arr_proxy, black_myth_wtw_arr_proxy.length);
// black_myth_wtw_arr_proxy[10] = 'brown';
// console.log(black_myth_wtw_arr_proxy, black_myth_wtw_arr_proxy.length);
// black_myth_wtw_arr_proxy.length = 5;
// console.log(black_myth_wtw_arr_proxy, black_myth_wtw_arr_proxy.length);
// console.log(black_myth_wtw_arr_proxy[0], black_myth_wtw_arr_proxy[1], black_myth_wtw_arr_proxy[2], black_myth_wtw_arr_proxy[3], black_myth_wtw_arr_proxy[4], black_myth_wtw_arr_proxy[5], black_myth_wtw_arr_proxy[10]);
// const uint_32 = numeric => Math.floor(Math.abs(Number(numeric))) % Math.pow(2, 32);
// const is_numeric_index = numeric_index => {
//     const uint_32_numeric_index = uint_32(numeric_index);
//     return String(uint_32_numeric_index) === numeric_index && uint_32_numeric_index < Math.pow(2, 32) - 1;
// };
// function Colors(length = 0) {
//     this.length = length;
//     return new Proxy(this, {
//         set(target, key, value, receiver) {
//             const current_black_myth_wtw_arr_length = Reflect.get(target, 'length');
//             if (is_numeric_index(key)) {
//                 if (key >= current_black_myth_wtw_arr_length) {
//                     Reflect.set(target, 'length', Number(key) + 1, receiver);
//                 }
//             } else {
//                 for (let i = current_black_myth_wtw_arr_length - 1; i >= value; i--) {
//                     Reflect.deleteProperty(target, i);
//                 }
//             }
//             return Reflect.set(target, key, value, receiver);
//         }
//     });
// }
// const proxy_colors = new Colors();
// proxy_colors[0] = 'red';
// proxy_colors[1] = 'green';
// proxy_colors[2] = 'blue';
// proxy_colors[3] = 'yellow';
// proxy_colors[4] = 'purple';
// proxy_colors[5] = 'pink';
// console.log(proxy_colors, proxy_colors.length);
// proxy_colors[10] = 'brown';
// console.log(proxy_colors, proxy_colors.length);
// proxy_colors.length = 5;
// console.log(proxy_colors, proxy_colors.length);
// console.log(proxy_colors[0], proxy_colors[1], proxy_colors[2], proxy_colors[3], proxy_colors[4], proxy_colors[5], proxy_colors[10]);
// class Colors {
//     constructor(length = 0) {
//         this.length = length;
//         return new Proxy(this, {
//             set: (target, key, value, receiver) => {
//                 const current_colors_length = Reflect.get(target, 'length');
//                 if (this.is_numeric_index(key)) {
//                     if (key >= current_colors_length) {
//                         Reflect.set(target, 'length', Number(key) + 1, receiver);
//                     }
//                 } else {
//                     for (let i = current_colors_length - 1; i >= value; i--) {
//                         Reflect.deleteProperty(target, i);
//                     }
//                 }
//                 return Reflect.set(target, key, value, receiver);
//             }
//         });
//     }
//     is_numeric_index(numeric_index) {
//         const uint_32_numeric_index = Colors.uint_32_index(numeric_index);
//         return String(uint_32_numeric_index) === numeric_index && uint_32_numeric_index < (Math.pow(2, 32) - 1);
//     }
//     static uint_32_index(numeric) {
//         return Math.floor(Math.abs(Number(numeric))) % Math.pow(2, 32);
//     }
// }
// const proxy_colors = new Colors();
// proxy_colors[0] = 'red';
// proxy_colors[1] = 'green';
// proxy_colors[2] = 'blue';
// proxy_colors[3] = 'yellow';
// proxy_colors[4] = 'purple';
// proxy_colors[5] = 'pink';
// console.log(proxy_colors, proxy_colors.length);
// proxy_colors[10] = 'brown';
// console.log(proxy_colors, proxy_colors.length);
// proxy_colors.length = 5;
// console.log(proxy_colors, proxy_colors.length);
// console.log(proxy_colors[0], proxy_colors[1], proxy_colors[2], proxy_colors[3], proxy_colors[4], proxy_colors[5], proxy_colors[10]);
// 将代理陷阱作为原型
// 在原型中的 set 代理陷阱
// const black_myth_wtw = {
//     name: 'black&myth&wtw'
// };
// const proxy = Object.create(new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('当前代理陷阱新添加的属性值数据类型必须为数字~~~~~~')
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// }));
// proxy.age = 24;
// // proxy.gender = true;
// // proxy.birthday = '1993-06-30';
// console.log(proxy);
// for (const key in proxy) {
//     console.log(`for...in-key:${key}`);
// }
// 在原型中的 get 代理陷阱
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 28
// };
// const proxy = Object.create(new Proxy(black_myth_wtw, {
//     get(target, key) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key.toString()} 对象属性~~~~~~`);
//         }
//         return Reflect.get(target, key);
//     }
// }));
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.hobby);
// 在原型中的 has 代理陷阱
// const black_myth_wtw = {
//     name: 'black&myth&wtw',
//     age: 28,
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
// const proxy = Object.create(new Proxy(black_myth_wtw, {
//     has(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.has(target, key);
//     }
// }));
// proxy.gender = false;
// proxy.birthday = '1968-01-28';
// // proxy.hobby = {
// //     sports: ['basketball', 'computer games']
// // };
// for (const key in proxy) {
//     console.log(`for...in-key:${key}`);
// }
// console.log('name' in proxy);
// console.log('age' in proxy);
// console.log('gender' in proxy);
// console.log('birthday' in proxy);
// console.log('hobby' in proxy);
// 将代理陷阱作为类原型
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype = Object.create(new Proxy({}, {
//     get(target, key) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key.toString()} 对象属性~~~~~~`);
//         }
//         return Reflect.get(target, key);
//     }
// }));
// class Square extends RectAngle {
//     constructor(width, height) {
//         super(width, height);
//     }
// }
// const square = new Square(10, 20);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// const proxy = Object.create(new Proxy({}, {
//     get(target, key) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key.toString()} 对象属性~~~~~~`);
//         }
//         return Reflect.get(target, key);
//     }
// }));
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super(width, height);
//     }
// }
// const square = new Square(20, 20);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// function RectAngle() {
// }
// const proxy = Object.create(new Proxy({}, {
//     get(target, key) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key.toString()} 对象属性~~~~~~`);
//         }
//         return Reflect.get(target, key);
//     }
// }));
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const square = new Square(30, 20);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// function RectAngle() {
// }
// const proxy = Object.create(new Proxy({}, {
//     get(target, key) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前代理陷阱不存在 key:${key.toString()} 对象属性~~~~~~`);
//         }
//         return Reflect.get(target, key);
//     }
// }));
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return Math.PI * this.width * this.height;
//     }
// }
// const square = new Square(40, 30);
// console.log(square.width, square.height);
// console.log(Math.PI * square.width * square.height);
// console.log(square.area());
