function flatten(arr, res=[], count=0){
    //base
    if (count >= arr.length){
        return;
    }

    if (Array.isArray(arr[count])){
        flatten(arr[count++], res, 0)
        flatten(arr, res, count)
    }
    else if (!isNaN(arr[count])){
        res.push(arr[count++])
        flatten(arr, res, count)
    }
    // else {
    //     flatten(arr[count++], res)
    // }
    console.log(res);
}

console.log(
    flatten([[[]],1,2,3,[4,[4],5],9,[[10]]])
)