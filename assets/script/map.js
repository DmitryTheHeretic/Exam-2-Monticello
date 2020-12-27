function initMap() {}

initMap = function() {
  let myLatLng = { lat: 46.64798304, lng: 32.63328588 };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
    disableDefaultUI: false,
    mapTypeControl: true
  });
};
