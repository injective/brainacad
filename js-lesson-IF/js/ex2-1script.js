alert("Задание 2.1\n Узнайте ваш знак зодиака!");

var name = prompt("Как вас зовут?");

var day = +prompt("Введите дату (число) вашего рождения.\n " +
    "(Примечание: значения от 1 до 31)", 1);

var month = prompt("Введите месяц вашего рождения.\n " +
    "(Примечание: название месяца писать с маленькой буквы)");

var year = +prompt("Введите год вашего рождения.\n " +
    "(Примечание: значения 1901-2015гг включительно)", 2000);

var monthForAlert = "";

var zodiac = "";



if ((day >= 1 && day <= 31) && ((month === "январь") || (month === "февраль") || (month === "март") ||
                                    (month === "апрель") || (month === "май") || (month === "июнь") ||
                                    (month === "июль") || (month === "август") || (month === "сентябрь") ||
                                    (month === "октябрь") || (month === "ноябрь") || (month === "декабрь")) &&
                                    (year > 1900 && year < 2016)) {

    if (((month === "декабрь") && (day >= 23 && day <= 31)) || ((month === "январь") && (day >= 1 && day <= 20))) {
        zodiac = "Козерог";
    } else if (((month === "январь") && (day >= 21 && day <= 31)) || ((month === "февраль") && (day >= 1 && day <= 19))) {
        zodiac = "Водолей";
    } else if (((month === "февраль") && (day >= 20 && day <= 29)) || ((month === "март") && (day >= 1 && day <= 20))) {
        zodiac = "Рыбы";
    } else if (((month === "март") && (day >= 21 && day <= 31)) || ((month === "апрель") && (day >= 1 && day <= 20))) {
        zodiac = "Овен";
    } else if (((month === "апрель") && (day >= 21 && day <= 30)) || ((month === "май") && (day >= 1 && day <= 21))) {
        zodiac = "Телец";
    } else if (((month === "май") && (day >= 22 && day <= 31)) || ((month === "июнь") && (day >= 1 && day <= 21))) {
        zodiac = "Близнецы";
    } else if (((month === "июнь") && (day >= 22 && day <= 30)) || ((month === "июль") && (day >= 1 && day <= 22))) {
        zodiac = "Рак";
    } else if (((month === "июль") && (day >= 23 && day <= 31)) || ((month === "август") && (day >= 1 && day <= 21))) {
        zodiac = "Лев";
    } else if (((month === "август") && (day >= 22 && day <= 31)) || ((month === "сентябрь") && (day >= 1 && day <= 23))) {
        zodiac = "Дева";
    } else if (((month === "сентябрь") && (day >= 24 && day <= 30)) || ((month === "октябрь") && (day >= 1 && day <= 23))) {
        zodiac = "Весы";
    } else if (((month === "октябрь") && (day >= 24 && day <= 31)) || ((month === "ноябрь") && (day >= 1 && day <= 22))) {
        zodiac = "Скорпион";
    } else if (((month === "ноябрь") && (day >= 23 && day <= 30)) || ((month === "декабрь") && (day >= 1 && day <= 22))) {
        zodiac = "Стрелец";
    }


    if (month === "январь") {
        monthForAlert = "января";
    } else if (month === "февраль") {
        monthForAlert = "февраля";
    } else if (month === "март") {
        monthForAlert = "марта";
    } else if (month === "апрель") {
        monthForAlert = "апреля";
    } else if (month === "май") {
        monthForAlert = "мая";
    } else if (month === "июнь") {
        monthForAlert = "июня";
    } else if (month === "июль") {
        monthForAlert = "июля";
    } else if (month === "август") {
        monthForAlert = "августа";
    } else if (month === "сентябрь") {
        monthForAlert = "сентября";
    } else if (month === "октябрь") {
        monthForAlert = "октября";
    } else if (month === "ноябрь") {
        monthForAlert = "ноября";
    } else if (month === "декабрь") {
        monthForAlert = "декабря";
    }

    alert("Здравствуйте, " + name + ". Вы родились " + day + " " + monthForAlert + " " + year + "г.\n" +
        "По знаку зодиака Вы - " + zodiac + ".");

} else {
    alert("Вы ввели несуществующую дату. Попробуйте еще раз, обновив страницу.");
}