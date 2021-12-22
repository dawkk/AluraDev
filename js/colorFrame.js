
const frame = document.querySelector('[frame-color]');
const colorSelector = document.querySelector('[selector-color]');


changeColor();

colorSelector.addEventListener('input', changeColor); {
    var changeColor = colorSelector.value;
}

function changeColor() {
    frame.style.background = colorSelector.value;  
}