const currentDate = new Date();
console.log(currentDate);

/*editing changes to change title*/

const currentYear = currentDate.getFullYear();
console.log(currentYear);
document.getElementById("current-year").innerHTML = currentYear;

document.getElementById("last-modified").innerHTML = document.lastModified;

