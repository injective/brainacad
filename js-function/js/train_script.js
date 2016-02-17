function mas(n, m) {
    var mas = [];

    for (var i = 0; i < m; i++){
        mas[i] = [];
        for (var j = 0; j < n; j++){
            mas[i][j] = Math.floor(Math.random() * 8) + 1;
        }
    }

    return mas;
}

function printArr(arr) {
    var str;
    for(var i = 0; i < arr.length; i++) {
        str += document.write('[')
        for(var j = 0; j < arr[i].length; j++) {
            str += document.write(arr[i][j] + ' ');
        }
        str += document.write(']<br>');
    }
    return str;
}

document.write(printArr(mas(5,6)));