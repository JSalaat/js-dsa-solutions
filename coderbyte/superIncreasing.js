// largestPair.

function superInc(nums){
    let sum = 0;
    for (const num of nums) {
        if(sum>num){
            return false;
        }
        sum += num;
    }
    return true
}

console.log(superInc([1, 3, 6, 13, 54]))