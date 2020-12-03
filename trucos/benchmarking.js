console.time("Todo")
let suma = 0;

console.time("bucle")
for(let i = 0; i < 10000000; i++){
    suma += 1
}
console.timeEnd("bucle")


let suma2 = 0;

console.time("bucle2")
for(let k = 0; k < 1000; k++){
    suma += 1
}
console.timeEnd("bucle2")

console.time("asincrono")

console.log("Empieza el proceso asincrono")
asincrona().then(()=>{
        console.timeEnd("asincrono")
    })

console.timeEnd("Todo")
function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Termina el proceso asíncrono");
            resolve()
        })
    })
}

