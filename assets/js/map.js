---
---

(function($) {


    var map = L.map('map').setView([48.22023742827497, 14.420563477647637], 15);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
    }).addTo(map);
    
    map.scrollWheelZoom.disable();
    
    // var popup = L.popup()
    //     .setLatLng([48.36936535443323, 14.513704089483294])
    //     .setContent("Softwarepark Hagenberg")
    //     .openOn(map);
    
    L.marker([48.22023742827497, 14.420563477647637]).addTo(map)
        .bindPopup('Öffentliche Bibliothek Asten<br/>Marktplatz 1<br/>4481 Asten'
        + '<br/><br/><a target="_blank" href="https://www.google.com/maps/dir//Marktpl.+1,+4481+Asten/@48.2199105,14.4209009,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4773bbe452e1f383:0x5631eeb7f21c722!2m2!1d14.4209009!2d48.2199105!3e0">Route hierin (Google Maps)</a>');
        // .openPopup();
    
})(jQuery);
