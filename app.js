import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpbmUtY2hhbmciLCJhIjoiY2tvODhkdGw3MXU2dDJ2bHJrNDZmNHp6ZSJ9.-cSgmT-mTMNGs-to2jNmAw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [121.53669, 25.0188526],
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
                'coordinates': [[121.5364634,25.019013599999997]
                ,[121.5364634,25.019723699999997]
                ,[121.5369635,25.019923699999997]
                ,[121.5369635,25.019923699999997]],
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

