var el = document.querySelector('input');

var out = document.querySelector('output');

el.addEventListener('input', inputEngChars, false);

function inputEngChars() {
    var value = this.value;
    var rep = /[^a-zA-Z]/g;
    if (rep.test(value)){
        value = value.replace(rep, '');
        this.value = value;
    }

    out.innerHTML = el.value;
};


/* та же задача, но через отмену события  */
//var input = document.querySelector('#eng');
//input.addEventListener('keypress', handler, false);
//
//function handler(e) {
//    if (e.charCode < 1072 || e.charCode > 1103) {
//        e.preventDefault();
//    }
//}