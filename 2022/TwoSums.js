
var twoSum = function(nums, target) {
    let map = {};
    let res = [];
    if(nums.length === 2) return [0,1];
    nums.forEach((num,indx)=>{
        if(!map.hasOwnProperty(num)){
            map[num] = indx
        }
    })
    for (let [indx, num] of nums.entries()) {
        let d = target - num;
        if(map.hasOwnProperty(d) && map[d] !== indx){
            res = [map[d], indx]
            break;
        }
    }
    return res;
};

console.log(twoSum([2,4,11,3], 6))
