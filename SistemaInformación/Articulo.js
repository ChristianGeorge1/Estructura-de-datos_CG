export default class Articulo{
    constructor(codigo, nombre, precio, cantidad, descripcion){
        this._codigo = codigo;
        this._nombre = nombre; 
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._articulos = [];

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

    agregarArticulos(){
        this._articulos.push();
        return this._articulos;
    }
}