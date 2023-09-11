'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
      //1.4463944,36.6624323
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

       map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        //styles your map
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        mapEvent = mapE
        form.classList.remove('hidden');
        inputDistance.focus(); // puts the cursor inthe input field so that the user can type without clicking on the input field
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
//implement marker in a map using leaflet library


form.addEventListener('submit', function (e) {
  e.preventDefault(); //prevents the page from reloading when the form is submitted
  //display marker when form is submitted
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = " ";

  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250, //popup's width
        minWidth: 100,
        autoClose: false, //keep the popup open
        closeOnClick: false, //keep it open even when you click on the map
        className: 'running-popup', //adds class for styling
      })
    )
    .setPopupContent('workout') // what is displayed
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});
