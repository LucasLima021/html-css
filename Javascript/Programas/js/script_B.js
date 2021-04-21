function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.getElementById('nasc')

    var resposta = document.querySelector('div#resposta')

    if (formAno.value.length == 0 || formAno.value >= ano) { //if para fazer a validação
        alert('Dados inválidos')
    }
    else { //else para abraçar todas as minhas condicionais, ou seja, passou pelo primeiro if
        var genero = ""
        var formSexo = document.getElementsByName('sexo')
        var idade = ano - formAno.value
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        
        if (formSexo[0].checked) { //verificando se é HOMEM
            genero = 'HOMEM'

            if (idade <= 10) { //Verificando as idades p/ homem
                imagem.setAttribute('src', 'img/foto-bebe-m.png')
            }
            else if (idade <= 20) {
                imagem.setAttribute('src', 'img/foto-jovem-m.png')
            }
            else if (idade < 60) {
                imagem.setAttribute('src', 'img/foto-adulto-m.png')
            }
            else {
                imagem.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } //fecha chave do if p/ verificar se é homem

        else if (formSexo[1].checked) { //Verificando se é MULHER
            genero = 'MULHER'

            if (idade <= 10) { //Verificando as idades p/ mulher
                imagem.setAttribute('src', 'img/foto-bebe-f.png')
            }
            else if (idade <= 20) {
                imagem.setAttribute('src', 'img/foto-jovem-f.png')
            }
            else if (idade < 60) {
                imagem.setAttribute('src', 'img/foto-adulto-f.png')
            }
            else {
                imagem.setAttribute('src', 'img/foto-idoso-f.png')
            }           
        }  //fecha chave do else if p/ verificar se é mulher
    
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resposta.appendChild(imagem)
        resposta.style.textAlign = "center"

    } //fecha chave do primeiro else
    
} //fecha chave da função