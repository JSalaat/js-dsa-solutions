function truckTour(petrolpumps) {
    // Write your code here
    let highFuelIndx=0, highestFuel=0, totalFuel=0, totalKms=0;
    petrolpumps.forEach((p,indx)=>{
        let [fuel, km2Nxt] = p;
        totalFuel += fuel;
        totalKms += km2Nxt;
        if (fuel > highestFuel){
            highestFuel = fuel;
            highFuelIndx = indx;
        }
    })
    for (let i = 0; i < petrolpumps.length; i++) {
        // for (let j = 0; j < petrolpumps.length - 1; j++) {
            let filled =petrolpumps[i][0];
            let distance =petrolpumps[i][1];
            if (filled < distance){
                continue;
            }
            else {

            }
        // }
    }
    return highFuelIndx;
    // if (totalKms > totalFuel)

}

console.log(
    truckTour([ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ])
)