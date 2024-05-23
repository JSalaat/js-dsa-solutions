// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, C, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = {}
    let dmap = {}
    let res = 0;
    let dirtyPairs = 0;
    for (let clean of C){
        if(map.hasOwnProperty(clean)) {
            delete map[clean]
            res++;
        }
        else{
            map[clean] = true
        }
    }

    for(let dirty of D){
        if (K === 0) break;
        if(map.hasOwnProperty(dirty)){
            delete map[dirty]
            // let indx = D.indexOf(dirty);
            // D = D.filter((d,i)=>i!==indx)
            D = D.splice(D.indexOf(dirty), 1)
            res++;
            K-=1;
        }
    }

    for(let dirty of D){
        if(dmap.hasOwnProperty(dirty)){
            dirtyPairs++
            delete dmap[dirty]
        }
        else {
            dmap[dirty] = true
        }
    }


    return K<2 ? res : res + Math.min(Math.floor(K/2), dirtyPairs);
}

console.log(
    // solution(2, [1], [3, 2, 5, 5])
    solution(5, [1, 1, 2], [2, 2, 3])
)