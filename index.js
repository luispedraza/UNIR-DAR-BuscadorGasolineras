// Evento del botón de recarga de datos
// TODO - 
const botonReload = document.getElementById("reload");
botonReload.addEventListener("click", () => {
    getFuelData(function(data) {
        updateTable(data, document.getElementById("tableBody"));
    });
    
})

// Evento del botón de filtrado por proximidad
const botonFilter = document.getElementById("filterByLocation");
botonFilter.addEventListener("click", () => {
    getCurrentLocation(function(location) {
        console.log(location);
        getFuelData(function(data) {
            // Distancias de las estaciones a posición actual.
            const dataWithDistance = data.map(function(d) {
                let dLat = location.latitude - parseFloat(d["Latitud"].replace(",", "."));
                let dLon = location.longitude - parseFloat(d["Longitud (WGS84)"].replace(",", "."));
                let distancia =  Math.sqrt(dLat*dLat + dLon*dLon);
                d["distancia"] = distancia;
                return d;
            })
            // Ordenamos las estaciones por distancia
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            dataWithDistance.sort(function(a, b) {
                return a["distancia"] < b["distancia"] ? -1 : 1;
            })
            // Finalmente, mostramos los 10 primeros elementos
            updateTable(dataWithDistance.slice(0,10), document.getElementById("tableBody"));
        })
    });
})