const soe = (num)=>{
    let primes = new Array(num);
    for (let i = 0; i < primes.length; i++) {
        primes[i]=true;
    }
    primes[0]=false;
    primes[1]=false;

    for (let i = 2; i < Math.ceil(Math.sqrt(primes.length)); i++) {
        for (let j = i*2; j < primes.length; j+=i) {
            if ( j%i===0 ) primes[j]=false;
        }
    }

    console.log(primes);
    let results = [];
    primes.forEach((i,k)=>{
        if (i) {
            results.push(k);
        }
    });
    return results;

};
console.log(soe(20));
