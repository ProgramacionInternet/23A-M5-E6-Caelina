var counter = 1;
var intervalId = setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 3000);

var radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('click', function() {
        clearInterval(intervalId);
        counter = parseInt(this.id.replace('radio', ''));
        intervalId = setInterval(function() {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4) {
                counter = 1;
            }
        }, 3000);
    });
});


// API local

// Verificar si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition(
      function(position) {
        // Obtener las coordenadas de la ubicación
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        // Hacer algo con las coordenadas de la ubicación
        console.log("Latitud: " + latitude);
        console.log("Longitud: " + longitude);
      },
      function(error) {
        // Manejar errores en la obtención de la ubicación
        console.error("Error en la obtención de la ubicación: " + error.message);
      }
    );
  } else {
    // Manejar el caso en que la geolocalización no esté disponible
    console.error("La geolocalización no está disponible en este navegador.");
  }
  


