/* eslint-disable linebreak-style */
export default function addField(sizeBorder) {
  const container = document.querySelector('.main-container');
  const field = document.createElement('table');
  field.className = 'game-table';
  let counter = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < sizeBorder; i++) {
    const tr = document.createElement('tr');
    // eslint-disable-next-line no-plusplus
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
