//5.3★  Написать полноценную игру "Как стать миллионером" в виде объекта с полями Вопросы (массив),
//      где каждый вопрос является объектом с полями вопрос, ответы (массив из 4 элементов) и
//      правильный ответ (индекс правильного ответа). Поле Выигрыш - текущий выигрыш игрока, поле Игрок -
//      имя игрока, массив Выигрыши - шаги выигрышей (100, 200, 300, 500, 1000, ...). Методы - задать
//      вопрос, причем варианты ответов каждый раз должны выводится в случайном порядке, проверить ответ,
//      выиграл (поздравление, увеличение выигрыша и переход к следующему вопросу),
//      проиграл (сообщение об окончании игры).

//обьект с вопросами
var game = {
    questions: [
        {
            q: 'Что растёт в огороде?',                         //вопрос
            a: ['Лук', 'Пистолет', 'Пулемёт', 'Ракета СС-20'],  //ответы
            trueAns: 0                                          //правильный ответ - индекс массива c ответами, т.е. game.a[0]
        },
        {
            q: 'Как называют микроавтобусы, совершающие поездки по определённым маршрутам?',
            a: ['Рейсовка', 'Путёвка', 'Курсовка', 'Маршрутка'],
            trueAns: 3
        },
        {
            q: 'О чём писал Грибоедов, отмечая, что он «нам сладок и приятен»?',
            a: ['Дым Отечества', 'Дух купечества', 'Дар пророчества', 'Пыл девичества'],
            trueAns: 0
        },
        {
            q: 'Какого персонажа нет в известной считалке «На золотом крыльце сидели»?',
            a: ['Сапожника', 'Кузнеца', 'Короля', 'Портного'],
            trueAns: 1
        },
        {
            q: 'Какой специалист занимается изучением неопознанных летающих объектов?',
            a: ['Кинолог', 'Уфолог', 'Сексопатолог', 'Психиатр'],
            trueAns: 1
        },
        {
            q: 'Как называется разновидность воды, в которой атом водорода замещён его изотопом дейтерием?',
            a: ['Лёгкая', 'Средняя', 'Тяжёлая', 'Невесомая'],
            trueAns: 2
        },
        {
            q: 'Что такое десница?',
            a: ['Бровь', 'Глаз', 'Шея', 'Рука'],
            trueAns: 3
        },
        {
            q: 'В какое море впадает река Урал?',
            a: ['Азовское', 'Чёрное', 'Средиземное', 'Каспийское'],
            trueAns: 3
        },
        {
            q: 'На что кладут руку члены английского общества лысых во время присяги?',
            a: ['Баскетбольный мяч', 'Бильярдный шар', 'Апельсин', 'Кокосовый орех'],
            trueAns: 1
        },
        {
            q: 'Как назывался каменный монолит, на котором установлен памятник Петру I в Санкт-Петербурге?',
            a: ['Дом-камень', 'Гром-камень', 'Гора-камень', 'Разрыв-камень'],
            trueAns: 1
        },
        {
            q: 'Как Пётр Ильич Чайковский назвал свою серенаду для скрипки с оркестром си-бемоль минор?',
            a: ['Флегматическая', 'Меланхолическая', 'Холерическая', 'Сангвиническая'],
            trueAns: 1
        },
        {
            q: 'Какого ордена не было у первого советского космонавта Юрия Гагарина?',
            a: ['«Ожерелье Нила» (Египет)', '«Крест Грюнвальда» (Польша)', '«Плайя Хирон» (Куба)', '«Орден двойного дракона» (Китай)'],
            trueAns: 3
        },
        {
            q: 'Какое животное имеет второе название — кугуар?',
            a: ['Оцелот', 'Леопард', 'Пума', 'Пантера'],
            trueAns: 2
        },
        {
            q: 'Что в России 19 века делали в дортуаре?',
            a: ['Ели', 'Спали', 'Ездили верхом', 'Купались'],
            trueAns: 1
        },
        {
            q: 'Какой химический элемент назван в честь злого подземного гнома?',
            a: ['Гафний', 'Кобальт', 'Бериллий', 'Теллур'],
            trueAns: 1
        }
    ],

    bankStep: [0, 100, 200, 300, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 300000, 500000, 1000000], //шаги выиграшей. ну типа в гривнах)))

    playerBank: 0, //текущий выигрыш

    playerName: setPlayerName, //задать имя

    nextQ: nextQuestion //следующий вопрос
};



function setPlayerName(playerName) {
    this.playerName = playerName;
}

function nextQuestion() {
    var boo = true; //флаг выхода из цикла do..while, как только отвечаешь неправильно, boo=false и выход из цикла
    var i = 0;      //итератор
    var playerAns;  //сюда записать ответ пользователя
    var questionOut = document.querySelector('div.out'); //questionOut - вывод вопроса в div.out
    var ans1Out = document.querySelector('button#ans-1'); // ans1Out, ans2Out, ans3Out, ans4Out - вывод ответов.
    var ans2Out = document.querySelector('button#ans-2');
    var ans3Out = document.querySelector('button#ans-3');
    var ans4Out = document.querySelector('button#ans-4');
    alert('Добро пожаловать в игру, ' + this.playerName + '!');

    do {
        if (this.playerBank >= 0 && this.playerBank < 1000000) {  //вопросы задаются, пока твой выигрыш от 0 до 1'000'000грн


            questionOut.innerHTML = '<span style="font-size: 10px;">Ваш выигрыш: ' + this.playerBank + ' грн</span><br>' +
                '1. ' + this.questions[i].q;
            ans1Out.innerHTML = 'A. ' + this.questions[i].a[0] + '\n';
            ans2Out.innerHTML = 'B. ' + this.questions[i].a[1] + '\n';
            ans3Out.innerHTML = 'C. ' + this.questions[i].a[2] + '\n';
            ans4Out.innerHTML = 'D. ' + this.questions[i].a[3] + '\n';


            //попытка обработать клик ответа - элементы ans1Out,ans2Out,ans3Out,ans4Out
            [].forEach.call(document.querySelectorAll('button'), function(elem){
                elem.addEventListener('click', handleClick, false);
            });

            function handleClick() {
                playerAns = this.getAttribute('value');
            }

            // в следующем блове по идее должна была быть проверка - если кликнул на правильный ответ,
            // то итератор +1, текущий "банк" увеличил и сообщение что ответил правильно.
            // дальше должен запуститься новый вопрос.
            if (playerAns == this.questions[i].trueAns) {
                i++;
                this.playerBank = this.bankStep[i];
                alert('Правильный ответ! Вы выиграли ' + this.playerBank + '!');
            } else {
                alert('Ответ неверный, Вы проиграли!');
                boo = false;
            }

        } else if (this.playerBank === 1000000) { //если отвечаешь правильно на 15 вопросов, то победа))
            alert(this.playerName + ', Вы победили! 1000000 гривен Ваш!');
            boo = false;
        } else {
            alert('ERROR!'); //если что-то в этой жизни пошло не так - проигрыш))
            boo = false;
        }
    } while (boo);
}



//здесь типа запускаю программу
document.querySelector('.start').addEventListener('click', startFunction, false);

function startFunction() {
    document.querySelector('.start').style.display = 'none';
    document.querySelector('form.setName').style.display = 'block';
}



document.querySelector('#submitName').addEventListener('click', function(){

    document.querySelector('form.setName').style.display = 'none';
    document.getElementById('tableSilent').style.display = 'table';
    var nameAttribute = document.querySelector('input').value;
    game.playerName(nameAttribute);
    game.nextQ();

}, false);



