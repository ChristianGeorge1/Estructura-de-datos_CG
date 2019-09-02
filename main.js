import Punto from './Punto.js';


class Main {
    constructor() {
        document.querySelector('#btn').addEventListener('click', () => {

          /*  let x1 = Number(document.getElementById('x1').value);
            let y1 = Number(document.getElementById('y1').value);
            */

           let punto1 = new Punto()
           let punto2 = new Punto()

           punto1.x = 4;
           punto1.y = 3; 
           punto2.x = 2;
           punto2.y = 5;

           console.log(punto1.distancia(punto2));
           console.log(punto1.toString());
           console.log(punto2.toString());
           
           


        })

    }
}
let m = new Main();