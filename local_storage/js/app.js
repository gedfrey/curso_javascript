// Variables Globales

var formulario = document.querySelector("#formulario");
var listaActividades = document.querySelector("#listaActividades");
var arrayActividades = [];

// Funciones

const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);
    return item;
}

const GuardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades));
}

const PintarDB = () => {

    let listaActividades = document.querySelector("#listaActividades");
    let estado = 'alert-danger';
    listaActividades.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    
    if(arrayActividades !== null){

        for(let item of arrayActividades){
            
            console.log(item.estado);
            if(item.estado == true){
                estado = 'alert-success';
            }else{
                estado = 'alert-danger';
            }

            listaActividades.innerHTML += `
            <div class="alert ${estado} my-2" role="alert">
                <i class="material-icons float-left mr-2">
                    accessibility
                </i>
                <b>${item.actividad}</b> - ${item.estado}
                <span class="float-right">
                    <i class="material-icons">
                        done
                    </i>
                    <i class="material-icons">
                        delete
                    </i>        
                </span>
            </div>
            
            `
        }
    }else{
        arrayActividades = [];
    }


}

const PosicionDB = (action) => {
    let count = 0;
    let arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    for(let item of arrayActividades){
        if(item.actividad === action){
            return count;
        }
        count++;
    }

    return -1;
}

const EliminarDB = (action) => {

    let arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    let posicion = PosicionDB(action);
    if(posicion !== -1){
        arrayActividades.splice(posicion,1);
        localStorage.setItem("rutina",JSON.stringify(arrayActividades));
        PintarDB();
    }

}

const ChangeCheck = (action) => {
    let arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    let posicion = PosicionDB(action);
    if(posicion !== -1){
        arrayActividades[posicion].estado = true;
        localStorage.setItem("rutina",JSON.stringify(arrayActividades));
        PintarDB();
    }
}

// EventListener

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();

    let actividad = document.querySelector('#actividad').value;
    CrearItem(actividad);
    GuardarDB(actividad);
    PintarDB();

    formulario.reset();
});

document.addEventListener('DOMContentLoaded', PintarDB);

listaActividades.addEventListener('click', (e) =>{
    e.preventDefault();
    let action = e.target.innerHTML.trim();
    switch(action){
        case('done'):
        ChangeCheck(e.path[2].childNodes[3].innerHTML);
        break;
        case('delete'):
        EliminarDB(e.path[2].childNodes[3].innerHTML);
        break;
        default:
            break;
    }
    //console.log(e.originalTarget.parentElement.parentElement.childNodes[3].innerHTML);
    //arrayActividades
});