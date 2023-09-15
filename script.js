'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  let currencyName, languages = [], flag, countryName;

  // you can also use optional chaining
  for(const item in data.name){
     countryName = data.name.common
     console.log(countryName)
  }

  for(const i in data.flags) {
    flag = data.flags.svg;
    console.log(flag)
  }
  for(let item in data.currencies) {
    currencyName = data.currencies[item].name 
    console.log(item)//retrieves he value
  }
  for(const lang in data.languages) {
    languages.push(data.languages[lang]);
  }
  const html = `
  <article class="country ${className}">
         <img class="country__img" src="${flag}" />
         <div class="country__data">
           <h3 class="country__name">${countryName}</h3>
           <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${languages[0]}</p>
          <p class="country__row"><span>💰</span>${currencyName}</p>
         </div>
  </article>`;
  console.log(data)
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};


const renderError = function(msg){
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
}

function getJSON(url, errMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if(!response.ok){
      throw new Error(`${errMsg} (${response.status})`)
    }
    return response.json();
  })
}

function getResponse(country) { 
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
      //returns a promise
      .then(function (data) {// converts the promise to data
        renderCountry(data[0]);
        
        // country 2
        if(!data[0].borders) throw new Error("No neighbour found!");
        const neighbour = data[0].borders[0];
        /*if you move neighbour variable b4 if statement, it will be undefined
        thus it won't log the required error message*/

         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Country not found");
      })
      .then(data => renderCountry(data[0], "neighbour"))
      .catch(err => {;
      renderError(`Something went wrong, ${err.message}. Try again`)})
      .finally(() => {
        countriesContainer.style.opacity = 1;
      })

      /*explanation on why in renderCountry we used data and getResponse
      we used data[0] =========
      In the getResponse function, you fetch data from the REST Countries
     API and parse it with response.json(). This API endpoint typically 
     returns an array of country data, even if there's only one match. So, 
     when you do data[0], you are accessing the first (and possibly only) 
     element of that array, resulting in an object structure.

     In the renderCountry function, you are passing data directly, and 
     it's assumed that it's already an object containing country information,
      not an array. Therefore, you see the object structure directly.
      */  
 }

 btn.addEventListener("click", function () {
   getResponse("madagascar");
 });

///////////////////////////////////////
// Promises and the Fetch API
// Old way of getting data from an API

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

;