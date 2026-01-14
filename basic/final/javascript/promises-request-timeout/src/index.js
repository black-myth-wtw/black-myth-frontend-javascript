// javascript promises request timeout 异步状态机请求超时中间件
const promises_request_timeout = (promises, timeout) => Promise.race([...promises.map(promise => Promise.resolve(promise).then(value => typeof value === 'object' && value.hasOwnProperty('status') ? value : {
    status: 'fulfilled',
    value
}).catch(reason => ({status: 'rejected', reason}))), new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
        reject({
            status: 'rejected',
            reason: '请求超时!!!!!!'
        });
        clearTimeout(timer);
    }, timeout);
})]);
promises_request_timeout([new Promise(resolve => {
    resolve('I love ZhengShuAng~~~~~~');
    // resolve({
    //     status: 'fulfilled',
    //     value: 'I love ZhaoYue~~~~~~'
    // });
    // setTimeout(() => {
    //     resolve('I love WangJinJin~~~~~~');
    // }, 3100);
    // setTimeout(() => {
    //     resolve('I love myself~~~~~~');
    // }, 3000);
    // setTimeout(() => {
    //     resolve('I love yin_wen_kai~~~~~~');
    // }, 2900);
})], 3000).then(value => console.log('result:', value)).catch(error => console.error(error));
