Vue.component('computed-properties', {
    template: `
        <div>
            <h1>Computed Properties desde Componente</h1>
            <p>Llamado directo sin computed: {{usuario.nombre}} {{usuario.apellido}}</p>
            <p>Llamado directo con computed: {{fullName}}</p>
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
        }
    },
})