export function sum(str: string) {
    if (!str) {
        return 0
    }
    const strArr = str.split(',');
    let sum = 0;
    for (let num of strArr) {
        sum += Number(num);
    }
    return sum;
}