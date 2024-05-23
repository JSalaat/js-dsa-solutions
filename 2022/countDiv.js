// / console.log('this is a debug message');

function solution(A, B, K) {
// write your code in JavaScript (Node.js 8.9.4)

    if (B === 0) return 1;
    if (B < K) return 0;
    // let rem = A%K;
    let rem = K<A ? A%K : K%A;

    let l = rem + A;

    rem = K<B ? B%K : K%B;
    let r = B - rem;

    return Math.floor((r/K) - (l/K) + 1);


    // let count = 0;
    // for(let a=A;a<=B;a++){
    //     if(a%K===0){
    //         count++
    //     }
    // }
    // return count
}

console.log(
    // solution(0,0,11)
// solution(10,10,5)
solution(0,14,2)
)