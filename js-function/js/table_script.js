//function getTable(rows, cols) {
//    var str = '<table style="border-collapse: collapse;">';
//
//    for(var i = 1; i <= rows; i++) {
//        str += '<tr>';
//        for(var j = 1; j <= cols; j++) {
//            str += '<td style="border: 2px solid lightgray;">' + j + ' * ' + i + ' = ' + i * j + '</td>';
//        }
//        str += '</tr>';
//    }
//    str += '</table>';
//
//    return str;
//}


function getTable(rows, cols) {
    var str = '<table style="border-collapse: collapse;">';


    for(var i = 1; i <= rows; i++) {
        str += getTableRow(cols);
    }
    str += '</table>';

    return str;
}

function getTableRow(cols) {
    var str2 = '<tr>';
    for(var j = 1; j <= cols; j++) {
        str2 += '<td style="border: 2px solid lightgray;">****</td>';
    }
    str2 += '</tr>'
    return str2;
}

function printTableN(n) {
    for(var z = 0; z < n; z++) {
        var rows = +prompt('Введите количество строк');
        var cols = +prompt('Введите количество столбцов');

        document.write(getTable(rows, cols) + '<br><br>');
    }
}

printTableN(4);