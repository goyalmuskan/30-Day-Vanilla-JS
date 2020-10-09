/* Get Elements */

const mainPlayer = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const playerSkipButtons = document.querySelectorAll('[data-skip');

/* Functions */

function playOrNot() {
    const toggle = video.paused ? 'play' : 'pause';
    video[toggle]();
}

function updatePlayButton() {
    toggleButton.textContent = this.paused ? '▶' : '⏸';
}

function skipButtons() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
    const clickedTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = clickedTime;
}

/* Event Listeners */

video.addEventListener('click', playOrNot);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('play', updatePlayButton);
video.addEventListener('timeupdate', handleProgressBar);
toggleButton.addEventListener('click', playOrNot);
playerSkipButtons.forEach(skipButton => skipButton.addEventListener('click', skipButtons));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);