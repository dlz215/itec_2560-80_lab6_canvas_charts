// Coordinates of "center" of US (Northwest Kansas)
let centerUSCoords = [39.67029035031869, -95.9083503557999]
// Appropriate zoom level to display entire US
let zoomLevel = 5

// Create new Leaflet object
let map = L.map('bridges-map').setView(centerUSCoords, zoomLevel)

// Add tiles to Leaflet object
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

// Import bridges data from bridges.js
import {bridges} from "./bridges";

// For each bridge object in bridges array, create a marker at the location of the bridge coordinates.
// Add a pop-up label to each marker with the bridge name and span.
bridges.forEach(function (bridge) {
    let markerText = `${bridge.name}<br>${bridge.meters} meters`
    L.marker(bridge.coordinates).bindPopup(markerText).addTo(map)
})


