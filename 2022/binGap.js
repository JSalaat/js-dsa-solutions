
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let b = N.toString(2);
    //101001000
    if(b.length < 3) return 0
    let max = 0;
    let count = 0;
    let started = false;
    for(let i=0;i<b.length;i++){
        let left = b[i];
        // let right = b[j];
        if(left == 1){
            if(started){
                max = Math.max(max, count);
                count = 0
            }
            else{
                started = true;
            }
        }
        else{
            if(started){
                count++
            }
        }

    }
    return max;

}

console.log(
    solution(328)
)