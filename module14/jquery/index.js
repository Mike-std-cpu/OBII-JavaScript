
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
        $("ul").append("<li> New Element</li>")
    })
})
