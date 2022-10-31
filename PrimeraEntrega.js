// Esta funcion muestra por pantalla el Nombre del alumno y las notas de sus dos parciales.
function alumno(nombre, apellido, nota1, nota2) {
  if (!nombre || !apellido || !nota1 || !nota2) {
    console.log("ERROR")
  } else {
    console.log(nombre + " " + apellido + " Nota1: " + nota1 + " Nota2: " + nota2)
  }
}
// Esta funcion chequea si el alumno desaprobo algun parcial. Si lo hizo indica cual parcial debe recuperar.
function recuperar(nota1, nota2) {
  if (nota1 < 4) {
    console.log("DEBE RECUPERAR EL PRIMER PARCIAL")
  } 
  if (nota2 < 4) {
    console.log("DEBE RECUPERAR EL SEGUNDO PARCIAL")
    } 
}
// Esta funcion indica si el alumno promociona o debe rendir final.
function aprobado(nota1, nota2) {
let promedio = (nota1 + nota2) / 2

if (promedio >= 7) {
    console.log("Notal Final: " + promedio + ". PROMOCIONA")
    } else if (promedio < 7 && promedio >=4) {
        console.log("Notal Final: " + promedio + ". APRUEBA. DEBE RENDIR FINAL")
    }
}
// Pide por pantalla la cantidad de usuarios a ingresar. Una vez que se ingresa el valor pide el nombre, apellido y notas del alumno.
let cantAlumnos = parseInt(prompt("Ingrese cantidad de alumnos"))

for (let i = 0; i < cantAlumnos; i++) {
    let nombreIngresado = prompt("Ingrese nombre")
    let apellidoIngresado = prompt("Ingrese apellido")
    let nota1Ingresada = parseInt(prompt("Ingrese nota primer parcial"))
    let nota2Ingresada = parseInt(prompt("Ingrese nota segundo parcial"))

    alumno(nombreIngresado, apellidoIngresado, nota1Ingresada, nota2Ingresada)
    recuperar(nota1Ingresada, nota2Ingresada)

    if (nota1Ingresada >= 4 && nota2Ingresada >= 4) {
        aprobado(nota1Ingresada, nota2Ingresada)
    }
}

