console.log(global);
console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable ="Hola";

console.log(miVariable)

console.log(this === global)