function TwoChars(s){
    let st = new Set();
    let maxLen = 0;
    s.split("").forEach((cur, indx)=>{
        st.add(cur);
    })
    st = Array.from(st)

    function isValid(element, element2) {
        let prevChr = ""
        let isValid = true;
        let str = "";
        for (let i = 0; i < s.length; i++) {
            if (prevChr === s[i]){
                isValid = false;
                break;
            }
            if (s[i] === element) {
                str += s[i];
                prevChr = s[i]
            } else if (s[i] === element2) {
                str += s[i];
                prevChr = s[i]
            }
        }
        if (isValid){
            maxLen = Math.max(maxLen, str.length)
        }
    }

    for(let i=0;i<st.length;i++){
        for(let j=i+1;j<st.length;j++){
            isValid(st[i], st[j])
        }
    }
    return maxLen;
}

console.log(
    TwoChars("beabeefeab")
)