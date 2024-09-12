// Función para verificar si el número es par o impar

let numero = prompt('Por favor ingresa un número', '');

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {  //si es resto es igual a 0 se mostrará que el número es par
        alert("El número " + numero + " es par.");
    } else {                 // si el resto no es igual a 0 se mostrará que el número es impar
        alert("El número " + numero + " es impar.");
    }