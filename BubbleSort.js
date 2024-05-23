const bubbleSort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length+j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
};

/*
function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
}
*/
console.log(bubbleSort([5,3,8,2,1,4]));
