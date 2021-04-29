function horas() {
    let data = new Date()
    let hora = data.getHours()

    let imagem = document.getElementById('imagem')
    
    let resp = document.getElementById('resp')
    resp.innerHTML = `Agora são ${hora} horas`

    if (hora > 0 && hora < 12) {
        imagem.src = "img/manha.jpg"
    }
    else if (hora < 18) {
        imagem.src = "img/tarde.jpg"
    }
    else {
        imagem.src = "img/noite.jpg"
    }
}