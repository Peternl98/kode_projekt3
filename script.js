/*test javascript til sliderfunktion*/

const track = document.querySelector('.slider-track');
const images = document.querySelectorAll('.slider-track img');
const imageCount = images.length;
const imagesPerView = 3;
let currentIndex = 0;


function moveslider(direction) {
  currentIndex = (currentIndex + direction + imageCount) % imageCount;
  const offset = -(currentIndex * (100 / imagesPerView));
  track.style.transform = `translateX(${offset}%)`;
}