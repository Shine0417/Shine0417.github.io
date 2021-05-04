import "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js";

const render = document.getElementById("render");
render.addEventListener("click", renderMap);
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hpbmUtY2hhbmciLCJhIjoiY2tvODhkdGw3MXU2dDJ2bHJrNDZmNHp6ZSJ9.-cSgmT-mTMNGs-to2jNmAw";
var coordinates = [
  [121.48707499999999, 25.059655, 0],
  [121.48707499999999, 25.059655, 0],
  [121.48707499999999, 25.059655, 0],
  [121.4866268, 25.0620483, 0],
  [121.4873388, 25.061735, 0],
  [121.4879696, 25.0615303, 0],
  [121.4889047, 25.0613789, 0],
  [121.4898924, 25.0611375, 0],
  [121.4898924, 25.0611375, 0],
  [121.4898924, 25.0611375, 0],
  [121.4898924, 25.0611375, 0],
  [121.4903613, 25.0603316, 0],
  [121.4907987, 25.0599023, 0],
  [121.4909081, 25.0597069, 0],
  [121.4909362, 25.0596082, 0],
  [121.49097505349819, 25.059598572764585, 0],
  [121.49207919999999, 25.060142799999998, 0],
  [121.49097505349819, 25.059598572764585, 0],
  [121.4912065, 25.0595935, 0],
  [121.5004328, 25.0628815, 0],
  [121.5129758, 25.0632511, 0],
  [121.5192109, 25.0627424, 0],
  [121.5291527, 25.0339585, 0],
  [121.522521, 25.0269593, 0],
  [121.5232011, 25.0261599, 0],
  [121.5280534, 25.020797, 0],
  [121.5345473, 25.0146304, 0],
  [121.5343172, 25.0148974, 0],
  [121.5340372, 25.0152138, 0],
  [121.5353102, 25.0152907, 0],
  [121.5353622, 25.0163243, 0],
  [121.5365384, 25.0191152, 0],
  [121.5375783, 25.018795500000003, 0],
  [121.5375783, 25.018795500000003, 0],
  [121.53975179999999, 25.0173405, 0],
  [121.5375783, 25.018795500000003, 0],
  [121.5375783, 25.018795500000003, 0],
  [121.5415414, 25.019377, 0],
  [121.5380878, 25.0184097, 0],
  [121.5374458, 25.0184567, 0],
  [121.5368708, 25.0183989, 0],
  [121.532808, 25.0196837, 0],
  [121.53286699999998, 25.0198093, 0],
  [121.53286699999998, 25.0198093, 0],
  [121.532867, 25.0198093, 0],
  [121.53286699999998, 25.0198093, 0],
  [121.53286699999998, 25.0198093, 0],
  [121.5328297, 25.0196739, 0],
  [121.5344257, 25.0183285, 0],
  [121.5371271, 25.021304, 0],
  [121.53665723756205, 25.018868399398738, 0],
  [121.53665723756205, 25.018868399398738, 0],
  [121.53975179999999, 25.0173405, 0],
  [121.53665723756205, 25.018868399398738, 0],
  [121.53665723756205, 25.018868399398738, 0],
  [121.5363493, 25.0189549, 0],
  [121.5350801, 25.0172064, 0],
  [121.5353972, 25.0152853, 0],
  [121.5346957, 25.0136817, 0],
  [121.5346957, 25.0136817, 0],
  [121.5346957, 25.0136817, 0],
  [121.5346957, 25.0136817, 0],
  [121.5346957, 25.0136817, 0],
  [121.5346575, 25.0142439, 0],
  [121.5363684, 25.0124491, 0],
  [121.5210699, 25.0014045, 0],
  [121.5210699, 25.0014045, 0],
  [121.5210699, 25.0014045, 0],
  [121.5210699, 25.0014045, 0],
  [121.5210699, 25.0014045, 0],
  [121.5212191, 25.0015229, 0],
  [121.5218726, 25.0026669, 0],
  [121.5217952, 25.0027142, 0],
  [121.521799, 25.0027312, 0],
  [121.5224677, 25.0028332, 0],
  [121.5225062, 25.0028031, 0],
  [121.5225036, 25.002811, 0],
  [121.5225042, 25.002801, 0],
  [121.5286147, 25.0070921, 0],
  [121.537123, 25.0110386, 0],
  [121.5279728, 25.0208435, 0],
  [121.5207087, 25.0295172, 0],
  [121.5191024, 25.0400011, 0],
  [121.5188123, 25.0418479, 0],
  [121.5189441, 25.0417103, 0],
  [121.5189968, 25.0432096, 0],
  [121.5232205, 25.0447631, 0],
  [121.5194495, 25.0452897, 0],
  [121.5191933, 25.0447786, 0],
  [121.519248, 25.0447699, 0],
  [121.5138982, 25.0473161, 0],
  [121.4903035, 25.0579865, 0],
  [121.4842222, 25.0616045, 0],
  [121.4834797, 25.061739, 0],
  [121.4836322, 25.0615658, 0],
  [121.4842143, 25.0615452, 0],
  [121.484112, 25.0612441, 0],
  [121.4842982, 25.0612942, 0],
  [121.4844757, 25.0615533, 0],
  [121.4845639, 25.0615906, 0],
  [121.4847693, 25.0616344, 0],
  [121.4857767, 25.0615371, 0],
  [121.4867477, 25.0620728, 0],
  [121.4867477, 25.0620728, 0],
  [121.4867477, 25.0620728, 0],
];

function renderMap() {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [121.486701, 25.0619384],
    zoom: 15,
  });

  map.on("load", function () {
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinates,
        },
      },
    });
    map.addSource("places", {
      // This GeoJSON contains features that include an "icon"
      // property. The value of the "icon" property corresponds
      // to an image in the Mapbox Streets style's sprite.
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              description:
                '<p>At Home</p><TimeSpan><begin>2021-05-02T13:42:59.963Z</begin><end>2021-05-02T13:42:59.963Z</end></TimeSpan><img src="https://i.imgur.com/bQIbZVl.jpg" style="width: 200px"></img>',
              icon: "theatre-15",
            },
            geometry: {
              type: "Point",
              coordinates: [121.486701, 25.0619384],
            },
          },
        ],
      },
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
      },
    });

    map.addLayer({
      id: "places",
      type: "symbol",
      source: "places",
      layout: {
        "icon-image": "{icon}",
        "icon-allow-overlap": true,
      },
    });

    map.on("click", "places", function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    map.on("mouseenter", "route", function (e) {
        console.log("mouseover")
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
  
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
  
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });
  });
}
