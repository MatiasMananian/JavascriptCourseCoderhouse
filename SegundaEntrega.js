// Esta funcion toma por prompt los ids de los cursos comprados y llama a la fx datosPersonales.
function compra(productos){
    let cantCursos = prompt("¿Cuántos cursos desea comprar?")
    
        var cursosComprado = []
        var precioCursoscomprado = []

    do{
        let cursoSeleccionado = prompt("Ingrese el id del curso\nid:1 Curso derecho laboral\nid:2 Curso derecho penal\nid:3 Curso derecho civil\nid:4 Curso derecho comercial\nid:5 Curso derecho nautico")
         
        let productoBuscado = productos.find(producto => producto.id == cursoSeleccionado)
    
        cursosComprado.push(productoBuscado.nombre)
        precioCursoscomprado.push(productoBuscado.precio)

    }while(cursosComprado.length != cantCursos)  
    
    datosPersonales(cursosComprado, precioCursoscomprado, cantCursos)
}
// Esta funcion toma por prompt los datos del cliente y llama a la fx detallesCompra.
function datosPersonales(cursosComprado, precioCursoscomprado, cantCursos){
    var datos = []
    let nombreIngresado = prompt("Ingrese nombre")
    let apellidoIngresado = prompt("Ingrese apellido")
    let dni = parseInt(prompt("Ingrese dni"))
    let fechaNacimiento = parseInt(prompt("Ingrese fecha de nacimiento (formato ddmmaa)"))
    let calleEntrega = prompt("Ingrese calle de entrega")
    let numeroEntrega = prompt("Ingrese numero de casa entrega")
    
    datos[0] = nombreIngresado
    datos[1] = apellidoIngresado
    datos[2] = dni
    datos[3] = fechaNacimiento
    datos[4] = calleEntrega
    datos[5] = numeroEntrega

    detallesCompra(datos, cursosComprado, precioCursoscomprado, cantCursos)
}
// Esta funcion muestra por console.log los datos del cliente y los cursos comprados.
function detallesCompra(datos, cursosComprado, precioCursoscomprado, cantCursos){
    nombreCompleto = datos.slice(0,2)
    direccion = datos.slice(4,6)
    
    let totalCompra = precioCursoscomprado.reduce((a, b) => a + b, 0);

    console.log("Nombre y Apellido: ", nombreCompleto.join(" "))
    console.log("DNI: ", datos[2])
    console.log("Fecha de nacimiento: ", datos[3])
    console.log("Direccion: ", direccion.join(" "))
    console.log("COMPRA: \n") 
    for (let i = 0; i < cantCursos; i++) {
        console.log(cursosComprado[i], " Precio: ", precioCursoscomprado[i])
    }
    console.log("Precio total: ", totalCompra)
}    
// Programa principal.
const productos = [
    { id:1, nombre: "Curso derecho laboral", precio: 1000},
    { id:2, nombre: "Curso derecho penal", precio: 5000},
    { id:3, nombre: "Curso derecho civil", precio: 10000},
    { id:4, nombre: "Curso derecho comercial", precio: 3000},
    { id:5, nombre: "Curso derecho nautico", precio: 5000},
]

compra(productos)






  