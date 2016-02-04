var value = +prompt('Введите сумму обмена', 100);
var valuta = prompt('Введите валюту обмена (USD, EUR, RUB)', 'USD');
var UAH = 0;

switch (valuta) {
    case 'USD':
        UAH = value * 25;
        alert('Вы обменяли ' + value + valuta + ' на ' + UAH + 'UAH');
        break;
    case 'EUR':
        UAH = value * 30;
        alert('Вы обменяли ' + value + valuta + ' на ' + UAH + 'UAH');
        break;
    case 'RUB':
        UAH = value * 0.33;
        alert('Вы обменяли ' + value + ' ' + valuta + ' на ' + UAH + 'UAH');
        break;
    default:
        alert('Неизвестная валюта!');
}

//var str = '<table border="1">'
//
//for(var i = 1; i < 5; i++) {
//    str += '<tr>';
//    for(var j = 1; j < 8; j++) {
//        str += '<td>Строка ' + i + ', столбец ' + j + '</td>';
//    }
//    str += '</tr>';
//}
//
//str += '</table>';
//
//document.write(str);