function hola (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Hola, ${nombre}`)
            resolve(nombre)
        },1000)
    });
}

function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Adios ${nombre}`)
            resolve()
        },100)
    })
}

function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Bla bla bla...");
            // resolve(nombre)
            reject("Hay un error")
        },1000)
    })
}

//---
console.log("iniciando el proceso..")
hola ("Nelson")
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log("terminado el proceso")
    })
    .catch(error =>{
        console.error("Ha habido un error");
        console.error(error)
    })