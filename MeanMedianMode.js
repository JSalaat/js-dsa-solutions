const meanMedianMode = (arr) => {
    let sortedArr = arr.sort((a, b)=>{
        return a-b;
    });

    console.log(sortedArr);
    const getMean = () => {
        return arr.reduce((acc, current)=>{
            return acc + current;
        }, 0) / arr.length;
    };

    const getMedian = () => {
        if (sortedArr.length % 2 > 0) {
            return sortedArr[(sortedArr.length+1)/2]
        }
        else {
            return (sortedArr[(sortedArr.length/2) -1] + sortedArr[sortedArr.length/2]) /2;
        }
    };

    const getMode = () => {
        let highestNum = 0;
        let memoryObj = {};
        let modes = [];
        sortedArr.forEach((item)=>{
            if (!memoryObj[item]) memoryObj[item] = 1;
            else {
                memoryObj[item] = memoryObj[item] + 1;
                highestNum = memoryObj[item] > highestNum ? memoryObj[item] : highestNum;
            }
        });
        console.log(highestNum);
        for (let key in memoryObj){
            if (memoryObj.hasOwnProperty(key) && memoryObj[key] === highestNum) modes.push(key);
        }
        return modes.length === 1 ? modes.pop() : [];
    };


    return {
        mean: getMean(),
        median: getMedian(),
        mode: getMode()
    };


};

console.log(meanMedianMode([13, 18, 13, 14, 13, 16, 14, 21, 13]));
console.log(meanMedianMode([1, 2, 4, 7]));
console.log(meanMedianMode([8, 9, 10, 10, 10, 11, 11, 11, 12, 13]));


function meanMedianModeV(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

function getMean(array) {
    var sum = 0;

    array.forEach(num => {
        sum += num;
    });

    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {
    array.sort(function(a, b){return a-b});
    var median;

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    }
    else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

function getMode(array) {
    var modeObj = {};

    // create modeObj
    array.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    // create array of mode/s
    var maxFrequency = 0;
    var modes = [];
    for (var num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }
        else if (modeObj[num] === maxFrequency) modes.push(num);
    }
    // if every value appears same amount of times
    if (modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
}


meanMedianModeV([9,10,23,10,23,9]);
