/*
    Crear una clase llamada Punto que me permita controlar un puntp en un mapa
    cartesiano. 
    El rango es de -100, -100 a 100, 100. Por default los puntos empiezan en 0,0
    Se puede ajustar ña X y la Y, además debe existir un método toString() que deveulva
    la forma conocida de un punto -----> (3,2)

    Permite calcular la distancia a otro punto 
    distancia = raiz( (x2-x1) + (y2-y1))
*/
export default class Punto {
    constructor(x, y) {
        this._x = x
        this._y = y;

    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(val) {
        val = Number(val);
        if (val >= -100 && val <= 100) {
            this._x = val;
        } else {
            return this._x = 0;
        }
    }
    set y(val) {
        val = Number(val);
        if (val >= -100 && val <= 100) {
            this._y = val;
        } else {
            return this._y = 0;
        }
    }
    toString() {
        return `(${this._x}, ${this._y})`
    }
    distancia(punto2) {
        let d = Math.sqrt(Math.pow((punto2.x - this._x), 2) + Math.pow((punto2.y - this._y), 2));
        return d;
    }

}