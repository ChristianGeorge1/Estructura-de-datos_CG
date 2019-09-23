document.getElementById('btn').addEventListener('click', () => {
    let num = document.getElementById('num').value;
    let contador1 = 0;
    let contador2 = 0;

    for (i = 1; i <= num; i++) {
        if (i == 220) {
            contador1 = i;
        } else if (i == 110) {
            contador2 = i;
        }
    }
    if (contador1 == contador2) {
        console.log(`El contador son iguales`);
    } else {
        console.log("No son numeros amigos");

    }
});