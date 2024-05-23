/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
    // Write your code here
    let first = 1;
    let last = n;
    let res = [];
    let map = {};
    function isIncluded(n){
        return n >= first && n <=last;
    }

    for (let i=first;i<=last;i++){
        let a1 = i - k;
        let a2 = i + k;

        if(isIncluded(a1)){
            if(!map[a1]) {
                map[a1] = true
                res.push(a1)
                continue;
            }


        }
        if(isIncluded(a2)){
            map[a2] = true
            res.push(a2)
            continue;
        }
        res = [-1];
        break;
    }
    return res;
}
// console.log(absolutePermutation(10, 0))
console.log(absolutePermutation(10, 1))
// console.log(absolutePermutation(7 ,0))
// console.log(absolutePermutation(10, 9))
// console.log(absolutePermutation(9 ,0))
// console.log(absolutePermutation(10, 3))
// console.log(absolutePermutation(8 ,2))
// console.log(absolutePermutation(8 ,0))
// console.log(absolutePermutation(7 ,0))
// console.log(absolutePermutation(10, 1))

