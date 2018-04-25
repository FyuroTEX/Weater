/*
function getWeather(callback) {
    $.ajax({
      dataType: "jsonp",
      url: 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139',
      success: callback
    });
}

// get data:
getWeather(function (data) {
    console.log('weather data received');
    console.log(data.weather[0].description);
    console.log(data.weather[0].main);
});
*/
$(document).ready(function() {

      var weather;
        var temperature;
      function getTemp(callback) {

        $.ajax({
          dataType: 'jsonp',
          url: 'https://fcc-weather-api.glitch.me/api/current?lat=50&lon=30',

          success: callback
        });
}
        getTemp(function(data) {
weather = data.weather[0].description;
temperature = data.main.temp;
$('#temp').text(data.main.temp + "°C");
$('.city').text(data.name);
$('#sky').html(weather + '<img src="'+ data.weather[0].icon + '">')
          console.log('weather data received');
          console.log(data.weather[0].description);
          console.log(data.weather[0].main);

        });


    $('#getQuote').on('click', function(event) {
      event.preventDefault;

getTemp();

    alert(weather);
    alert(temperature);

    });
    });
