const parrafos = document.querySelectorAll(".parrafo")

console.log(parrafos); // Confirmacion de que se estan detectando los parrafs y sus clases

//Evento

parrafos.forEach(parrafo => {
 parrafo.addEventListener("dragstart", () =>{ // cada que se arrastre cada uno de los elementos de la variable parrafo
    console.log("Iniciando el arrastre"); // Se imprioma por consola la accion
 })
});