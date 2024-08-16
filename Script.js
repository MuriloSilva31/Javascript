window.alert("Seja bem-vindo(a)");
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('foto');
var data = new Date();
var hora = data.getHours();

if (hora >= 7 && hora < 12) {
    img.src = '20240708_124514.jpg';
    msg.innerHTML = 'Bom dia!';
} else if (hora >= 12 && hora < 18) {
    img.src = 'boa tarde.jpg';
    msg.innerHTML = 'Boa tarde!';
} else {
    img.src = 'imagem boa noite.jpeg';
    msg.innerHTML = 'Boa noite!';
}
