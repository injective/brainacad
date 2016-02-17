//3.3★ Сделать игру "Банк на костях" для одного игрока. Сначала пользователь вносит депозит -
//    из этой суммы будут вычитаться ставки и к ней прибавляться выигрыши. Игра заканчивается,
//    если депозит равен нулю. Нельзя делать ставку больше размера депозита.
//    Чтобы досрочно завершить игру и забрать депозит игрок должен сделать ставку размером 0.
//    Правила игры: понтер (игрок) делает ставку на любое число от 1 до 6 (грани игральной кости).
//    Программа "выбрасывает" 3 кости, т.е. показывает 3 случайных числа от 1 до 6.
//    Если хотя бы одна из трех костей выпала той гранью которую загадывал игрок, он получает выигрыш,
//    равный размеру ставки. Если с загаданным числом совпадает 2 грани, получает двойной выигрыш.
//    Если все 3 грани - тройной выигрыш. Если ни одна грань не совпадает - теряет ставку.
//    Использовать отдельные функции для выполнения ставки, выбрасывания костей и проверки выигрыша.
//    А весь код игры должен быть внутри функции game().

function game() {

    var money = 1000;
    var rate = 0;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function setMoneyForGame() {
        var gameover = false;
        alert('Ваш стартовый депозит ' + money + ' гривен.');
        do {
            if(money <= 0) {
                alert('Ваш депозит равен нулю! :(');
                gameover = true;
            } else {
                rate = +prompt('Ваш депозит равен ' + money + '.\n' +
                                 'Сделайте вашу ставку', '100');
                if(isNumeric(rate)) {
                    if(rate <= money && rate > 0) {
                        randomDice(rate);
                    } else {
                        alert('Ваша ставка превышает ваш депозит, либо <= 0!');
                        gameover = true;
                    }
                } else {
                    alert('Вы сделали ставку не число!');
                    gameover = true;
                }
            }
        } while(gameover === false);
        alert('Вы проиграли.');
    }

//function randomDice(rate) {
//        var min = 1;
//        var max = 7;
//        var yourNumber = +prompt('Введите число от 1 до 6');
//        if(isNumeric(yourNumber) && (yourNumber === 1 || yourNumber === 2 || yourNumber === 3 ||
//            yourNumber === 4 || yourNumber === 5 || yourNumber === 6)) {
//            var firstRandomNumber = +Math.floor(Math.random() * (max - min)) + 1;
//            var secondRandomNumber = +Math.floor(Math.random() * (max - min)) + 1;
//            var thirdRandomNumber = +Math.floor(Math.random() * (max - min)) + 1;
//
//            if(firstRandomNumber === yourNumber || secondRandomNumber === yourNumber || thirdRandomNumber === yourNumber) {
//                alert('Ваше число - ' + yourNumber + '\n' +
//                      'Кость I - ' + firstRandomNumber + '\n' +
//                      'Кость II - ' + secondRandomNumber + '\n' +
//                      'Кость III - ' + thirdRandomNumber + '\n' +
//                      '\n' +
//                      'Вы выиграли! Совпало одно из трех чисел! +' + rate + ' к депозиту!');
//                money += rate;
//                return money;
//            } else if((firstRandomNumber === yourNumber && secondRandomNumber === yourNumber) ||
//                (firstRandomNumber === yourNumber && thirdRandomNumber === yourNumber) ||
//                (secondRandomNumber === yourNumber && thirdRandomNumber === yourNumber)) {
//                alert('Ваше число - ' + yourNumber + '\n' +
//                      'Кость I - ' + firstRandomNumber + '\n' +
//                      'Кость II - ' + secondRandomNumber + '\n' +
//                      'Кость III - ' + thirdRandomNumber + '\n' +
//                      '\n' +
//                      'Вы выиграли! Совпали два из трех чисел! +' + rate*2 + ' к депозиту!');
//                money += rate*2;
//                return money;
//            } else if(firstRandomNumber === yourNumber && secondRandomNumber === yourNumber && thirdRandomNumber === yourNumber) {
//                alert('Ваше число - ' + yourNumber + '\n' +
//                      'Кость I - ' + firstRandomNumber + '\n' +
//                      'Кость II - ' + secondRandomNumber + '\n' +
//                      'Кость III - ' + thirdRandomNumber + '\n' +
//                      '\n' +
//                      'БИНГО!!!! Вы выиграли! Совпали ТРИ из трех чисел! +' + rate*3 + ' к депозиту!');
//                money += rate*3;
//                return money;
//            } else {
//                alert('Ваше число - ' + yourNumber + '\n' +
//                'Кость I - ' + firstRandomNumber + '\n' +
//                'Кость II - ' + secondRandomNumber + '\n' +
//                'Кость III - ' + thirdRandomNumber + '\n' +
//                    '\n' +
//                    'Вам не повезло.');
//                money = money - rate;
//                return money;
//            }
//        } else {
//            alert('Вы выбрали кость не число!');
//        }
//    }
//    setMoneyForGame();
//}

function randomDice(rate) {
    var min = 1;
    var max = 7;
    var yourNumber = +prompt('Введите число от 1 до 6');
    if(isNumeric(yourNumber) && (yourNumber === 1 || yourNumber === 2 || yourNumber === 3 ||
        yourNumber === 4 || yourNumber === 5 || yourNumber === 6)) {
        var firstRandomNumber = +Math.floor(Math.random() * (max - min)) + 1;
        var secondRandomNumber = +Math.floor(Math.random() * (max - min)) + 1;
        var thirdRandomNumber = +Math.floor(Math.random() * (max - min)) + 1;

        if(firstRandomNumber === yourNumber && secondRandomNumber === yourNumber && thirdRandomNumber === yourNumber) {
            alert('Ваше число - ' + yourNumber + '\n' +
                'Кость I - ' + firstRandomNumber + '\n' +
                'Кость II - ' + secondRandomNumber + '\n' +
                'Кость III - ' + thirdRandomNumber + '\n' +
                '\n' +
                'БИНГО!!!! Вы выиграли! Совпали ТРИ из трех чисел! +' + rate*3 + ' к депозиту!');
            money += rate*3;
            return money;
        } else if((firstRandomNumber === yourNumber && secondRandomNumber === yourNumber) ||
            (firstRandomNumber === yourNumber && thirdRandomNumber === yourNumber) ||
            (secondRandomNumber === yourNumber && thirdRandomNumber === yourNumber)) {
            alert('Ваше число - ' + yourNumber + '\n' +
                'Кость I - ' + firstRandomNumber + '\n' +
                'Кость II - ' + secondRandomNumber + '\n' +
                'Кость III - ' + thirdRandomNumber + '\n' +
                '\n' +
                'Вы выиграли! Совпали два из трех чисел! +' + rate*2 + ' к депозиту!');
            money += rate*2;
            return money;
        } else if (firstRandomNumber === yourNumber || secondRandomNumber === yourNumber || thirdRandomNumber === yourNumber) {
            alert('Ваше число - ' + yourNumber + '\n' +
                'Кость I - ' + firstRandomNumber + '\n' +
                'Кость II - ' + secondRandomNumber + '\n' +
                'Кость III - ' + thirdRandomNumber + '\n' +
                '\n' +
                'Вы выиграли! Совпало одно из трех чисел! +' + rate + ' к депозиту!');
            money += rate;
            return money;
        } else {
            alert('Ваше число - ' + yourNumber + '\n' +
                'Кость I - ' + firstRandomNumber + '\n' +
                'Кость II - ' + secondRandomNumber + '\n' +
                'Кость III - ' + thirdRandomNumber + '\n' +
                '\n' +
                'Вам не повезло.');
            money = money - rate;
            return money;
        }
    } else {
        alert('Вы выбрали кость не число!');
    }
}
setMoneyForGame();
}

game();
