/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* MAIN CONTACTO *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
//Mapa del Contacto

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(sucess, error, options);
}else{
    alert("Los servicios de geolocalización no están disponibles");
}

function sucess(position){
    let latitude = position.coords.latitude;
    let longitud = position.coords.longitude;

    let mapContacto = L.map("mapContacto", {
        center: [latitude, longitud],
        zoom: 15
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Harimao Tao'
    }).addTo(mapContacto);

    let inicio = L.icon({ //Aquí tenemos que meter los datos del icono
        iconUrl: './assets/img/contacto/Icono_rojo_2.png',
        iconSize: [35, 50],  //Tamaño, si tiene sombre todo por dos
        iconAnchor: [15, 50],   //Para centrar el icono
        popupAnchor: [-3, -76]
    });

    let final = L.icon({ //Aquí tenemos que meter los datos del icono
        iconUrl: './assets/img/contacto/Icono_verde_2.png',
        iconSize: [35, 50],  //Tamaño, si tiene sombre todo por dos
        iconAnchor: [22,50],   //Para centrar el icono
        popupAnchor: [-3, -76]
    });
    let track = L.icon({ //Aquí tenemos que meter los datos del icono
        iconUrl: './assets/img/contacto/Icono_azul.png',
        iconSize: [35, 50],  //Tamaño, si tiene sombre todo por dos
        iconAnchor: [15, 50],   //Para centrar el icono
        popupAnchor: [-3, -76]
    });

    let control = L.Routing.control({
        waypoints: [
            L.latLng(43.358250, -5.508957),
            L.latLng(latitude, longitud)
        ],
        language: 'es',
        createMarker: function(i, wp, nwps){
            switch(i){
                case 0:
                    return L.marker(wp.latLng, {icon:inicio, draggable:true}).bindPopup("Inicio");
                case nwps-1:
                    return L.marker(wp.latLng, {icon:final, draggable:true}).bindPopup("Final");
                default:
                    return L.marker(wp.latLng, {icon:track, draggable:true}).bindPopup("Camino");
            }
        }
    }).addTo(mapContacto)
}

function error(){
    let mapContacto = L.map("mapContacto").setView([43.358250, -5.508957], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Harimao Tao' //Podemos poner el título que queramos
    }).addTo(mapContacto);

    let popupContacto = L.popup().setLatLng([43.358250, -5.508957]).setContent('<p>Harimao Tao<br>Calle la Colegiata, Nº 7 Nava (Asturias)<br>Teléfono móvil: 670 80 90 50</p>')


    let markerContacto = L.marker([43.358250, -5.508957]).bindPopup(popupContacto).openPopup().addTo(mapContacto);
}