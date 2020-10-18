const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //SpeechRecognition is a global variable

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
    // console.log(event.results);
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript).join('')
    p.textContent = transcript;

    if (event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
    // console.log(transcript);

    if (transcript.includes('the time')) {
        const date = new Date();
        console.log(date);
    }
});

recognition.addEventListener('end', recognition.start); // so that it listens again and again
recognition.start();