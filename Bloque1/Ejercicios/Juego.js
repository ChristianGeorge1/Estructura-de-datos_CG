//De un número del 1 al 100, donde el usuario tenga 5 probabilidades de encontrar la respuesta, si el 
//el número es mayor decirle que es mayor, si es menor, entonces decirle que es menor.

let number = Math.trunc(Math.random() * 10);

for (let i = 4; i >= 0; i--) {

    let introducido = Number(prompt("Introduce un número: ", 0))

    if (introducido == number) {
        alert("Se encontro el número:D");
        break;
    } else if (number > introducido) {
        alert("Sigue intentandolo, te quedan " + i + " de oportunidades, el número del juego es mayor");
        break;
    } else if (number < introducido) {
        alert("Sigue intentandolo, te quedan: " + i + " de oportunidades, el número del juego es menor")
    }
}
console.log(number);