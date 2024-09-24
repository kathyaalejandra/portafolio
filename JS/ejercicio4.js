// Ganancias por día
const tarifaDiurna = 120000; // $12000 por hora x 10 horas
const tarifaNocturna = 160000; // $16000 por hora x 10 horas
const incrementoDomingoDiurno = 20000; // $2000 extra por hora x 10 horas
const incrementoDomingoNocturno = 30000; // $3000 extra por hora x 10 horas
// Lista de todos los días de la semana
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Función para calcular el pago diario considerando si es domingo
function calcularPago(turno, esDomingo = false) {
  let pago = turno === 'diurno' ? tarifaDiurna : tarifaNocturna;
  
  if (esDomingo) {
    pago += turno === 'diurno' ? incrementoDomingoDiurno : incrementoDomingoNocturno;
  }

  return pago;
}

// Definir empleados y sus horarios de trabajo
let empleados = {
  empleado1: {
    nombre: "Empleado 1",
    dias: [
      { dia: 'Lunes', turno: 'nocturno' },
      { dia: 'Martes', turno: 'nocturno' },
      { dia: 'Miércoles', turno: 'nocturno' },
      { dia: 'Jueves', turno: 'diurno' },
      { dia: 'Viernes', turno: 'diurno' }
    ]
  },
  empleado2: {
    nombre: "Empleado 2",
    dias: [
      { dia: 'Martes', turno: 'nocturno' },
      { dia: 'Miércoles', turno: 'nocturno' },
      { dia: 'Jueves', turno: 'nocturno' },
      { dia: 'Domingo', turno: 'diurno', esDomingo: true }
    ]
  },
  empleado3: {
    nombre: "Empleado 3",
    dias: [
      { dia: 'Miércoles', turno: 'diurno' },
      { dia: 'Jueves', turno: 'diurno' },
      { dia: 'Viernes', turno: 'diurno' },
      { dia: 'Sábado', turno: 'nocturno' },
      { dia: 'Domingo', turno: 'nocturno', esDomingo: true }
    ]
  }
};

console.log('El pago diario y semanal de los empleados es: ');
// Calcular el pago diario y mostrar días trabajados y no trabajados
for (let empleado of Object.keys(empleados)) {
  let totalSemanal = 0;
  console.log(`\n${empleados[empleado].nombre}:`);

  // Crear un array con los días trabajados
  let diasTrabajados = empleados[empleado].dias.map(dia => dia.dia);

  // Iterar sobre todos los días de la semana
  for (let diaSemana of diasSemana) {
    if (diasTrabajados.includes(diaSemana)) {
      // Si el día está trabajado, mostrar el pago
      let dia = empleados[empleado].dias.find(d => d.dia === diaSemana);
      const pagoDiario = calcularPago(dia.turno, dia.esDomingo);
      totalSemanal += pagoDiario;
      console.log(`${dia.dia}: ${pagoDiario} CLP `);
    } else {
      // Si un día no se trabajó, mostrar que días no se trabajó
      console.log(`${diaSemana}: No trabajado`);
    }
  }

  console.log(`Total semanal: ${totalSemanal} CLP`);
};