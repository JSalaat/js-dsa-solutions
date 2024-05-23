const largestProductSubArr_BRUTE = (arr) => {
    let l = {},
        max = 0;
    for (let i = 0; i < arr.length; i++) {
        let prod = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            // if (i === j) continue;
            prod = prod*arr[j];
            max = Math.max(max, prod);
        }
    }
    return max;
}
const largestProductSubArr = (nums) => {
    let [max, min] = [1, 1];
    let res = -Infinity;

    for (let n of nums) {
        let maxP = n * max;
        let minP = n * min;

        max = Math.max(n, maxP, minP);
        min = Math.min(n, maxP, minP);
        res = Math.max(res, max);
    }
    return res;
}
console.log(largestProductSubArr([-2,3,-4]))
// [2,3,-2,4] should return 6
