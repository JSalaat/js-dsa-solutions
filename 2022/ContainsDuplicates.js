var containsDuplicate = function(nums) {
    let map = {};
    let res = false;
    for (let num of nums) {
        if (!map.hasOwnProperty(num)) map[num] = true;
        else{
            res = !res;
            break
        }
    }
    return res;
};

