
const badfib = (pos) => {
    if (pos === 1 || pos === 2) {
        return 1
    }
    else {
        return badfib(pos-1) + badfib(pos-2);
    }
};

const fib = (pos, cache) => {
    if (pos === 1 || pos === 2) {
        return 1
    }
    else {
        if (cache[pos]) {
            return cache[pos];
        }
        else {
            cache[pos] = fib(pos-1, cache) + fib(pos-2, cache);
        }
    }
    return cache[pos];

};
//
// console.time("mfib");
// console.log(fib(6, {}));
// console.timeEnd("mfib");
//
// console.time("badfib");
console.log(badfib(6));
// console.timeEnd("badfib");
