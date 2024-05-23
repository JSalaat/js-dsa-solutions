//Off Line Minimum
//Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers 
// ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will 
// be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take 
// out the smallest integer currently in the whole set. When finished, your program should return that new set with 
// integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

function ArrayChallenge(strArr) { 
    let stack = [];
    let res = [];
    for (let index = 0; index < strArr.length; index++) {
        const element = strArr[index];
        if(element === "E"){
            res.push(stack.pop());
        }
        else {
            stack.push(element);
            stack.sort((a,b)=>b-a)
        }
    }
    return res.join(',')
}


console.log(ArrayChallenge(["5","4","6","E","1","7","E","E","3","2"]));