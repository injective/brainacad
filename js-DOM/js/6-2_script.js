//6.2. Написать функцию-конструктор и объект, который будет работать как фильтр
//      нецензурных слов, заменяя слова из массива-словаря на ***. Количество звездочек
//      должно совпадать с количеством замененных букв. Первую и последнюю букву оставляем.
//      Например, слово "редиска" заменится на "р*****а". Использовать изученные свойства и методы DOM-узлов.

var input = document.getElementsByTagName('textarea')[0],
    output = document.getElementsByTagName('p')[0],
    badwords = 'лох';

input.onkeyup = function () {
    output.innerHTML = this.value.replace(badwords, function (fullmatch, badword) {
        return '<sub>' + new Array(badword.length + 1).join('*') + '</sub>';
    });
};

input.onkeyup();
input.focus();


//'some text, "more" text!'.split(' ');
//искать слова через indexOf и разбить на 3 слова