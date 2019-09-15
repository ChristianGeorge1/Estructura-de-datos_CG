import Jugadores from './Jugadores.js';

class Main{
    constructor(){
        document.getElementById('btn').addEventListener('click',()=>{
            let jugador1 = new Jugadores('Christian');
            let jugador2 = new Jugadores('Emmanuel');
            
            
            console.log(jugador1.jugar());
            
            console.log(jugador2.jugar());
            
            if(jugador1._posicion == jugador2._posicion){
                console.log("Hubo un empate");
            }else if(jugador1._posicion > jugador2._posicion){
                console.log(`Gano el jugador: ${jugador1.nombre}, ¡felicidades!.`);
            }else if(jugador2._posicion > jugador1._posicion ){
                console.log(`Gano el jugador: ${jugador2.nombre}, ¡felicidades!. `);
            }
                        
        })
    }
}

let m = new Main();

