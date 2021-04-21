function exibirHora() {
    var data = new Date()
    var hora = data.getHours()
    var res = document.getElementById('resposta')
    res.innerHTML = `Agora são ${hora} horas`
    
    if (hora >=0 && hora < 12) {
        //bom dia
         img.src = "img/manha.jpg" //Carregando minha tag img do HTML que será exibida na tela
         document.body.style.background = "#e2cd9f"
    }
    else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "img/tarde.jpg"
        document.body.style.background = "#b9846f"
    }
    else {
        //boa noite
        img.src = "img/noite.jpg"
        document.body.style.background = "#515154"
    }
}

