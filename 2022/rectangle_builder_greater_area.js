function rectangle_builder_greater_area(a, X){
    let mem = {};
    for (const aElement of a) {
        mem[aElement] = mem[aElement] || 0;
        mem[aElement]++
    }
    console.log(mem)
    let arr = []
    let res = new Set()
    Object.keys(mem).forEach((k)=>{
        if(mem[k]>1){
            while (Math.floor(mem[k]/2) > 0){
                arr.push(k);
                mem[k]-=2;
            }
        }
    })
    console.log({arr})

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i===j) continue;
            if (arr[i]*arr[j] >= X){
                res.add(arr[i] +" "+ arr[j])
            }
        }
    }
    console.log({res})
    return res.size;

}
let A = []
A[0] = 1
A[1] = 2
A[2] = 5
A[3] = 1
A[4] = 1
A[5] = 2
A[6] = 3
A[7] = 5
A[8] = 1
console.log(
    rectangle_builder_greater_area(A, 5)
)