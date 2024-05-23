function palindromeIndex(s){

    let res = -1
    // s.split("").map((chr,indx)=>{
    //
    // })

    for (let i = 0, j=s.length-1; i < s.length, j>i; i++,j--) {
        if (s[i]!==s[j]){
            if (check(s.slice(0, j)+s.slice(j+1))){
                res=j;
                break;
            }
            else if (check(s.slice(0, i)+s.slice(i+1))){
                res=i;
                break;
            }
        }
    }

    function check (s){
        let isPal = false;
        for (let i = 0, j=s.length-1; i < s.length, j>i; i++,j--) {
            if (s[i]===s[j]){
                isPal = true
            }
            else {
                isPal = false
                break;
            }
        }
        return isPal;
    }
    return res;
}

console.log(
    palindromeIndex("quyjjdcgsvvsgcdjjyq")
)