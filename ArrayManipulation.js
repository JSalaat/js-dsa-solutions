function arrayManipulation(n, queries) {
    // console.log(n,queries);
    let hash = {};
    let max = 0;
    let arr = [];
    // for (let i = 1; i <= n; i++) {
    //     hash[i] = 0;
    // }
    queries.forEach((i)=>{
        let from = i[0];
        let to = i[1];
        let toAdd = i[2];

        arr[from] += toAdd;
        arr[to+1] -= toAdd;

    });

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        max = Math.max(sum, max);
    }

    // for (let i = from; i <= to; i++) {
    //     if (!hash[i]) hash[i] = 0;
    //     hash[i] += toAdd;
    //     if (max < hash[i]){
    //         max = hash[i];
    //     }
    // }
    return max;

}

console.log(arrayManipulation(5, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]));
