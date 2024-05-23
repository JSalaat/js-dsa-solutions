function validParahesis(s){
    /**
     * @param {string} s
     * @return {boolean}
     */
// 2.26
    let stack = [];
    let res = false;
    let isOpener = {
        "{" : "}",
        "[" : "]",
        "(" : ")",
    }

    // s.split("").forEach(chr=>
    for (let i = 0; i < s.length; i++) {
        let chr = s[i];
        if (isOpener[chr]){
            stack.push(chr)
        }
        else {
            if(isOpener[stack.pop()] !== chr){
                res = false;
                break;
            }
            else{
                res = true;
            }
        }
    }
    return res;
}
console.log(validParahesis("({{{{}}}))"))