// // OpenWeatherMap API key (You'll need to sign up for a free account to get your API key)
// const apiKey = '5d3c8da10899fb94089e1db371d71a74'; // Replace with your own API key
// const city = 'Uttarakhand'; // You can change this to any city

// // Get the elements from the HTML to update
// const cityElement = document.querySelector('.city');
// const degreeElement = document.querySelector('.degree');
// const text1Element = document.querySelector('.text1');
// const text2Element = document.querySelector('.text2');
// const text3Element = document.querySelector('.text3');

// // Fetch weather data from OpenWeatherMap API
// function fetchWeatherData() {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 // Update the HTML elements with data from the API
//                 cityElement.textContent = data.name;
//                 degreeElement.textContent = data.main.temp.toFixed(1);
//                 text1Element.textContent = 'Degree Celsius';
//                 text2Element.textContent = `Wind Speed: ${data.wind.speed} m/s`;
//                 text3Element.textContent = `Humidity: ${data.main.humidity}%`;

//                 // You can also dynamically update the image based on the weather
//                 const weatherCondition = data.weather[0].main.toLowerCase();
//                 const image = document.querySelector('img');
//                 if (weatherCondition === 'clear') {
//                     image.src = 'sunny.jpg'; // Add a sunny image to your project
//                 } else if (weatherCondition === 'clouds') {
//                     image.src = 'cloudy.jpg'; // Add a cloudy image to your project
//                 } else {
//                     image.src = 'default.jpg'; // Add a default image
//                 }
//             } else {
//                 alert('City not found or invalid API request.');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert('Error fetching weather data. Please try again later.');
//         });
// }

// // Call the function to fetch weather data on page load
// fetchWeatherData();

// const apiKey = '5d3c8da10899fb94089e1db371d71a74';

// const cityElement = document.querySelector('.city');
// const degreeElement = document.querySelector('.degree');
// const text1Element = document.querySelector('.text1');
// const text2Element = document.querySelector('.text2');
// const text3Element = document.querySelector('.text3');
// const weatherImage = document.querySelector('img');
// const cityInput = document.getElementById('cityInput');
// const searchBtn = document.getElementById('searchBtn');

// // Function to fetch weather
// function fetchWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 cityElement.textContent = data.name;
//                 degreeElement.textContent = data.main.temp.toFixed(1);
//                 text1Element.textContent = 'Degree Celsius';
//                 text2Element.textContent = `Wind Speed: ${data.wind.speed} m/s`;
//                 text3Element.textContent = `Humidity: ${data.main.humidity}%`;

//                 const weatherCondition = data.weather[0].main.toLowerCase();
//                 if (weatherCondition.includes('clear')) {
//                     weatherImage.src = 'sunny.jpg';
//                 } else if (weatherCondition.includes('cloud')) {
//                     weatherImage.src = 'cloudy.jpg';
//                 } else if (weatherCondition.includes('rain')) {
//                     weatherImage.src = 'rainy.jpg';
//                 } else {
//                     weatherImage.src = 'default.jpg';
//                 }
//             } else {
//                 alert('City not found. Please check spelling.');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert('Error fetching weather data.');
//         });
// }

// // Default weather (Uttarakhand) when page loads
// fetchWeatherData('Uttarakhand');

// // When Search Button is Clicked
// searchBtn.addEventListener('click', () => {
//     const city = cityInput.value.trim();
//     if (city !== '') {
//         fetchWeatherData(city);
//     } else {
//         alert('Please enter a city name.');
//     }
// });


// const apiKey = '5d3c8da10899fb94089e1db371d71a74';

// const cityElement = document.querySelector('.city');
// const degreeElement = document.querySelector('.degree');
// const text1Element = document.querySelector('.text1');
// const text2Element = document.querySelector('.text2');
// const text3Element = document.querySelector('.text3');
// const weatherImage = document.querySelector('img');

// // ✅ [MODIFIED] Now we can select the input and button
// const cityInput = document.getElementById('cityInput');
// const searchBtn = document.getElementById('searchBtn');

// // Function to fetch weather
// function fetchWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 cityElement.textContent = data.name;
//                 degreeElement.textContent = data.main.temp.toFixed(1);
//                 text1Element.textContent = 'Degree Celsius';
//                 text2Element.textContent = `Wind Speed: ${data.wind.speed} m/s`;
//                 text3Element.textContent = `Humidity: ${data.main.humidity}%`;

//                 const weatherCondition = data.weather[0].main.toLowerCase();
//                 if (weatherCondition.includes('clear')) {
//                     weatherImage.src = 'sunny.jpg';
//                 } else if (weatherCondition.includes('cloud')) {
//                     weatherImage.src = 'cloudy.jpg';
//                 } else if (weatherCondition.includes('rain')) {
//                     weatherImage.src = 'rainy.jpg';
//                 } else {
//                     weatherImage.src = 'default.jpg';
//                 }
//             } else {
//                 alert('City not found. Please check spelling.');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert('Error fetching weather data.');
//         });
// }

// // Default weather (Uttarakhand) when page loads
// fetchWeatherData('Uttarakhand');

// // ✅ [MODIFIED] When Search Button is Clicked, get city from input
// searchBtn.addEventListener('click', () => {
//     const city = cityInput.value.trim();
//     if (city !== '') {
//         fetchWeatherData(city);
//     } else {
//         alert('Please enter a city name.');
//     }
// });


const apiKey = '5d3c8da10899fb94089e1db371d71a74';


const cityElement = document.querySelector('.city');
const degreeElement = document.querySelector('.degree');
const text1Element = document.querySelector('.text1');
const text2Element = document.querySelector('.text2');
const text3Element = document.querySelector('.text3');
const weatherImage = document.querySelector('img');

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');


function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                cityElement.textContent = data.name;
                degreeElement.textContent = `${data.main.temp.toFixed(1)}°`;
                text1Element.textContent = 'Degree Celsius';
                text2Element.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                text3Element.textContent = `Humidity: ${data.main.humidity}%`;

                const weather = data.weather[0].main.toLowerCase();
                if (weather.includes('cloud')) {
                    weatherImage.src = 'cloudy.jpg';
                } else if (weather.includes('rain')) {
                    weatherImage.src = 'rainy.jpg';
                } else if (weather.includes('clear')) {
                    weatherImage.src = 'sunny.jpg';
                } else {
                    weatherImage.src = 'default.jpg';
                }
            } else {
                alert('City not found');
            }
        })
        .catch(err => {
            console.error(err);
            alert('Failed to fetch weather data.');
        });
}


fetchWeatherData('Uttarakhand');


searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
});


