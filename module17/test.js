function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Lista de localizaciones con infromacion, latitud y longitud
    var markers = [
        ['Parque Bicentenario, CDMX AZCAPOTZALCO', 19.469739434840662, -99.19673624314379],
        ['Centro de coyoacan, CDMX COYOACAN', 19.35062878031171, -99.16342512228982],
        ['Paseo de la Reforma, CDMX CUAUHTEMOC', 19.426212720268015, -99.19368827436033]
    ];
                        
        
    // Mostrar la informacion de los markers
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Lugar de cada marker
    //LatLng para la latitud/longitud que estaba debajo del cursor cuando ocurria el evento.
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        

        // FitBound sirve para los limites del zoom
        //info: https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
        map.fitBounds(bounds);
    }

    //Zoom de los marcadores
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(11);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);