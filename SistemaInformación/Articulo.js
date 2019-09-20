export default class Articulo{
    constructor(articulo){
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre; 
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;

    }

    get codigo(){
        return this._codigo;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }

    toString(){
        return console.log(this._articulos);
    }
}