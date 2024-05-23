function promisify(time) {
    return new Promise((resolve, reject)=>{
        let to = setTimeout(()=>{
            return resolve("ok")
        }, time)
    });
}

promisify(4000).then((data)=>{
    console.log(data)
})
