function nextHigher(n) {
    // your code here
    let binEq = "0" + n.toString(2);
    let pointer = binEq.lastIndexOf("0");
    let arrEq = binEq.split("");

    /* if no zero*/
    if (pointer === 0) {
            console.log("here0")

        arrEq[pointer] = "1";
        arrEq[pointer+1] = "0";
    }
    // if last zero
    if (pointer === binEq.length-1) {
            console.log("herelas")

        arrEq[pointer] = "1";
        arrEq[pointer+1] = "0";
    }

    else if (binEq.lastIndexOf("101") > -1){
        console.log("here0")

        pointer = binEq.lastIndexOf("101");
        arrEq[pointer+1] = "1";
        arrEq[pointer+2] = "0";
    }
    else{
        // pointer = binEq.lastIndexOf("0");
        console.log("here")
        console.log(arrEq)
        console.log(pointer);

        pointer = binEq.lastIndexOf("0");
        arrEq[pointer] = "1";

        binEq = binEq.substring(0, binEq.length-1);
        console.log(binEq);

        pointer = binEq.indexOf("1");
        console.log(pointer);

        arrEq[pointer] = "1";




    }

    console.log(arrEq);
    return parseInt(arrEq.join(""), 2);
}
console.log(nextHigher(1022));


// Your task is to Find the next higher number (int) with same '1'- Bits.
