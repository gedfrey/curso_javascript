document.querySelector("#botton").addEventListener('click', eventButton);


function eventButton(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','catalogo.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector('#resTableBody');
            res.innerHTML = '';
            for(let item of datos){
                res.innerHTML += `
                    <tr>
                        <td>${item.titulo}</td>
                        <td>${item.artista}</td>
                    </tr>
                `
            }
        }
    }
}