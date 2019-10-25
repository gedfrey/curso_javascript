var contenido = document.querySelector('#tbody');

function traer(){
    fetch('json/tabla.json')
    .then(res => res.json())
    .then(res => {
        //console.log(res);
        tabla(res)
    });

    
}

function tabla(datos){
    console.log(datos);

    for(let data of datos){

        if(data.estado != false){
            contenido.innerHTML += `
                <tr>
                    <th scope="row">${data.id}</th>
                    <td>${data.nombre}</td>
                    <td>${data.email}</td>
                    <td>${data.estado ? "activo" : "Eliminado"}</td>
                </tr>
            `
        }


    }

}