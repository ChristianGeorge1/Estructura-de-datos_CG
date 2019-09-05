export default class Elevador{
    constructor(piso, capacidad){
        this._piso = piso;
        this._capacidad = capacidad;
        this._puerta; 
    }


    get piso(){
        return this._piso;
    }
    get capacidad(){
        return this._capacidad;
    }

    ejecutar(){
        
    }
}

/*
Crear la clase que me permita controlar un elevador al constuir dedo decir de cuantos pisos 
es y su capacidad. Puedo mover el elevador entre esos pisos y  saber el estado de la puerta.
*/