const fs = require ("fs");
const stream = require("stream");
const util = require("util")

let data = "";
//Streams de lectura
let readableStream = fs.createReadStream(__dirname + "/input.txt")

readableStream.setEncoding("UTF8")
// readableStream.on("data", (chunk)=>{
//     // console.log(chunk)
//     data+= chunk
// })

// readableStream.on("end", ()=>{
//     console.log(data)
// })

//Streams de escritura

// process.stdout.write("Hola")
// process.stdout.write("que")
// process.stdout.write("haces")

const Transform = stream.Transform;

function Mayus(){
    Transform.call(this)
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, callback){
    chunkMayus= chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback()
}

let mayus = new Mayus()
readableStream
    .pipe(mayus)
    .pipe(process.stdout)