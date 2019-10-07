export default class Tabla {
    constructor(tablaInfo) {
        this._tablaInfo = tablaInfo;
        this._primerArticulo = null;
        this._ultimoArticulo = null;
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
        row.insertCell(5);
        row.insertCell(6);


        celdaCodigo.innerHTML = articulo.codigo;
        celdaNombre.innerHTML = articulo.nombre;
        celdaPrecio.innerHTML = articulo.precio;
        celdaCantidad.innerHTML = articulo.cantidad;
        celdaDescripcion.innerHTML = articulo.descripcion;
        this._añadirBtnEliminar(row, articulo);
        this._añadirBtnReporte(row, articulo);

        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descripcion: articulo.descripcion,
            next: articulo.next,
            back: articulo.back
        };

        if (this._primerArticulo == null) {
            this._primerArticulo = objArticulo;
            this._ultimoArticulo = objArticulo;
        } else {
            var registro = this._ultimoArticulo;
            this._ultimoArticulo.next = objArticulo;
            this._ultimoArticulo = objArticulo;
            this._ultimoArticulo.back = registro;
        }
        console.log(registro);

    }
    añadesArticulo(articulo) {
        this.añadesTabla(articulo);
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "Articulo guardado con éxito"
        });
    }
    reporte(row, articulo) {
        Swal.fire({
            type: "info",
            title: `Reporte del articulo con el código: ${articulo.codigo}`,
            text: `El articulo con el código: ${articulo.codigo}, tiene el nombre de 
            ${articulo.nombre}, tiene un precio total de: ${articulo.precio} y la cantidad
            de este articulo es de: ${articulo.cantidad}. La breve descripción es de: ${articulo.descripcion} `
        })
    }
    buscarArticulo(codigo) {
        let articulo = this._primerArticulo;
        while (articulo != null) {
            if (articulo.codigo == codigo) {
                return articulo;
            }
        }
        articulo = articulo.next;

    }
    eliminacion(row, articulo, codigo) {
            Swal.fire({
                type: "question",
                title: `¿Deseas eliminar el articulo con este código: ${articulo.codigo}?`,
                text: `Si lo eliminas no habra cambios para retroceder`,
                showCancelButton: true,
                confirmButtonText: "Sí",
                cancelButtonText: "No"
            }).then(resultado => {
                let articulE = this.buscarArticulo(codigo);
                let articulo = articulE.back;

                articulo.next = articulE.next;
            })
        }
        //Añades los botones de eliminar y el de reporte
    _añadirBtnEliminar(row, articulo) {
        let btnEliminar = document.createElement("input");
        btnEliminar.type = "button";
        btnEliminar.value = "Eliminar";
        btnEliminar.className = "btn btn-danger";

        btnEliminar.addEventListener('click', () => {
            this.eliminacion(row, articulo)
        });
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnEliminar);
    }
    _añadirBtnReporte(row, articulo) {
        let btnReporte = document.createElement("input");
        btnReporte.type = "button";
        btnReporte.value = "Reporte";
        btnReporte.className = "btn btn-success";

        btnReporte.addEventListener('click', () => {
            this.reporte(row, articulo);
        });
        row.cells[6].innerHTML = "";
        row.cells[6].appendChild(btnReporte);
    }
}