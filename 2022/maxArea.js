function maxArea(height) {
    let highestPole, position, maxWidth=0, maxArea=0, map={};
    /*height.forEach((h, indx)=>{
        if (!map.hasOwnProperty(h)){
            map[h] = [indx];
        }
        else {
            map[h] = [map[h][0], indx];
        }
        console.log(
            {map, maxWidth}
        )
    });

    height.forEach((h, indx)=>{
        if (indx === 0){
            highestPole = h;
        }
        else if (h > highestPole) {
            // if (map[h].hasOwnProperty(1) && map[h].hasOwnProperty(0)){
                maxWidth = Math.max(maxWidth, h*(map[h][1]-map[h][0]))
            // }
        }

    });

    height.forEach((h, indx)=>{
        if (indx === 0){
            highestPole = h;
            position = indx;
        }
        else if (h > highestPole){
            console.log("h > highestPole " + indx)
            maxArea = Math.max(maxArea, highestPole*(indx-position))
            console.log({highestPole, position, h, indx})
            highestPole = h;
            position = indx;
        } else if (highestPole > h){
            console.log("h < highestPole " + indx)
            console.log({highestPole, position, h, indx})

            maxArea = Math.max(maxArea, h*(indx-position))
        }
    })
    return Math.max(maxWidth, maxArea);*/

    for (let i = 0, j = height.length-1; i < height.length, j>i ;) {
        console.log({i,j})
        maxArea = Math.max(maxArea, Math.min(height[i], height[j])*(j-i))
        if (height[i]< height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxArea;
}
console.log(
    maxArea([1,8,6,2,5,4,8,3,7])
    // maxArea([1,2,4,3])
    // maxArea([1,2,1])
)