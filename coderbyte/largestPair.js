// Have the function LargestPair(num) take the num parameter being passed and 
// determine the largest double digit number within the whole number. For example: 
// if num is 4759472 then your program should return 94 because that is the largest 
// double digit number. The input will always contain at least two positive digits.

function largestPair(num){
    let arr = num.split('')
    let max = parseInt(arr[0] + arr[1]);
    for (let index = 0; index < arr.length-1; index++) {
        max = Math.max(parseInt(arr[index] + arr[index+1]), max);
    }
    return max;
}

console.log(largestPair('4759472'));