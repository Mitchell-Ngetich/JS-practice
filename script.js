'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Promises and the Fetch API

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}}</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

function getResponse(country) {
  return (
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      //returns a promise
      .then(function (response) {
        console.log(response);
        return response.json(); // returns a promise
      })
      .then(function (data) {
        console.log(data);
        return data; // converts the promise to data
        renderCountry(data[0]);
      })
  );
}

getResponse('portugal');

// const getResponse = function (country) {
//    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       // Check if the response is successful (status code 200)
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       return data;
//     });
// };

// getResponse('Canada');
