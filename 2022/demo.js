function sum(...args){
    return args.reduce((acc, a)=>{
        return acc + a
    }, 0)
}

console.log(sum(1,2,3,4))


let arr = [
    {a: 1},
    {name: "afs"},
    {name: "gdfgfd"},
    {name: "fger"},
    {ne: "fge5512r"},
];

console.log(arr.reduce((acc, cur)=>{
    // console.log(acc, cur)
    if (!!cur["name"]) acc.push(cur["name"])
    return acc;
}, []))