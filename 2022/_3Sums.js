const _3Sums = (nums) => {
    let res = [];
    let map = {};
    let s = nums.sort((a,b)=>{
        return a-b
    })
    // for (let k = 0; k < nums.length; k++) {
    //     if (map.hasOwnProperty(a)){
    //         map[a]++;
    //     }
    //     else {
    //         map[a] = 1;
    //     }
    // }
    function findTwoSums(a, i) {
        // console.log(s)
        if (i > 0 && nums[i] === nums[i - 1]) {
            return;
        }
        let l = i +1;
        let r = s.length-1;
        while (l < r){
            let sum = a + s[l] + s[r];
            if (sum > 0){
                r--;
            }
            else if (sum < 0){
                l++
            }
            else {
                res.push([a, s[l], s[r]])
                l++;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        /*for (let j = i; j < nums.length; j++) {
            for (let k = j; k < nums.length; k++) {
                if (i === j || j === k || k === i) continue;
                if (nums[i]+nums[j]+nums[k] === 0){
                    let a = [nums[i],nums[j],nums[k]];
                    let sorted = a.sort((a,b)=>a-b).join("")
                    if (!map.hasOwnProperty(sorted)) {
                        map[sorted] = true;
                        res.push(a);
                    }
                }
            }
        }*/
        findTwoSums(s[i], i)
    }
    return res;
}
function ll(nums){
    let res = [];
    let s = nums.sort((a,b)=>{
        return a-b
    })
    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        if (i > 0 && s[i] === s[i - 1]) {
            break;
        }
        let l = i +1;
        let r = s.length-1;
        while (l < r){
            let sum = a + s[l] + s[r];
            if (sum > 0){
                r--;
            }
            else if (sum < 0){
                l++
            }
            else {
                res.push([a, s[l], s[r]])
                l++;
                while (l < r && s[l] === s[l - 1]) {
                    l++;
                }
            }
        }
    }
    return res;
}

console.log(
    ll([-1,0,1,2,-1,-4])
)