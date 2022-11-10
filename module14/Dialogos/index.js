/**
 * Para acceder al contenido del buutton usaremos Jquery con el "querySelecto"
 */
const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click",()=>{
    console.log("Se dio click...");
    alert("Se ha hecho cclick")
})