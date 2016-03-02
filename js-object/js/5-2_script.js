//5.2.  Создать объект "Колода карт" с полями колода (массив объектов "Карта"),
//      размер колоды (количество карт в колоде: 36 или 52), масти (♠ ♥ ♦ ♣),
//      значения (2,3,4,5,6,7,8,9,10,J,Q,K,A). И методами: собрать колоду (случайным образом
//      наполняется поле-массив Колода до количества карт, указанного в поле Размер колоды),
//      раздать карту (случайным образом выдается одна карта из Колоды, при этом количество
//      карт в Колоде уменьшается), проверка что колода не пустая (если розданы все карты,
//      выводить сообщение и предлагать пересобрать колоду).
//      Объект "Карта" имеет два поля - масть и значение.


var stackCards = {
    cards: [],

    deck: function(k) {
        var names52 = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
        var names36 = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
        var suits = ['♠', '♥', '♦', '♣'];

        this.cards = [];

        if(k === 52) {
            for( var s = 0; s < suits.length; s++ ) {
                for( var n = 0; n < names52.length; n++ ) {
                    this.cards.push( new card(names52[n], suits[s] ) );
                }
            }
        } else {
            for( var s = 0; s < suits.length; s++ ) {
                for( var n = 0; n < names36.length; n++ ) {
                    this.cards.push( new card(names36[n], suits[s] ) );
                }
            }
        }

        return this.cards;
    },

    randomCard: function() {

        if(this.cards.length === 0) {
            alert('В колоде нет карт, перетасуйте командой deck(36) / deck(52)');
        } else {
            var rnd = Math.floor(Math.random() * this.cards.length);
            var rndCard = this.cards[rnd];
            this.cards.splice(rnd, 1);

            console.log('Ваша карта: ' + rndCard.name + rndCard.suit);
            console.log('Карт в колоде: ' + this.cards.length);
            return rndCard;
        }
    }
}

function card(name, suit){
    this.name = name;
    this.suit = suit;
}

stackCards.deck(52);