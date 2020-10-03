// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// We pass a function in filter which loops over every single item in an array.
const taskOne = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(taskOne);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// Map takes an array and returns an array of the same length it was given after performing changes on it.
const taskTwo = inventors.map(inventor => inventor.first + ' ' + inventor.last);
// const taskTwo = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(taskTwo);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// Sort takes two items as input at a time
// const taskThree = inventors.sort(function(a, b){
//     if(a.year > b.year) {
//         return 1;
//     }
//     else
//         return -1;
// });
const taskThree = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(taskThree);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// let total = 0;
// for (let index = 0; index < inventors.length; index++) {
//     total += inventors[index].passed - inventors[index].year;
// }
// reduce is a cleaner way of doing this
const taskFour = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
// here first parameter gives the running total ie. what the function had returned previously.
console.log(taskFour);


// 5. Sort the inventors by years lived
const taskFive = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
console.table(taskFive);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category'); //query selector returns a Node list so we need to convert it to an array to be able to use map
// const links = Array.from(category.querySelectorAll('a'));
// //const links = [...category.querySelectorAll('a')];  //second method of creating array is by using spread operator
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// console.table(de);


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [last, ] = lastOne.split(', ');
    const [lastNext, ] = nextOne.split(', ');
    return last > lastNext ? 1 : -1;
});
console.log(alpha);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transport = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    //console.log(item);
    return obj;
}, {});
// {} signifies an empty object initially since we don't know what all instances might be inside the array. If an instance is found for the first time, we make an entry for and then increment it and add it to the object.
console.log(transport);