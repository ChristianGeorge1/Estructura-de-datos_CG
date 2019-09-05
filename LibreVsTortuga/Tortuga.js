export default class Tortuga{
    constructor(nombre){
        this._nombre = nombre;
        this._posicion = 0;
    }
    get nombre(){
        return this._nombre;
    }

    get posicion(){
        return this._posicion;
    }

    correr(){
        let tramo = Math.trunc(Math.random()* 100 + 1)

        if(tramo <= 50){
            this._posicion += 3;
        }else if(tramo <= 70){
            this._posicion -= 3;
        }else if(tramo <= 100){
            this._posicion += 1;
        }
        return tramo;
    }
    toString(){
        return `El nombre de la tortuga es: ${this.nombre}`
    }
}