//console.log("Mensaje");

document.querySelector('#botton').addEventListener('click', traerDatos);



function traerDatos(){
    //console.log('le diste click');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','archivo.txt',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        console.log(this.readyState);
        console.log(this.status);
        if(this.readyState == 4 && this.status == 200){
            console.log("pintando en consola");
            console.log(this.responseText);
            document.querySelector('#respuesta').innerHTML = this.responseText ;
        }
    }
}

