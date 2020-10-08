const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
let lastChecked;

function handleCheck(event) {
    let isInBetween = false;
    if (this.checked && event.shiftKey) {

        checkboxes.forEach(
            checkbox => {
                if (checkbox === this || checkbox === lastChecked)
                    isInBetween = !isInBetween;

                if (isInBetween) {
                    checkbox.checked = true;
                    console.log(checkbox);
                }
            }
        );
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));