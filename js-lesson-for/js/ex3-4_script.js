var n;
var fib = 1;
var temp = 1;
var x;

n = +prompt('Какое число Фиббоначи вы хотите вычислить?', '1');

if (n > 0) {
    if (n === 1 || n === 2) {
        document.write('<h1 style="text-align: center;">' + n + ' число Фибоначчи = 1</h1>');
    } else {
        for (var i = 3; i <= n; i++) {
            x = fib;
            fib = fib + temp;
            temp = x;
        }
        document.write('<h1 style="text-align: center;">' + n + ' число Фибоначчи = ' + fib + '</h1>');
    }
} else {
    alert('Введите число больше ноля! N > 0!');
}