const allControls = document.querySelectorAll('.controls input'); //returns a node list and not an array. This node list can be converted to an array

function handleControls() {
    const suffix = this.dataset.sizing || ''; // '' when suffix 'px' is not there to append 
    // all the data- attributes of the tags in allControls 
    // variable will be selected. Here we need data-sizing 
    // only as we have to append 'px'. We can create as many as we want.

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // we have already added required variables name in the name attributes of input tags

}

allControls.forEach(event => event.addEventListener('change', handleControls));
// allControls.forEach(event => event.addEventListener('mouseMove', handleControls));