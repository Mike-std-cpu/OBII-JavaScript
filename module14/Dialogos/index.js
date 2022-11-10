/**
 * Para acceder al contenido del buutton usaremos Jquery con el "querySelecto"
 */
const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click",()=>{
    console.log("Se dio click...");
    //alert("Se ha hecho cclick");

    //OPERADOR TERNEARIO
    confirm("¿Estas deacuerdo?") ? console.log("Confirmando...") : console.log("¡Cancelando!");
})

const info = document.querySelector("#info")

info.addEventListener("click", ()=>{
     const namee = prompt("¿Cual es tu nombre?") ? console.log(`Your name is.. ${namee}`) : console.log("No has introducido nada");
     
})

const lista = [{
    name: "Mike",
    age: 24
}, {
    name: "Karina",
    age: 24
}, {
    name: "Cristhian",
    age: 25
}]

console.table(lista)