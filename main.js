const api = {
  key: "47565c36b1ae790edaaab516d353090e",
  base: "https://api.openweathermap.org/data/2.5/",
};
//generate your own id

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);
//13 number of button "enter"
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.city.name}, ${weather.city.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.list[0].main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = `${weather.list[0].weather[0].main}`;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(
    weather.list[0].main.temp_min
  )}°c / ${Math.round(weather.list[0].main.temp_max)}°c`;

  //cards

  let date2 = document.querySelector(".card .date2");
  date2.innerText = dateBuilder2(now);

  let temp2 = document.querySelector(".card .temp2");
  temp2.innerHTML = `${Math.round(weather.list[1].main.temp)}<span>°c</span>`;

  let weather_el2 = document.querySelector(".card .weather2");
  weather_el2.innerText = `${weather.list[1].weather[0].main}`;

  let date3 = document.querySelector(".card .date3");
  date3.innerText = dateBuilder3(now);

  let temp3 = document.querySelector(".card .temp3");
  temp3.innerHTML = `${Math.round(weather.list[2].main.temp)}<span>°c</span>`;

  let weather_el3 = document.querySelector(".card .weather3");
  weather_el3.innerText = `${weather.list[2].weather[0].main}`;

  let date4 = document.querySelector(".card .date4");
  date4.innerText = dateBuilder4(now);

  let temp4 = document.querySelector(".card .temp4");
  temp4.innerHTML = `${Math.round(weather.list[3].main.temp)}<span>°c</span>`;

  let weather_el4 = document.querySelector(".card .weather4");
  weather_el4.innerText = `${weather.list[3].weather[0].main}`;

  let date5 = document.querySelector(".card .date5");
  date5.innerText = dateBuilder5(now);

  let temp5 = document.querySelector(".card .temp5");
  temp5.innerHTML = `${Math.round(weather.list[4].main.temp)}<span>°c</span>`;

  let weather_el5 = document.querySelector(".card .weather5");
  weather_el5.innerText = `${weather.list[4].weather[0].main}`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  console.log(day);
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function dateBuilder2(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay() + 1];
  let date = d.getDate() + 1;
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function dateBuilder3(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay() + 2];
  let date = d.getDate() + 2;
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function dateBuilder4(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay() + 3];
  let date = d.getDate() + 3;
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function dateBuilder5(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay() + 4];
  let date = d.getDate() + 4;
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
//update data
var today = new Date();
document.getElementById("dtText").innerHTML = "Today's Date is :" + today;
