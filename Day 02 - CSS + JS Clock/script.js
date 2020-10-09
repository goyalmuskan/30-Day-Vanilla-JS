function setDate() {
    const today = new Date();
    const h5 = document.querySelector('.h5');
    h5.innerHTML = today;

    const seconds = today.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90; //90 degree is added to offset the default position of the hands
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = today.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    const minuteHand = document.querySelector('.min-hand');
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = today.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);