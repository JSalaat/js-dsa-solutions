function minimumSwaps(arr) {
    let count = 0;
    for (let i = 0; i < arr.length-1; i++){
        let shouldbe = i+1;
        if(arr[i] !== shouldbe){
            let index = 0;
            while (arr[index] !== shouldbe) {
                index++;
            }
            arr[index] = arr[i];
            arr[i] = shouldbe;
            count ++;
        }
    }
    return count;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
