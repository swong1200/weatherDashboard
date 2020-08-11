$(document).ready(function () {
  var mainDiv = $("#main");
  var main1Div = $("#main1");
  var main2Div = $("#main2");
  var main3Div = $("#main3");
  var main4Div = $("#main4");
  var searchBtn = $("#button-addon2");
  var searchInput = $("#searchInput");

  

  var queryURL = "https://api.openweathermap.org/data/2.5/";
  // var queryUVI =
  var apiKey = "&appid=84f82f417b1a12172cbd2e8e805152c8";

  searchBtn.click(function (event) {
    event.preventDefault();
    var q = searchInput.val().trim();
    console.log(q);

    $.ajax({
      url: queryURL + "weather?q=" + q + apiKey,
      method: "GET",
    }).then(function (result) {
      // Test to see what I'm retrieving from OWM
      console.log(result.coord);
      var lat = "&lat=" + result.coord.lat
      var lon = "&lon=" + result.coord.lon
      console.log(lat)
      console.log(lon)
      $.ajax({
        url: queryURL + "uvi?" + apiKey + lat + lon,
        method: "GET",
      }).then(function(uvi){
        main4Div.text("UV Index: " + uvi.value)
      })
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

      
    });


    $.ajax({
      url: queryURL + "forecast?q=" + q + apiKey,
      method: "GET",
    }).then(function (result) {
      console.log(result);

      
      var forecast = (result.list[0].main.temp - 273.15) * 1.8 + 32;
      $("#t1").text(forecast.toFixed(2))
      var forecast2 = (result.list[8].main.temp - 273.15) * 1.8 + 32;
      $("#t2").text(forecast2.toFixed(2))
      var forecast3 = (result.list[16].main.temp - 273.15) * 1.8 + 32;
      $("#t3").text(forecast3.toFixed(2))
      var forecast4 = (result.list[24].main.temp - 273.15) * 1.8 + 32;
      $("#t4").text(forecast4.toFixed(2))
      var forecast5 = (result.list[32].main.temp - 273.15) * 1.8 + 32;
      $("#t5").text(forecast5.toFixed(2))
      
    });
  });
});
