function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function addition(a, b) {
    return a+b;
}

function subtraction(a, b) {
    return a-b;
}

function multiplication(a, b) {
    return a*b;
}

function division(a, b) {
    return a/b;
}

function calc() {
    var boo = false;
    do {
        var a = +prompt('Введите А');
        var b = +prompt('Введите B');

        var result = +prompt('Введите действие - от 1 до 4. Введите 0 для выхода');

        if(isNumeric(a) && isNumeric(b) && isNumeric(result)) {
            if (result === 1) {
                alert('A + B = ' + addition(a, b));
            } else if(result === 2) {
                alert('A - B = ' + subtraction(a, b));
            } else if(result === 3) {
                alert('A * B = ' + multiplication(a, b));
            } else if(result === 4) {
                alert('A / B = ' + division(a, b));
            } else if(result === 0) {
                alert('Вы вышли с программы.');
                boo = true;
            } else {
                alert('Вы ввели неверное значение');
            }
        } else {
            boo = true;
            alert('Вы ввели не число!');
        }
    } while(boo === false);
}

calc();