/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let map = {};
    // let len = arr.length;
    // let maxAns = 0;
    // for(let i=0; i<len; i++){
    //     let icur = arr[i]
    //     if(isUnique(icur)) maxAns = Math.max(maxAns, icur.length)

    //     for(let j=i; j<len; j++){
    //         let jcur = arr[j]
    //         let concat = icur + jcur;
    //         if(isUnique(concat)){
    //              maxAns = Math.max(maxAns, concat.length)
    //              console.log({concat, icur, jcur})
    //              if(arr[j+1] && arr[j+1].indexOf(jcur)==-1){
    //                  icur = concat;
    //              }
    //         }

    //     }
    // }
    // function isUnique(str){
    //     let m = {};
    //     for (s of str){
    //         if(m[s]){
    //             return false;
    //         }
    //         else m[s]=true
    //     }
    //     return str.length === Object.keys(m).length
    // }
    // return maxAns

    function overlap(str){
        let prev = {};
        for(let chr of str){
            if(map[chr] || prev[chr]){
                return true
            }
            else prev[chr] = true
        }
        return false;

    }

    function backtrack(position){
        // base case
        if(position === arr.length){
            return Object.keys(map).length
        }

        let result = 0;
        let current = arr[position]
        if(!overlap(current)){
            for(let chr of current){
                map[chr] = true;
            }
            result = backtrack(position+1);
            for(let chr of current){
                delete map[chr]
            }
        }
        return Math.max(result, backtrack(position+1))
    }
    return backtrack(0)

};
