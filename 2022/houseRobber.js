/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1=0;
    let rob2=0;

    if (nums.length===0){
        return 0;
    }
    for (let i = 0; i < nums.length;) {
        if (i===0) {
            rob1 = nums[i];
            i+=2;
            continue;
        }
        if (nums[i] < nums[i+1]){
            if (nums[i+1] === nums[i+2]) {
                rob1 += nums[i];
                i+=2;
                continue;
            }
            rob1 += nums[i+1];
            i+=3;
        }
        else {
            rob1 += nums[i];
            i+=2;
        }

    }
    for (let j = 0; j < nums.length;) {
        if (j===0) {
            j++;
            continue
        }
        if (j===1) {
            rob2 = nums[j];
            j+=2;
            continue;
        }
        if (nums[j] < nums[j+1]){
            if (nums[j+1] === nums[j+2]) {
                rob2 += nums[j];
                j+=2;
                continue;
            }
            rob2 += nums[j+1];
            j+=3;
        }
        else {
            rob2 += nums[j];
            j+=2;
        }

    }
    return Math.max(rob1, rob2);
};

console.log(
    // rob([2,1,3,1])
    // rob([1,2,3,1])
    // rob([1,3,1,3,100])
    // rob([2,7,9,3,1])
    // rob([2,4,8,9,9,3])
    rob([8,2,8,9,2])
    // houseRobber([0])
)