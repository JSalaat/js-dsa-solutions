function reverseNodesInKGroup(arr, k){
    // if (!l) [];
    let res = [];
    // let arr = l.toJSON();

    let start = k-1;
    let end = 0;

    while(arr.length > res.length){
        addIt(arr, res, start, end)
        start+=k;
        end+=k;
        console.log({start, end})
    }
    return res;

}

function addIt(arr, res, start, end){
    for(let i=start;i>=end;i--){
        // for(let j=i+k;j>=0;j--){
        // console.log({i,j});
        // console.log({K : i});
        if(arr[i]) res.push(arr[i]);

        // }
    }
    // if (arr.length !== )
}
//
// let mem = {};
// let res = [];
// dishes.forEach((dish)=>{
//     let [dishName, ...ingred] = dish;
//     ingred.forEach((ingr, indx)=>{
//         if (!(ingr in mem)) {
//             mem[ingr] = []
//         } else mem[ingr].push(dishName);
//     })
// })
// console.log(mem)
// Object.keys(mem).forEach((key)=>{
//     let r = [];
//     mem[key].forEach((it)=>{
//         r.push(it);
//     })
//     if (r.length>=3){
//         res.push([key , ...r.sort()])
//     }
// })
// return res.sort((a, b) => a[0] < b[0] ? -1 : 0)

console.log(
    reverseNodesInKGroup([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)
)