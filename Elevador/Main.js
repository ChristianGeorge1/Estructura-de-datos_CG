import Elevador from './Elevador.js' 
class Main{
    constructor(){
        let elevador = new Elevador(10);

        document.getElementById('btnAbrir').addEventListener('click',()=>{
            elevador.abrirPuerta();

        })

        document.getElementById('btnCerrar').addEventListener('click',()=>{
            elevador.cerrarPuerta();

        })

        document.getElementById('btnSubir').addEventListener('click',() => { 
            elevador.subir();
        })
        document.getElementById('btnBajar').addEventListener('click',()=>{
            elevador.bajar();

        })
    }
}

let m = new Main();