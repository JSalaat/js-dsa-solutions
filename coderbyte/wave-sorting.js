// wave-sorting.js
// Wave Sorting
// Have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input array will always contain at least 2 elements. More examples are given below as sample test cases.
// Examples
// Input: [0, 1, 2, 4, 1, 1, 1]
// Output: false
// Input: [0, 4, 22, 4, 14, 4, 2]
// Output: true
// Tags
// arraysortingGoogle

function WaveSorting(arr) { 

    arr.sort((a,b)=>a-b);
    let mid = Math.floor(arr.length/2);
    // code goes here
      // console.log({arr})
    for (let i=0; mid < arr.length; i++,mid++){
      let left = arr[i];
      let right = arr[mid];
      // console.log({left, right, mid})
      if(left>=right){
        return false
      }
    }
    if(arr.length%2!=0){
      return arr[arr.length-1] > arr[arr.length-2];
    }
    return true; 
  
  }
     
  // keep this function call here 
  console.log(WaveSorting(readline()));