const inputContainer = document.getElementById("input-container");
const from = document.getElementById("from");
const input = document.getElementById('input');
const title = document.getElementById("title");
if (from.value === "-1"){
    inputContainer.style.display = "none";
}
const conversionForm = document.getElementById('conversion-form')
from.addEventListener('change', onChangeFrom)
conversionForm.addEventListener('submit', convert);
if (input) {
    input.addEventListener('input', onChangeInput);
}
function onChangeFrom(){
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const labels = document.getElementsByTagName('label');
    const inputContainer = document.getElementById('input-container');
    const input = document.getElementById('input');
    input.value = '';
    const output = document.getElementById('output');
    output.value = '';
    inputContainer.style.display = 'block';
    to.options.length = 0;
    if (from.value === 'binary'){
        to.add(new Option('Decimal', 'decimal'));
        labels[2].innerHTML = 'Enter Binary Number :';
        labels[3].innerHTML = 'Decimal Number:';
        title.innerHTML = 'Binary to Decimal Conversions';

    } else if (from.value === 'decimal'){
        labels[2].innerHTML = 'Enter Decimal Number :';
        labels[3].innerHTML = 'Binary Number :';
        to.add(new Option('Binary', 'binary'));
        title.innerHTML = 'Decimal to Binary Conversions';
    } else {
        inputContainer.style.display = 'none';
    }
}

function convert(e){
    e.preventDefault();
    const from = document.getElementById('from');
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    if (from.value === 'binary'){
        output.value = binaryToDecimal(input.value);
    } else {
        output.value = decimalToBinary(input.value);
    }
}
function onChangeInput(e){
    const from = document.getElementById('from');
    const error = document.getElementById('error');
    const button = document.getElementById('convert');
    const value = e.target.value;
    if (from.value === 'binary'){
        const values = value.split('');
        const isValidBinary = values.every(d => d == 0 || d == 1);
        if(!isValidBinary){
            error.innerHTML = 'Pleaes input a valid binary number';
            button.disabled = true;
        } else {
            error.innerHTML = "";
            button.disabled = false;
        }
    }
}