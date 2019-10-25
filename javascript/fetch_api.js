var contenido = document.querySelector('#contenido');

function traer(){
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(res => {
        console.log(res.results[0].picture.large);
        console.log(res.results[0].name.first);
        contenido.innerHTML = `
        <img src="${res.results[0].picture.large}"width="100px" alt="" class="img-fluid rounded-circle">
        <p>Nombre: ${res.results[0].name.first} ${res.results[0].name.last} </p>
        `
    });
}