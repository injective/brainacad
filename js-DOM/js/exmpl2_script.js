[].forEach.call(document.querySelectorAll('p'), function(elem){
    elem.addEventListener('click', handleClick, false);
});

function handleClick() {
    this.style.display = 'none';
}

