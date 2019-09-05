import Tortuga from './Tortuga.js'
import Liebre from './Liebre.js'

let tortuga = new Tortuga('Sofi');
let liebre = new Liebre('Xime');

class Main {
    constructor() {
        document.getElementById('btn').addEventListener('click', () => {

            while (tortuga.posicion <= 90 && liebre.posicion <= 90) {
                tortuga.correr();
                liebre.correr();
            }

            if (tortuga.posicion >= 90 && liebre.posicion >= 90) {
                console.log(`La tortuga:  ${tortuga.nombre} y la liebre: ${liebre.nombre} quedaron empatadas`);
            } else if (tortuga._posicion >= 90) {
                console.log(`La tortuga: ${tortuga.nombre} gano esta competencia`);
            } else if (liebre._posicion >= 90) {
                console.log(`La liebre: ${liebre.nombre} gano esta competencia`);
            }
        })
        document.getElementById('btnInfoTortuga').addEventListener('click', () => {
            console.log(tortuga.toString());
        })
        document.getElementById(`btnInfoLiebre`).addEventListener('click', () => { 
            
        })

    }
}

let m = new Main();