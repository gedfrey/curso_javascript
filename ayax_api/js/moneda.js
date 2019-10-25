document.querySelector("#dolar").addEventListener('click',function(){
    obtenerDatos();
});

function obtenerDatos(){

    let url = `https://mindicador.cl/api/dolar`;


    const api = new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            //console.log(datos.serie);
            var res = document.querySelector("#resTable");
            res.innerHTML = '';
            for(let object of datos.serie){
                console.log(object);
                res.innerHTML += `
                <tr>
                    <th>${object.fecha}</th>
                    <th>${object.valor}</th>
                </tr>

                `
            }

        }
    }
}