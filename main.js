var dashboardDiv = $("#dashboard");
var searchBtn = $("#button-addon2");
var searchInput = $("#searchInput");

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=84f82f417b1a12172cbd2e8e805152c8";

searchBtn.click(function () {
  var q = searchInput.val().trim();
  console.log(q);

  $.ajax({
    url: queryURL + q + apiKey,
    method: "GET",
  }).then(function (result) {
    // Test to see what I'm retrieving from OWM
    console.log(result);
    // Variable to store temp
    var temp = (result.main.temp - 273.15) * 1.8 + 32
    dashboardDiv.text(temp.toFixed(2))
    var pTag = $("<p>")
    pTag.text("Humidity: " + result.main.humidity + "%")
    dashboardDiv.append(pTag)
  });
});
