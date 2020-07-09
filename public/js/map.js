const mymap = L.map('mapid').setView([0, 0], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXZhbjIwMDMiLCJhIjoiY2thNnAxNGs4MDk2NDJ4bDdzNHNhM2dkaSJ9.ARDc4iFyULwkRQfiVZ4hAg'
}).addTo(mymap);


function onMapmark(e) {
    var marker = L.marker().setLatLng(e.latlng)
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup().addTo(mymap);


}

mymap.on('click', onMapmark);