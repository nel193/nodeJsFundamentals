function otraFuncion(){
    seRompe()
}
function seRompe (){
    return 3 + z;
}

function seRompeAsincrona(callback){
    setTimeout(()=>{
        try{
            return 3 + z
        }catch(error){
            console.error("Error en mi async function");
            callback(error)
        }
    }, 1000)
}

try{
    seRompeAsincrona(()=>{
        console.log("Hay error")
    })
}catch(error){
    console.error("Vaya algo se ha roto...")
    console.error(error.message)
    console.log("Pero no pasa nada, lo hemos capturado")
}

console.log("Estoy al final")