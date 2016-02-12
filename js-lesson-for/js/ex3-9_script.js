//2.8 Используя циклы и метод String.charCodeAt() выяснить,
//    есть ли во введенной пользователем строке латинские буквы.

var str = prompt('Введите строку на наличие латинских символов');
var codeChar;

document.write('Введенная вами строка: ' + str + '<br><br>');

for (var i = 0; i < str.length; i++) {
    codeChar = str.charCodeAt(i);

    if ((codeChar >= 65 && codeChar <= 90) || (codeChar >= 97 && codeChar <= 122)) {
        document.write("str[" + i + "] = '" + str[i] + "' - символ латинского алфавита<br>");
    }
}