const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1b50046f08bbcd80c7376317a6f66215";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector('#current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;

    document.querySelector('#imagesrc').textContent = imagesrc;
    document.querySelector('#weather-icon').setAttribute('src', imagesrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
  });