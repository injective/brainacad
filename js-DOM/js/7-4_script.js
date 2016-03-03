


[].forEach.call(document.querySelectorAll('body'), function(elem){
    elem.addEventListener('mouseover', randomMove, false);
});


function randomMove(event) {
    var cX = +Math.round(Math.random() * (document.body.clientWidth - 150));
    var cY = +Math.round(Math.random() * (document.documentElement.clientHeight - 30));
    event.target.outerHTML = '<button id="bt" type="button" class="btnStop btnStop-success btnStop-primary" ' +
        'style="top:' + cX + 'px;left:' + cY + 'px;">Click ME!</button>';
}


//
//var min = 0;
//var maxX = document.querySelector('body').offsetWidth -
//    document.querySelector('.btnStop').offsetWidth;
//
//var maxY = document.querySelector('body').offsetHeight -
//    document.querySelector('.btnStop').offsetHeight;