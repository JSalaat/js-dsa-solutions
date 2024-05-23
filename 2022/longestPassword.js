let u = {}, l = {}, n={}
function longestPassword(S){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "1234567890"

    for (let i = 0; i < upper.length; i++) {
        u[upper[i]] = true;
        l[upper[i].toLowerCase()] = true;
        if (nums[i]) n[nums[i]] = true;
    }
    let passwords = S.split(" ");
    let max = -1;
    for (const password of passwords) {
        if(isValid(password)){
            max = Math.max(max, password.length);
        }
    }
    return max;
}

let isValid = (p) => {
    let acount = 0;
    let ncount = 0;
    for (let i = 0; i < p.length; i++) {
        let cur = p[i]
        if (l[cur] || u[cur] || n[cur]){
            if (l[cur]||u[cur]){
                acount++;
            }
            else {
                ncount++;
            }
        }
        else {
            return false
        }
    }
    return acount%2===0 && ncount%2!==0;
}

console.log(
    longestPassword("test 55 a00A passs007 ?xy1")
)