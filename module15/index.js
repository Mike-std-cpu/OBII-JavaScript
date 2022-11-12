// Localstorage(#clave,#valor)

//localStorage.setItem("nombre","Mike");
console.log(localStorage.getItem("nombre"));

//JSON.stringigy convierte un onject/ array en string
localStorage.setItem("Person", JSON.stringify({name: "Miguel", age: 24}))

//El JSON.parse  convierte un object/array hecho string en un objeto en JS
console.log(JSON.parse(localStorage.getItem("Person")));

//Para remover objetos en local stoarge
// localStorage.removeItem("nombre")

//Sesion storag
sessionStorage.setItem("Nombre-sesion", "hoodloom")