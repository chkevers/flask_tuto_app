// const linkTest = document.querySelector('#map')
// linkTest.addEventListener('click', function(e) {
//     e.preventDefault;
//     alert('Here we go')
// });


// Geomapping Leaflet

// navigator.geolocation.getCurrentPosition(function success(pos){
//     console.log(pos);
//     const {latitude: lat, longitude: lgt} = pos.coords;
//     console.log(lat, lgt);

//     let map  = L.map('map').setView([lat, lgt], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     L.marker([lat,lgt]).addTo(map)
//     .bindPopup('Hello, we are here.')
//     .openPopup();
// },

// function error(err) {
//     console.log(err);
// }
// )

// Geomapping Google Maps

function initMap() {
    let map = new google.maps.Map(document.getElementById('map-google'), {
        center: {lat: 50.85, lng: 4.34},
        zoom: 15,
    });
}
