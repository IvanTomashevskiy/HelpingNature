const popup = document.querySelector('#popupEdit');
const popupCloseBtn = document.querySelector('.popup__close');
let cord =  document.querySelector('#iiii')
const mymap = L.map('mapid').setView([55.7522200, 37.6155600], 10);
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
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup().addTo(mymap);
    cord.value = e.latlng.toString()
    console.log(e.latlng.toString())
}

function mapPopupOpen(){
    popup.classList.add('popup_is-opened')
}

function mapPopupClose(){
    popup.classList.remove('popup_is-opened')
}


mymap.on('click', mapPopupOpen);

popupCloseBtn.addEventListener('click', mapPopupClose);

mymap.on('click', onMapmark);
