const boton = document.querySelector(".btn")

console.log(boton);

boton.addEventListener("click",()=>{
    console.log("Precionaste el botn");
    alert("¡Presionaste el boton! 😵‍💫")
})

// JQUERY EVENTS

$(()=>{
    $(".btntu").click(()=>{
        console.log("Presionaste el boton con funcion con Jquery");
        alert("¡Presionaste el boton con Jquery! 🚀")
    })
})