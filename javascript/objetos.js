// var arreglo = ['HTML',15,true]

// console.log(arreglo)

var objeto = {
    nombre: 'HTML',
    duracion: 15,
    estado: true
}

console.log(objeto.nombre);

var arrayObjetos = [
    {
        nombre: 'HTML',
        estado:true
    },
    {
        nombre: 'CSS',
        estado:false
    },
    {
        nombre: 'JAVASCRIPT',
        estado:true
    }
];


for(let indice of arrayObjetos){
   console.log(indice.nombre);
   console.log(indice.estado);
}

console.log(arrayObjetos);