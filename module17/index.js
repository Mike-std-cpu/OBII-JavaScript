// Initialize and add the map
function initMap() {
    console.log("Inicializando mapa");
    // The location of Uluru
    const posicion = { lat: -25.344, lng: 131.031 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: posicion,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;