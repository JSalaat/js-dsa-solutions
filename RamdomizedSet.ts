//https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150
class RandomizedSet {
    randomSet: Map<number, number>;
    arr: number[];
    
    constructor() {
        this.randomSet = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        if(this.randomSet.has(val)){
            return false
        }
        else {
            this.arr[this.randomSet.size] = val;
            this.randomSet.set(val, this.randomSet.size);
            return true;
        }
    }

    remove(val: number): boolean {
        if(this.randomSet.has(val)){
            let locationInArr = this.randomSet.get(val);
            this.randomSet.set(this.arr[this.arr.length-1], locationInArr ?? 0)
            this.arr[locationInArr ?? 0] = this.arr[this.arr.length-1];
            this.randomSet.delete(val)
            this.arr.pop();
            return true
        }
        else {
            return false
        }
    }

    getRandom(): number {
        let rand = Math.floor(this.randomSet.size * Math.random());
        return this.arr[rand];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */