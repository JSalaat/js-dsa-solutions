function minimumBribes(q) {
    // let res = 0;
    // for (let [indx, item] of q.entries()) {
    //     let shouldBe = indx+1;
    //     if(item < shouldBe || item === shouldBe){
    //
    //     }
    //     else if(item === shouldBe+1){
    //         res++;
    //     }
    //     else if(item === shouldBe+2){
    //         res+=2;
    //     }
    //     else{
    //         console.log(shouldBe, item);
    //         res = "Too chaotic";
    //         break;
    //     }
    // }
    // return res;

    let r = 0;

    function swap(indx, shouldBe) {
        let found = q.indexOf(shouldBe);
        let temp = q[found];
        q.splice(found,1);
        q.splice(indx, 0, temp);
        r = r + (found - indx);
    }

    for (let i = 0; i < q.length; i++) {
        if (q[i] > i + 3)  {
            r = "Too chaotic";
            break
        }
    }
    if (typeof r === "string" && r === "Too chaotic") return r;

    for (let i = 0; i < q.length; i++) {
        for (let j = i; j < q.length; j++) {
            let shouldbe = j+1;
            if (shouldbe+2 < q[j]) {
                r = "Too chaotic";
                break;
            }
            else if(shouldbe === q[j]) {
                break;
            }
            else {
                swap(j,shouldbe);
            }
        }
        if (typeof r === "string" && r === "Too chaotic") break;
    }

    return r;
}

// console.log(minimumBribes([2,5,1,3,4]));
// console.log(minimumBribes([5,1,2,3,7,8,6,4]));
console.log(minimumBribes([1,2,5,3,7,8,6,4]));

