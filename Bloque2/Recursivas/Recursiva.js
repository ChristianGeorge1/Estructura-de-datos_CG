function f(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * f(x - 1)
    }
}
/*
console.log(f(1));
console.log(f(5));
*/

class Nodo {
    constructor(value) {
        this.dato = value;
        this.siguiente = null;
    }
}
//Tendría que ir dentro de una clase
let _inicio = null

function agregar(nuevo) {
    if (_inicio == null) {
        _inicio = nuevo;
    } else {
        _agregar(nuevo, _inicio)
    }
}

function _agregar(nuevo, ultimo) {
    if (ultimo.siguiente == null) {
        ultimo.siguiente = nuevo;
    } else {
        _agregar(nuevo, ultimo.siguiente)
    }
}