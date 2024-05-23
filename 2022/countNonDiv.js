function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = [];
    for(let i=0;i<A.length;i++){
        let cur = A[i];
        let count = 0;
        for(let j=0;j<A.length;j++){
            if (i===j) continue;
            let div = A[j]
            if( (cur/div)%1 !== 0 ){
                count++
            }
        }
        arr.push(count)
    }
    return arr;
}


console.log(
    solution([])
)