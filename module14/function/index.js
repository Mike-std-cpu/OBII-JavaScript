function suma (num1, num2){
    return num1 + num2
}

console.log(`La suma dentro de javascript es: ${suma(6,4)}`)

const p = document.getElementById("parrafo")
console.log(`Se cacho la etiqueta desde JS: ${p}`)

const form = document.getElementById("Formulario")

//Evento para no hacer ejecucion por defecto
form.addEventListener("submit",(evento) => { // cada submit realizar evento
    console.log(evento)// Informacion del evento
    evento.preventDefault()
})