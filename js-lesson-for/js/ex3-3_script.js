var name = 'Аноним';
var day;
var dayConfirm = false;
var month;
var monthConfirm = false;
var year;
var monthForAlert = "";
var zodiac = "";

alert("Задание 3.1\n Узнайте ваш знак зодиака!");

name = prompt("Как вас зовут?");

for (var i = 1; i <= 31; i++) {
    dayConfirm = confirm('Вы родились в ' + i + ' день месяца?');
    if (dayConfirm === true) {
        day = i;
        break;
    }
}

if (dayConfirm === true) {
    for (var j = 1; j <= 12; j++) {
        monthConfirm = confirm('Вы родились в ' + j + ' месяц?');
        if (monthConfirm === true) {
            month = j;
            break;
        }
    }

    year = +prompt("Введите год вашего рождения.\n " +
        "(Примечание: значения 1901-2015гг включительно)", 2000);
}


if ((day >= 1 && day <= 31) && ((month === 1) || (month === 2) || (month === 3) ||
    (month === 4) || (month === 5) || (month === 6) ||
    (month === 7) || (month === 8) || (month === 9) ||
    (month === 10) || (month === 11) || (month === 12)) &&
    (year > 1900 && year < 2016)) {

    if (((month === 12) && (day >= 23 && day <= 31)) || ((month === 1) && (day >= 1 && day <= 20))) {
        zodiac = "Козерог";
    } else if (((month === 1) && (day >= 21 && day <= 31)) || ((month === 2) && (day >= 1 && day <= 19))) {
        zodiac = "Водолей";
    } else if (((month === 2) && (day >= 20 && day <= 29)) || ((month === 3) && (day >= 1 && day <= 20))) {
        zodiac = "Рыбы";
    } else if (((month === 3) && (day >= 21 && day <= 31)) || ((month === 4) && (day >= 1 && day <= 20))) {
        zodiac = "Овен";
    } else if (((month === 4) && (day >= 21 && day <= 30)) || ((month === 5) && (day >= 1 && day <= 21))) {
        zodiac = "Телец";
    } else if (((month === 5) && (day >= 22 && day <= 31)) || ((month === 6) && (day >= 1 && day <= 21))) {
        zodiac = "Близнецы";
    } else if (((month === 6) && (day >= 22 && day <= 30)) || ((month === 7) && (day >= 1 && day <= 22))) {
        zodiac = "Рак";
    } else if (((month === 7) && (day >= 23 && day <= 31)) || ((month === 8) && (day >= 1 && day <= 21))) {
        zodiac = "Лев";
    } else if (((month === 8) && (day >= 22 && day <= 31)) || ((month === 9) && (day >= 1 && day <= 23))) {
        zodiac = "Дева";
    } else if (((month === 9) && (day >= 24 && day <= 30)) || ((month === 10) && (day >= 1 && day <= 23))) {
        zodiac = "Весы";
    } else if (((month === 10) && (day >= 24 && day <= 31)) || ((month === 11) && (day >= 1 && day <= 22))) {
        zodiac = "Скорпион";
    } else if (((month === 11) && (day >= 23 && day <= 30)) || ((month === 12) && (day >= 1 && day <= 22))) {
        zodiac = "Стрелец";
    }

    switch (month) {
        case 1:
            monthForAlert = "января";
            break;
        case 2:
            monthForAlert = "февраля";
            break;
        case 3:
            monthForAlert = "марта";
            break;
        case 4:
            monthForAlert = "апреля";
            break;
        case 5:
            monthForAlert = "мая";
            break;
        case 6:
            monthForAlert = "июня";
            break;
        case 7:
            monthForAlert = "июля";
            break;
        case 8:
            monthForAlert = "августа";
            break;
        case 9:
            monthForAlert = "сентября";
            break;
        case 10:
            monthForAlert = "октября";
            break;
        case 11:
            monthForAlert = "ноября";
            break;
        case 12:
            monthForAlert = "декабря";
            break;
    }

    document.write("<h1 style='text-align: center;'>Здравствуйте, " + name + ".<br>" +
                    "Вы родились " + day + " " + monthForAlert + " " + year + "г.<br>" +
                    "По знаку зодиака Вы - " + zodiac + ".</h1>");

} else {
    alert("Вы ввели несуществующую дату. Попробуйте еще раз, обновив страницу.");
}