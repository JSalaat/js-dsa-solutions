// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = []
    let res = 0;
    for(let i=1;i<=N;i++){
        if(N%i===0){
            arr.push(i);
        }
    }
    let len = arr.length;
    if(len%2===0){
        let mid = Math.floor((arr.length-1)/2)
        res = (arr[mid]+ arr[mid+1]) *2
    }
    else{
        let mid = (arr.length-1)/2
        res = (arr[mid]+ arr[mid]) *2
    }
    return res;
}



console.log(
    solution(30)
)