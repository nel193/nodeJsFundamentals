const {exec, spawn} = require ("child_process")

// exec("node modulos/consola.js", (error, stdout, stderror)=>{
//     if(error){
//         console.error(error);
//         return false
//     }

//     console.log(stdOut)
// })

let proceso = spawn("ls", ["-la"])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on("data", (dato)=>{
    console.log("està muerto")
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on("exit", ()=>{
    console.log("El proceso terminó")
    console.log(proceso.killed)
})
