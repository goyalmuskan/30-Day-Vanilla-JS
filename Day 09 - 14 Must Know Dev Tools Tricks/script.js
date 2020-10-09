const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("I am regular and boring");

// Interpolated
console.log("I am a little %s", "🍗");

// Styled
console.log("%c Use me to add styling..", "font-size: 40px; color: red");

// warning!
console.warn("I show warning");

// Error :|
console.error("Just showing random error message");

// Info
console.info("Insert a cool fact.");

// Testing
console.assert(1 === 2, "I will be printed only if mentioned condition is false");

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    // console.groupCollapsed(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Muskan");
console.count("Muskan");
console.count("NotMuskan");
console.count("Muskan");
console.count("Muskan");

// timing
console.time('fetching data');
fetch('https://api.github.com/users/goyalmuskan')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });