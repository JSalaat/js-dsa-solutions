/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let lastOccurrence = -101;
    for (let itr=0; itr<nums.length; itr++){
        let curr = nums[itr];
        if (lastOccurrence === curr){
            nums[itr] = 101;
        }
        else {
            lastOccurrence = curr;
            k++;
        }
    }
    nums.sort((a,b)=>a-b)
    return k;
};
let nums1 = [1,1,2]
let nums2 = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(nums1)