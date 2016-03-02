
var el = document.querySelector('.sq');

el.addEventListener('keydown', handler, false);

function handler(e){
    if (e.keyCode == 37) {
        if (this.style.left == '100px') {
            this.style.left = '100px'
        } else {
            this.style.left = parseInt(this.style.left) - 50 + 'px';
        }
    } else if (e.keyCode == 38) {
        if (this.style.top == '100px') {
            this.style.top = '100px'
        } else {
            this.style.top = parseInt(this.style.top) - 50 + 'px';
        }
    } else if (e.keyCode == 39) {
        if (this.style.left == '1100px') {
            this.style.left = '1100px'
        } else {
            this.style.left = parseInt(this.style.left) + 50 + 'px';
        }
    } else if (e.keyCode == 40) {
        if (this.style.top == '500px') {
            this.style.top = '500px'
        } else {
            this.style.top = parseInt(this.style.top) + 50 + 'px';
        }
    }
}
