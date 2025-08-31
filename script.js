const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚'; // Pause symbol
  } else {
    video.pause();
    toggle.textContent = '►'; // Play symbol
  }
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}


function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


volume.addEventListener('input', () => {
  video.volume = volume.value;
});


playbackSpeed.addEventListener('input', () => {
  video.playbackRate = playbackSpeed.value;
}
rewind.addEventListener('click', () => {
  video.currentTime -= 10;
});


forward.addEventListener('click', () => {
  video.currentTime += 25;
});

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);