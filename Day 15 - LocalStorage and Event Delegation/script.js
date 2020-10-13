const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function localTapas(event) {
    event.preventDefault(); // to prevent default refreshing when submit button is clicked
    const text = this.querySelector('[name=item]').value;
    const item = {
        text, // es6
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); // stores key value pair
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}"> ${plate.text} </label>
            </li>
         `
    }).join('');
}

function toggledOn(event) {
    if(!event.target.matches('input'))
        return; // so that other clicks are not considered
    const index = event.target.dataset.index;
    items[index].done = !items[index].done; // toggle it
    localStorage.setItem('items', JSON.stringify(items));    
    populateList(items, itemsList);
}

addItems.addEventListener('submit', localTapas);
itemsList.addEventListener('click', toggledOn);
populateList(items, itemsList);