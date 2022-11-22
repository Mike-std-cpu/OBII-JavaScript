const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

console.log(parrafos); // Confirmacion de que se estan detectando los parrafs y sus clases

//Evento

parrafos.forEach(parrafo => {
 parrafo.addEventListener("dragstart", event =>{ // cada que se arrastre cada uno de los elementos de la variable parrafo
    console.log("Iniciando el arrastre"); // Se imprioma por consola la accion
    console.log(`Estoy arrastrando el parrafo: ${parrafo.innerText}`); // InnerText agreg el terxto del parrafo
    parrafo.classList.add("Dragging") // Añadira una clase al elemento parrafo llamado "Dragging" cuando lo arrastre
    event.dataTransfer.setData("id", parrafo.id)
    const img_fantasma = document.querySelector(".fantasma")
    event.dataTransfer.setDragImage(img_fantasma,0,0)
 })

 parrafo.addEventListener("dragend", () =>{
    console.log("Se termino el arrastre");
    parrafo.classList.remove("Dragging")
 })

});

secciones.forEach(seccion =>{
   seccion.addEventListener("dragover", event =>{
      event.preventDefault()
      event.dataTransfer.dropEffect = "copy" // cambios de los iconos del cursos al mover el elemento
     //console.log("Drag-Over");
   })

   seccion.addEventListener("drop",event =>{
      console.log("Drop");
      const id_parrafo = event.dataTransfer.getData("id")
      console.log(`Parrafo id: ${id_parrafo}`);
      const parrafo = document.getElementById(id_parrafo)
      seccion.appendChild(parrafo)
   })
})