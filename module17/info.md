# Información del proyecto.🚀

Para poder anexar mapas graficos dentro de nuestro documento html o sitio web es el caso, puedes consultar la lista de commits dentro del `repo`, pero aqui mostraremos más información respecto al código mostrado dentro del _module 17_.

> Toda la informacion fue sacada de la [docuementación de Google](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-html).

1. Creación

Dentro de nuestro archvio HTML podemos tener todo el contenio que nosotros deseomos, pero en especiifico hablando de la sección de mapa de google, debemos tener lo siguiente:

````html
<body>
    <h3>My Google Maps Demo</h3>
    <!--The div element for the map -->
    <div id="map"></div>

    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>
  </body>
````

>Podrmeos encontrar lo que es un `div` con un `id` map y un `script` que tendra todas las dependencias necesarias de la API de google necesarias.

2. Generador de API key.

Para esto, es clave mencionar que usaremos **Google cloud** y sera necesario crear una cuenta para esto. [Google cloud](https://console.cloud.google.com/project/_/google/maps-apis/overview)

>Es importante mencionar que si no tenemos ningun proyecto inicializado, debemos de comenzar uno y activar las metricas con uso de Javascript y activar la  *API key* en la sección de `credenciales`

3. Anexa _API KEY_ en el script JavaScript.

Despues de generar nuestra _API KEY_, dentro de la URL del script que nos dio google, en el link dira una apartado que diga `"YOUR_API_KEY"`, ahi anexaremos la API KEY.

4. Código en JavaScript.

AHora bien, es momento de darle funcionalid y locacización al mapa pre-hecho, dentro de nuestro archivo `index.js` tendremos el siguiente código:

````javascript
// Initialize and add the map
function initMap() {
    console.log("Inicializando mapa");
    // The location of Uluru
    const posicion = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map,
      title: "Posicion Inicial"
    });
  }
  
  window.initMap = initMap;
````

Aqui podremos puntualizar diferentes aspectos del código...

> 1. Tenemos la constante posicion, que no hace más que localizar un lugar sagrado para google, llamado **Uluru**, _(personalmente no sabre, pero cuando lo tenga en conocimiento, actualizare en repocitorio. 🙂)_
>Con una `{ lat: -25.344, lng: 131.031 }` que sera las cordenadas exactas.

>2. Tenemos la siguientes declaraciones, donde indicaremos _**donde**_ se mostrara el contenido, en este caso en el `div class = map` con un `zoom & center` especificado.
````javascript

   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });

````

## Cordenadas exactas de nuestro navegador. 🔥

Pues bien, como ya odos sabemos, neustro navegador por distintoas funcions puede acceder a la localizacion de nuestra red. Esto no debe de ser nuevo para nadie. A continuacion, se enlistaran el código correspondiente para acceder a esta misma.

- `navigator.geolocation` : Esta funcion nos ayudara a ver las distintas funcionalidad que tiene la navegacion de nuestro browser.

- `navigator.geolocation.watchPosition(position => {console.log(position)})`: Ahora bien, esta funcion callback, nos ayudara a acceder a nuestra localización actual, nos pedira permiso y esto se actualizaras cierta cantidad de tiempo.

- la funcion `eoPosicion` nos permitira acceder a las cordenadas exactas delnavegador, podrmeos ver una condicional, esta nos servira para poder gestionar si en dado caso el navegador sea muy opsoleto y no tenga la localizacion activada o en dado caso nuestro navegador no tiene los permisos correspondientes de la geolocalizacion, en cualquiera de estos dos casos se maneja un `onError` para gstionar esa parte.

````javascript
function geoPosicion(){
        if(navigator.geolocation){// esto nos ayudara a verificar que el navegador no sea antiguo y acepte la navigator o acceder a ella.
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPosi = geoLoc.watchPosition(centrarMapa, onError, options)//acceder a la localizacion, error en caso de averlo, el tiempo de refresco
        }else{
            alert("Tu navegador no admite geolocalizacion")
        }
    }
````
> El `option`, que hace enfasis al tiempo de cada actualziacion de la posicion, en este caso se maneja en milisegundo, dando como total de _60 seg._

>Por otro lado, `const watchPosi = geoLoc.watchPosition(centrarMapa, onError, options)` se declara despues...

- Dentro de la función `centrarMapa()` vamos declarar la posicion, dando la `latitud` y la `longitud` de las cordenadas exactas actuales.

````javascript
function centrarMapa(position){// acceder a la localizacion actual
        const nuevaPosi = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        console.log(nuevaPosi);// preuba
        marker.setPosition(nuevaPosi)// ingresar las cordenadas
        map.setCenter(nuevaPosi)//centrar el mapa en la ubicacion
    }
````

> Pósterior, se añadiran en la variable `nuevaPosi` con `setPosition` y se centrara en la localidad con `setCenter`.

> Como mencione, todo esto entrara dentro de la `geoLoc.watchPosition()` entrando como parametro `centrarMapa` que tieine las cordenadas exactas y la centrlizacion actual, el `onError` para la verificación de permisos necesarios y por ultimo, `options` con el timeOut de refresco de actualizacion de la localizacion.

---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="left" alt="xd" width="35" height="35" src="https://i.gifer.com/origin/08/089af74235a38edcc7b433321f0a5472_w200.webp" />