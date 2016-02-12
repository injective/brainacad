//2.7 Задание попроще на использование условного оператора if. Спросить у пользователя его температуру тела.
//    Если введено НЕ ЧИСЛО, сообщить об ошибке и спросить еще раз до тех пор пока не будет введено число.
//    Если введено число от 35 до 37 сообщить что пользователь здоров. От 37 до 40 - болен. От 40 до 42 - в коме.
//    Больше 42 - горит. Меньше 35 - труп.

var k;
var boo = false;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

do {
    k = +prompt('Напишите вашу температуру тела', '36.6');
} while(isNumeric(k) === false)

if (k < 35) {
    document.write('<p style="text-align: center; font-size: 30px;">Вы - труп. :(</p>');
} else if (k >=35 && k < 37) {
    document.write('<p style="text-align: center; font-size: 30px;">Вы здоровы. :)</p>');
} else if (k >=37 && k < 40) {
    document.write('<p style="text-align: center; font-size: 30px;">У вас проблемы со здоровьем. :/</p>');
} else if (k >=40 && k < 42) {
    document.write('<p style="text-align: center; font-size: 30px;">Вы в коме. :(</p>');
} else {
    document.write('<p style="text-align: center; font-size: 30px;">Вы сгорели. :(</p>');
}