function solution(arr){
    let len = arr.length
    let max = 0;
    // O(n^2)
    // for (let leftwall = 0; leftwall<len; ++leftwall){
    //     for (let rightwall = leftwall+1; rightwall<len; ++rightwall){
    //         let l = arr[leftwall]
    //         let r = arr[rightwall]
    //         max = Math.max(Math.min(l,r)*(rightwall-leftwall), max)
    //     }
    // }
    // return max;

    for (let l = 0, r=len-1; l<r; ){
        let left = arr[l];
        let right = arr[r];
        max = Math.max((Math.min(left, right) * (r-l)), max);
        if(left>right){
            r--;
        }else {
            l++;
        }
    }
    return max;
}

console.log(solution([7,1,2,3,9]));