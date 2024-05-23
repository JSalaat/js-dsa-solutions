const twoSums = (numArr, sum) => {
    let resArr = [];
    for (let i = 0; i < numArr.length; i++) {
        let currentPoint = numArr[i];
        for (let j = i; j < numArr.length; j++) {
            if (currentPoint + numArr[j] === sum) resArr.push([currentPoint, numArr[j]]);
        }
    }
    return resArr;
};

const twoSumsOn = (numArr, sum) => {
    let pairs = [];
    let memObj = {};
    numArr.forEach(num => {
        if (!memObj[num]) memObj[num] = 0;
        memObj[num]++;
    });
    for (let i = 0; i < numArr.length; i++) {
        let key = sum - numArr[i];
        if (memObj[key] && memObj[key] > 0 && memObj[numArr[i]] > 0) {
            memObj[key]--;
            pairs.push([key, numArr[i]]);
        }
    }
    return pairs;
};


console.log(twoSumsOn([1,6,4,5,3,3], 7));
