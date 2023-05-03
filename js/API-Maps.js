///////////  API de Tercero ////////////////////////////////

function iniciarMap(latitud, longitud){
  // var coordenadas = {lat: 20.654861, lng: -103.32545};
  var coordenadas = {lat: latitud, lng: longitud};
  var map = new google.maps.Map(document.getElementById("map"),{
      center: coordenadas,
      zoom: 12
  });

  // Array de ubicaciones con sus coordenadas
  var ubicaciones = [
    // Ubicacion del usuario
    {
      coordenadas: {lat: latitud, lng: longitud},
    },
    // Ubicacion de las universidades
    {
      coordenadas: {lat: 20.654861, lng: -103.32545},
      icono: '../Imagenes/Logo-icono.png'
    },
    {
      coordenadas: {lat: 20.74081, lng: -103.31222},
      icono: '../Imagenes/Logo-icono.png'
    },
    {
      coordenadas: {lat: 20.74083, lng: -103.37976},
      icono: '../Imagenes/Logo-icono.png'
    },
    {
      coordenadas: {lat: 20.68739, lng: -103.33209},
      icono: '../Imagenes/Logo-icono.png'
    },
    {
      coordenadas: {lat: 20.56693, lng: -103.22852},
      icono: '../Imagenes/Logo-icono.png'
    },
    {
      coordenadas: {lat: 20.67640, lng: -103.34462},
      icono: '../Imagenes/Logo-icono.png'
    }
    // Agrega más ubicaciones aquí
  ];

  // Iterar a través del array de ubicaciones y agregar marcadores en el mapa
  ubicaciones.forEach(function(ubicaciones) {
      var marker = new google.maps.Marker({
          position: ubicaciones.coordenadas,
          map: map,
          icon: {
              url: ubicaciones.icono,
              scaledSize: new google.maps.Size(34, 34) // Tamaño deseado del icono
          }
      });
  });
}


//////////// API local //////////////////////////

// Verificar si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
  // Obtener la ubicación del usuario
  navigator.geolocation.getCurrentPosition(
    function(position) {
      // Obtener las coordenadas de la ubicación
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;

      // Imprimir valores en consola
      // console.log("Latitud: " + latitud);
      // console.log("Longitud: " + longitud);

      iniciarMap(latitud, longitud);

    },
    function(error) {
      // Manejar errores en la obtención de la ubicación
      console.error("Error en la obtención de la ubicación: " + error.message);
    },
    {
      enableHighAccuracy: true, // Habilitar alta precisión
      timeout: 5000, // Tiempo máximo de espera en milisegundos
      maximumAge: 0, // No utilizar caché de ubicaciones anteriores
    }
  );
} else {
   // Manejar el caso en que la geolocalización no esté disponible
  console.error("La geolocalización no está disponible en este navegador.");
}


