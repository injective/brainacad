//3.1. Ввести 4 числа. Найти max{min(a, b), min(c, d)},
//используя созданную функцию нахождения максимального и минимального из двух чисел.

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function max(a, b) {
    if(isNumeric(a) && isNumeric(b)) {
        if(a > b || a === b) {
            return a;
        } else if(a < b) {
            return b;
        }
    } else {
        return document.write('a, или b - не число!');
    }
}

function min(a, b) {
    if(isNumeric(a) && isNumeric(b)) {
        if(a < b || a === b) {
            return a;
        } else if(a > b) {
            return b;
        }
    } else {
        return document.write('a, или b - не число!');
    }
}

var a = +prompt('введите A');
var b = +prompt('введите B');
var c = +prompt('введите C');
var d = +prompt('введите D');

document.write(max(min(a,b),min(c,d)));
