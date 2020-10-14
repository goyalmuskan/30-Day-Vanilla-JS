 const heroDiv = document.querySelector('.hero');
 const text = heroDiv.querySelector('h1');

 function addShadow(event) {
     const width = heroDiv.offsetWidth;
     const height = heroDiv.offsetHeight;
     const walk = 200; // 100px ie. till where should the shadow go
     let {
         offsetX: x,
         offsetY: y
     } = event;

     if (this !== event.target) {
         x = x + event.target.offsetLeft;
         y = y + event.target.offsetTop;
     }
     console.log(x, y);

     const xWalk = ((x / width * walk) - (walk / 2));
     const yWalk = ((y / height * walk) - (walk / 2));

     text.style.textShadow =
         `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
          ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255, 255, 0, 0.7),
          ${yWalk}px ${xWalk}px 0 rgba(0, 255, 0, 0.7),
          ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
     `;
 }

 heroDiv.addEventListener('mousemove', addShadow);