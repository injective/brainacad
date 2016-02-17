//4.5. Задать массив [m:n] (двумерный массив размером m на n).
//     Из него сформировать два одномерных массива: элементы первого - сумма положительных элементов по строкам;
//     элементы второго - количество отрицательных по столбцам.

var m;
var n;
var min = -9;
var max = 9;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray(m, n) {
    var arr = [];
    for(var i = 0; i < m; i++) {
        arr[i] = [];
        for(var j = 0; j < n; j++) {
            arr[i][j] = getRandomInt(min, max);
        }
    }

    printArray(arr);
    createFirstArray(arr);
    createSecondArray(arr);
    return arr;
}

function printArray(arr) {
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        str += '[' + arr[i] + ']<br>';
    }
    document.write('<br>');
    return document.write(str);
}

function createFirstArray(arr) {
    var sum = 0;
    var firstArr = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 0) {
                sum += arr[i][j];
            }
        }

        firstArr[i] = sum;
        sum = 0;
    }


    return printArray(firstArr);
}

function createSecondArray(arr) {
    var count = 0;
    var secondArr = [];

    for (var j = 0; j < arr[0].length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i][j] < 0) {
                count++;
            }
        }

        secondArr[j] = count;
        count = 0;
    }

    return printArray(secondArr);
}


n = +prompt('Введите ширину (m) массива', 5);
m = +prompt('Введите ширину (n) массива', 5);

if (isNumeric(n) && isNumeric(m)) {
    createRandomArray(n, m);
} else {
    alert('Вы ввели не числовые значения!');
}