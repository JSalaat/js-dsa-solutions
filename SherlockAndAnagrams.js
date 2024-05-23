function sherlockAndAnagrams(s) {
    let hash = {};
    let counter = 0;
    for (let i=0; i<s.length;i++){
        for (let j=0; j<s.length;j++){
            // if(j === i){
                if (!hash[s[j]]) {
                    hash[s[j]] = true;
                }
                else{
                    console.log(i,j);
                    counter++;
                }
            // }
            // else{
                // if (!hash[j]) {
                //     hash[j] = true;
                // }
            // }
            // if (!hash[i+j]) hash[i+j] = 0;
            // hash[i+j] =
        }
    }
    return counter;
}

console.log(sherlockAndAnagrams("abcd"));
