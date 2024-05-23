// patternChaser.js

/*
Have the function PatternChaser(str) take str which will be a string and return the longest pattern
 within the string. A pattern for this challenge will be defined as: if at least 2 or more adjacent 
 characters within the string repeat at least twice. So for example "aabecaa" contains the pattern aa,
  on the other hand "abbbaac" doesn't contain any pattern. Your program should return yes/no pattern/null.
   So if str were "aabejiabkfabed" the output should be yes abe. If str were "123224" the output should 
   return no null. The string may either contain all characters (a through z only), integers, or both. 
   But the parameter will always be a string type. The maximum length for the string being passed in will 
   be 20 characters. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". 
   You must always return the longest pattern possible.
*/

function patternChaser(str){
//     let max = Math.floor(str.length/2);
    
//     while (max > 1){
//         let right = max
//         let left = 0;

//     }

    let left = 0;
    let mid = Math.floor(str.length/2);
    let max = ''
    let map = new Map()
    let patterns = [];
    while(left<str.length-1){
        let right = left + 2;
        while (right < left + mid && right <= str.length){
            let pattern = str.substring(left, right);
            patterns.push(pattern)
            // console.log({pattern, left, right});
            if(map.has(pattern)){
                if (map.get(pattern))
                if(pattern.length > max.length) {
                    map.delete(max);
                    max = pattern
                }
            }
            else{
                map.set(pattern, [left, right])
            }
            right++
        }
        left++
    }
    // console.log({patterns})
    return max;

    // let maxPattern = '';
    // const map = new Map();
    // for(let i = 2; i <= Math.floor(str.length/2); i++){
    //     for (let j = 0; j <= str.length - i; j++){
    //     let prevPattern = j === 0 ? "" : str.substring(j - 1, i + j - 1);
    //     let pattern = str.substring(j, i + j);
    //     if(map.has(pattern)){
    //         if(pattern !== prevPattern){
    //         maxPattern = pattern;
    //         }
    //     }
    //     else{
    //         map.set(pattern, true);
    //     }
    //     console.log({i, j, prevPattern, pattern, map});
    //     }
    // }
    // if(maxPattern === ""){
    //     return "no null";
    // }
    // else{
    //     return `yes ${maxPattern}`
    // }
}
// console.log(patternChaser('aabejiabkfabed'))

console.log(patternChaser("da2kr32a2")); // yes a2
console.log(patternChaser("sskfssbbb9bbb")); // yes bbb
console.log(patternChaser("aabecaa")); //  yes aa
console.log(patternChaser("abbbaac")); // no null
console.log(patternChaser("aabejiabkfabed")); // yes abe
console.log(patternChaser("123224")); // no null
console.log(patternChaser("aa2bbbaacbbb")); // yes bbb