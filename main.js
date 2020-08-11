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
      var lat = "&lat=" + result.coord.lat;
      var lon = "&lon=" + result.coord.lon;
      console.log(lat);
      console.log(lon);
      $.ajax({
        url: queryURL + "uvi?" + apiKey + lat + lon,
        method: "GET",
      }).then(function (uvi) {
        main4Div.text("UV Index: " + uvi.value);
      });
      // Variable to store temp
      var temp = (result.main.temp - 273.15) * 1.8 + 32;

      mainDiv.text(result.name);

      main1Div.text("Current Temperature: " + temp.toFixed(2) + " \xB0" + "F");

      main2Div.text("Humidity: " + result.main.humidity + "%");

      main3Div.text("Wind Speed: " + result.wind.speed + " MPH");

      var newListItem = $("<li>").text(result.name)
      newListItem.addClass("list-group-item")
      $("ul").append(newListItem)

      searchInput.val("")
    });

    $.ajax({
      url: queryURL + "forecast?q=" + q + apiKey,
      method: "GET",
    }).then(function (result) {
      console.log(result);
      var iconURL = "http://openweathermap.org/img/wn/"
      var iconEnding = "@2x.png"

      var forecast = (result.list[0].main.temp - 273.15) * 1.8 + 32;
      $("#f1").text(result.list[0].dt_txt);
      $("#t1").text("Temp: " + forecast.toFixed(2) + " \xB0" + "F");
      $("#humid1").text("Humidity: " + result.list[0].main.humidity + "%")
      $("#icon1").attr("src", iconURL + result.list[0].weather[0].icon + iconEnding)

      var forecast2 = (result.list[8].main.temp - 273.15) * 1.8 + 32;
      $("#f2").text(result.list[8].dt_txt);
      $("#t2").text("Temp: " + forecast2.toFixed(2) + " \xB0" + "F");
      $("#humid2").text("Humidity: " + result.list[8].main.humidity + "%")
      $("#icon2").attr("src", iconURL + result.list[8].weather[0].icon + iconEnding)

      var forecast3 = (result.list[16].main.temp - 273.15) * 1.8 + 32;
      $("#f3").text(result.list[16].dt_txt);
      $("#t3").text("Temp: " + forecast3.toFixed(2) + " \xB0" + "F");
      $("#humid3").text("Humidity: " + result.list[16].main.humidity + "%")
      $("#icon3").attr("src", iconURL + result.list[16].weather[0].icon + iconEnding)

      var forecast4 = (result.list[24].main.temp - 273.15) * 1.8 + 32;
      $("#f4").text(result.list[24].dt_txt);
      $("#t4").text("Temp: " + forecast4.toFixed(2) + " \xB0" + "F");
      $("#humid4").text("Humidity: " + result.list[24].main.humidity + "%")
      $("#icon4").attr("src", iconURL + result.list[24].weather[0].icon + iconEnding)

      var forecast5 = (result.list[32].main.temp - 273.15) * 1.8 + 32;
      $("#f5").text(result.list[32].dt_txt);
      $("#t5").text("Temp: " + forecast5.toFixed(2) + " \xB0" + "F");
      $("#humid5").text("Humidity: " + result.list[32].main.humidity + "%")
      $("#icon5").attr("src", iconURL + result.list[32].weather[0].icon + iconEnding)

    });
  });
});