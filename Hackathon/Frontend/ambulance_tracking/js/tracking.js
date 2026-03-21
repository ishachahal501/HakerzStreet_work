import { db, ref, onValue } from './firebase.js';

let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 0, lng: 0 }
    });

    const ambulanceRef = ref(db, 'ambulances/AMB001');

    onValue(ambulanceRef, (snapshot) => {
        const data = snapshot.val();

        if (!data) return;

        const position = {
            lat: data.lat,
            lng: data.lng
        };

        if (!marker) {
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: "Ambulance"
            });
        } else {
            marker.setPosition(position);
        }

        map.setCenter(position);
    });
}

window.onload = initMap;