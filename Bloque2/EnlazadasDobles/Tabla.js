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
    }
    añadesArticulo(articulo) {

        if (this._primerArticulo == null) {
            this._primerArticulo = articulo;
        } else {
            this._ultimoArticulo._next = articulo;
        }
        this._ultimoArticulo = articulo;
        console.log(this._primerArticulo);

        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "Articulo guardado con éxito"
        });
        this.añadesTabla(articulo);
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
        if (this._primerArticulo != null) {
            let encontrado = false;
            let temp = this._primerArticulo;
            while (!encontrado && temp != null) {
                if (codigo == temp.codigo) {
                    encontrado = true;
                    this._primerArticulo;
                } else {
                    temp = temp.next;
                }
            }
            return temp;
        } else {
            return null;
        }
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
                let find = this.buscarArticulo(codigo);
                let temp = find.back;

                find.next.back = temp;
                temp.next = find.next;

                console.log(this._primerArticulo);


            })
        }
        //Agregar y ordenar 

    agregarOrdenar(articuloR) {
        let articulo = articuloR;
        let aux = this._primerArticulo;

        if (articulo.codigo < this._primerArticulo.codigo) {
            articulo.next = this._primerArticulo;
            this._primerArticulo.back = articulo;
            this._primerArticulo = articulo;
        } else if (this._ultimoArticulo.codigo < articulo.codigo) {
            articulo.back = this._ultimoArticulo;
            this._ultimoArticulo.next = articulo;
            this._ultimoArticulo = articulo;
        } else {
            while (aux.next != null) {
                if (aux.codigo < articulo.codigo) {
                    articulo.next = aux.next;
                    articulo.back = aux;
                }
                aux = aux.next;
            }
        }
        this._ultimoArticulo = aux;
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