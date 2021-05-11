function horas() {
    let data = new Date()
    let hora = data.getHours()

    let imagem = document.getElementById('imagem')
    
    let resp = document.getElementById('resp')
    resp.innerHTML = `Agora são ${hora} horas`

    if (hora > 0 && hora < 12) {
        imagem.src = "img/manha.jpg"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora < 18) {
        imagem.src = "img/tarde.jpg"
        document.body.style.background = "#b9846f"
    }
    else {
        imagem.src = "img/noite.jpg"
        document.body.style.background = "#515154"
    }
}