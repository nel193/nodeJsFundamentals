function hola (nombre, miCallback){
    setTimeout(()=>{
        console.log(`Hola, ${nombre}`)
        miCallback(nombre)
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        otroCallback()
    },100)
}

console.log("Iniciando proceso")

hola("Nelson",function(nombre){
    adios(nombre, function(){
        console.log("Finalizando proceso")
    })
})


