var blocks = document.querySelectorAll('.block');
for (var i=0; i < blocks.length; i++) {
    blocks[i].addEventListener('mousedown', dragStart, false);
}
document.addEventListener('mousemove', drag, false);
document.addEventListener('mouseup', dragEnd, false);
document.addEventListener('selectstart', handler, false);
document.addEventListener('dragstart', handler, false);

var dragObject;
var dragOffsetX = 0;
var dragOffsetY = 0;
var table = document.querySelector('.table');

function dragStart(event) {
    event = event || window.event;
    dragObject = event.target || event.srcElement;
    dragOffsetX = event.offsetX;
    dragOffsetY = event.offsetY;
}

function drag(event) {
    event = event || window.event;
    if (dragObject) {
        dragObject.style.top = event.pageY - dragOffsetY + 'px';
        dragObject.style.left = event.pageX - dragOffsetX + 'px';
    }
}

function dragEnd(event) {
    event = event || window.event;

    if (tableDrop(event, table) == true) {
        dragOffsetX = 0;
        dragOffsetY = 0;
        dragObject = null;
    } else {
        dragOffsetX = 0;
        dragOffsetY = 0;
        dragObject.style.top = 0;
        dragObject.style.left = 0;
        dragObject = null;
    }
}

function handler(event) {
    return false;
}
var firstY = parseInt(window.getComputedStyle(table).getPropertyValue('top'));
var firstX = parseInt(window.getComputedStyle(table).getPropertyValue('left'));
var lastY = parseInt(window.getComputedStyle(table).getPropertyValue('top')) + parseInt(window.getComputedStyle(table).getPropertyValue('height'));
var lastX = parseInt(window.getComputedStyle(table).getPropertyValue('left')) + parseInt(window.getComputedStyle(table).getPropertyValue('width'));

function tableDrop(e, table) {
    if ((event.pageY > firstY && event.pageX > firstX) && (event.pageY < lastY && event.pageX < lastX)) {
        return true;
    } else {
        return false;
    }
}