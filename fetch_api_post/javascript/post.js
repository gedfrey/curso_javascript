// console.log('Funcionando');

var formulario = document.getElementById('formulario');
var respuesta = document.querySelector('#alerta');

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Me diste un click');

    var datos = new FormData(formulario);
    var data = {usuario:datos.get('usuario'),
                pass:datos.get('pass')
    };
    console.log(data);
    // console.log(datos.get('usuario'));
    // console.log(datos.get('pass'));

    fetch('post.php',{
        method: 'POST',
        body: datos
        // body: JSON.stringify(data), // data can be `string` or {object}!
        // headers:{
        // 'Content-Type': 'application/json'
        // }
    })
    // .then( res => {
    //     console.log(res);
    // })
    .then( res => res.json())
    .then( res => {
        console.log(res);
        if(res === 'error'){
            respuesta.innerHTML = `            
            <div class="alert alert-danger" role="alert">
                LLena todos los campos
            </div>            
            `
        }else{
            respuesta.innerHTML = `
            <div class="alert alert-primary" role="alert">
                ${res}
            </div>  
            `
        }
    });


});