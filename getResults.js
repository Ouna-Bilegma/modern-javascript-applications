export function getResults(query) {
  fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
  console.log(getResults);
}
