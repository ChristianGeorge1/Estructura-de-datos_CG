import Articulo from './Articulo.js'
import Tabla from './Tabla.js';

class Main {
    constructor() {
        let tabla = new Tabla(document.getElementById('tablaInfo'))
        document.getElementById('btnAgregar').addEventListener('click', () => {

            let codigo = document.getElementById('codigo').value;
            let nombre = document.getElementById('nombre').value;
            let precio = document.getElementById('precio').value;
            let cantidad = document.getElementById('cantidad').value;
            let descripcion = document.getElementById('descripcion').value;

            let objArticulo = {
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            };

            let articulo = new Articulo(objArticulo);
            tabla.añadesArticulo(articulo);
        })
        let btnBuscador = document.getElementById('btnBuscar');

        btnBuscador.addEventListener('click', () => {
            let codigo = document.getElementById('codigo').value;
            tabla.buscarArticulo(codigo);

        })

    }
}

let m = new Main();