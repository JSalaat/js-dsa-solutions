function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let map = {}
    let i=0
    while(!map[i%N]){
        let rem = i%N;
        map[rem] = true;
        count++;
        i = i+M;
    }
    return count;
}

console.log(
    solution(10, 4)
);
