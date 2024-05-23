function climbStairs(n){
    let mem = {}
    if (n <= 1){
        return 1
    }
    else {
        if (mem[n]){
            return mem[n]
        }
        else {
            mem[n] = climbStairs(n-1) + climbStairs(n-2)
        }
        return mem[n];
    }
}

console.log(
    climbStairs(5)
)
// climbStairs()