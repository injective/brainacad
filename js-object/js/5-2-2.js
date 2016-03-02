
var deck = {
    size: 52,
    suite: ['♠', '♥', '♦', '♣'],
    values: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
    cards: [],
    init: function() {
        for( var i = 0; i < suits.length; i++ ) {
            for( var j = 0; j < values.length; j++ ) {
                this.cards.push({
                    suite: this.suite[i],
                    value: this.value[j]
                });
            }
        }
    },

    deal: function() {
        var random = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(random, 1);
    }
}

deck.init();