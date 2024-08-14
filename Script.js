Function carregar(){
var msg = window.document .getElementById('msg')
var img =window.document.getElementById (' imagem')
var data = new Date() //pega a data atual
var hora -data.getHours ()//pega a hora da data atual
msg.innerHTML = Agora sao ${hora} horas.
if (hora >=0 && hora < 12){
//Bom dia
img.src = 'manha.jpeg'
} else if (hora >=12 && hora <18){
1/Boa tarde
img.srC = 'tarde.jpeg'
}else {
//Boa noite
img. srC = 'noite. j peg"
}
