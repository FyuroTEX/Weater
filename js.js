var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var weather;
var temperature;
var cloudsimg;

$(document).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function getWeather(lat, lon) {
    var urlString = api + lat + "&" + lon;
    $.ajax({
      url: urlString,
      success: function(data) {

        weather = data.weather[0].description;
        temperature = data.main.temp;
        cloudsimg = data.weather[0].icon;
        $('#temp').text(data.main.temp + "°C");
        $('.city').text(data.name);
        cloudsimg ? $('#sky').html(weather + '<img src="' + cloudsimg + '">') :
          $('#sky').html(weather + ' ' + '<i class="fas fa-cloud"></i>');
      }
    });
  }
});
