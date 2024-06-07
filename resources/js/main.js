// Initialize Neutralino
Neutralino.init();

let dragRegion = document.getElementById('title-bar');
let dragging = false;
let startX, startY;

dragRegion.addEventListener('mousedown', (event) => {
  dragging = true;
  startX = event.clientX;
  startY = event.clientY;
});

window.addEventListener('mousemove', (event) => {
  if (dragging) {
    window.moveBy(event.clientX - startX, event.clientY - startY);
    startX = event.clientX;
    startY = event.clientY;
  }
});

window.addEventListener('mouseup', () => {
  dragging = false;
});