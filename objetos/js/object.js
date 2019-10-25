class Pelicula {
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `Reproduciendo pelicula ${this.nombre}`
    }
}

class Serie extends Pelicula{

    constructor(nombre,id,cap){
        super(nombre,id);
        this.cap = cap;
    }


    reproducirCapitulo(){
        return `Reproduciendo capitulo ${this.cap} de serie ${this.nombre}`
    }
}


const peliculaUno = new Pelicula('Django',1);
const serieUno = new Serie('Gotan',2,1);


console.log(peliculaUno.reproducir());
console.log(serieUno.reproducirCapitulo());