// num arr must be sorted from least to highest
// binary search is efficient because we split and ignore halfs

function binaryS(nums, target){
    let res = -1;
    let indx = 0;

    if(nums.length===1){
        return nums[0] === target ? 0 : -1
    }

    while(nums.length > 0){
        let first = nums.slice(0, nums.length/2);
        let second = nums.slice(nums.length/2);

        if(second[0] > target){
            if (first.length === 0) {
                res = -1;
                break;
            }
            nums = first;
        }
        else if(second[0] < target){
            if (first.length === 0) {
                res = -1;
                break;
            }
            indx = indx + first.length
            nums = second;

        }
        else if(second[0] === target){
            indx = indx + first.length
            res = indx;
            nums = []
        }
    }
    return res;
}

// console.log(binaryS([5,7,12,15,36,46,56,65,78,84,90], 12));
// console.log(binaryS([1,2,3,4,5,6,7,8,9,10], 7));
console.log(binaryS([1,3,4,5], 2));
// console.log(binaryS([6], 6));
// console.log(binaryS([5], 6));
// console.log(binaryS([2,5], 2));
// console.log(binaryS([-1,0,3,5,9,12], 2));

const binarySearch = (numArr, key) => {
    let middleIndx = Math.floor(numArr.length/2);
    let middle = numArr[middleIndx];
    if (middle === key) {
        return true;
    }
    let filteredArr;

    if (middle < key) {
        filteredArr = numArr.filter((num, indx) => {
            return middleIndx < indx;
        });
        return binarySearch(filteredArr, key);
    }

    if (middle > key) {
        filteredArr = numArr.filter((num, indx) => {
            return middleIndx > indx;
        });
        return binarySearch(filteredArr, key);
    }

    return false;
};

// console.log(binarySearch([5,7,12,15,36,46,56,65,78,84,90], 12));


