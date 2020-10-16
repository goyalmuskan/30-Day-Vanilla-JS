let timeNodes = document.querySelectorAll('[data-time]');
timeNodes = Array.from(timeNodes);

const seconds = timeNodes.map(node => node.dataset.time)
    .map(time => {
        const [mins, secs] = time.split(':').map(parseFloat) // mins and secs are still strings here so parseFloat converts each item of the array to numbers 
        return (mins * 60) + secs;
    }).reduce((total, vidSeconds) => {
        return total + vidSeconds
    }, 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minsLeft = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minsLeft, secondsLeft);