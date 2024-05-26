// https://leetcode.com/problems/car-fleet/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let arr = [];
    // let tick = 0;
    // let top = 0;
    // while (){
        for (let i = 0; i < position.length; i++) {
            let pos = position[i];
            let s = speed[i];
            arr.push([pos, s])
            // top = Math.max(top, pos);
            // if(lane[pos]) {
            //     lane[pos].push(i);
            // } else {
            //     lane[pos] = [i]
            // }
        }
    // }
    // console.log({arr});
    arr.sort((a,b)=> {
        return b[0]-a[0];
    })
    let res = []
    // console.log({arr});
    arr.forEach((item,indx) => {
        let ticks = (target - item[0])/item[1];
        // console.log(ticks)
        if (indx == 0) res.push(ticks)
        else if(res[res.length-1] < ticks){
            res.push(ticks)
        }
    })
    // console.log({res});
    return res.length;

    // tick++
    //position = [10,8,0,5,3], 
    //   speed = [2 ,4,1,1,3]
    // while (){
        // for (let i = 0; i < arr.length; i++) {
        //     let pos = position[i];
        //     let next = pos + (tick * speed[i]);
        //     if(next>=top) {
        //         lane[pos].push(i);
        //     } else {
        //         lane[pos] = [i]
        //     }
        // }
    // }
    // console.log({lane});


    // sort the arrays
    // [[10,2],[8,4],[5,1],[3,3],[0,1]]
    // 1, 1, 7, 3, 12
    // p, n, p, n, p
    // return 3


};