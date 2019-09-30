export default class Tabla {
    constructor(tablaInfo) {
        this._tablaInfo = tablaInfo;
        this._articulos = new Array(20);
        this._contador = 0;
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
            descripcion: articulo.descripcion
        };
        if (this._contador < 20) {
            this._articulos[this._contador] = objArticulo;
            this._contador++;

            this.ordenamiento(codigo);

        } else {
            Swal.fire({
                type: "error",
                title: "Tabla llena",
                text: "Esta tabla ya se lleno suficiente"
            })
        }
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
    ordenamiento(codigo) {
        let longitud = this._articulos.length;
        for (let i = 0; i < longitud; i++) {
            for (let j = 0; j < longitud - 1; j++) {
                if (this._articulos[j] > this._articulos[j + 1]) {
                    [this._articulos[j], this._articulos[j + 1] = [this._articulos[j + 1], this._articulos[j]]];
                }
            }
        }
        return codigo;
    }


    buscarArticulo(codigo) {
        let resultado = -1;
        this._articulos.forEach((articulo, index) => {
            if (articulo.codigo === codigo) {
                resultado = index;
                return;
            }
        });
        return resultado;
    }
    buscarArticulo2(codigo) {
        let resultado = -1;
        this._articulos.forEach((articulo, index) => {
            if (articulo.codigo === codigo) {
                resultado = index;
                Swal.fire({
                    type: "info",
                    title: `Se encontro tu articulo`,
                    text: ` Su nombre es: ${articulo.nombre}`
                })
                return;
            }
        });
        return resultado;
    }
    eliminacion(row, articulo) {
        Swal.fire({
            type: "question",
            title: `¿Deseas eliminar el articulo con este código: ${articulo.codigo}?`,
            text: `Si lo eliminas no habra cambios para retroceder`,
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No"
        }).then(resultado => {
            if (resultado.value) {
                let a = this.buscarArticulo(articulo.codigo);
                this._articulos.splice(a, 1);
                row.remove();
            }
        })
    }
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
        //
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


    añadesArticulo(articulo) {
        if (this.buscarArticulo(articulo.codigo) >= 0) {
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