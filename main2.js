$(document).ready(function () {
  var mainDiv = $("#main");
  var main1Div = $("#main1");
  var main2Div = $("#main2");
  var main3Div = $("#main3");
  var main4Div = $("#main4");
  var searchBtn = $("#button-addon2");
  var searchInput = $("#searchInput");

  var queryURL = "https://api.openweathermap.org/data/2.5/";

  var apiKey = "&appid=84f82f417b1a12172cbd2e8e805152c8";

//   if (localStorage.getItem(weather) === null) {
    searchBtn.click(function (event) {
      event.preventDefault();
      var q = "weather?q=" + searchInput.val().trim();
      console.log(q);

      var arrOfPromises = [];
      var url = queryURL + q + apiKey;
      // var url2 =  queryURL + "uvi?" + lat + "&" + lon + apiKey;

      // var lat = "lat=" + result.coord.lat;
      // var lon = "lon=" + result.coord.lon;
      arrOfPromises.push($.ajax({ url: url, method: "GET" }));
      console.log(arrOfPromises);
      var lat = arrOfPromises[0].responseText
      console.log(lat)
      // arrOfPromises.push($.ajax({url: url2, method: 'GET'}));

      // Promise.all(arrOfPromises).then(function(values){
      //   console.log( 'Ajax responses after they have all finished: ', values);
      // });
    });
//   } else {
//   }
});
