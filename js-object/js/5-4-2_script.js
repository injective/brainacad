var option = {
    smallLatinBoo: confirm('Использовать маленькие латинские буквы?'),
    capitalLatinBoo: confirm('Использовать большие латинские буквы?'),
    numbersBoo: confirm('Использовать цифры?'),
    specialsBoo: confirm('Использовать спец.символы " ~!@#$%^&*()., " ?')
}

function PassGen(opt) {
    this.smallLatinBoo = opt.smallLatinBoo;
    this.capitalLatinBoo = opt.capitalLatinBoo;
    this.numbersBoo = opt.numbersBoo;
    this.specialsBoo = opt.specialsBoo;

    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.smallLatin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.capitalLatin = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.specials = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ','];

    this.gen = generate;
}


function generate(len) {
    var tmp = [];
    var j;
    var out = '';

    if (this.smallLatinBoo === true) {
        for (var i = 0; i < this.smallLatin.length; i++){
            tmp.push(this.smallLatin[i]);
        }
    }
    if (this.capitalLatinBoo === true) {
        for (var i = 0; i < this.capitalLatin.length; i++){
            tmp.push(this.capitalLatin[i]);
        }
    }
    if (this.numbersBoo === true) {
        for (var i = 0; i < this.numbers.length; i++){
            tmp.push(this.numbers[i]);
        }
    }
    if (this.specialsBoo === true) {
        for (var i = 0; i < this.specials.length; i++){
            tmp.push(this.specials[i]);
        }
    }

    for (var i = 0; i < len; i++) {
        j = Math.floor(Math.random() * tmp.length);
        out += tmp[j];
    }

    return out;
}


var passgen = new PassGen(option);
var password = passgen.gen(32);


document.write('<p style="text-align: center; color: crimson; font-size: 30px;">' + password + '</p><br>');

