// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let stack = [];
    let prevh = 0

    H.forEach((sh,indx)=>{
        // if(!map[sh]){
        //     map[sh] = 1
        // }
        // map[sh]++

        if(sh > prevh){
            stack.push(sh)
            prevh = sh
            count++
        }
        else if(sh<prevh){
            while(stack.length > 0 && stack[stack.length-1] > sh){
                stack.pop()
            }
            if(sh !== stack[stack.length-1] || stack.length === 0){
                count++
                stack.push(sh)
            }
            prevh = sh
        }

        // if(h > prev){
        //     if(!map.hasOwnProperty(h)){
        //         count++
        //         map[h] = true
        //     }
        // }
        // else{
        //     prev=h
        //     map = {}
        // }

    })
    // return Object.keys(map).length;
    return count;

    // 8 8 5 7 9 8 7 4 8
}

console.log(
    // solution([8 ,8 ,5, 7, 9 ,8 ,7, 4, 8])
    solution([2, 3, 2, 1])
)