export default class Tabla {
    constructor(tablaInfo) {
        this._tablaInfo = tablaInfo;
        this._articulos = [];
    }

    get articulos() {
        return this._articulos;
    }

    añadesTabla(articulo) {
        let row = this._tablaInfo.insertRow(-1);
        let celdaCodigo = row.insertCell(0);
        let celdaNombre = row.insertCell(1);
        let celdaPrecio = row.insertCell(2);
        let celdaCantidad = row.insertCell(3);
        let celdaDescripcion = row.insertCell(4);

        celdaCodigo.innerHTML = articulo.codigo;
        celdaNombre.innerHTML = articulo.nombre;
        celdaPrecio.innerHTML = articulo.precio;
        celdaCantidad.innerHTML = articulo.cantidad;
        celdaDescripcion.innerHTML = articulo.descripcion;

       
        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descripcion: articulo.descripcion
        };
        this._articulos.push(objArticulo);
    }
    _añadirBtnEliminar(row, articulo){
        let btnEliminar = document.createElement("input");
        InputDeviceInfo.
    }


    buscarArticulo(codigo){
        let resultado = -1;
        this._articulos.forEach((articulo, index)=>{ 
            if(articulo.codigo === codigo){
                resultado = index;
                return;
            }
        });
        return resultado;
    }

    añadesArticulo(articulo){
        if(this.buscarArticulo(articulo.codigo) >= 0){
            Swal.fire({
                type: "error",
                title: "Error",
                text: `Ya existe un articulo con este código, es el código: ${articulo.codigo}`
            });
            return;
        }
   
        this.añadesTabla(articulo);

        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "Articulo guardado con éxito"
        });
    }









}