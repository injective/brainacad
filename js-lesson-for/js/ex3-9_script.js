//2.8 Используя циклы и метод String.charCodeAt() выяснить,
//    есть ли во введенной пользователем строке латинские буквы.

var str = prompt('Введите строку на наличие латинских символов');
var code;

for (var i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        document.write('<p> str[' + i + '] = ' + str[i] + ' - символ латинского алфавита</p>');
    }
}