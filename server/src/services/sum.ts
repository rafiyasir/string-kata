export function sum(str: string) {
    if (!str) {
        return 0
    }
    let sum = 0;
    const strArrByNL = str.split("\n");
    for (const nlNum of strArrByNL) {
        const strArr = nlNum.split(',');
        for (let num of strArr) {
            sum += Number(num);
        }
    }
    return sum;
}