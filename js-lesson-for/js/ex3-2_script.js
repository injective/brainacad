var col = +prompt('Введите количество столбцов', 5);
var row = +prompt('Введите количество строк', 5);

var str = '<table style="border-collapse: collapse;">';

for(var i = 1; i <= row; i++) {
    str += '<tr>';
    if (i % 2 == 0) {
        for(var j = 1; j <= col; j++) {
            if (j % 2 == 0) {
                str += '<td style="border: 2px solid lightgray; background-color: lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
            } else {
                str += '<td style="border: 2px solid lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
            }
        }
    } else {
        for(var j = 1; j <= col; j++) {
            if (j % 2 == 1) {
                str += '<td style="border: 2px solid lightgray; background-color: lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
            } else {
                str += '<td style="border: 2px solid lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
            }
        }
    }
    str += '</tr>';
}

str += '</table>';

document.write(str);




//for(var j = 1; j <= col; j++) {
//    str += '<td style="border: 2px solid lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
//}