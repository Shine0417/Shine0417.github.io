const startCollect = document.getElementById('start');
const stopCollect = document.getElementById('stop');
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

clear.addEventListener('click', () => {
    window.localStorage.clear();
    coordinate = [];
})