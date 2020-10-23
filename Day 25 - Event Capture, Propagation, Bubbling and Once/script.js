const divs = document.querySelectorAll('div');

function logText(event) {
    console.log(this.classList.value);
    // event.stopPropagation(); // stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false 
}));

document.querySelector('button').addEventListener('click', () => {
    console.log('Click.');
}, {
    once: true
});