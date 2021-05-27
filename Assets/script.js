//Testing html link
console.log("JR full stack developer seeking employment! Contact me on github @paxton44 for any employment opportunities! I am finishing the Denver University coding boot camp in June 2021.");

//Api key 
var ApiKey = "6954046ca35cd79c3298ba9167dbb29f";

var citySearched = '';

var citySearchedHistory = [];



//get api function

function getApi(e) {
  e.preventDefault();
  // console.log("click");
  //moment date for current day and 5 day forecast
  var currentDate = moment().format('L');
  $("#current-date").text(currentDate);
  var date1 = moment().add(1, 'days').format('L');
  var date2 = moment().add(2, 'days').format('L');
  var date3 = moment().add(3, 'days').format('L');
  var date4 = moment().add(4, 'days').format('L');
  var date5 = moment().add(5, 'days').format('L');

  console.log(currentDate)

  var searchField = $("#searchButton").on("click", getApi)
  var value = $(this).siblings('#search-input').val();
  // console.log(value);
  

  //Set local storage
  localStorage.setItem(searchField, value);
 

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
      // not displaying weather image and uv index (lat and lon are now console logging)

      var currentCityName = data.name
      var temp = data.main.temp + " °F"
      var humidity = data.main.humidity + " %"
      var wind = data.wind.speed + " MPH"
      var weatherImg = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      var uvIndex = data.coord; 



      console.log(currentCityName);
      console.log(temp);
      console.log(humidity);
      console.log(wind);
      console.log(weatherImg);
      console.log(uvIndex);


      //display data from API in HTML using the .text method
      $("#current-city").text(currentCityName)
      $("#temperature").text(temp)
      $("#humidity").text(humidity)
      $("#wind-speed").text(wind)
      $("#current-img").text(weatherImg);
      $("#current-img").text(weatherImg);

      $("#city-search-history").text(currentCityName)
      


    
    
     

    })
}


//Event Listener 
searchButton.addEventListener('click', getApi)
