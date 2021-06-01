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

//1
  var date1 = moment().add(1, 'days').format('L');
  // console.log(date1);
  $("#fDate1").text(date1);

//2
  var date2 = moment().add(2, 'days').format('L');
  // console.log(date1);
  $("#fDate2").text(date2);

 //3 
  var date3 = moment().add(3, 'days').format('L');
  // console.log(date1);
  $("#fDate3").text(date3);

 //4 
  var date4 = moment().add(4, 'days').format('L');
  // console.log(date1);
  $("#fDate4").text(date4);

 //5 
  var date5 = moment().add(5, 'days').format('L');
  // console.log(date5);
  $("#fDate5").text(date5);

  // console.log(currentDate)

//This is what allows the search field to function on click.
  var searchField = $("#searchButton").on("click", getApi)
  var value = $(this).siblings('#search-input').val();
  // console.log(value);


  //Set local storage
  localStorage.setItem(searchField, value);


  // fetch request used imperial units to convert to usa standards 
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + value + '&units=imperial&appid=' + ApiKey;

  // var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + value + '&units=imperial&appid=' + ApiKey;


  // console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)


      //display city name, temperature, humidity, wind speed, and the weather image 
      // not displaying weather image and uv index (lat and lon are now console logging)

      var currentCityName = data.name
      var temp = data.main.temp + " °F"
      var humidity = data.main.humidity + " %"
      var wind = data.wind.speed + " MPH"
      var weatherImg = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      var latLon = data.coord;
      var cityId = data.id;







      // console.log(currentCityName);
      // console.log(temp);
      // console.log(humidity);
      // console.log(wind);
      // console.log(weatherImg);
      // console.log(latLon);
      // console.log(cityId);



      //display data from API in HTML using the .text method
      $("#current-city").text(currentCityName)
      $("#temperature").text(temp)
      $("#humidity").text(humidity)
      $("#wind-speed").text(wind)
      $("#current-img").attr('src', weatherImg);
      $("#city-search-history").text(currentCityName)

     


      //making the lat and lon coords to seperate them for the uvi index
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      


      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      //This is the one call that has all data in a single api call. the uv index is depricated so this is what the docs suggest. 
      fetch(
          'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=current,minutely,hourly,alerts&appid=1e9dda97d02056dc1ee084b9e12c91ed', 
          requestOptions
        )
        

        .then(function (response) {
          return response.json();
        })


        .then(function (data) {
          console.log(data);
          //1 
          var futureTemp1 = data.daily[0].temp.max
          $("#futureTemp1").text(futureTemp1)
          // console.log(data.daily[0].temp.max)
        

          var futureHumidity1 = data.daily[0].humidity
          $("#futureHumidity1").text(futureHumidity1)
          // console.log(data.daily[0].humidity)
          
          
          // var  = 'https://openweathermap.org/img/w/' +data.daily[0].weather[0].icon;
          // $("#fImg1").attr('src', futureImage1);
          // console.log(data.daily[0].weather[0].icon)

          var futureImage1= 'https://openweathermap.org/img/w/' + data.daily[0].weather[0].icon + '.png';
          $("#fImg1").attr('src', futureImage1);
          console.log(futureImage1)


          //2          
          var futureTemp2 = data.daily[1].temp.max
          $("#futureTemp2").text(futureTemp2)
          // console.log(data.daily[1].temp.max)

          var futureHumidity2 = data.daily[1].humidity
          $("#futureHumidity2").text(futureHumidity2)
          // console.log(data.daily[1].humidity)


          var futureImage2 = data.daily[1].weather[0].icon;
          $("#fImg2").attr('src', futureImage2);
          console.log(data.daily[1].weather[0].icon)

          //3
          var futureTemp3 = data.daily[2].temp.max
          $("#futureTemp3").text(futureTemp3)
          // console.log(data.daily[2].temp.max)

          var futureHumidity3 = data.daily[3].humidity
          $("#futureHumidity3").text(futureHumidity3)
          // console.log(data.daily[1].humidity)

          var futureImage3 = data.daily[2].weather[0].icon;
          $("#fImg3").attr('src', futureImage3);
          console.log(data.daily[2].weather[0].icon)

          //4
          var futureTemp4 = data.daily[3].temp.max
          $("#futureTemp4").text(futureTemp4)
          // console.log(data.daily[3].temp.max)

          var futureHumidity4 = data.daily[3].humidity
          $("#futureHumidity4").text(futureHumidity4)
          // console.log(data.daily[3].humidity)

          var futureImage4 = data.daily[3].weather[0].icon;
          $("#fImg4").attr('src', futureImage4);
          console.log(data.daily[3].weather[0].icon)

          //5
          var futureTemp5 = data.daily[4].temp.max
          $("#futureTemp5").text(futureTemp5)
          // console.log(data.daily[4].temp.max)

          var futureHumidity5 = data.daily[4].humidity
          $("#futureHumidity5").text(futureHumidity5)
          // console.log(data.daily[4].humidity)

          var futureImage5 = data.daily[4].weather[0].icon;
          $("#fImg5").attr('src', futureImage5);
          console.log(data.daily[4].weather[0].icon)





        })






    })
}


//Event Listener 
searchButton.addEventListener('click', getApi)