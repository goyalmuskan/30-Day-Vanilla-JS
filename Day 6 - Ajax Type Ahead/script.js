const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []; // to put our cities into

// fetch returns a promise.
// console.log(fetch(endpoint));
fetch(endpoint)
    .then(blob => blob.json()) // blob.json() also returns a promise  
    .then(data => cities.push(...data)); // let cities = []; cities = data; 

function findMatches(word, citiesArray) {
    return citiesArray.filter(location => {
        // check if location entered in search box matches any city or state
        const regex = new RegExp(word, 'gi'); // g - global, i - case insensitive
        return location.city.match(regex) || location.state.match(regex);
    });
}

function displayMatchedWord() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(location => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = location.city.replace(regex, `<span class="hl">${this.value}</span>`); // replaces only the searched part.
        const stateName = location.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class ="name"> ${cityName}, ${stateName} </span>
                <span class ="population"> ${numberWithCommas(location.population)} </span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

// StackOverFlow lol
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatchedWord);
search.addEventListener('keyup', displayMatchedWord);