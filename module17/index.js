// Initialize and add the map
let marker, map;
function initMap() {
    console.log("Inicializando mapa");
    // The location of Uluru
    const posicion = { lat: -25.344, lng: 131.031 };
    const pos2 ={lat: 40.671531, lng: -73.963588};
    const pos3 ={ lat: 40.672587, lng: -73.968146};

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: posicion,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
      position: posicion,
      map: map,
    });

geoPosicion()
    }

    function geoPosicion(){
        if(navigator.geolocation){// esto nos ayudara a verificar que el navegador no sea antiguo y acepte la navigator o acceder a ella.
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPosi = geoLoc.watchPosition(centrarMapa, onError, options)//acceder a la localizacion, error en caso de averlo, el tiempo de refresco
        }else{
            alert("Tu navegador no admite geolocalizacion")
        }
    }

    function centrarMapa(position){// acceder a la localizacion actual
        const nuevaPosi = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        console.log(nuevaPosi);// preuba
        marker.setPosition(nuevaPosi)// ingresar las cordenadas
        //
        map.setCenter(nuevaPosi)//centrar el mapa en la ubicacion       
        
    }

    function onError(error){// esto si el navegador no adminte goelocalizacion o no tiene los permisos correspondientes
        console.log("Se ha producido un erro");
        console.log(error);
    }
  
  window.initMap = initMap;