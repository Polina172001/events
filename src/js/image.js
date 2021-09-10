/* eslint-disable linebreak-style */
import goblin from '../img/goblin.png';

export default function addImage(sizeBorder) {
  const id = Math.ceil(Math.random() * (sizeBorder ** 2));
  if (document.getElementById(id).firstChild) {
    addImage(sizeBorder);
  } else {
    const elem = document.getElementById(id);
    // eslint-disable-next-line no-shadow
    document.querySelectorAll('.image').forEach((elem) => elem.remove());
    const image = document.createElement('img');
    image.src = goblin;
    image.className = 'image';
    elem.appendChild(image);
  }
  // eslint-disable-next-line padded-blocks
  return null;

}
