const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);
document.getElementById("current-year").innerHTML = currentYear;

document.getElementById("last-modified").innerHTML = document.lastModified;

