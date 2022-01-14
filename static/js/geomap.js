// const linkTest = document.querySelector('#map')
// linkTest.addEventListener('click', function(e) {
//     e.preventDefault;
//     alert('Here we go')
// });


// Geomapping

navigator.geolocation.getCurrentPosition(function success(pos){
    console.log(pos);
    const {latitude: lat, longitude: lgt} = pos.coords;
    console.log(lat, lgt);

    let map  = L.map('map').setView([lat, lgt], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat,lgt]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
},

function error(err) {
    console.log(err);
}
)