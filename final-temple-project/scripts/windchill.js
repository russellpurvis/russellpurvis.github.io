let f, t, s;
t = 50;
s = 10;

if (t <= 50 && s >=3) {
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275  * t * Math.pow(s, 0.16);
    
}
else{
    f = 'N/A';
    document.querySelector('#windChill').innerHTML = f;
}

document.querySelector('#current-temp').innerHTML =  `${t}&deg;`;
document.querySelector('#wind-speed').innerHTML = s + 'mph';
document.querySelector('#windChill').innerHTML = f.toFixed(0) +'&deg;';