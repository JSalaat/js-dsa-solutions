// function findClosestPair(a, b, k){
//     let highClose = Infinity;
//     let highCloseI = "";
//     let lowClose = -Infinity;
//     let lowCloseI = "";
//     let eqI = "";
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             let sum = a[i]+b[j]
//             if (sum>k){
//                 if (highClose > sum) highCloseI=i + "," + j;
//                 highClose= Math.min(highClose, sum);
//             }
//             else if (sum<k){
//                 if (lowClose < sum) lowCloseI=i + "," + j;
//                 lowClose = Math.max(lowClose, sum);
//             }
//             else {
//                 eqI=i + "," + j;
//             }
//         }
//     }
//
//     console.log({highClose, highCloseI, lowClose, lowCloseI})
// }
function findClosestPair(a, b, k){
    let highClose = Infinity;
    let highCloseI = "";
    let lowClose = -Infinity;
    let lowCloseI = "";
    let eqI = "";
    let map = {};
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = map.hasOwnProperty(a[i]) ? map[a[i]]+""+i : i;
    }
    for (let i = 0; i < a.length; i++) {
        let diff = k - b[i];

    }

    // console.log({highClose, highCloseI, lowClose, lowCloseI})
    console.log({map})
}

findClosestPair([-1,3,8,2,9,5,-1], [4,1,2,10,5,20], 24)