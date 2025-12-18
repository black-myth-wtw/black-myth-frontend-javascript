// proxy 代理
// set 代理陷阱验证对象属性
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('新添加的对象属性值必须为数字!!!!!!');
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// proxy.age = 29;
// // proxy.gender = true;
// // proxy.birthday = '1993-06-30';
// console.log(proxy);
// get 代理陷阱验证对象结构
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 属性`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// });
// console.log(proxy.name);
// console.log(proxy.age);
// // console.log(proxy.gender);
// has 代理陷阱隐藏对象属性
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
// };
// const proxy = new Proxy(black_myth_wtw, {
//     has(target, key) {
//         if (key === 'gender') {
//             return false;
//         }
//         return Reflect.has(target, key);
//     }
// });
// console.log('name' in proxy);
// console.log('age' in proxy);
// console.log('gender' in proxy);
// deleteProperty 代理陷阱防止删除对象属性
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30'
// };
// const proxy = new Proxy(black_myth_wtw, {
//     deleteProperty(target, key) {
//         if (key === 'gender') {
//             return false;
//         }
//         return Reflect.deleteProperty(target, key);
//     }
// });
// console.log(proxy);
// delete proxy.name;
// console.log(proxy);
// console.log(delete proxy.age);
// console.log(proxy);
// console.log(delete proxy.gender);
// console.log(proxy);
// 原型代理陷阱: Object.setPrototypeOf,Object.getPrototypeOf
// 区别
// 除了主要功能相同之外
// Object.setPrototypeOf: 其是直接绑定至内置对象 [[SetPrototypeOf]] 内,执行结果成功则返回第一个参数,否则直接抛出错误
// Reflect.setPrototypeOf: 其是直接绑定至内置对象 [[SetPrototypeOf]] 的包裹器上,存在数据验证,只会返回 true 或者 false
// Object.getPrototypeOf: 其是直接绑定至内置对象 [[GetPrototypeOf]] 内,其可将基本类型数据直接强制类型转换为相关引用类型的构造对象
// Reflect.getPrototypeOf: 其是直接绑定至内置对象 [[GetPrototypeOf]] 内包裹器上,存在数据验证,参数只可接受引用类型对象,如果传递基本类型数据,则直接抛出错误
// const black_myth_wtw = {};
// const proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return Reflect.setPrototypeOf(target, proto);
//     },
//     getPrototypeOf(target) {
//         return Reflect.getPrototypeOf(target);
//     }
// });
// console.log(Object.getPrototypeOf(proxy) === Object.prototype);
// console.log(Object.getPrototypeOf(proxy));
// const result = Object.setPrototypeOf(proxy, {});
// console.log(result === proxy);
// const black_myth_wtw = {};
// const proxy = new Proxy(black_myth_wtw, {
//     setPrototypeOf(target, proto) {
//         return false;
//     },
//     getPrototypeOf(target) {
//         return null;
//     }
// });
// console.log(Object.getPrototypeOf(proxy));
// console.log(Object.getPrototypeOf(proxy) === Object.prototype);
// Object.setPrototypeOf(proxy, {});
// const object_get_o = Object.getPrototypeOf(99);
// console.log(object_get_o);
// console.log(object_get_o === Number.prototype);
// const reflect_get_o = Reflect.getPrototypeOf(99);
// const target = {};
// const object_set_o = Object.setPrototypeOf(target, {});
// console.log(object_set_o);
// console.log(object_set_o === target);
// const reflect_set_o = Reflect.setPrototypeOf(target, {});
// console.log(reflect_set_o);
// console.log(reflect_set_o === target);
// 对象可扩展性代理陷阱
// Object.isExtensible
// Object.preventExtensions
// 区别
// 除了主要功能相同之外
// Object.isExtensible 可将基本类型数据强制类型转换为相关的引用类型的构造对象
// Reflect.isExtensible 参数只可接受引用类型对象,传递基本类型数据会直接抛出错误
// Object.preventExtensions 可将基本类型数据强制类型转换为相关的引用类型的构造对象
// Reflect.preventExtensions 参数只可接受引用类型对象,如果传递基本类型数据会直接抛出错误
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         return Reflect.preventExtensions(target);
//     }
// });
// proxy.age = 32;
// console.log(proxy);
// console.log(Object.isExtensible(proxy));
// Object.preventExtensions(proxy);
// proxy.gender = true;
// proxy.birthday = '1993-06-30';
// console.log(proxy);
// console.log(Object.isExtensible(proxy));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     isExtensible(target) {
//         return Reflect.isExtensible(target);
//     },
//     preventExtensions(target) {
//         return false;
//     }
// });
// proxy.age = 32;
// console.log(proxy);
// console.log(Object.isExtensible(proxy));
// Object.preventExtensions(proxy);
// proxy.gender = true;
// proxy.birthday = '1993-06-30';
// console.log(proxy);
// const object_extensible = Object.isExtensible(99);
// console.log(object_extensible);
// console.log(object_extensible === Number.prototype);
// const reflect_extensible = Reflect.isExtensible(99);
// console.log(reflect_extensible);
// const object_prevent_extensions = Object.preventExtensions(99);
// console.log(object_prevent_extensions);
// console.log(object_prevent_extensions === Number.prototype);
// const reflect_prevent_extensions = Reflect.preventExtensions(99);
// console.log(reflect_prevent_extensions);
// 对象属性描述符代理陷阱
// 通过使用 defineProperty 添加属性限制
// 描述符属性限制: defineProperty getOwnPropertyDescriptor 可操作的描述符属性只有 value get set enumerable configurable writable
// 区别
// 除了主要功能相同之外
// Object.defineProperty 执行结果成功则返回第一个参数,否则直接抛出错误
// Reflect.defineProperty 只会返回 true 或者 false
// Object.getOwnPropertyDescriptor 可将基本类型数据强制类型转换为相关的引用类型的构造对象
// Reflect.getOwnPropertyDescriptor 参数只可接收引用类型对象,如果传递基本类型数据会直接抛出错误
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         return Reflect.getOwnPropertyDescriptor(target, key);
//     }
// });
// Object.defineProperty(proxy, 'age', {
//     value: 32,
// });
// console.log(proxy);
// console.log(proxy.name, proxy.age);
// console.log(Object.getOwnPropertyDescriptor(proxy, 'age'));
// console.log(Object.getOwnPropertyDescriptors(proxy));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
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
// const symbol = Symbol.for('defineProperty');
// Object.defineProperty(proxy, symbol, {
//     value: 'yes',
// });
// console.log(proxy);
// console.log(Object.getOwnPropertyDescriptor(proxy, symbol));
// console.log(Object.getOwnPropertyDescriptors(proxy));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         console.log(descriptor.value);
//         console.log(descriptor.name);
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         return Reflect.getOwnPropertyDescriptor(target, key);
//     }
// });
// Object.defineProperty(proxy, 'age', {
//     value: 32,
//     name: 'yes',
// });
// console.log(proxy);
// console.log(proxy.name, proxy.age);
// console.log(Object.getOwnPropertyDescriptor(proxy, 'age'));
// console.log(Object.getOwnPropertyDescriptors(proxy));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     defineProperty(target, key, descriptor) {
//         return Reflect.defineProperty(target, key, descriptor);
//     },
//     getOwnPropertyDescriptor(target, key) {
//         return {
//             name: 'yes'
//         };
//     }
// });
// Object.defineProperty(proxy, 'age', {
//     value: 32,
// });
// console.log(proxy);
// console.log(proxy.name, proxy.age);
// // console.log(Object.getOwnPropertyDescriptor(proxy, 'age'));
// console.log(Object.getOwnPropertyDescriptor(proxy, 'name'));
// console.log(Object.getOwnPropertyDescriptors(proxy));
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const object_define_property = Object.defineProperty(black_myth_wtw, 'age', {
//     value: 32,
// });
// console.log(object_define_property);
// console.log(object_define_property === black_myth_wtw);
// const reflect_define_property = Reflect.defineProperty(black_myth_wtw, 'age', {
//     value: 32,
// });
// console.log(reflect_define_property);
// console.log(reflect_define_property === black_myth_wtw);
// const object_get_own_property_descriptor = Object.getOwnPropertyDescriptor(99);
// console.log(object_get_own_property_descriptor);
// console.log(object_get_own_property_descriptor === Number.prototype);
// const reflect_get_own_property_descriptor = Reflect.getOwnPropertyDescriptor(99);
// console.log(reflect_get_own_property_descriptor);
// ownKeys 代理陷阱
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy = new Proxy(black_myth_wtw, {
//     ownKeys(target) {
//         return Reflect.ownKeys(target).filter(item_own_key => typeof item_own_key !== 'string' || item_own_key[0] !== '_');
//     }
// });
// const symbol = Symbol.for('ownKeys');
// proxy._name = 'black@myth@wtw';
// proxy.age = 32;
// proxy[symbol] = 'yes';
// proxy.hobby = {
//     sports: ['Black Myth WuKong', 'Elden Ring']
// };
// const keys = Object.keys(proxy);
// const names = Object.getOwnPropertyNames(proxy);
// const symbols = Object.getOwnPropertySymbols(proxy);
// console.log(keys);
// console.log(keys.length);
// console.log(names);
// console.log(names.length);
// console.log(symbols);
// console.log(symbols.length);
// 函数执行 apply construct 代理陷阱
// 验证函数参数
// 不使用 new 实行构造调用,通过在 apply 代理陷阱中调用 construct 代理陷阱,即可绕过元属性 new.target new 构造调用校验
// 覆写抽象基类,通过在 construct 代理陷阱中将 new.target 改写或者修改为普通函数或者普通类,即可绕过元属性 new.target 抽象基类校验
// 可调用的类,通过在 apply 代理陷阱中调用 construct 代理陷阱或者在 apply 代理陷阱中直接使用 new 构造调用,即可绕过类只可使用 new 构造调用校验
// function Person(name, age, gender, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.hobby = hobby;
// }
// const ProxyPerson = new Proxy(Person, {
//     construct(target, args) {
//         return Reflect.construct(target, args);
//     },
//     apply(target, thisArgs, args) {
//         return Reflect.apply(target, thisArgs, args);
//     }
// });
// ProxyPerson.call(this, 'black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(name, age, gender, hobby);
// console.log(window.name === name);
// console.log(window.age === age);
// console.log(window.gender === gender);
// console.log(window.hobby === hobby);
// const black_myth_wtw = new ProxyPerson('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.name);
// console.log(black_myth_wtw.age);
// console.log(black_myth_wtw.gender);
// console.log(black_myth_wtw.hobby);
// function Person(name, age, gender, hobby) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.hobby = hobby;
// }
// const ProxyPerson = new Proxy(Person, {
//     construct(target, args) {
//         for (const item_arg of args) {
//             if (typeof item_arg === 'number') {
//                 throw new TypeError('class new 构造调用传递的参数不可为数字!!!!!!');
//                 // return false;
//             }
//         }
//         return Reflect.construct(target, args);
//     },
//     apply(target, thisArgs, args) {
//         for (const item_arg of args) {
//             if (typeof item_arg === 'number') {
//                 // throw new TypeError('函数触发执行传递的参数不可为数字!!!!!!');
//                 return false;
//             }
//         }
//         return Reflect.apply(target, thisArgs, args);
//     }
// });
// const black_myth_wtw = new ProxyPerson('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// console.log(black_myth_wtw.name);
// console.log(black_myth_wtw.age);
// console.log(black_myth_wtw.gender);
// console.log(black_myth_wtw.hobby);
// function Person(name, age, gender, hobby) {
//     if (new.target === undefined) {
//         throw new TypeError('当前函数只可使用 new 构造调用!!!!!!');
//     }
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.hobby = hobby;
// }
// const ProxyPerson = new Proxy(Person, {
//     construct(target, args) {
//         return Reflect.construct(target, args);
//     },
//     apply(target, thisArgs, args) {
//         return Reflect.construct(target, args);
//     }
// });
// // Person.call(this, 'black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// const black_myth_wtw = ProxyPerson('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// class Person {
//     constructor(name, age, gender, hobby) {
//         if (new.target === Person) {
//             throw new TypeError('当前函数为抽象基类,不可使用 new 构造调用!!!!!!');
//         }
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.hobby = hobby;
//     }
// }
// const ProxyPerson = new Proxy(Person, {
//     construct(target, args) {
//         return Reflect.construct(target, args, function () {
//
//         });
//     },
//     apply(target, thisArgs, args) {
//         return Reflect.apply(target, thisArgs, args);
//     }
// });
// const black_myth_wtw = new Person('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// const black_myth_wtw = new ProxyPerson('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// class Person {
//     constructor(name, age, gender, hobby) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.hobby = hobby;
//     }
// }
// const ProxyPerson = new Proxy(Person, {
//     construct(target, args) {
//         return Reflect.construct(target, args);
//     },
//     apply(target, thisArgs, args) {
//         // return Reflect.construct(target, args);
//         return new target(...args);
//     }
// });
// // Person.call(this, 'black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// const black_myth_wtw = ProxyPerson('black_myth_wtw', 32, true, {sports: ['basketball', 'computer games']});
// console.log(black_myth_wtw);
// 拥有数组特性的类
// const colors = {length: 0};
// function unit32(numeric) {
//     return Math.floor(Math.abs(Number(numeric))) % Math.pow(2, 32);
// }
// function isNumericIndex(numeric_index) {
//     const unit_32_numeric = unit32(numeric_index);
//     return String(unit_32_numeric) === numeric_index && unit_32_numeric < Math.pow(2, 32) - 1;
// }
// const proxy_colors = new Proxy(colors, {
//     set(target, key, value, receiver) {
//         const current_arr_length = Reflect.get(target, 'length');
//         if (isNumericIndex(key)) {
//             if (key >= current_arr_length) {
//                 Reflect.set(target, 'length', Number(key) + 1, receiver);
//             }
//         } else {
//             for (let i = current_arr_length - 1; i >= value; i--) {
//                 Reflect.deleteProperty(target, i);
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// });
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
// function unit32(numeric) {
//     return Math.floor(Math.abs(Number(numeric))) % Math.pow(2, 32);
// }
// function isNumericIndex(numeric_index) {
//     const unit_32_numeric = unit32(numeric_index);
//     return String(unit_32_numeric) === numeric_index && unit_32_numeric < Math.pow(2, 32) - 1;
// }
// function MyArray(length) {
//     this.length = length;
//     return new Proxy(this, {
//         set(target, key, value, receiver) {
//             const current_arr_length = Reflect.get(target, 'length');
//             if (isNumericIndex(key)) {
//                 if (key >= current_arr_length) {
//                     Reflect.set(target, 'length', Number(key) + 1, receiver);
//                 }
//             } else {
//                 for (let i = current_arr_length - 1; i >= value; i--) {
//                     Reflect.deleteProperty(target, i);
//                 }
//             }
//             return Reflect.set(target, key, value, receiver);
//         }
//     });
// }
// const colors = new MyArray(0);
// colors[0] = 'red';
// colors[1] = 'green';
// colors[2] = 'blue';
// colors[3] = 'yellow';
// colors[4] = 'purple';
// colors[5] = 'pink';
// console.log(colors, colors.length);
// colors[10] = 'brown';
// console.log(colors, colors.length);
// colors.length = 5;
// console.log(colors, colors.length);
// console.log(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[10]);
// class MyArray {
//     constructor(length = 0) {
//         this.length = length;
//         return new Proxy(this, {
//             set: (target, key, value, receiver) => {
//                 const current_arr_length = Reflect.get(target, 'length');
//                 if (this.isNumericIndex(key)) {
//                     if (key >= current_arr_length) {
//                         Reflect.set(target, 'length', Number(key) + 1, receiver);
//                     }
//                 } else {
//                     for (let i = current_arr_length - 1; i >= value; i--) {
//                         Reflect.deleteProperty(target, i);
//                     }
//                 }
//                 return Reflect.set(target, key, value, receiver);
//             }
//         });
//     }
//     isNumericIndex(numeric_index) {
//         const unit_32_numeric = MyArray.unit32(numeric_index);
//         return String(unit_32_numeric) === numeric_index && unit_32_numeric < Math.pow(2, 32) - 1;
//     }
//     static unit32(numeric) {
//         return Math.floor(Math.abs(Number(numeric))) % Math.pow(2, 32);
//     }
// }
// const colors = new MyArray(3);
// colors[0] = 'red';
// colors[1] = 'green';
// colors[2] = 'blue';
// colors[3] = 'yellow';
// colors[4] = 'purple';
// colors[5] = 'pink';
// console.log(colors, colors.length);
// colors[10] = 'brown';
// console.log(colors, colors.length);
// colors.length = 5;
// console.log(colors, colors.length);
// console.log(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[10]);
// 将代理陷阱作为原型
// 在原型中的 set 代理陷阱
// 在原型中的 get 代理陷阱
// 在原型中的 has 代理陷阱
// 将代理陷阱作为类原型
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
// };
// const proxy_o = Object.create(new Proxy(black_myth_wtw, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('新添加的对象属性值必须为数字!!!!!!');
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// }));
// proxy_o.age = 29;
// // proxy_o.gender = true;
// // proxy_o.birthday = '1993-06-30';
// console.log(proxy_o, proxy_o.name, proxy_o.age);
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
// };
// const proxy_o = Object.create(new Proxy(black_myth_wtw, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 属性`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// console.log(proxy_o);
// console.log(proxy_o.name, proxy_o.age, proxy_o.hobby);
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
// const proxy_o = Object.create(new Proxy(black_myth_wtw, {
//     has(target, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.has(target, key);
//     }
// }));
// console.log(proxy_o);
// console.log('name' in proxy_o);
// console.log('age' in proxy_o);
// console.log('hobby' in proxy_o);
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if(!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 属性`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// const circle = new RectAngle(20, 20);
// console.log(circle.width, circle.height);
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.width * circle.height);
// function RectAngle() {}
// RectAngle.prototype = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if(!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 属性`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const circle = new Square(20, 20);
// console.log(circle.width, circle.height);
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.width * circle.height);
// function RectAngle() {}
// const proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 属性`);
//         }
//         return Reflect.get(target, key, receiver);
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
// const circle = new Square(20, 20);
// console.log(circle.width, circle.height);
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.width * circle.height);
// function RectAngle() {}
// const proxy = Object.create(new Proxy({}, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError(`当前对象不存在 ${key} 属性`);
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
// const circle = new Square(20, 20);
// console.log(circle.width, circle.height);
// console.log(circle.getArea());
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.width * circle.height);
