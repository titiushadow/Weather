// Variáveis, API e seleção de elementos
const apiKey = "48446c27fefebc8625e6d7735b62be8c";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

// Funções
const showWeatherData = (city) => {
    console.log(city);
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});

