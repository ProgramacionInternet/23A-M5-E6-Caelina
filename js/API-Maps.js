function iniciarMap(){
    var coordenadas = {lat: 20.654861, lng: -103.32545};
    var map = new google.maps.Map(document.getElementById("map"),{
        center: coordenadas,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });
}