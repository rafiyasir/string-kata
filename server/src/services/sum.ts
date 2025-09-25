export function sum(str: string) {
    if (!str) {
        return 0
    }
    let sum = 0;
    let numberStr = str;
    let delimiter = ','
    let negativeNumbers = [];
    if (str.startsWith("//")) {
        delimiter = str.slice(2, 3);
        numberStr = str.slice(4);
    }
    const strArrByNL = numberStr.split("\n");
    for (const nlNum of strArrByNL) {
        const strArr = nlNum.split(delimiter);
        for (let num of strArr) {
            if (Number(num) < 0) {
                negativeNumbers.push(num);
            } else if(Number(num) < 1001){
                sum += Number(num);
            }
        }
    }
    if(negativeNumbers.length) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`)
    }
    return sum;
}