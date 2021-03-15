//Testing html link
console.log("JR full stack developer seeking employment! Contact me on github @paxton44 for any employment opportunities! I am finishing the Denver University coding boot camp in June 2021.");

//Api key 
var ApiKey = "6954046ca35cd79c3298ba9167dbb29f";



//get api function

function getApi(e) {
  e.preventDefault();
  // console.log("click");

  var searchField = $("#searchButton").on("click", getApi)
  var value = $(this).siblings('#search-input').val();
  console.log(value);

  //Set local storage
  localStorage.setItem(searchField, value);
  // console.log(localStorage);
  // console.log("<------------------------->");

  // fetch request used imperial units to convert to usa standards 
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + value + '&units=imperial&appid=' + ApiKey;
  // console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      //display city name, temperature, humidity, wind speed, and the weather image 
      // not displaying weather image and uv index 
     
      var currentCityName = data.name
      var temp = data.main.temp + " °F"
      var humidity = data.main.humidity + " %"
      var wind = data.wind.speed + " MPH"
      var weatherImg = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
     

      
      console.log(currentCityName);
      console.log(temp);
      console.log(humidity);
      console.log(wind);
      console.log(weatherImg);
     

      //display data from API in HTML using the .text method
      $("#current-city").text(currentCityName)
      $("#temperature").text(temp)
      $("#humidity").text(humidity)
      $("#wind-speed").text(wind)
      $("#current-img").attr('src', weatherImg);
      
      //UV index
      var lon = data.coord.lon
      var lat = data.coord.lat
      console.log(lon)
      console.log(lat)
    })
}



//5 day forecast using moment 
//We need to display weather icon, temp, and humidity. 

//Event Listener 
searchButton.addEventListener('click', getApi);
// console.log("<________________>");
// console.log(localStorage);

//display user history .text doest work on input forms

