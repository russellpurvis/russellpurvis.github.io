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


/* Font Loader*/

WebFont.load({
    google: {
      families: [
        'Libre Baskerville',
         'Mukta'
      ]
    }
  });
  
document.querySelector('#current-temp').innerHTML = temp + '&deg;'; //'50&deg;'
document.querySelector('#wind-speed').innerHTML = windSpeed + 'mph'; //'10mph'
document.querySelector('#humidity').innerHTML = '40&percnt;';

// adjust rating
function adjustRating(rating) {
    document.querySelector('#rating').textContent = rating;
}