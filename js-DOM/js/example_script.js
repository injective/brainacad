var input = document.getElementById('editWide');
var firstVar;
var secondVar;
var action;

document.getElementById('btnOne').addEventListener('click', function(){
    input.value = input.value + '1';
}, false);

document.getElementById('btnTwo').addEventListener('click', function(){
    input.value = input.value + '2';
}, false);

document.getElementById('btnThree').addEventListener('click', function(){
    input.value = input.value + '3';
}, false);

document.getElementById('btnFour').addEventListener('click', function(){
    input.value = input.value + '4';
}, false);

document.getElementById('btnFive').addEventListener('click', function(){
    input.value = input.value + '5';
}, false);

document.getElementById('btnSix').addEventListener('click', function(){
    input.value = input.value + '6';
}, false);

document.getElementById('btnSeven').addEventListener('click', function(){
    input.value = input.value + '7';
}, false);

document.getElementById('btnEight').addEventListener('click', function(){
    input.value = input.value + '8';
}, false);

document.getElementById('btnNine').addEventListener('click', function(){
    input.value = input.value + '9';
}, false);

document.getElementById('btnZero').addEventListener('click', function(){
    input.value = input.value + '0';
}, false);

document.getElementById('btnDecimal').addEventListener('click', function(){
    input.value = input.value + '.';
}, false);

document.getElementById('btnClear').addEventListener('click', function(){
    input.value = '';
}, false);

document.getElementById('btnClearEntry').addEventListener('click', function(){
    input.value = '';
}, false);

document.getElementById('btnNeg').addEventListener('click', function(){
    input.value = +input.value * (-1);
}, false);



/*  Операции над числами  */

document.getElementById('btnPlus').addEventListener('click', function(){
    firstVar = +input.value;
    action = '+';
    input.value = '';
}, false);

document.getElementById('btnMultiply').addEventListener('click', function(){
    firstVar = +input.value;
    action = '*';
    input.value = '';
}, false);

document.getElementById('btnMinus').addEventListener('click', function(){
    firstVar = +input.value;
    action = '-';
    input.value = '';
}, false);

document.getElementById('btnDivide').addEventListener('click', function(){
    firstVar = +input.value;
    action = '/';
    input.value = '';
}, false);

document.getElementById('btnWide').addEventListener('click', function(){
    secondVar = +input.value;

    if (action === '+') {
        input.value = firstVar + secondVar;
    } else if (action === '-') {
        input.value = firstVar - secondVar;
    } else if (action === '*') {
        input.value = firstVar * secondVar;
    } else if (action === '/') {
        input.value = firstVar / secondVar;
    }
}, false);
