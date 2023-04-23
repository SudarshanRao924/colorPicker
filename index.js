let colorpickerContainerEl = document.getElementById('colorPickerContainer');
let selectedColorHexCodeEl = document.getElementById('selectedHexCode');

function onButton1() {
    colorpickerContainerEl.style.backgroundColor = '#e0e0e0';
    selectedColorHexCodeEl.textContent = '#e0e0e0';
}

function onButton2(){
    colorpickerContainerEl.style.backgroundColor = '#6fcf97';
    selectedColorHexCodeEl.textContent = '#6fcf97';
}
function onButton3(){
    colorpickerContainerEl.style.backgroundColor = '#56ccf2';
    selectedColorHexCodeEl.textContent = '#56ccf2';
}
function onButton4(){
    colorpickerContainerEl.style.backgroundColor = '#bb6bd9';
    selectedColorHexCodeEl.textContent = '#bb6bd9';
}