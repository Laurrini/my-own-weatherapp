function getCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = searchInput.value;
}

let searchFomrElement = document.querySelector("#search-form");
searchFomrElement.addEventListener("submit", getCity);
