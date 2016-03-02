//5.4. Написать объект - генератор паролей. Поля: алфавиты, наличие маленьких латинских букв,
//      заглавных латинских, цифр, спецсимволов, метод - генерация нового пароля (аргумент - длина).
//      Например: создание нового генератора
//      var smallLatin = capitalLatin = numbers = specials = true;
//      var passgen = new PassGen(smallLatin, capitalLatin, numbers, specials);
//      var password = passgen.generate(32); //новый пароль из 32 символов с маленькими, большими
//      латинскими буквами, цифрами и спецсимволами.
//      Для продвинутых - передавать все параметры в виде объекта options, предусмотреть значения по умолчанию.
//      var options = {
//      smallLatin: true,
//      capitalLatin: false
//      };
//      var passgen = new PassGen(options);
var smallLatinBoo = true;
var capitalLatinBoo = false;
var numbersBoo = true;
var specialsBoo = false;

var option = {
    smallLatinBoo: true,
    capitalLatinBoo: false,
    numbersBoo: true,
    specialsBoo: false
}


var passwordGenerate = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    smallLatin: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    capitalLatin: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    specials: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ','],

    gen: generate
}


function generate(len) {
    var tmp = [];
    var j;
    var out = '';

    if (smallLatinBoo === true) {
        for (var i = 0; i < this.smallLatin.length; i++){
            tmp.push(this.smallLatin[i]);
        }
    }
    if (capitalLatinBoo === true) {
        for (var i = 0; i < this.capitalLatin.length; i++){
            tmp.push(this.capitalLatin[i]);
        }
    }
    if (numbersBoo === true) {
        for (var i = 0; i < this.numbers.length; i++){
            tmp.push(this.numbers[i]);
        }
    }
    if (specialsBoo === true) {
        for (var i = 0; i < this.specials.length; i++){
            tmp.push(this.specials[i]);
        }
    }

    for (var i = 0; i < len; i++) {
        j = Math.floor(Math.random() * tmp.length);
        out += tmp[j];
    }

    return out;
}


for (var i = 0; i < 30; i++) {
    document.write(passwordGenerate.gen(32) + '<br>');
}
