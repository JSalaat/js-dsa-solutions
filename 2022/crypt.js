function crypt(crypt, solution){
    let [str1, str2, str] = crypt;
    let num1='', num2='', num='';
    let mem = {};
    for(let i of solution){
        let [char, val] = i;
        if(mem.hasOwnProperty(char)){
            continue
        }
        mem[char] = val;
    }
    for(let chr of str1){
        num1 += mem[chr];
    }
    for(let chr of str2){
        num2 += mem[chr];
    }
    for(let chr of str){
        num += mem[chr];
    }
    console.log({num1, num2, num})

    if((num1.indexOf('0')===0 || num2.indexOf('0')===0) && (num.indexOf('0')!==0 && num.indexOf('00')!==0) ) return false;
    return +num1 + +num2 === +num
}

console.log(
    crypt(["AA",
        "AA",
        "AA"],
[["A","0"]])
)