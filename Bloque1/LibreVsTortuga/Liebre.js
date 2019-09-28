export default class Liebre {
    constructor(nombre) {
        this._nombre = nombre;
        this._posicion = 0;
    }

    get nombre(){
        return this._nombre;
    }
    get posicion() {
        return this._posicion;
    }

    correr() {
        let tramo = Math.trunc(Math.random() * 100 + 1)

        if (tramo <= 20) {
            return this._posicion;
        } else if (tramo <= 40) {
            this._posicion += 9;
        } else if (tramo <= 50) {
            this._posicion -= 12;
        } else if (tramo <= 85) {
            this._posicion += 1;
        } else if (tramo <= 100) {
            this._posicion -= 2;
        }
        return tramo;

    }
}