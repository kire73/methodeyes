/*
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + //"&type=accurate&appid=b5c8b31e26e1059175c7036fb21c94d9",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "json"
    },
  error: function(err){
    console.log(err);
  },
    success: function( response ) {
        console.log( response );
    }
});
*/
// The above are previous attempts to fix the getting of the json data, before realizing that it is the acquisition of location that is now being blocked. geolocation is no longer secure. This page will not load correctly until a method is found to replace .getCurrentPosition
/*
var nowwhat = [];
$.getJSON("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAMqQn7yS7A4Wj0A8cQ7kiXoyXzwgEFEtg", function(json){
  nowwhat = json;
  console.log(nowwhat);
})
*/

var degrees = "f";
var temp;
$("#convert").on("click", function() {
  if (degrees == "f") {
    $("#convert").html("Farenheit");
    degrees = "c";
  } else if (degrees == "c") {
    degrees = "f";
    $("#convert").html("Celsius");
  }
  if (degrees == "f") {
    $("#temp").html("<br><h3>Temperature:<br>F: " + Math.round(temp * 1.8 - 459.67) + "</h3>");
  } else if (degrees == "c") {
    $("#temp").html("<br><h3>Temperature:<br>C: " + Math.round(temp - 273.15) + "</h3>");
  }
});

var lat;
var lon;
var longitude;
var latitude;
var pos = [];

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  longitude = Math.round(lon);
  latitude = Math.round(lat);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&type=accurate&appid=b5c8b31e26e1059175c7036fb21c94d9", function(json) {
    pos = json;
    temp = pos.main["temp"];
    console.log(pos);

    $("#data").html("<p>" + "<br><h2>" + pos["name"] + "</h2><br><h3>" + pos.weather[0]["description"] + "</p><br><img src='http://openweathermap.org/img/w/" + pos.weather[0].icon + ".png' width='90px'>");

    if (degrees == "f") {
      $("#temp").html("<br><h3>Temperature:<br>F: " + Math.round(temp * 1.8 - 459.67) + "</h3>");
    } else if (degrees == "c") {
      $("#temp").html("<br><h3>Temperature:<br>C: " + Math.round(temp - 273.15) + "</h3>");
    }
  });
}, error);



//google api key: AIzaSyAMqQn7yS7A4Wj0A8cQ7kiXoyXzwgEFEtg

//http://api.openweathermap.org/data/2.5/weather?lat=34&lon=-119&appid=b5c8b31e26e1059175c7036fb21c94d9