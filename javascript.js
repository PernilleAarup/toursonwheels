// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}



const body = document.body;
const documentElement = document.documentElement;
const progressBarEl = document.getElementById('progressBar');

const scrollTop = () => Math.max(body.scrollTop, documentElement.scrollTop);
const handleOnScroll = () => {
  const scrollAmount = scrollTop() / (documentElement.scrollHeight - documentElement.clientHeight);
  const scrollPercentage = Math.round(scrollAmount * 100);
  
  progressBarEl.style.width = `${scrollPercentage}%`
};

window.addEventListener('scroll', handleOnScroll);