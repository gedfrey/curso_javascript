const app = new Vue({
    el:'#app',
    data:{
        titulo: 'GYM con VUE',
        tareas:[],
        nuevaTarea: '',

    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombreTarea: this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-local', JSON.stringify(this.tareas));
        },
        editarTarea(index){
            // console.log(index);
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('gym-local', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            // console.log(index);
            this.tareas.splice(index,1);
            localStorage.setItem('gym-local', JSON.stringify(this.tareas));
        }

    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-local'));
        if(datosDB !== null){
            this.tareas = datosDB; 
        }else{
            this.tareas = [];
        }
    }
})