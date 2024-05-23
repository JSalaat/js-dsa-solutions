const maxProfit = (prices) => {
    let info = prices.reduce((acc, price)=>{
        if (acc.l > price) {
            acc.l = price;
        }
        else if (acc.h < price) {
            acc.h = price
        }
        return acc;
    }, {l:1e8, h:0});
    return info.h - info.l;
};

function maxStockProfit (pricesArr) {
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for (var i = 0; i < pricesArr.length; i++) {
        /*if (changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];

        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        }
        else {
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }*/
        if (pricesArr[i] < buyPrice){
            changeBuyPrice = true;
        }
        if (changeBuyPrice){
            buyPrice = pricesArr[i];
            sellPrice = pricesArr[i+1];
            changeBuyPrice = false;
            maxProfit = sellPrice - buyPrice > maxProfit ? sellPrice - buyPrice : maxProfit;

        }
        if (sellPrice < pricesArr[i]){
            sellPrice = pricesArr[i]
            maxProfit = sellPrice - buyPrice > maxProfit ? sellPrice - buyPrice : maxProfit;

        }

    }
    console.log(maxProfit);

    for (let maxProfitElement of maxProfit) {

    }

    return maxProfit;
}

maxStockProfit([3,2,6,5,0,3]);
// console.log(maxProfit([32,46,26,38,40,48,42]));
// console.log(maxProfit([10,18,4,5,9,6,16,12]));


function mergeSort (arr) {
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge (array1, array2) {
    var result = [];
    while (array1.length && array2.length) {
        var minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);
    return result;
}

// mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);
