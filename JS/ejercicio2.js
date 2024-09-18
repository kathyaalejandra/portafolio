// Solicitar las tres notas al usuario
let nota1 = parseFloat(prompt("Ingrese la primera nota (40%):"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota (30%):"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (30%):"));

// Calcular el promedio con su ponderación correspondiente
let promedioPonderado = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

// Ciclo para evaluar si aprueba, reprueba o da examen
if (promedioPonderado < 3.95) {
    alert("Has reprobado el ramo con un promedio de: " + promedioPonderado);
} else if (promedioPonderado <= 4.94) {
    alert("Debes dar examen, tu promedio fue: " + promedioPonderado);
} else {
    alert("Te has eximido del ramo con un promedio de: " + promedioPonderado);
}