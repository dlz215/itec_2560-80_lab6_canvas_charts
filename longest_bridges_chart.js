let chartCanvas = document.querySelector('#bridges-chart')
let ctx = chartCanvas.getContext('2d')

// Create new bar chart. Y axis is labeled 'Meters' for bridge span.
let bridgesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [
            {
                label: 'Meters',
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    },
    options: {}
})

// Import list of bridge data from bridges.js file
import {bridges} from "./bridges";

// For each bridge object in the bridges array, add the bridge span to the chart data array and add
// the bridge name to the chart labels array.
bridges.forEach(function(bridge) {
    bridgesChart.data.datasets[0].data.push(bridge.meters)
    bridgesChart.data.labels.push(bridge.name)
    bridgesChart.update()
})


