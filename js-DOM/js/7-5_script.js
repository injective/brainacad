var countHtml = document.querySelector('.count');
var el = document.querySelector('section');

for (var i = 1; i <= 15; i++) {
    var randDiameter = +Math.floor(Math.random() * 50 + 20);
    var style = 'left:' + Math.floor(Math.random() * 900) + 'px;top:' + Math.floor(Math.random() * 360) + 'px;' +
        'width:' + randDiameter + '%;height:' + randDiameter + '%;position:absolute;' + randomColor();
    var dom = document.createElement('figure');
    dom.className = 'ball bubble ball-' + i;
    dom.setAttribute('style', style);
    el.appendChild(dom);
}

countHtml.innerHTML = el.childElementCount;

[].forEach.call(document.querySelectorAll('.ball'), function(elem){
    elem.addEventListener('click', handleClick, false);
});

function handleClick() {
    this.remove();
    countHtml.innerHTML = el.childElementCount;
}

function randomColor() {
    arr = [
        'background:radial-gradient(circle at bottom, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);',
        'background:radial-gradient(circle at bottom, #f6d6d7, #ef9165 10%, #942722 80%, #45000d 100%);',
        'background:radial-gradient(circle at bottom, #cdf6bb, #78ef65 10%, #019400 80%, #014500 100%);',
        'background:radial-gradient(circle at bottom, #f6f2ab, #efeb1f 10%, #949318 80%, #454100 100%);',
        'background:radial-gradient(circle at bottom, #e2a9f6, #b600ef 10%, #910094 80%, #3c0045 100%);',
    ];

    return arr[Math.floor(Math.random() * 5)];
}