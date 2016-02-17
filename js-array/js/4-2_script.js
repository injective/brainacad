//4.2. Задан массив, содержащий несколько нулевых элементов. Сжать его, выбросив эти элементы.

var arr = [1,3,0,4,5,7,0,0,0,0,3,56,0,8];

document.write('Массив до чистки<br>');
for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ');
}

document.write('<br>');
for(var i = arr.length; i >= 0; i--) {
    if(arr[i] === 0) {
        arr.splice(i, 1);
    }
}

document.write('Массив после чистки нулей<br>');
for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ');
}