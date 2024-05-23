function rotateImage(a){
    let rows = a.length;
    let cols = a[0].length;
    let res = []
    for (let j=0; j < cols;j++) {
        let arr = []
        for (let i = rows-1; i >= 0;  i--) {
            arr.push(a[i][j]);
        }
        res.push(arr);
    }
    return res;
}

let a = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
console.log(
    rotateImage(a)
)
