var p = document.getElementById('abz');
var txt = p.textContent;

var word = 'dolor';
var position = txt.indexOf(word);
var secondPart = p.firstChild.splitText(position);
secondPart.splitText(word.length);

var strong = document.createElement('strong');
p.replaceChild(strong, secondPart);
strong.appendChild(secondPart);



//document.querySelector('').setAttribute('disabled', 'disabled'); - добавить атрибут
//document.querySelector('').removeAttribute('disabled', 'disabled'); - удалить атрибут