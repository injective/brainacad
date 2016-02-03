alert("Конвертер валют UAH->USD");

var kyrs = +prompt("Введите курс гривны к доллару");
var uah = +prompt("Введите сумму в гривнах");
var usd = (uah / kyrs).toFixed(2);

alert("Курс валют: " + kyrs + "грн/долл\n" + uah + "гривен = " + usd + "$.");
