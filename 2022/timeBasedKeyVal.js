
var TimeMap = function() {
    this.map = {}
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    // this.map[key] = {
    //     ...this.map[key],
    //     [timestamp]: value
    // }
    // console.log(this.map)
    if(!this.map[key]){
        this.map[key] = []
    }
    // this.map[key]
    this.map[key].push([value, timestamp])
    console.log(this.map)

};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // console.log(this.map[key][timestamp])
    // if(!this.map[key][timestamp]){
    //     // console.log({m : this.map[key][timestamp], t: timestamp})
    //     while(!this.map[key][timestamp] && timestamp > 0){
    //         // console.log({timestamp})
    //         timestamp--;
    //     }
    // }
    // return this.map[key][timestamp]
    if(!this.map[key]) return "";

    let a = this.map[key];
    let l = 0;
    let r = a.length-1;
    let res = ""
    // [1 2 3 4 5 6 7 8]
    // 7
    while(l <= r){
        let mid = Math.floor((l+r)/2) // 0+7/2
        let midVal = a[mid][1]; // i,3 = 4
        if(timestamp >= midVal){
            res = a[mid]
            l =  mid+1;
        }
        else {
            r = mid-1;
        }
    }

    return res[0]
};


  // Your TimeMap object will be instantiated and called as such:
var obj = new TimeMap()
obj.set("love","high",2)
obj.set("love","high33",4)
obj.set("love","high55",6)
obj.set("love","high8",8)
obj.set("love","high10",10)
var param_2 = obj.get("love",9)
console.log(param_2)
// console.log(obj.get("love",3))

// obj.set("love","hisgh",8)

// var param_1 = obj.get("love",11)
// console.log(param_1)

// console.log(obj.get("love",21))

 // */
// ["TimeMap","set","set","get","get","get","get","get"]
//     [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]