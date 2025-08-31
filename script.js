const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// ✅ Play / Pause toggle
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚'; // Pause symbol
  } else {
    video.pause();
    toggle.textContent = '►'; // Play symbol
  }
}

// ✅ Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// ✅ Scrub (click on progress bar to seek)
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// ✅ Volume control
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

// ✅ Playback speed control
playbackSpeed.addEventListener('input', () => {
  video.playbackRate = playbackSpeed.value;
});

// ✅ Rewind 10s
rewind.addEventListener('click', () => {
  video.currentTime -= 10;
});

// ✅ Forward 25s
forward.addEventListener('click', () => {
  video.currentTime += 25;
});

// ✅ Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);