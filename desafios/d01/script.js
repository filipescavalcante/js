function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)

    if (hora < 12) {
        img.src = "images/manha.jpg"
        document.body.style.background = '#FDDC5E'
    } else if (hora <= 18) {
        img.src = "images/tarde.jpg"
        document.body.style.background = '#D6784A'
    } else {
        img.src = "images/noite.jpg"
        document.body.style.background = '#0A2854'
    }
}
