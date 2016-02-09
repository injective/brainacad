//var str = "Hello, World!";
//var border = ' border: 5px solid red; border-radius: 100px;';
//var radius = 200;
//var x = 300;
//var y = 300;
//var a = 0;
//var b = 0;
//
//for (var i = 0; i < str.length; i++) {
//    a = x + radius*Math.sin((2*Math.PI/str.length)*i);
//    b = y - radius*Math.cos((2*Math.PI/str.length)*i);
//    document.write('<div style="position: absolute; width: 100px; height: 100px; left:' + a + 'px; top:' + b + 'px;' + border + '">' + str[i] + '</div>');
//}


var str = 'Hello World sdflsdfsfk World ';
var firstIn = 0;
var lastIn;


while (lastIn !== -1) {
    lastIn = str.indexOf(' ', firstIn);
    console.log(str.substring(firstIn,
        lastIn === -1 ? str.length : lastIn));
    firstIn = lastIn + 1;

}