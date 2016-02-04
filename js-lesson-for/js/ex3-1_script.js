var str = '<table style="border-collapse: collapse;">';

for(var i = 1; i <= 9; i++) {
    str += '<tr>';
    for(var j = 1; j <= 9; j++) {
        str += '<td style="border: 2px solid lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
    }
    str += '</tr>';
}

str += '</table>';

document.write(str);