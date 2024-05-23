/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let MAX = 51;
    let k = nums.length;
    let rightPointer = nums.length-1;
    for (let itr=0; itr<nums.length;){
        let num = nums[itr];
        if (num === val){
            nums[itr] = nums[rightPointer];
            nums[rightPointer] = MAX;
            k--;
            rightPointer--;
        }
        if(nums[itr] != val){
            itr++
        }
    }
    return k;
};