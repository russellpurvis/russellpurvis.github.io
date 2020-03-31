/*date Wednesday, 20 May 2020*/



//declare date variable
let currentDate = new Date();
let fullDate;


// day of week
let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayOfWeek = currentDate.getDay();

fullDate = daysOfWeek[dayOfWeek];





// day of month

let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;


//month
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
fullDate += ' ' + months[currentDate.getMonth()];



//year
let year = currentDate.getFullYear();
fullDate += ' ' + year;


//full date

document.querySelector('#current-date').textContent = fullDate;

/* Hamburger*/


const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}


//pancake
const aside = document.querySelector('aside');

if(currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
else {
    aside.style.display = 'none';
}

/* Font Loader*/

WebFont.load({
    google: {
      families: [
        'Libre Baskerville',
         'Mukta'
      ]
    }
  });


function getCurrentWeather(cityId) {

// hero weather data
const apiURL = "https://api.openweathermap.org/data/2.5/weather?idd=" + cityId + "&appid=1b50046f08bbcd80c7376317a6f66215&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector('#current-temp').innerHTML = jsObject.main.temp.toFixed(0) + '&deg;' + 'F';
    document.querySelector('#wind-speed').innerHTML = jsObject.wind.speed.toFixed(0) + 'mph';
    document.querySelector('#humidity').innerHTML = jsObject.main.humidity + '&percnt;';

    let windChill = 0;

    if (jsObject.main.temp < 50 && jsObject.wind.speed > 3) {
    windChill = 35.74 + 0.6215 * jsObject.main.temp - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * jsObject.main.temp * 
        Math.pow(jsObject.wind.speed, 0.16);
    }

    if (windChill === 0) {
        document.querySelector('#windChill').innerHTML = 'N/A';
    }
    else {
        document.querySelector('#windChill').innerHTML = windChill.toFixed(2) + '&deg;';
    }
    
    document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;
    let imgURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    document.querySelector('#weatherImg').setAttribute('src', imgURL);
    document.querySelector('#weatherImg').setAttribute('alt', jsObject.weather[0].main);
  });
}

function getFiveDayForecast(cityId) {

  // five day forecast data
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=1b50046f08bbcd80c7376317a6f66215&units=imperial";

fetch(apiURL2)
  .then((response) => response.json())
  .then(
    jsObject => {
        let counter = 1;
        jsObject.list.forEach(
            forecast => {
                if(forecast.dt_txt.includes('18:00')) {
                    let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                    let dayOfWeek = daysOfWeek[forecastDate.getDay()];
                    let imageURL = 'https://openweathermap.org/img/w/' + jsObject.list[counter].weather[0].icon + '.png';

                    document.querySelector(`#day${counter}`).innerHTML = dayOfWeek;

                    document.querySelector(`#temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg;' + 'F';

                    document.querySelector(`#img${counter}`).setAttribute('src', imageURL);

                    counter++;
                }
            }
        );
    }
  );
}

  // adjust rating
function adjustRating(rating) {
    document.querySelector('#rating').textContent = rating;
}