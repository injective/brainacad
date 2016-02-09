var input;
var numHex;
var numDec;
var resultDEC;
var resultHEX;
var boo = true;

while (boo) {
    input = prompt('Введите HEX, если конвертируете HEX -> DEC\n' +
                    'или DEC, если конвертируете DEC -> HEX.\n' +
                    '\n' +
                    'Для выхода введите EXIT', 'HEX');
    if (input === 'HEX' || input === 'hex') {

        numHex = prompt('Введите HEX-число', 'ff3f');
        resultDEC = parseInt(numHex, 16);
        alert(numHex + ' (HEX) ---->>> ' + resultDEC + ' (DEC)');

    } else if (input === 'DEC' || input === 'dec') {

        numDec = +prompt('Введите DEC-число', '100');
        resultHEX = numDec.toString(16);
        alert(numDec + ' (DEC) ---->>> ' + resultHEX + ' (HEX)');

    } else if (input === 'EXIT' || input === 'exit') {

        alert ('Вы вышли с приложения.');
        boo = false;

    } else {

        alert('Вы ввели неизвестное значение!');
        boo = false;
    }
}