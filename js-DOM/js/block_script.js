var str = '';
var style = 'style="background:url(img/image001.jpg);width:139px;height:48px;display:inline-block;transition:height 0.5s;"';
for (var i = 1; i < 12; i++) {
    str += '<div class="line">'
        for (var j = 1; j < 10; j++) {
            str += '<div class="br-2"' + style + '></div>'
        }
    str += '</div>';
}
document.body.innerHTML = str;


[].forEach.call(document.querySelectorAll('.br-2'), function(elem){
    elem.addEventListener('click', handleClick, false);
});

function handleClick() {
    this.style.height = 0;
}