// Import stylesheets
import './style.scss';

// Write Javascript code!
const appDiv = document.querySelector('.loader');
let p = document.createElement('p');

let MONEY_COUNT = 100;

while (MONEY_COUNT > 0) {
  let span = document.createElement('span');
  span.classList.add('a_' + MONEY_COUNT);
  span.innerText = MONEY_COUNT;
  MONEY_COUNT--;
}
