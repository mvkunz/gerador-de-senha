import { nanoid } from 'nanoid';

const passwordBtnEl = document.querySelector('button');
// console.log(passwordBtnEl); Esse console serve para conferir se, de fato, pegouo botão no html.
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});