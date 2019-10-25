var contenido = document.getElementById('main');


function getInfo(){

    fetch('texto.txt')
    .then(data => data.text())
    .then(data => {
        console.log(data);
        contenido.innerHTML = `<p>${data}</p>`;
    });
}