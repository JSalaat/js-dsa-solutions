const Emitter = () => {

    let map = {}
    let subscribe = (key, cb) => {
        map[key] = cb
        let emit = (key, ...args) => {
            if (map.hasOwnProperty(key)){
                map[key](args)
            }
            else {
                console.log("no callback")
            }
        }
        return {
            emit
        }
    }

    let release = (key) => {
        map[key] = null
    }

    return {
        subscribe, release
    }
}

let emitter = Emitter();
console.log(emitter);

let sub1 = emitter.subscribe('event1', (args)=>{
    console.log(args)
})

sub1.emit("event1", 1,2)
sub1.emit("event1", 1,2)

emitter.release("event1")
sub1.emit("event1", 1,2)
