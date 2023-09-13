'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Promises and the Fetch API

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/kenya');
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   const html = `
//      <article class="country">
//        <img class="country__img" src="${data.flags.svg}" />
//        <div class="country__data">
//          <h3 class="country__name">${data.name.common}</h3>
//          <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages}</p>
//         <p class="country__row"><span>💰</span>${data.currencies}</p>
//        </div>
//     </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
         <img class="country__img" src="${data.flags.svg}" />
         <div class="country__data">
           <h3 class="country__name">${data.name.common}</h3>
           <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
         </div>
  </article>`;
  console.log(data.languages)
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

function getResponse(country) { 
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      //returns a promise
      .then(function (response) {
        return response.json(); // returns a promise
      })
      .then(function (data) {
         console.log(data[0])// converts the promise to data
        renderCountry(data[0]);
        return data;
      });
}

getResponse('madagascar');
