function longestPrefix (arr){
    let mem = {};
    let max = 0;
    let res = [];
    arr.forEach((item)=>{
        let word = "";
        if (typeof item != "string") item = item.toString();
        for (const char of item) {
            let k = word+char;
            if (mem[k]){
                mem[k] += 1
                max = Math.max(mem[k], max);
                delete mem[word];
            }
            else {
                mem[k] = 1
            }
            word = k;
        }
    })
    for (const memKey of Object.keys(mem)) {
        if (mem[memKey] === max) res.push(memKey);
    }
    return res;
}

console.log(
    // longestPrefix(['item', 'array'])
    longestPrefix(['pea', 'pear', 'apple', 'for', 'april', 'fo','apendix', 'peace', 1])
)