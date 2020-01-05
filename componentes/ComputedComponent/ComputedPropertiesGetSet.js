Vue.component('computed-properties-get-set', {
    template: `
        <div>
            <h1>Computed - Get - Set Properties desde Componente</h1>
            <p>Llamado directo con computed-get: {{fullName}}</p>
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
        fullName: {
            get(){
                return `${this.usuario.nombre} ${this.usuario.apellido}`
            },
            set(valorX){
                let valorNuevo = valorX.split(' ');
                this.usuario.nombre = valorNuevo[0];
                this.usuario.apellido = valorNuevo[1];
            }
        },
        edadUsuario(){
            let fecha = new Date().getFullYear();
            let cumple = fecha - this.usuario.year;
            return cumple
        }
    },
})

//con el get enviamos valores
//con el set recibimos valor y podemos cambiar