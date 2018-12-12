console.log('rr')

function taille() {
    var a;
    a = document.getElementById('mySelect').value;
    document.getElementById('demo').style.fontSize = a + 'px';
}

function fontText() {
    var a;
    a = document.getElementById('myFont').value;
    document.getElementById('demo').style.fontFamily = a;
}

function souligner() {
    document.getElementById('demo').classList.toggle('soul')
}

function transformer() {
    document.getElementById('demo').classList.toggle('italic')
}

function transformation() {
    document.getElementById('demo').classList.toggle('bold')
}

//  function font() {
//     return document.getElementById('myFont').value;
// }

// function chahngeSize(a) {
//     document.getElementById('demo').style.fontSize = a + 'px';
// }

// function chnageFont(b) {
//     document.getElementById('demo').style.fontFamily = b;
// }