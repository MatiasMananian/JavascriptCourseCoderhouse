// Esta funcion toma por prompt el id del curso comprado y llama a la fx datosPersonales.
function compra(){
    const productos = [
        { id:1, nombre: "Curso derecho laboral", precio: 1000},
        { id:2, nombre: "Curso derecho penal", precio: 5000},
        { id:3, nombre: "Curso derecho civil", precio: 10000},
        { id:4, nombre: "Curso derecho comercial", precio: 3000},
        { id:5, nombre: "Curso derecho nautico", precio: 5000},
      ]
      
    let cursoSeleccionado = prompt("Ingrese el id del curso\nid:1 Curso derecho laboral\nid:2 Curso derecho penal\nid:3 Curso derecho civil\nid:4 Curso derecho comercial\nid:5 Curso derecho nautico")
            
    let productoBuscado = productos.find(producto => producto.id == cursoSeleccionado)
    
    nombreCursocomprado = productoBuscado.nombre
    precioCursocomprado = productoBuscado.precio

    datosPersonales(nombreCursocomprado, precioCursocomprado)
}
// Esta funcion toma por prompt los datos del cliente y llama a la fx detallesCompra.
function datosPersonales(nombreCursocomprado, precioCursocomprado){
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

    detallesCompra(datos, nombreCursocomprado, precioCursocomprado)
}
// Esta funcion muestra por console.log los datos del cliente y el curso comprado.
function detallesCompra(datos, nombreCursocomprado, precioCursocomprado){
    nombreCompleto = datos.slice(0,2)
    direccion = datos.slice(4,6)

    console.log("Nombre y Apellido: ", nombreCompleto.join(" "))
    console.log("DNI: ", datos[2])
    console.log("Fecha de nacimiento: ", datos[3])
    console.log("Direccion: ", direccion.join(" "))
    console.log("Curso comprado: ", nombreCursocomprado)
    console.log("Precio: ", precioCursocomprado)
}    
// Programa principal.
compra()



