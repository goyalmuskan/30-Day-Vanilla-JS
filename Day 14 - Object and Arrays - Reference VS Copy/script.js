// start with strings, numbers and booleans
let age = 19;
let age2 = age;
console.log(age, age2);
age = 20;
console.log(age, age2); // 20 19
// because for strings, numbers and booleans copying is done and reference is not passed.



// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;
console.log(players, team);
// You might think we can just do something like this:
team[3] = 'Lesly'; // this also updates players since in arrays, reference is passed.
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
console.log(players, team);
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice(); // it now makes a copy of players
team2[3] = 'Lesley';
console.log(players, team2);
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
// or
const team5 = Array.from(players);
// now when we update it, the original one isn't changed



// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
// and think we make a copy:
const captain = person;
captain.number = 90;
console.log(person); // 90 is updated here too
// how do we take a copy instead?
const cap2 = Object.assign({}, person, {
    number: 90,
    age: 20
}); // person is not changed here
// We will hopefully soon see the object ...spread
const capt3 = {
    ...person
};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const muskan = {
    name: 'Muskan',
    age: 20,
    social: {
        insta: '@muskan_goyal'
    }
};

const mus2 = Object.assign({}, muskan);
mus2.social.insta = '@muskan'; // this changes in muskan too

// deep clone is one method
// or

const mus3 = JSON.parse(JSON.stringify(muskan));
mus3.social.insta = '@muskan3'; // only changes in mus3