import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'


const startCollect = document.getElementById('start');
const stopCollect = document.getElementById('stop');
const render = document.getElementById('render');
const status = document.getElementById('status');
const clear = document.getElementById('clear');
var id = -1;
var coordinate = [];

startCollect.addEventListener('click', () => {
    status.innerText = "Started";
    status.setAttribute("style", "color: green");

    id = navigator.geolocation.watchPosition((data) => {
        console.log("data: " + data);
        coordinate.push([data.coords.longitude, data.coords.latitude]);
        window.localStorage.setItem("data", JSON.stringify(coordinate));
    }, (error) => console.log(error)
, {
    enableHighAccuracy: true
})
})

stopCollect.addEventListener('click', () => {
    // navigator.geolocation.clearWatch(id);
    status.innerText = "Stopped";
    status.setAttribute("style", "color: red");
    id = -1;
})

render.addEventListener('click', renderMap);
clear.addEventListener('click', () => {
    window.localStorage.clear();
})
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpbmUtY2hhbmciLCJhIjoiY2tvODhkdGw3MXU2dDJ2bHJrNDZmNHp6ZSJ9.-cSgmT-mTMNGs-to2jNmAw';
function renderMap(){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [121.53646849999998,25.0190254],
        zoom: 15
    });
    
    map.on('load', function () {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': JSON.parse(window.localStorage.getItem('data')),
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
        });
    });
    
    
}
