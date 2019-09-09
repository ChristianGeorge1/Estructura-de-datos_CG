export default class Elevador {
    constructor(piso) {
        this._piso = piso;
        this._pisoActual = 1;
        this._puerta = false;
        this._pisoUno = 1;

    }


    get piso() {
        return this._piso;
    }
    get capacidad() {
        return this._capacidad;
    }

    subir() {
        if (this._pisoActual < 1 || this._pisoActual > this._piso) {
            console.log("No existe el piso deseado");
        } else if (this._pisoActual == this._piso) {
            console.log("Esta en el mismo piso");
        }
        for (let i = 1; i <= this._piso; i++) {
            console.log('Estas en el piso ' + i);
            if (i == this._piso) {
                console.log(`Estas en el piso que pediste, en el piso ${i}`);
            }
        }
    }
    bajar() {
        if (this._pisoActual < 1 || this._pisoActual > this._piso) {
            console.log("No existe el piso deseado");
        } else if (this._pisoActual == this._piso) {
            console.log("Esta en el mismo piso");
        }
        for (this.piso; this._piso >= this._pisoUno; this._piso--) {
            console.log('Estas en el piso ' + this._piso);
            if (this._piso == this._pisoUno) {
                console.log(`Estas en el piso que pediste, en el piso ${this._piso}`);
            }
        }
    }

    abrir() {
        
        if(this._puerta != true){
            this._puerta = true;
            console.log('La puerta se abrio exitosamente');
        }
    }
    cerrar(){
        this._puerta = false;
        if(this._puerta == false){
            console.log('La puerta se cerro exitosamente');
        }
    }
}

/*
Crear la clase que me permita controlar un elevador al constuir dedo decir de cuantos pisos 
es y su capacidad. Puedo mover el elevador entre esos pisos y  saber el estado de la puerta.
*/