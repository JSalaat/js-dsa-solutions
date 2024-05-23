function appendAndDelete(s, t, k) {
    // Write your code here
    let sameCount = 0;
    let deleteOps = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]){
            sameCount++;
        }
        else break;
    }
    let s_unique = s.length - sameCount;
    let t_unique = t.length - sameCount;

    if (k < s_unique+t_unique){
        return  "NO"
    }
    else {
        let moves = s_unique+t_unique;

        if (k === moves){
            return "YES"
        }
        else if (k > moves){

        }
    }

    console.log({countToAdd, deleteOps})
    return k === countToAdd+deleteOps ? "YES" : "NO";
}
console.log(
    // appendAndDelete("hackerhappy", "hackerrank", 9)
    // appendAndDelete("aba", "aba", 7)
    appendAndDelete("ashley", "ash", 2)
)