function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let localMax = -Infinity;
    let prevSum = 0;
    for(let i=0; i<A.length; i++){
        let cur = A[i];
        localMax = Math.max(localMax, cur);
        prevSum += cur;
        if(prevSum > max){
            max = prevSum;
            prevSum = prevSum - cur;
        }
    }
    return max;
}

console.log(
    solution([1,1,1])
)