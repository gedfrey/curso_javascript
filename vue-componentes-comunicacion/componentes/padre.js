Vue.component('padre',{

    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre, numero {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombreDelHijo}}
        <hijo :numero="numeroPadre" @nombreHijo="nombreDelHijo = $event"></hijo>
    </div>
    `,
    data(){
        return {
            numeroPadre:0,
            nombreDelHijo: ''
        }
    }
})

