Vue.component('saludo', {
    template: //html
    `
        <h1>{{saludo}}</h1>
    `,
    data(){
        return {
            saludo: 'hola desde Vue'
        }
    }
});