//hacer 2 funciones, una que verifique y otra que la valide
// Clase para verificar la seguridad de la contraseña
class VerificadorContrasena {
    constructor(contrasena) {
        this.contrasena = contrasena;
        this.errores = []; // Array para almacenar los errores
    }

    // Verificar si contraseña tiene al menos 8 caracteres
    tiene8caracter() {
        if (this.contrasena.length < 8) {
            this.errores.push("Debe tener al menos 8 caracteres.");
        }
    }

    // Verifica si contiene al menos una letra mayúscula
    tieneMayuscula() {
        if (!/[A-Z]/.test(this.contrasena)) {
            this.errores.push("Debe tener una letra mayúscula.");
        }
    }

    // Verifica si contiene al menos un número
    tieneNumero() {
        if (!/\d/.test(this.contrasena)) {
            this.errores.push("Debe tener mínimo un número.");
        }
    }

    // Verifica si contiene al menos un carácter especial
    tieneCaracterEspecial() {
        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\\-]/.test(this.contrasena)) {
            this.errores.push("Debe incluir un caracter especial.");
        }
    }

    // Función que verifica si cumple con todos los requisitos
    esSegura() {
        this.errores = []; // Limpiar los errores antes de cada verificación
        this.tiene8caracter();
        this.tieneMayuscula();
        this.tieneNumero();
        this.tieneCaracterEspecial();
        return this.errores.length === 0; // Devuelve true si no hay errores
    }

    mostrarResultado() {
        if (this.esSegura()) {
            console.log(`La contraseña "${this.contrasena}" es segura.`);
        } else {
            console.log("La contraseña no cumple con los siguientes requisitos:");
            this.errores.forEach(error => console.log(`- ${error}`)); // Mostrar cada error en una línea
        }
    }
}

// Función para solicitar la contraseña al usuario y verificarla
function solicitarContrasena() {
    const contrasena = prompt('Por favor ingresa una contraseña', '');
    const verificador = new VerificadorContrasena(contrasena);
    verificador.mostrarResultado();
}

// Llamada a la función para iniciar el proceso
solicitarContrasena();

