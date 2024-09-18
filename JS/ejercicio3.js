// Función para hacer la sumatoria de 2 patrones
//500 + 456 + 510 + 454 + 520 + 452 + ... + 800
// Se inicia la sumatoria total en 0
let sumaTotal = 0;

// Poner los valores de inicio para ambos patrones
let num1 = 500;  // Primer patrón (500 a 800 incrementando de 10 en 10)
let num2 = 456;  // Segundo patrón (456 descendiendo de 2 en 2)

console.log("Números involucrados:");

// Bucle para correr ambos patrones
//Se pone <31 porque esa es la cantidad de números necesarios para llegar a 800
for (let i = 0; i < 31; i++) { 
    // Imprimir y sumar el número del primer patrón
    console.log("Primer patrón:" +num1);
    sumaTotal += num1;
    num1 += 10; // Incremento del primer patrón (de 10 en 10)
    
    // Imprimir y sumar el número del segundo patrón
    console.log("Segundo patrón:" +num2);
    sumaTotal += num2;
    num2 -= 2;  // Decremento del segundo patrón (de 2 en 2)
}

// Imprimir el resultado de la sumatoria
console.log("El resultado de la sumatoria de ambos patrones es: " + sumaTotal);