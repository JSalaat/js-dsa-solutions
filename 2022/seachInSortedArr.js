const searchInSortedArr = (nums, target) => {
    let res=-1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res = i;
            break;
        }
    }
    return res;
}
console.log(
    searchInSortedArr([4,5,6,7,0,1,2], 0)
)
