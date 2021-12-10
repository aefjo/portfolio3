const body = document.querySelector('body');
let eye = document.querySelectorAll('.eye');

body.addEventListener('mousemove', function () {
  eye.forEach(function (eyed) {
    let x = eyed.getBoundingClientRect().left + eyed.clientWidth / 2;
    let y = eyed.getBoundingClientRect().top + eyed.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eyed.style.transform = 'rotate(' + rot + 'deg)';
  });
});

const angry = document.querySelector('#angry');
const happy = document.querySelector('#happy');
const sad = document.querySelector('#sad');

const face = document.querySelector('.face');
const alis = document.querySelector('.alis');
const mulut = document.querySelector('.mulut');

angry.addEventListener('click', function () {
  alis.classList.toggle('angry');
  face.classList.toggle('redface');

  mulut.classList.remove('happy');
  alis.classList.remove('sadness');
  mulut.classList.remove('sad');
});

happy.addEventListener('click', function () {
  mulut.classList.toggle('happy');

  alis.classList.remove('angry');
  alis.classList.remove('sadness');
  face.classList.remove('redface');
  mulut.classList.remove('sad');
});

sad.addEventListener('click', function () {
  alis.classList.toggle('sadness');
  mulut.classList.toggle('sad');

  mulut.classList.remove('happy');
  alis.classList.remove('angry');
  face.classList.remove('redface');
});
