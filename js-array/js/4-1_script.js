//4.1. Перестановка элементов одномерного массива (первый с последним, второй с предпоследним и т.д.)

var arr1 = [1,2,3,4,5,6,7,8,9,10,11];
var arr2 = [arr1.length];

for (var i = 0; i < arr1.length; i++) {
    document.write(arr1[i] + ' ');
}

document.write('<br>');


for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[arr1.length-i-1];
}

document.write('<br>');
for (var i = 0; i < arr2.length; i++) {
    document.write(arr2[i] + ' ');
}