
/**
* Función que obtiene la posición actual co la API del navegador
* https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction
* https://developer.mozilla.org/es/docs/Web/API/Geolocation
* 
*/
const getCurrentLocation = (callback) => {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(
            `Latitud actual: ${position.coords.latitude}`,
            `Longitud actual: ${position.coords.longitude}`
        );
        callback(position.coords);
    });
}