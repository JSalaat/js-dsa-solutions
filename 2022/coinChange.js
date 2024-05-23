function coinChange(coins, amount){
    let res = Infinity, map = {};
    if (amount <= 0) return 0
    coins.sort((a,b)=>b-a)
    coins.forEach((coin)=>{
        if (!map.hasOwnProperty(coin)) {
            map[coin] = true
        }
    })
    for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]){
            let remainder = amount%coins[i];
            if(map.hasOwnProperty(remainder)){
                res = Math.min(res, Math.floor(amount/coins[i]) + 1)
            }
            else if (remainder ===0){
                res = Infinity;
                res = Math.min(res, Math.floor(amount/coins[i]))
            }
            else if(i===coins.length-1 && res === Infinity) res = -1;
        }
        else {
            res = -1;
        }
    }
    return res;
}

console.log(
    // coinChange([1,2,5], 11)
    coinChange([1,2147483647],2)
)