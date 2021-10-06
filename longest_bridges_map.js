// Import bridges data from bridges.js
import {bridges} from "./bridges.js";

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

// Create bridge icon
var regularBridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [40, 40],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
});

// Create icon for longest bridge
var longestBridgeIcon = L.icon({
    iconUrl: 'green_bridge.png',
    iconSize: [40, 40],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
});

let longestBridgeName = ''
let longestBridgeSpan = 0

// Find longest bridge and store name of longest bridge in variable
bridges.forEach(function(bridge) {
    if (bridge.meters > longestBridgeSpan) {
        longestBridgeSpan = bridge.meters
        longestBridgeName = bridge.name
    }
})

// For each bridge object in bridges array, create a marker at the location of the bridge coordinates.
// Add a pop-up label to each marker with the bridge name and span.
bridges.forEach(function (bridge) {
    let markerText = `${bridge.name}<br>${bridge.meters} meters`
    // Check if name of current bridge equals name of longest bridge
    // If so, use longest bridge icon instead of regular bridge icon
    if (bridge.name != longestBridgeName) {
        L.marker(bridge.coordinates, {icon: regularBridgeIcon}).bindPopup(markerText).addTo(map)
    } else {
        L.marker(bridge.coordinates, {icon: longestBridgeIcon}).bindPopup(markerText).addTo(map)
    }
})


