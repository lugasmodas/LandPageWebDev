let time = 4000,
  i = 1,
  header = document.getElementsByTagName('header');


function trocaBackground() {
  header[0].style.backgroundImage = `url('http://127.0.0.1:5500/Landing%20Page%20WebDev/assets/images/bg-${i}.jpg')`;

  i++;
  if (i > 4) {
    i = 1;
  }
}

function start() {
  setInterval(() => {
    trocaBackground();
  }, time);
}

window.addEventListener("load", start)