// 基本用法,其是直接绑定于/在内置对象 [PromiseState] 内的✅
// const promise = new Promise(resolve => {
//     resolve({
//         name: 'black@myth@wtw',
//         age: 28,
//         gender: true,
//         birthday: '1968-05-11',
//         hobby: {
//             sports: ['Black Myth WuKong', 'Elden Ring']
//         },
//         lover: 'ZhengShuAng'
//     });
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// Promise 状态机✅
// 三种状态:
// pending: 处理中✅
// const promise = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve({
//             name: 'black@myth@wtw',
//             age: 28,
//             gender: true,
//             birthday: '1968-05-11',
//             hobby: {
//                 sports: ['Black Myth WuKong', 'Elden Ring']
//             },
//             lover: 'ZhengShuAng'
//         });
//         clearTimeout(timer);
//         // }, 888);
//     }, 1888);
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// fulfilled: 已完成✅
// const promise = new Promise(resolve => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve({
//                                 name: 'black@myth@wtw',
//                                 age: 28,
//                                 gender: true,
//                                 birthday: '1968-05-11',
//                                 hobby: {
//                                     sports: ['Black Myth WuKong', 'Elden Ring']
//                                 },
//                                 lover: 'ZhengShuAng'
//                             });
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// rejected: 已拒绝✅
// const promise = new Promise((resolve, reject) => {
//     reject(new TypeError('promise has refused!!!!!!'));
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// }, (err) => {
//     console.error('error:', err.message);
// });
// const promise = new Promise((resolve, reject) => {
//     reject(new TypeError('promise has refused!!!!!!'));
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// }).catch((err) => {
//     console.error('error:', err.message);
// });
// 创建未处理的 Promise✅
// const promise = new Promise(resolve => {
//     resolve({
//         then(resolve) {
//             resolve({
//                 then(resolve) {
//                     resolve({
//                         then(resolve) {
//                             resolve({
//                                 name: 'black@myth@wtw',
//                                 age: 28,
//                                 gender: true,
//                                 birthday: '1968-05-11',
//                                 hobby: {
//                                     sports: ['Black Myth WuKong', 'Elden Ring']
//                                 },
//                                 lover: 'ZhengShuAng'
//                             });
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// 创建已完成的 Promise-Promise.resolve/Promise.reject,注意对于 Promise.resolve,如果传递 Promise 参数,会将此 Promise 直接返回✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// const promise = Promise.resolve(black_myth_wtw);
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// const promise = Promise.resolve({
//     then(resolve) {
//         resolve({
//             then(resolve) {
//                 resolve({
//                     then(resolve) {
//                         resolve(black_myth_wtw);
//                     }
//                 });
//             }
//         });
//     }
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1968-05-11',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     lover: 'ZhengShuAng'
// };
// const promise = Promise.resolve({
//     then(resolve) {
//        const timer = setTimeout(() => {
//            resolve(black_myth_wtw);
//            clearTimeout(timer);
//        }, 2666);
//     }
// });
// promise.then(({
//                   name,
//                   age,
//                   gender,
//                   birthday,
//                   hobby,
//                   lover,
//               }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender ? 'boy' : 'girl');
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby.sports.join(','));
//     console.log('lover:', lover);
// });
// const promise = Promise.reject(new TypeError('promise has refused!!!!!!'));
// promise.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const promise = Promise.resolve(new Promise(() => {
//     throw new TypeError('promise has refused!!!!!!')
// }));
// promise.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const promise = Promise.resolve(Promise.reject(new TypeError('promise has refused!!!!!!')));
// promise.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// Promise 全局的拒绝处理程序-在 Event Loop 事件循环机制内,如果 Promise 被拒绝,且无拒绝处理程序,则会直接触发执行 unhandledrejection 事件;如果 Promise 被拒绝,且监听到存在有拒绝处理程序,则会触发执行 rejectionhandled 事件;如果 Promise 被拒绝后同步立即设置拒绝处理程序,则不会触发执行任何事件✅
// unhandledrejection: 在 nodejs 内通过监听 process.on('unhandledRejection'),而在浏览器 web 页面内则是会触发执行 window 事件 window.addEventListener('unhandledrejection')✅
// rejectionhandled: 在 nodejs 内通过监听 process.on('rejectionhandled'),而在浏览器 web 页面内则是会触发执行 window 事件 window.addEventListener('rejectionhandled')✅
// const promise = new Promise((resolve, reject) => {
//     reject(new TypeError('promise has refused!!!!!!'));
// });
// const timer = setTimeout(() => {
//     promise.catch(reason => {
//         console.error('reason:', reason);
//         console.error('reason_message:', reason.message);
//         clearTimeout(timer);
//     });
// }, 2888);
// process.on('unhandledRejection', (reason, promise_unhandled_rejection) => {
//     console.log('unhandledRejection:', reason, promise_unhandled_rejection);
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
//     console.log('promise:', promise_unhandled_rejection);
//     console.log(promise_unhandled_rejection === promise);
// });
// process.on('rejectionHandled', (promise_unhandled_rejection) => {
//     console.log('rejectionHandled:', promise_unhandled_rejection);
//     console.log(promise_unhandled_rejection === promise);
// });
// const promise = new Promise((resolve, reject) => {
//     reject(new TypeError('promise has refused!!!!!!'));
// });
// const timer = setTimeout(() => {
//     promise.catch(reason => {
//         console.error('reason:', reason);
//         console.error('reason_message:', reason.message);
//         clearTimeout(timer);
//     });
// }, 2888);
// window.addEventListener('unhandledrejection', ({type, reason, promise: promise_unhandled_rejection}) => {
//     console.log(`${type}:`, reason, promise);
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
//     console.log('promise:', promise);
//     console.log(promise === promise_unhandled_rejection);
// });
// window.addEventListener('rejectionhandled', ({type, promise: promise_unhandled_rejection}) => {
//     console.log('rejectionHandled:', promise_unhandled_rejection);
//     console.log(promise_unhandled_rejection === promise);
// });
// const unhandled_rejection_map = new Map();
// const unhandled_rejection_promise = Promise.reject(new TypeError('promise has refused!!!!!!'));
// process.on('unhandledRejection', (reason, promise) => {
//     unhandled_rejection_map.set(promise, reason);
// });
// function resolveUnhandledRejection(map) {
//     setInterval(() => {
//         map.forEach((reason, promise) => {
//             console.log('promise:', promise);
//             console.log('reason:', reason);
//             console.log('reason_message:', reason.message);
//             console.log(unhandled_rejection_promise === promise);
//         });
//         map.clear();
//     }, 2 * 60 * 1000);
// }
// resolveUnhandledRejection(unhandled_rejection_map);
// const timer = setTimeout(() => {
//     unhandled_rejection_promise.catch(reason => {
//         console.error('reason:', reason);
//         console.error('reason_message:', reason.message);
//         clearInterval(timer);
//     });
// }, 2000);
// Promise 运行时遇到/抛出错误: 通过使用 catch 实行/进行拦截✅
// const promise = new Promise((resolve, reject) => {
//     reject(new TypeError('promise has refused!!!!!!'));
// });
// promise.then(value => {
//     console.log(value);
// }, reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const promise = Promise.reject(new TypeError('promise has refused!!!!!!'));
// promise.then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// Promise.all: 当 Promise 数组内所有的处理程序都完成时,才会实行返回,接收到的也才会是一个数组,分别代表着每一个完成处理程序所传递的数据;一旦监听到存在有拒绝处理程序,就会立即实行返回,接收到拒绝处理程序所传递的数据✅
// Promise.all([1, 99, 366]).then(values => {
//     console.log('array:', values);
// });
// Promise.all([new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black$myth$wtw');
//         clearTimeout(timer);
//     }, 3666);
// }), 32, true, '1994-03-10', Promise.resolve({
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     }
// }), 'WangJinJin']).then(values => {
//     console.log('array:', values);
// });
// Promise.all([new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black$myth$wtw');
//         clearTimeout(timer);
//     }, 3666);
// }), 32, true, '1994-03-10', Promise.resolve({
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     }
// }), Promise.reject(new TypeError('WangJinJin'))]).then(values => {
//     console.log('array:', values);
// }).catch(reason => {
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
// });
// Promise.race: 当 Promise 数组内任意一个处理程序完成/拒绝时,都会立即实行返回,接收到完成/拒绝处理程序所传递的数据✅
// Promise.race([1, 99, 366]).then(value => {
//     console.log('value:', value);
// });
// Promise.race([new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black$myth$wtw');
//         clearTimeout(timer);
//     }, 3666);
// }), 32, true, '1994-03-10', Promise.resolve({
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     }
// }), 'WangJinJin']).then(value => {
//     console.log('value:', value);
// });
// Promise.race([new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black$myth$wtw');
//         clearTimeout(timer);
//     }, 3666);
// }), Promise.resolve({
//     hobby: {
//         sports: ['Black_Myth_WuKong', 'Elden Ring']
//     }
// }), Promise.reject(new TypeError('WangJinJin'))]).then(value => {
//     console.log('value:', value);
// }).catch(reason => {
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
// });
// Promise.race([new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black$myth$wtw');
//         clearTimeout(timer);
//     }, 3666);
// }), new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve({
//             hobby: {
//                 sports: ['Black_Myth_WuKong', 'Elden Ring']
//             }
//         });
//         clearTimeout(timer);
//         // }, 2999);
//     }, 2666);
// }), new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//         reject(new TypeError('WangJinJin'));
//         clearTimeout(timer);
//     }, 2888);
// })]).then(value => {
//     console.log('value:', value);
// }).catch(reason => {
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
// });
// Promise 串行链✅
// const p1 = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black*myth*wtw');
//         clearTimeout(timer);
//     }, 3666);
// }).then(name => {
//     console.log(`Hi, My name is ${name}`);
// });
// const p1 = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black*myth*wtw');
//         clearTimeout(timer);
//     }, 3666);
// });
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
// });
// const p1 = new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//         reject(new TypeError('black%myth%wtw'));
//         clearTimeout(timer);
//     }, 3666);
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//         reject(new TypeError('black%myth%wtw'));
//         clearTimeout(timer);
//     }, 3666);
// });
// const p2 = p1.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve('black^myth^wtw').then(name => console.log(`Hi, My name is ${name}`));
// const p1 = Promise.resolve('black#myth#wtw');
// const p2 = p1.then(name => console.log(`Hi, My name is ${name}`));
// const p1 = Promise.reject(new TypeError('black@myth@wtw')).catch(reason => {
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black@myth@wtw'));
// const p2 = p1.catch(reason => {
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
// });
// 在 Promise 链内遇到/抛出错误✅
// const p1 = new Promise((resolve, reject) => {
//     throw new TypeError('black%myth%wtw');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = new Promise((resolve, reject) => {
//     throw new TypeError('black%myth%wtw');
// });
// const p2 = p1.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//         reject(new TypeError('black!myth!wtw'));
//         clearTimeout(timer);
//     }, 3888);
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//         reject(new TypeError('black!myth!wtw'));
//         clearTimeout(timer);
//     }, 3888);
// });
// const p2 = p1.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black+myth+wtw')).catch(reason => {
//     console.error('reason: ', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black+myth+wtw'))
// const p2 = p1.catch(reason => {
//     console.error('reason: ', reason);
//     console.error('reason_message:', reason.message);
// });
// 在 Promise 链内的返回值✅
// const p1 = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black-myth-wtw');
//         clearTimeout(timer);
//     }, 3222);
// }).then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return {
//         name,
//         age: 30
//     };
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
// });
// const p1 = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black-myth-wtw');
//         clearTimeout(timer);
//     }, 3222);
// });
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return {
//         name,
//         age: 30
//     };
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
// });
// const p1 = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black-myth-wtw');
//         clearTimeout(timer);
//     }, 3222);
// }).then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return {
//         name,
//         age: 30
//     };
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = new Promise(resolve => {
//     const timer = setTimeout(() => {
//         resolve('black-myth-wtw');
//         clearTimeout(timer);
//     }, 3222);
// })
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return {
//         name,
//         age: 30
//     };
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// })
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = Promise.resolve('black=myth=wtw').then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return {
//         name,
//         age: 30
//     };
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = Promise.resolve('black=myth=wtw')
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return {
//         name,
//         age: 30
//     };
// })
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black"myth"wtw')).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
//     console.log(`Hi, My name is ${reason.message}`);
//     return {
//         name: reason.message,
//         age: 30
//     };
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black"myth"wtw'))
// const p2 = p1.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
//     console.log(`Hi, My name is ${reason.message}`);
//     return {
//         name: reason.message,
//         age: 30
//     };
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black"myth"wtw')).then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject({
//         name: value.message,
//         age: 30
//     });
// }).catch(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black"myth"wtw'));
// const p2 = p1.then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject({
//         name: value.message,
//         age: 30
//     });
// });
// const p3 = p2.catch(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = new Promise(resolve => {
//     resolve(new TypeError('black"myth"wtw'));
// }).then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject({
//         name: value.message,
//         age: 30
//     });
// }).catch(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = new Promise(resolve => {
//     resolve(new TypeError('black"myth"wtw'));
// });
// const p2 = p1.then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject({
//         name: value.message,
//         age: 30
//     });
// });
// const p3 = p2.catch(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return {
//         name,
//         age,
//         gender: true
//     };
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     throw new TypeError('promise has refused!!!!!');
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = new Promise(resolve => {
//     resolve(new TypeError('black"myth"wtw'));
// }).then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject(new TypeError(`Hi, My name is ${value.message}, ${30} year's old`));
// }).catch((reason) => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
//     console.log(reason.message);
//     return `${reason.message}, I'm a boy!!!!!!`;
// }).then((value) => {
//     console.log(value);
//     throw new TypeError('promise has refused!!!!!');
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// const p1 = new Promise(resolve => {
//     resolve(new TypeError('black"myth"wtw'));
// });
// const p2 = p1.then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject(new TypeError(`Hi, My name is ${value.message}, ${30} year's old`));
// });
// const p3 = p2.catch((reason) => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
//     console.log(reason.message);
//     return `${reason.message}, I'm a boy!!!!!!`;
// });
// const p4 = p3.then((value) => {
//     console.log(value);
//     throw new TypeError('promise has refused!!!!!');
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason message:', reason.message);
// });
// 在 Promise 链内返回另一个 Promise✅
// const p1 = new Promise(resolve => {
//     resolve('black?myth?wtw');
// }).then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
// });
// const p1 = new Promise(resolve => {
//     resolve('black?myth?wtw');
// });
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
// });
// const p1 = new Promise(resolve => {
//     resolve('black?myth?wtw');
// }).then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = new Promise(resolve => {
//     resolve('black?myth?wtw');
// });
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve('black/myth/wtw').then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve('black/myth/wtw');
// const p2 = p1.then(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.reject('black/myth/wtw').catch(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.reject('black/myth/wtw');
// const p2 = p1.catch(name => {
//     console.log(`Hi, My name is ${name}`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age: 30
//         });
//     });
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black/myth/wtw')).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
//     console.log(`Hi, My name is ${reason.message}`);
//     return new Promise(resolve => {
//         resolve({
//             name: reason.message,
//             age: 30
//         });
//     });
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.reject(new TypeError('black/myth/wtw'));
// const p2 = p1.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
//     console.log(`Hi, My name is ${reason.message}`);
//     return new Promise(resolve => {
//         resolve({
//             name: reason.message,
//             age: 30
//         });
//     });
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black|myth|wtw')).then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return new Promise(resolve => {
//         resolve({
//             name: value.message,
//             age: 30
//         });
//     });
// }).then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black|myth|wtw'));
// const p2 = p1.then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return new Promise(resolve => {
//         resolve({
//             name: value.message,
//             age: 30
//         });
//     });
// });
// const p3 = p2.then(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black|myth|wtw')).then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject({
//         name: value.message,
//         age: 36,
//     });
// }).catch(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// }).then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black|myth|wtw'));
// const p2 = p1.then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject({
//         name: value.message,
//         age: 36,
//     });
// });
// const p3 = p2.catch(({name, age}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old`);
//     return new Promise(resolve => {
//         resolve({
//             name,
//             age,
//             gender: true,
//         })
//     });
// });
// const p4 = p3.then(({name, age, gender}) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}!!!!!!`);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// });
// const p5 = p4.catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const p1 = Promise.resolve(new TypeError('black|myth|wtw')).then(value => {
//     console.error('value:', value);
//     console.error('value_message:', value.message);
//     console.log(`Hi, My name is ${value.message}`);
//     return Promise.reject(new TypeError(`Hi, My name is ${value.message}, ${24} year's old`));
// }).catch((reason) => {
//     console.log('reason:', reason);
//     console.log('reason_message:', reason.message);
//     console.log(reason.message);
//     return new Promise(resolve => {
//         resolve(`${reason.message}, I'm a boy!!!!!!`);
//     });
// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         reject(new TypeError('promise has refused!!!!!!'));
//     });
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// 派生类继承自 Promise-注意对于静态成员 Promise.resolve/Promise.reject 所创建的派生类,它就是由静态访问器属性 [Symbol.species] 来确定值类型的,由此,类对象是在其派生类的原型链上✅
// class MyPromise extends Promise {
//     success(...args) {
//         return this.then(...args);
//     }
//     failure(...args) {
//         return this.catch(...args);
//     }
// }
// const p1 = new MyPromise(resolve => {
//     resolve({
//         name: 'black:myth:wtw',
//         age: 22,
//         gender: true,
//         birthday: '1995-03-03',
//         hobby: {
//             sports: ['basketball', 'computer games']
//         },
//         lover: 'ZhaoYue',
//     });
// });
// p1.success(({
//                 name,
//                 age,
//                 gender,
//                 birthday,
//                 hobby,
//                 lover,
//             }) => {
//     console.log('name:', name);
//     console.log('age:', age);
//     console.log('gender:', gender);
//     console.log('birthday:', birthday);
//     console.log('hobby:', hobby);
//     console.log('lover:', lover);
// });
// const p2 = new MyPromise((resolve, reject) => {
//     reject(new TypeError('promise has refused!!!!!!'));
// });
// p2.failure(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// const black_myth_wtw = {
//     name: 'black:myth:wtw',
//     age: 22,
//     gender: true,
//     birthday: '1995-03-03',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue',
// };
// const my_promise_1 = MyPromise.resolve({
//     then(resolve) {
//         resolve({
//             then(resolve) {
//                 resolve({
//                     then(resolve) {
//                         resolve({
//                             then(resolve) {
//                                 resolve({
//                                     then(resolve) {
//                                         resolve(black_myth_wtw);
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });
// my_promise_1.then(({
//                        name,
//                        age,
//                        gender,
//                        birthday,
//                        hobby,
//                        lover,
//                    }) => {
//     console.log(`Hi, My name is ${name}, ${age} year's old, I'm a ${gender ? 'boy' : 'girl'}, My birthday is ${birthday}, I love ${hobby.sports.join(',')}, My lover is ${lover}!!!!!!`);
// });
// const my_promise_2 = MyPromise.resolve(MyPromise.reject(new TypeError('promise has refused!!!!!!')));
// my_promise_2.then((value) => {
//     console.log('value:', value);
// }, reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
// console.log(my_promise_1 instanceof MyPromise, my_promise_1 instanceof Promise);
// console.log(my_promise_2 instanceof MyPromise, my_promise_2 instanceof Promise);
// Promise 异步任务状态机生成器✅
// const fs = require('fs');
// const path = require('path');
// const promise_generator = (...args) => new Promise((resolve, reject) => fs.readFile(...args, (err, data) => err ? reject(err) : resolve(data)));
// const run = (generator) => new Promise((resolve, reject) => {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const {value, done} = result;
//         if (done) resolve(value);
//         Promise.resolve(value).then(data => {
//             result = task.next(data);
//             step();
//         }).catch(err => {
//             reject(result =  task.throw(err instanceof Error ? err : new Error(err)));
//             step();
//         });
//     })();
// });
// run(function * () {
//     const first_step = yield promise_generator(path.resolve(__dirname, './questions/1.txt'), 'utf-8');
//     console.log('first_step:', first_step);
//     const second_step = yield promise_generator(path.resolve(__dirname, './questions/2.txt'), 'utf-8');
//     console.log('second_step:', second_step);
//     return second_step;
// }).then(result => {
//     console.log('final_step_result:', result);
// }).catch(reason => {
//     console.error('reason:', reason);
//     console.error('reason_message:', reason.message);
// });
