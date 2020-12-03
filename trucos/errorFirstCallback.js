/*
Como buena practica, toda funciòn asincrona que requiera un callback, debe de tener como primer parametro el
error, ya que es una forma de anteceder de que todo puede fallar y de esta forma dar noción de lo mismo, por
lo cual tambien es buena práctica dejar el callback de ultimo parametro
*/

function asincrona (callback){
    setTimeout(()=>{
        try{
            let a = 3 + z
            callback(null, a)
        }catch(err){
            callback(err)
        }
    }, 1000)
}

// try{
    asincrona((err, dato)=>{
        if(err){
            console.error("Tenemos un error")
            console.error(err);
            return false
            // throw error 
            //throw solo anda para funciones SINCRONAS, para funciones ASINCRONAS se utilizar el return false
        }
        console.log("Todo salio bien, mi data es", dato)
    })
// }catch(error){
//     console.error("Encontramos un error")
//     console.error(error);
// }