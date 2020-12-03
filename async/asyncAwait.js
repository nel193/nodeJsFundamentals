async function hola (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Hola, ${nombre}`)
            resolve(nombre)
        },1000)
    });
}

async function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Adios ${nombre}`)
            resolve()
        },100)
    })
}

async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Bla bla bla...");
            // resolve(nombre)
            resolve("Hay un error")
        },1000)
    })
}

// ----
async function main() {
    let nombre = await hola("Nelson")
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    adios(nombre)
    console.log("Terminó")
}
console.log("Empezo")
main()
console.log("Va a ser la segunda instrucción porque main es asincrono")

