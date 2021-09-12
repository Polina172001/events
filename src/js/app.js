/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
import goblin from '../img/goblin.png';

const container = document.querySelector('.main-container');
const minusPoints = document.querySelector('.minus-points');
const plusPoints = document.querySelector('.plus-points');

addField(4);
let startGame = setInterval(() => addImage(4), 1000);
container.addEventListener('click', crash);
document.querySelector('.start-game').addEventListener('click', newGame);

function addField(sizeBorder) {
  const field = document.createElement('table');
  field.className = 'game-table';
  let counter = 0;
  for (let i = 0; i < sizeBorder; i++) {
    const tr = document.createElement('tr');
    for (let n = 0; n < sizeBorder; n++) {
      const td = document.createElement('td');
      td.className = 'cell';
      td.id = counter;
      tr.appendChild(td);
      counter += 1;
    }
    field.appendChild(tr);
  }
  container.appendChild(field);
}

function mouseListener(e) {
  if (e.target.firstElementChild && e.target.firstElementChild.classList.contains('image')) {
    container.classList.add('cursor');
  } else {
    container.classList.remove('cursor');
  }
}

function crash(e) {
  if (e.target.classList.contains('image')) {
    container.classList.add('cursor');
    e.target.remove();
    plusPoints.textContent++;
  }
}

function addImage() {
  Array.from(document.querySelector('td')).forEach((e) => {
    e.addEventListener('mouseenter', mouseListener);
  });
  const id = Math.ceil(Math.random() * (4 ** 2));
  if (!document.getElementById(id).firstChild) {
    if (document.querySelector('.image')) minusPoints.textContent++;
    if (minusPoints.textCotent >= 5) {
      endGame();
    }
    const elem = document.getElementById(id);
    document.querySelectorAll('.image').forEach((el) => el.remove());
    const image = document.createElement('img');
    image.src = goblin;
    image.className = 'image';
    elem.appendChild(image);
  } else {
    addImage(4);
  }
  return null;
}

function newGame() {
  clearInterval(startGame);
  document.querySelector('.image').forEach((elem) => elem.remove());
  container.addEventListener('click', crash);
  document.querySelector('.end-game').classList.add('hide');
  plusPoints.textContent = 0;
  minusPoints.textContent = 0;
  startGame = setInterval(addField, 1000);
}

function endGame() {
  clearInterval(startGame);
  container.classList.remove('cursor');
  document.querySelector('.end-game').classList.remove('hide');
  container.removeEventListener('click', crash);
  Array.from(document.querySelectorAll('td')).forEach((e) => {
    e.removeEventListener('mouseenter', mouseListener);
  });
}
// TODO: write code here
