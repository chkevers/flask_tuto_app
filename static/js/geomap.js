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

    let valdor = {lat: 50.8369189, lng: 4.4250342};
    let map = new google.maps.Map(document.getElementById('map-google'), {
        center: valdor,
        zoom: 18,
    });

    let marker = new google.maps.Marker({
        position: valdor,
        map: map,
        draggable: true,
        title: "We are at Val d'Or house",
    });

    let info = new google.maps.InfoWindow({
        content: "Bip Bip ?"
    });

    marker.addListener("click", () => {
        info.open({
            anchor: marker,
            map: map,
            shouldFocus: false,
        });
    });
}
