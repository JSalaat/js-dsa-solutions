/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(A) {
    // if(A.length < 2) {
    //     if (A[0] === 1) return 2;
    //     return 1;
    // }

    let count = 0;
    let res = 1;
    let map = {1: true};
    let highest = 0;

    A.sort((a,b)=>a-b)


    let min = 1;
    for(let i=0;i<A.length;i++){
        let cur = A[i]
        if(cur < 1) continue;

        count++
        map[cur] = true;

        if(i == A.length-1) highest = cur;

    }
    for(let i=1;i<=highest; i++){
        let cur = map[i];
        if (!cur){
            res = i;
            break;
        }
        if(i == highest) {
            res = highest+1;
        }
    }
    return res;
};

console.log(
    firstMissingPositive([3,4,-1,1])
)