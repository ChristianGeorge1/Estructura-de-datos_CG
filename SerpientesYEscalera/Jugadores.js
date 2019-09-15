export default class Jugadores {
    constructor(nombre) {
        this._nombre = nombre;
        this._posicion = 0;
    }

    get nombre() {
        return this._nombre;
    }
    jugar() {
        while (this._posicion <= 100) {
            let dado = Math.trunc(Math.random() * 6) + 1
            console.log("Dado: " + dado);
            //Juego con el dado
            if (dado == 1) {
                this._posicion++
            } else if (dado == 2) {
                this._posicion += 2;
            } else if (dado == 3) {
                this._posicion += 3
            } else if (dado == 4) {
                this._posicion += 4;
            } else if (dado == 5) {
                this._posicion += 5;
            } else if (dado == 6) {
                this._posicion += 6
            } 

            console.log("Posicion: " + this._posicion);
            
            //Serpientes y escaleras
            if(this._posicion == 5){ //Escalera 1
                this._posicion = 58;
            }else if(this._posicion == 51){ //Serpiente 1
                this._posicion = 10;
            }else if(this._posicion == 14){ //Escalera 2
                this._posicion = 39;
            }else if(this._posicion == 38){ //Serpiente 2
                this._posicion = 20
            }else if(this._posicion == 53){ //Escalera 3
                this._posicion = 72
            }else if(this._posicion == 76){ //Serpiente 3
                this._posicion = 54
            }else if(this._posicion == 64){ //Escalera 4
                this._posicion = 86;
            }else if(this._posicion == 97){ //Serpiente 4
                this._posicion = 61;
            }else if(this._posicion == 10){ //Escalera 5
                this._posicion = 83;
            }else if(this._posicion == 99){//Serpiente 5
                this._posicion = 1;
            }else if(this._posicion == 26){ //Escalera 6
                this._posicion = 34
            }else if(this._posicion == 65){ //Serpiente 6
                this._posicion == 22;
            }else if(this._posicion == 11){ //Escalera 7
                this._posicion = 81
            }else if(this._posicion == 43){ //Serpiente 7
                this._posicion = 18;
            }else if(this._posicion == 22){ //Escalera 8
                this._posicion = 75;
            }else if(this._posicion == 82){ //Serpiente 8
                this._posicion = 2;
            }
        }
        return this._posicion;
    }
}