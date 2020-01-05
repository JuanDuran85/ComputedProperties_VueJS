Vue.component('computed-properties', {
    template: `
        <div>
            <h1>Computed Properties desde Componente</h1>
            <p>Llamado directo sin computed: {{usuario.nombre}} {{usuario.apellido}}</p>
            <p>Llamado directo con computed: {{fullName}}</p>
            <p>Llamado con methods: {{nombreCompleto()}} {{edadUsuario}}</p>
            <p>La edad del usuario es: {{edadUsuario}} años</p>
        </div>
    `,
    data() {
        return {
            usuario: {
                nombre: 'Juan',
                apellido: 'Duran',
                year: '1985'
            }
        }
    },
    computed: {
        fullName(){
            return `${this.usuario.nombre} ${this.usuario.apellido}`
        },
        edadUsuario(){
            let fecha = new Date().getFullYear();
            let cumple = fecha - this.usuario.year;
            return cumple
        }
    },
    methods: {
        nombreCompleto(){
            return `${this.usuario.nombre} ${this.usuario.apellido}`
        }
    },
})

// las computed guardan la inforamcion en cache y espera hasta que el elemento se actualice
// para volver a renderizar

//los method consumen mas recursos porque son un proceso mas complejo