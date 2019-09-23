class Ruta {
    constructor(nombre, tiempoEnMinutos, bases) {
        this._nombre = nombre;
        this._tiempoEnMinutos = tiempoEnMinutos;
        this._bases = bases;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get tiempoEnMinutos() {
        return this._tiempoEnMinutos;
    }
    set tiempoEnMinutos(tiempoEnMinutos) {
        this._tiempoEnMinutos = tiempoEnMinutos;
    }
    get bases() {
        return this.bases;
    }
    set bases(bases) {
        this._bases = bases;
    }
}

class Base extends Ruta {
    constructor(nombreBase, latitud, longitud, tiempoEnMinutos) {
        super(tiempoEnMinutos)
        this._nombreBase = nombreBase;
        this._latitud = latitud;
        this._longitud = longitud;
        this._tiempoEnMinutos = tiempoEnMinutos;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get latitud() {
        return this._latitud;
    }
    set latitud(latitud) {
        this._latitud = latitud;
    }
    get longitud() {
        return this._longitud;
    }
    set longitud(longitud) {
        this._longitud = longitud;
    }
    get tiempoEnMinutos() {
        return this._tiempoEnMinutos;
    }
    set tiempoEnMinutos(tiempoEnMinutos) {
        this._tiempoEnMinutos = tiempoEnMinutos;
    }
}

class Salidas extends Ruta {
    constructor(camion, base, horaInicio, horaFin, secuencia) {
        super(camion, horaInicio, base)
        this._camion = camion;
        this._base = base;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
        this._secuencia = secuencia;
    }
    get camion() {
        return this._camion;
    }
    set camion(camion) {
        this._camion = camion;
    }
    get base() {
        return this._base;
    }
    set base(base) {
        this._base = base;
    }
    get horaInicio() {
        return this._horaInicio;
    }
    set horaInicio(horaInicio) {
        this._horaInicio = horaInicio;
    }
    get horaFin() {
        return this._horaFin;
    }
    set horaFin(horaFin) {
        this._horaFin = horaFin;
    }
    get secuencia() {
        return this._secuencia;
    }
    set secuencia(secuencia) {
        this._secuencia = secuencia;
    }
}