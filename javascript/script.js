/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* HEADER *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
// Script para habilitar la apertura del menú desplegable con clic (en lugar de solo hover)
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.formacion');
    const dropdownContent = document.querySelector('.formacion-content');
    
    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Cierra el menú si se hace clic fuera
    window.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});




/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* FOOTER *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
//Mapa del Footer
let map = L.map("map").setView([43.358250, -5.508957], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Harimao Tao' //Podemos poner el título que queramos
}).addTo(map);

let popup = L.popup().setLatLng([43.358250, -5.508957]).setContent('<p>Harimao Tao<br>Calle la Colegiata, Nº 7 Nava (Asturias)<br>Teléfono móvil: 670 80 90 50</p>')


let marker = L.marker([43.358250, -5.508957]).bindPopup(popup).openPopup().addTo(map);