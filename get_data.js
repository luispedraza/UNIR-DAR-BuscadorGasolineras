const DATA_URL = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/"

/**
* Función que obtiene los datos de precios
* En este ejemplo obtenemos los datos de manera asíncrona
*/
function getFuelData(callback) {
    var requestURL = DATA_URL;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    
    request.onload = function () {
        console.log(request.response);
        callback(request.response.ListaEESSPrecio);
    };
}