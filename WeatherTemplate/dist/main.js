(()=>{const e=document.querySelector("form"),t=document.querySelector(".submit-btn"),n=document.querySelector(".error-msg");function o(t){t.preventDefault(),async function(t){const o=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${t}`,{mode:"cors"});400===o.status?(n.style.display="block",n.classList.contains("fade-in")?(n.style.display="none",n.classList.remove("fade-in2"),n.offsetWidth,n.classList.add("fade-in"),n.style.display="block"):n.classList.add("fade-in")):(n.style.display="none",function(e){const t=document.getElementsByClassName("info");Array.from(t).forEach((e=>{e.classList.contains("fade-in2")?(e.classList.remove("fade-in2"),e.offsetWidth,e.classList.add("fade-in2")):e.classList.add("fade-in2")})),document.querySelector(".condition").textContent=e.condition,document.querySelector(".location").textContent=`${e.location}, ${e.region}`,document.querySelector(".degrees").textContent=e.currentTemp.f,document.querySelector(".feels-like").textContent=`FEELS LIKE: ${e.feelsLike.f}`,document.querySelector(".wind-mph").textContent=`WIND: ${e.wind} MPH`,document.querySelector(".humidity").textContent=`HUMIDITY: ${e.humidity}`}(function(e){const t={condition:e.current.condition.text,feelsLike:{f:Math.round(e.current.feelslike_f),c:Math.round(e.current.feelslike_c)},currentTemp:{f:Math.round(e.current.temp_f),c:Math.round(e.current.temp_c)},wind:Math.round(e.current.wind_mph),humidity:e.current.humidity,location:e.location.name.toUpperCase()};return"United States of America"===e.location.country?t.region=e.location.region.toUpperCase():t.region=e.location.country.toUpperCase(),t}(await o.json())),e.reset())}(document.querySelector('input[type="text"]').value)}e.addEventListener("submit",o),t.addEventListener("click",o)})();