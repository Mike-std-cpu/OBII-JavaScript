const parrafos = document.querySelectorAll(".parrafo")

console.log(parrafos); // Confirmacion de que se estan detectando los parrafs y sus clases

//Evento

parrafos.forEach(parrafo => {
 parrafo.addEventListener("dragstart", () =>{ // cada que se arrastre cada uno de los elementos de la variable parrafo
    console.log("Iniciando el arrastre"); // Se imprioma por consola la accion
    console.log(`Estoy arrastrando el parrafo: ${parrafo.innerText}`); // InnerText agreg el terxto del parrafo
    parrafo.classList.add("Dragging") // Añadira una clase al elemento parrafo llamado "Dragging" cuando lo arrastre
 })
 parrafo.addEventListener("dragend", () =>{
    console.log("Se termino el arrastre");
    parrafo.classList.remove("Dragging")
 })

});