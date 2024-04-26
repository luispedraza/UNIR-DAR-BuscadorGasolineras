/**
* Actualiza la información de una tabla con los datos obtenidos
*/
function updateTable(data, tableBody) {
    // limpiamos el contenido actual:
    tableBody.innerHTML = "";

    // TODO: Adaptar utilizando la librería jQuery
    for (let i = 0; i < data.length; i++) {
        let stationData = data[i];
        let row = document.createElement("tr");
        // Información de la provincia
        let provinciaElement = document.createElement("td");
        provinciaElement.textContent = stationData["Provincia"];
        row.appendChild(provinciaElement)
        // Información de la localidad
        let localidadElement = document.createElement("td");
        localidadElement.textContent = stationData["Localidad"];
        row.appendChild(localidadElement)
        // Información del Municipio
        let municipioElement = document.createElement("td");
        municipioElement.textContent = stationData["Municipio"];
        row.appendChild(municipioElement)
        // Información de la dirección
        let direccionElement = document.createElement("td");
        direccionElement.textContent = stationData["Dirección"];
        row.appendChild(direccionElement)
        // Precio de la gasolina 95
        let precioG95Element = document.createElement("td");
        precioG95Element.textContent = stationData["Precio Gasolina 95 E5"];
        row.appendChild(precioG95Element)
        // Precio de la gasolina 95
        let precioGAElement = document.createElement("td");
        precioGAElement.textContent = stationData["Precio Gasoleo A"];
        row.appendChild(precioGAElement)
        // Insertamos la fila
        tableBody.appendChild(row);
    }
}