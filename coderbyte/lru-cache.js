// lru-cache.js

// Have the function LRUCache(strArr) take the array of characters stored in strArr, which will contain characters ranging from A to Z in some arbitrary order, and determine what elements still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm implemented. For example: if strArr is ["A", "B", "C", "D", "A", "E", "D", "Z"], then the following steps are taken:

// (1) A does not exist in the cache, so access it and store it in the cache.
// (2) B does not exist in the cache, so access it and store it in the cache as well. So far the cache contains: ["A", "B"].
// (3) Same goes for C, so the cache is now: ["A", "B", "C"].
// (4) Same goes for D, so the cache is now: ["A", "B", "C", "D"].
// (5) Now A is accessed again, but it exists in the cache already so it is brought to the front: ["B", "C", "D", "A"].
// (6) E does not exist in the cache, so access it and store it in the cache: ["B", "C", "D", "A", "E"].
// (7) D is accessed again so it is brought to the front: ["B", "C", "A", "E", "D"].
// (8) Z does not exist in the cache so add it to the front and remove the least recently used element: ["C", "A", "E", "D", "Z"].

// Now the caching steps have been completed and your program should return the order of the cache with the elements joined into a string, separated by a hyphen. Therefore, for the example above your program should return C-A-E-D-Z.

function lruCache(strArr){
    let map = new Map();
    let queue = [];
    // let length = 0;

    function makeQ (pointer){
        let newQ = [];
        map = new Map();
        let pos = 0;
        for (let index = 0; index < queue.length; index++) {
            if (index==pointer) {
                continue
            }
            const element = queue[index];
            newQ.push(element);
            map.set(element, pos++)
        }
        return newQ
    }
    for (let index = 0; index < strArr.length; index++) {
        const element = strArr[index];
        let position;
        if(map.has(element)){
            position = map.get(element);
            queue = makeQ(position);
        }
        queue.push(element);
        map.set(element, queue.length-1);
        
        if (queue.length > 5){
            queue = makeQ(0);
            // console.log("first")
            // let first = 0;
            // while(queue[first] == null){
            //     console.log(first)
            //     first++;
            // }

            // let elem = queue[first]
            // map.delete(elem);
            // queue[first] = null;
        }
        console.log({element, map, queue, l: map.size})
    }
    return queue.join('-');
    let res= ''
    for (let index = 0; index < queue.length; index++) {
        const elem = queue[index];
        if(elem){
            res = res + elem + (index == queue.length-1 ? '' : '-');
        }
    }
    return res;

}

console.log(lruCache(["A", "B", "C", "D", "A", "E", "D", "Z"]))