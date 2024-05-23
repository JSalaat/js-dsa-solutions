/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let m = {};
    let res = true;

    for (let chr of s){
        m[chr] = m[chr] > 0 ? m[chr]+1 : 1
    }

    let count = 0;
    for (let chr of t){
        if(m[chr]){
            m[chr]--;
            count++;
        }
        else{
            res = false;
            break;
        }
    }

    return res && s.length === count;

};
console.log(
    isAnagram("a", "ab") // f
// isAnagram("ab", "a") // f
)