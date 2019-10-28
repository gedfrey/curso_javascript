const app = new Vue({
    el: '#app',

    data: {
        titulo: 'Hola mundo con vue',
        frutas: ['manzana','pera','platano'],
        cantidadFrutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana',cantidad:0},
            {nombre:'Limon',cantidad:5}
        ],
        nombreFruta: '',
        cantidadFruta: '',
        total: 0,
    },
    methods: {
        agregarFruta(){
            this.cantidadFrutas.push({
                nombre: this.nombreFruta,
                cantidad: this.cantidadFruta
            })
            this.nombreFruta = '';
            this.cantidadFruta= '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.cantidadFrutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})