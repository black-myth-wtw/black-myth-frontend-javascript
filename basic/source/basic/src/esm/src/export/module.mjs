export let number = 20;
export const name = 'black@myth@wtw';
export let drink = 'wine';

export function count() {
    return number++;
}

export function sum() {
    return (number = number + 2);
}

export {sum as default};
