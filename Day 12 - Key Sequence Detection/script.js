const arrayForKeyPresses = [];
const secretCode = 'yes';

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    arrayForKeyPresses.push(event.key);
    arrayForKeyPresses.splice(-secretCode.length - 1, arrayForKeyPresses.length - secretCode.length);
    if (arrayForKeyPresses.join('').includes(secretCode)) {
        console.log('BINGO !!! You found it.')
        cornify_add();
    }
    console.log(arrayForKeyPresses);
});