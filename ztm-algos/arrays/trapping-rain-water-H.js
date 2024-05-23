/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let max = 0;
    // for (let i=0; i<height.length; i++){
    //     for (let j=i+1; j<height.length; j++){
    //         let ic = height[i];
    //         let jc = height[j];
    //         max= Math.max(max, (Math.min(ic,jc) * (j-i)))
    //     }
    // }
    // return max;

    let l=0;
    let r=height.length-1;
    while (l<r){
        let lw = height[l];
        let rw = height[r];
        max= Math.max(max, (Math.min(lw,rw) * (r-l)))
        if(lw>rw){
            r--;
        }
        else{
            l++;
        }
    }
    return max;
};