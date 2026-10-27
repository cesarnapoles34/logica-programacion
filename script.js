// Pide un número por prompt y lo vuelve a pedir hasta que sea válido
function pedirNumero(mensaje) {
    let entrada = prompt(mensaje);

    // Si está vacío o no es número, se vuelve a pedir
    while (entrada === null || entrada.trim() === "" || isNaN(Number(entrada))) {
        entrada = prompt("Eso no es un número válido. " + mensaje);
    }

    return Number(entrada);
}

// Identifica el número mayor, el del centro y el menor usando condicionales
function ordenarNumeros(a, b, c) {
    let mayor, centro, menor;

    if (a >= b && a >= c) {
        // "a" es el mayor, falta comparar b y c
        mayor = a;
        if (b >= c) {
            centro = b;
            menor = c;
        } else {
            centro = c;
            menor = b;
        }
    } else if (b >= a && b >= c) {
        // "b" es el mayor, falta comparar a y c
        mayor = b;
        if (a >= c) {
            centro = a;
            menor = c;
        } else {
            centro = c;
            menor = a;
        }
    } else {
        // si no fue ni "a" ni "b", el mayor es "c"; falta comparar a y b
        mayor = c;
        if (a >= b) {
            centro = a;
            menor = b;
        } else {
            centro = b;
            menor = a;
        }
    }

    return { mayor, centro, menor };
}

// Imprime un mensaje por consola y en el DOM
function mostrar(mensaje) {
    console.log(mensaje);
    const resultado = document.getElementById("resultado");
    const parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    resultado.appendChild(parrafo);
}

// ----- Programa principal -----
let numero1 = pedirNumero("Ingresa el primer número:");
let numero2 = pedirNumero("Ingresa el segundo número:");
let numero3 = pedirNumero("Ingresa el tercer número:");

mostrar(`Números ingresados: ${numero1}, ${numero2}, ${numero3}`);

if (numero1 === numero2 && numero2 === numero3) {
    mostrar("Los tres números son iguales.");
} else {
    const { mayor, centro, menor } = ordenarNumeros(numero1, numero2, numero3);

    mostrar(`Número mayor: ${mayor}`);
    mostrar(`Número del centro: ${centro}`);
    mostrar(`Número menor: ${menor}`);
    mostrar(`De mayor a menor: ${mayor}, ${centro}, ${menor}`);
    mostrar(`De menor a mayor: ${menor}, ${centro}, ${mayor}`);

    if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
        mostrar("Hay dos números iguales.");
    }
}