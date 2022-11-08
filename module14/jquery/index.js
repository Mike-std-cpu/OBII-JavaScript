
/**
 * Documentación de Jquery
 * https://api.jquery.com/
 */
$(() => {
//Etiqeut li oculta de hide
//("li").hide()

    //Etiqueta h1 oculta con hide
    //$("h1").hide()

    // referenciar ID es con " # "
    $("#b-hide").click(() => {
        console.log("Ocultando...")
        $("#EL-1").hide() // Otra opcion seria .fadeOut()
    })

    // referenciar class con " . "
    $(".b-show").click(()=>{
        console.log("Mostrando...")
        $("#EL-1").show() // Otra opcion seria .fadeIn()
    })

    $("li").click(()=>{ //con doble click es: dblclick()
        $("h1").css({color: "Gold"})
    })

    $(".new-element").click(()=>{
        //$("ul").append("<li> New Element in the final</li>")
        $("ul").prepend("<li> New Element in the start</li>")
    })

    // Pasando el cursor por ensima de los elementos
    $("h1").mouseenter((Elem)=>{
        //console.log("Has pasado el rato en el titulo (hover)");
        console.log("Paso el mouse por el titulo, cambiando a verde...");
        Elem.target.style.color = "green"
    })

    // Dejando de estar el cursor por los elementos
    $("h1").mouseleave((Elem)=>{
        
        console.log("Dejando el mouse por el titulo, cambiando a su color original...");
        Elem.target.style.color = "black"
    })

})
