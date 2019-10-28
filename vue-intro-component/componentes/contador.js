Vue.component('contador',{
    template:
    `
    <div>
    <h1>Contador</h1>
    <p>{{contador}}</p>
    <button class="btn btn-primary" @click="contador++">+</button>
    <button class="btn btn-danger" @click="contador--">-</button>
    </div>
    `,
    data(){
        return {
            contador:0,
        }
    }
})