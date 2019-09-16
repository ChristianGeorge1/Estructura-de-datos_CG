import Articulo from './Articulo.js'

class Main {
    constructor() {

        document.getElementById('btnAgregar').addEventListener('click', () => {

            let codigo = document.getElementById('codigo').value;
            let nombre = document.getElementById('nombre').value;
            let precio = document.getElementById('precio').value;
            let cantidad = document.getElementById('cantidad').value;
            let descripcion = document.getElementById('descripcion').value;

            let articulo = new Articulo(codigo, nombre, precio, cantidad, descripcion)

            
            articulo.agregarArticulos();            
            console.log(articulo);

        })
    }
}

let m = new Main();