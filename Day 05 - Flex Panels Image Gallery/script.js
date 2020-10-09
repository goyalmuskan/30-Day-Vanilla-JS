const allPanels = document.querySelectorAll('.panel'); // nodelist 

function toggleOpen() {
    this.classList.toggle('open'); // classList in js is same as class.
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) { // because some browsers also use 'flex-grow'
        this.classList.toggle('open-active');
    }
}

allPanels.forEach(panel => panel.addEventListener('click', toggleOpen)); // toggleOpen() would trigger the function on page load even if it's not clicked
allPanels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); // just when transition of increasing flex size ends we want to bring in the text for that panel.