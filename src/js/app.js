const holesArray = document.querySelectorAll('.hole');

const imgEl = document.createElement('img');
imgEl.setAttribute('src', './img/goblin.png');

setInterval(() => {
  holesArray[Math.floor(Math.random() * 16)].appendChild(imgEl);
}, 1000);
