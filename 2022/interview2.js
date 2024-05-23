console.log('Hello world');
import { sayHello } from 'say-hello';

memoizeThatCall("123", highComputationCall)

let inMem = {};

const memoizeThatCall = (id, callback) => {
    if(mem.hasOwnproperty(id)){
        return inMem[id]
    }
    else{
        inMem[id] = callback()
    }

    return inMem[id];

    return {
        getFunc: functio,
        setFunc
    }

}

memoizeThatCall
// ==============================

HistorySet
// add(member) => sequence number
// remove(member) => sequence number
// members(sequence number) => [...]


const hs = HistorySet();

// hs.add(‘hello’);    // => 1 // hashmset={1: [hello]},
// hs.add(‘world’);    // => 2 // hashmset={1: [hello], 2:[h, w]},
// hs.add(‘world’);    // => 2 // hashmset={1: [hello], 2:[h, w]},
// hs.remove(‘hello’); // => 3 // hashmset={1: [hello], 2:[h, w] , 3 :[w]},
// hs.remove(‘hello’); // => 3 // hashmset={1: [hello], 2:[h, w] , 3 :[w]},
// hs.add(‘world’);    // => 3


hs.members(1);  // => [‘hello’]
hs.members(2) ; // => [‘hello’, ‘world’]
hs.members(3) ; // => [‘world’]

const HistorySet = () =>{

    let myset = new Set();
    let myMap = {};
    let counter = 0;

    let add = (value) => {

        let prev = myset.len;

        //returns len
        let len = myset.add(value);

        if(len > prev){
            counter++
            myMap[counter] = myset;
        }

        return counter;

    }

    let remove = (value)=> {

        let prev = myset.len;

        let len = myset.remove(value);

        if(len < prev){
            counter++
            myMap[counter] = myset;
        }

        return counter;

    }

    let members = (key)=> {
        return myMap[key];
    }

    return {
        add, remove, members
    }
}
