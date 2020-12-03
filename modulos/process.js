// const process = require("process");

process.on("")
process.on("beforeExit", ()=>{
    console.log("El proceso va a terminar")
})

process.on("exit", ()=>{
    console.log("Acabo el proceso")
    setTimeout(()=>{
        console.log("Esto no se ve")
    },0)
})

setTimeout(()=>{
        console.log("Esto si se ve")
    },0)
//Para excepsiones que nadie ha capturado o no tiene try/catch
process.on("uncaughtException",(err, origen)=>{
    console.error("Se nos olvido capturar un error");
    console.error(err)
}) 

// funcionQueNoExiste()
// process.on("uncaughtRejection") //Para excepsiones que nadie ha capturado o no tiene catch
console.log("Esto no sale si no hay catch para el error")