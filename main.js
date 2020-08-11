$(document).ready(function () {
  var mainDiv = $("#main");
  var main1Div = $("#main1");
  var main2Div = $("#main2");
  var main3Div = $("#main3");
  var main4Div = $("#main4");
  var searchBtn = $("#button-addon2");
  var searchInput = $("#searchInput");

  var mainAjax = [];

  var queryURL = "https://api.openweathermap.org/data/2.5/";
  // var queryUVI =
  var apiKey = "&appid=84f82f417b1a12172cbd2e8e805152c8";

  searchBtn.click(function (event) {
    event.preventDefault();
    var q = "weather?q=" + searchInput.val().trim();
    console.log(q);

    $.ajax({
      url: queryURL + q + apiKey,
      method: "GET",
    }).then(function (result) {
      // Test to see what I'm retrieving from OWM
      console.log(result);
      // Variable to store temp
      var temp = (result.main.temp - 273.15) * 1.8 + 32;
      var h2Tag = $("<h2>");
      var pTag = $("<p>");
      var p2Tag = $("<p>");
      var p3Tag = $("<p>");
      var p4Tag = $("<p>");

      h2Tag.text(result.name);
      mainDiv.append(h2Tag);

      pTag.text("Current Temperature: " + temp.toFixed(2) + " \xB0" + "F");
      main1Div.append(pTag);

      p2Tag.text("Humidity: " + result.main.humidity + "%");
      main2Div.append(p2Tag);

      p3Tag.text("Wind Speed: " + result.wind.speed + " MPH");
      main3Div.append(p3Tag);

      mainAjax.push(result)
    });
    
    // var lat = "lat=" + result.coord.lat;
    // var lon = "lon=" + result.coord.lon;
    // $.ajax({
    //   url: queryURL + "uvi?" + lat + "&" + lon + apiKey,
    //   method: "GET",
    // }).then(function (result) {
    //   console.log(result);
    //   // p4Tag.text()
    // });
  });
});
