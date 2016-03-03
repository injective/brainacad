function animate() {
    var top = parseInt(block.style.top);
    if (top+size > document.documentElement.clientHeight) {
        top = -size;
    }
    block.style.top = top + 2 + 'px';
}

var timerId = false;
var stopTimerID;
var btnStop = document.querySelector('#stop');
var btnStart = document.querySelector('#start');
var btnPlusSpeed = document.querySelector('#plus');
var btnMinusSpeed = document.querySelector('#minus');
var btnAddBlock = document.querySelector('#addBlock');
var block = document.querySelector('.block');
var size = 50;
var i = 0;
block.style.top = -size + 'px';



btnStart.addEventListener('click', function(){
    if (timerId == false) {
        timerId = setInterval(animate, 20);
    }
}, false);

btnStop.addEventListener('click', function(){
    if (timerId) {
        stopTimerID = clearInterval(timerId);
    }
    timerId = false;
}, false);

btnPlusSpeed.addEventListener('click', function(){
    if (timerId) {
        stopTimerID = clearInterval(timerId);
        timerId = setInterval(animate, 50);
    }

}, false);

btnMinusSpeed.addEventListener('click', function(){
    timerId = setInterval(animate, 5000);
}, false);


btnAddBlock.addEventListener('click', function(){
    var newBl = document.createElement('div');
    newBl.className = 'block';
    newBl.style.left = (parseInt(block.style.left) + 100) + 'px';
    document.body.appendChild(newBl);
}, false);