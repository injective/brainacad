//6.1. Используя приведенный выше пример, написать функцию-конструктор и объект,
//    который будет иметь методы для поиска и выделения жирным (strong), курсивом (em)
//    или подчеркнутым (u) любой фразы в любом элементе/элементах на странице. Элементы,
//    в которых нужно искать и заменять слова, должны задаваться CSS-селекторами.
//    Т.е. нужно будет использовать document.querySelectorAll(selector) для поиска таких элементов.


function FindString(stringSearch, selectorWhereSearching, whichStringSelected) {
    this.stringSearch = stringSearch;
    this.selectorWhereSearching = selectorWhereSearching;

    this.whichStringSelected = whichStringSelected;

    this.find = findFunc;
}

function findFunc() {
    var p = document.body.querySelectorAll(this.selectorWhereSearching);
    var txt = p.textContent;

    var position = txt.indexOf(this.stringSearch);
    var secondPart = p.firstChild.splitText(position);
    secondPart.splitText(this.stringSearch.length);

    var selectedText = document.createElement(this.whichStringSelected);
    p.replaceChild(selectedText, secondPart);
    selectedText.appendChild(secondPart);
}


var ssss1 = new FindString('adipisicing', 'body', 'u');
ssss1.find();
