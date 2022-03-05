//slider

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 420,
      settings: {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// counting

const startingMinutes = 60; // add the time you want to be countdown
let time = startingMinutes * 60; // second (time)

const countdownEl = document.getElementById("countdown"); // add the given id which is provided to html

setInterval(updateCountdown, 1000); // it will update every second

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
