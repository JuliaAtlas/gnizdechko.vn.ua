
const iconMenu = document.querySelector('.menu-btn');
const menuBody = document.querySelector('.header-menu');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}

function myMap() {
    var mapCanvas = document.querySelector(".map");
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}