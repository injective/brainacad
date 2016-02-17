//4.3. Посчитать количество четных чисел на диагоналях двумерного массива

var mas = 5;

function diagonal(arr) {
    var count = 0;

    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            if((j === i) || (j = arr[i].length-1-i)) {
                if(arr[i][j] % 2 === 0) {
                    count++;
                }
            }
        }
    }

    //for(var i = 0; i < arr.length; i++) {
    //    j = arr.length-1-i;
    //    if(arr[i][j] % 2 === 0) {
    //        count++;
    //    }
    //}
    document.write('<br>');
    return count;
}

function array(n) {
    var arr = [];
    for(var i = 0; i < n; i++) {
        arr[i] = [];
        for(var j = 0; j < n; j++) {
            arr[i][j] = +Math.floor(Math.random() * 9) + 1;
        }
    }
    document.write(printArray(arr));
    return arr;
}

function printArray(arr) {
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        str += '[' + arr[i] + ']<br>';
    }

    return str;
}

document.write('<br>count = ' + diagonal(array(mas)));