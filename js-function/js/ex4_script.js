//var n = +prompt('Факториал какого числа вы хотите посчитать?');


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//function fact(n) {
//    var fact = 1;
//    if (isNumeric(n)) {
//        for (var i = n; i > 0; i--) {
//            fact *= i;
//        }
//
//        return document.write('<p style="text-align: center";>' + n + '! = ' + fact + '</p>');
//    } else {
//        return document.write('<p style="text-align: center";>Вы ввели "0", или не число. Попробуйте еще раз</p>');
//    }
//}

function pow(a, b) {
    var result = 1;
    if (isNumeric(a) && isNumeric(b)) {
        if (b > 0) {
            for (var i = 0; i < b; i++) {
                result *= a;
            }
        } else if (b < 0) {
            b = -b;
            for (var i = 0; i < b; i++) {
                result = result * a;
            }
            result = 1 / result;
        } else {
            result = 1;
        }
        return document.write('<p style="text-align: center";>' + a + ' в степени ' + b + ' = ' + result + '</p>');
    } else {
        return document.write('<p style="text-align: center";>Вы ввели не число. Попробуйте еще раз</p>');
    }
}



var a = +prompt('Введите a');
var b = +prompt('Введите b');

pow(a, b);