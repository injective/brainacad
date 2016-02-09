var fact = 1;
var n = +prompt('Факториал какого числа вы хотите посчитать?');

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

if (isNumeric(n)) {
    for (var i = n; i > 0; i--) {
        fact *= i;
    }

    document.write('<p style="text-align: center";>' + n + '! = ' + fact + '</p>');
} else {
    document.write('<p style="text-align: center";>Вы ввели "0", или не число. Попробуйте еще раз</p>');
}