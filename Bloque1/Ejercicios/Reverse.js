//REVERSE 
let vector = [5, 3, 4, 1, 8];
//Primera vez
let aux = vector[0];
vector[0] = vector[4];
vector[4] = aux;

//Segunda vez 
aux = vector[1];
vector[1] = vector[3];
vector[3] = aux;
console.log(" Vector desordenado: " + vector);


//CICLO
let j = vector.length - 1;
for (let i = 0; i < vector.length / 2; i++, j--) {
    aux = vector[i];
    vector[i] = vector[j];
    vector[j] = aux;
}
console.log("Vector ordenado: " + vector);