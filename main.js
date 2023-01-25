const dni = parseInt(prompt("Ingrese su DNI."))
let nombreYApellidoDelProfesor = ""

switch (dni) {
    case 54069154:
        nombreYApellidoDelProfesor = "Fernando Martinez"
        break
    case 37927604:
        nombreYApellidoDelProfesor = "Adrian Sosa"
        break
    case 29819032:
        nombreYApellidoDelProfesor = "Pablo Sanchez"
        break
    default:
        nombreYApellidoDelProfesor = "DNI invalido"
        break
}

if (nombreYApellidoDelProfesor !== "DNI invalido") {
    console.log("Hola " + nombreYApellidoDelProfesor + " ha ingresado correctamente al programa para calcular las notas de sus alumnos.")
    const cantidadDeAlumnosAIngresar = parseInt(prompt("Ingrese la cantidad de alumnos que tiene."))
    let nombreAlumno = ""
    let apellidoAlumno = ""
    let cantidadDeNotas = 0
    let notasSumadas = 0
    let notaMenor = 0
    let notaMayor = 0
    let notaPromedio = 0
    let notaAlumno = 0
    let aprobadoONo = ""
    let aprobados = 0
    let desaprobados = 0



    for (let i = 0; i < cantidadDeAlumnosAIngresar; i++) {

        nombreAlumno = prompt("Ingrese el nombre de su alumno.")
        apellidoAlumno = prompt("Ingrese el apellido de su alumno.")
        cantidadDeNotas = parseInt(prompt("Ingrese la cantidad de notas que tiene de su alumno: " + nombreAlumno + " " + apellidoAlumno + "."))

        for (let z = 0; z < cantidadDeNotas; z++) {

            notaAlumno = parseInt(prompt("Ingrese la nota del alumno."))

            notasSumadas = notasSumadas + notaAlumno // ir sumando las notas para despues hacer el promedio

            if (z === 0) {
                notaMenor = notaAlumno
                notaMayor = notaAlumno
            } // Valores preestablecidos

            if (notaAlumno > notaMayor) {
                notaMayor = notaAlumno
            } // Nota mayor

            if (notaAlumno < notaMenor) {
                notaMenor = notaAlumno
            } // Nota menor

        }

        notaPromedio = parseInt(notasSumadas / cantidadDeNotas) // Hace el promedio

        if (7 <= notaPromedio) {
            aprobadoONo = "aprobado"
        } else if (notaPromedio < 7) {
            aprobadoONo = "desaprobado"
        } // Si el promedio es mayor a 7 se aprueba, si es menor no.

        if (aprobadoONo === "aprobado") {
            aprobados++
        } else if (aprobadoONo === "desaprobado") {
            desaprobados++
        } // Suma a aprobados o desaprobados

        console.log("Su alumno " + nombreAlumno + " " + apellidoAlumno + " se encuentra " + aprobadoONo + ", con un promedio de: " + notaPromedio + ". La nota mas alta fue de: " + notaMayor + ", mientras que la mas baja fue de: " + notaMenor + ".")
        // mensaje final de cada alumno

        z = 0
        notasSumadas = 0
        // Reseteo variables

    }

    console.log("Usted tiene de " + cantidadDeAlumnosAIngresar + " alumnos, " + aprobados + " aprobados y " + desaprobados + " desaprobados")

} else if (nombreYApellidoDelProfesor === "DNI invalido") {
    console.log("Usted no esta autorizado para utilizar el programa, solo tenemos registrado los DNI: 54069154, 37927604, 29819032")
}

console.log("Fin del prorgama")