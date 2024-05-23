// const merge = (arr1, arr2, res) => {
//     if (arr1.length === 1){
//         if (arr1[0] > arr2[0]){
//             res.push(arr2[0]);
//             res.push(arr1[0]);
//         }
//         else {
//             res.push(arr1[0]);
//             res.push(arr2[0]);
//         }
//         return res;
//     }
//     else {
//         mergeSort(arr1, res)
//     }
//
//     if (arr2.length === 1){
//         if (arr1[0] > arr2[0]){
//             res.push(arr2[0]);
//             res.push(arr1[0]);
//         }
//         else {
//             res.push(arr1[0]);
//             res.push(arr2[0]);
//         }
//         return res;
//     }
//     else {
//         return mergeSort(arr2, res)
//     }
//
//
//
// };
//
// const mergeSort = (arr) => {
//     let halfwayThrough = Math.floor(arr.length / 2);
//     let arrayFirstHalf = arr.slice(0, halfwayThrough);
//     let arraySecondHalf = arr.slice(halfwayThrough, arr.length);
//
//     let result = merge(arrayFirstHalf, arraySecondHalf, []);
//     console.log(result)
//
// };
//
// mergeSort([5,3,1,2]);


function mergeSortR (arr) {
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);
    console.log({f: firstHalf, secondHalf})

    // console.log({f: mergeSort(firstHalf)})
    // console.log({s: mergeSort(secondHalf)})
    return mergeR(mergeSortR(firstHalf), mergeSortR(secondHalf));
}

function mergeR (array1, array2) {
    // console.log({array1, array2})

    var result = [];
    while (array1.length && array2.length) {
        var minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);
    return result;
}
const merge = (arr1, arr2) => {
    const results = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }

    return results
}

const mergeSort = arr => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
// console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));
console.log(mergeSort([3,8,1,4]));
