let id = '27c370568c0d37820bdb9e21181522b9';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

let city = document.querySelector('.name figcaption');
let flag = document.querySelector('.name img');
let form = document.querySelector("form");
let temperature = document.querySelector('.temperature span');
let tempIcon = document.querySelector('.temperature img');
let description = document.querySelector('.description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valueSearch.value.trim() !== '') {
        searchWeather(valueSearch.value.trim());
    }
});

const searchWeather = (cityName) => {
    fetch(url + '&q=' + cityName)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                // City + flag
                city.innerText = data.name;
                flag.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;

                // Temperature + weather icon
                tempIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.innerText = Math.round(data.main.temp);

                // Weather description
                description.innerText = data.weather[0].description;

                // Other details
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            } else {
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        })
        .catch(err => console.error("Error fetching weather:", err));
};

// Default search on load
const initApp = () => {
    searchWeather('Washington');
};
initApp();
