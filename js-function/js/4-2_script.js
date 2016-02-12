//3.2. Написать функцию нахождения площади прямоугольника. Ввести данные двух прямоугольников.
//    Вывести прямоугольник, площадь которого больше.

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function squareRectangle(a, b) {
    if(isNumeric(a) && isNumeric(b)) {
        return a*b;
    } else {
        return 'ERROR. Вы ввели не число!';
    }
}

function compareRectangle(a, b) {
    if(isNumeric(a) && isNumeric(b)) {
        if(a > b) {
            return 'Площадь первого прямоугольника больше';
        } else if (a < b) {
            return 'Площадь второго прямоугольника больше';
        } else {
            return 'Прямоугольники равны';
        }
    } else {
        return 'Ошибка ввода данных';
    }
}

var a = +prompt('Введите длину I прямоугольника (a)');
var b = +prompt('Введите ширину I прямоугольника (b)');
var c = +prompt('Введите длину II прямоугольника (c)');
var d = +prompt('Введите ширину II прямоугольника (d)');

document.write(compareRectangle(squareRectangle(a, b), squareRectangle(c, d)));