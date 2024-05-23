/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    // if(s === t) return t;
    // if(s.length < t.length) return "";

    let omap = {};
    let res = "";
    let len = Infinity;
    let tLen = t.length;

    t.split("").forEach(chr => {
        if(!omap[chr]) omap[chr] = 1;
        else omap[chr]++;
    })

    // console.log({omap})

    for(let i=0,j=1; i<s.length; ){

        let map = Object.assign({}, omap);
        // console.log({i,j})
        let ichar = s[i];
        let jchar = s[j];

        if(!!ichar === map[ichar] > 0){

            if(!!jchar === map[jchar] > 0){

                let r = s.substring(i, j+1);

                if(checkOthers(map, r, ichar, jchar)){
                    if(r.length < len){
                        res = r;
                    }
                    len = Math.min(r.length, len)
                }
                i++;

            }
            else{
                j--;
            }
        }
        else{
            i++;
        }
    }

    for(let i=0,j=s.length-1; i<s.length && j>=0;){

        let map = Object.assign({}, omap);
        // console.log({i,j})
        let ichar = s[i];
        let hasIchar = false;

        let jchar = s[j];
        let hasJchar = false;

        if(!!jchar === map[jchar] > 0){
            hasJchar = true;

            if(!!ichar === map[ichar] > 0){
                hasIchar = true;


                let r = s.substring(i, j+1);

                if(checkOthers(map, r, map[i], map[j])){
                    if(r.length < len){
                        res = r;
                    }
                    len = Math.min(r.length, len)
                }
                j--;
            }
            else{
                i++;
            }
        }
        else{
            j--;
        }
    }

    return res;


    function checkOthers(dmap, r, i, j){
        let res = false;
        let count = t.length;
        let keys = Object.keys(dmap);

        keys.forEach((k, indx)=>{
            if(k === i){
                dmap[i]--;
                count--;
                if(dmap[i] < 0) res = false;
            }
            else if(k===j){
                dmap[j]--;
                count--;

                if(dmap[i] < 0) res = false;
            }
            else{
                if(r.indexOf(k)!== -1){
                    // count++;
                    dmap[k]--;
                    count--;

                    if(dmap[i] < 0) res = false;
                }
                else{
                    res = false;
                }
            }
            if(indx === t.length-1 && count === 0){
                res = true;
            }
        })
        return res;
    }
};

console.log(
    // minWindow("ADOBECODEBANC", "ABC")
// minWindow("a", "a")
// minWindow("a", "b")
// minWindow("a", "aa")
minWindow("aa", "aa")
)