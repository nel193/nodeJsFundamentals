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

function hablar(callbackHablar){
    setTimeout(()=>{
        console.log("Bla bla bla...");
        callbackHablar()
    },1000)
}

function conversacion(nombre, cantidadDeVeces, callback){
    if (cantidadDeVeces > 0){
        hablar(()=>{
            conversacion(nombre, --cantidadDeVeces, callback)
        })
    } else {
        adios(nombre, callback)
    }
}
//--


console.log("Iniciando proceso")
    hola ("Nelson", (nombre)=>{
        conversacion(nombre, 3, ()=>{
        console.log("Proceso terminado");
    })
})

// hola("Nelson", ()=>{
//     adios(nombre, ()=>{
//         console.log("Terminamos")
//     })
// })

// hola("Nelson",function(nombre){
//     hablar(()=>{
//         hablar(()=>{
//                 hablar(()=>{
//                 adios(nombre, function(){
//                     console.log("Finalizando proceso")
//                 })
//             })
//         })
//     })
// })


