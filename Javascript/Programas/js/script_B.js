function idade() {
    let data = new Date()
    let ano = data.getFullYear()

    let txtnasc = document.getElementById('nasc')

    if (txtnasc.value.length == 0 || txtnasc.value >= ano) {
        alert('[ERRO] Campo de nascimento vazio ou o ano informado é maior ou igual o ano atual')
    }
    else {
        let sexo = document.getElementsByName('sexo')
        let result = document.getElementById('resposta')
        let idade = ano - txtnasc.value
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'imagem')

        if (sexo[0].checked) {
            result.innerHTML = `Detectamos HOMEM com ${idade} anos`

            if (idade <= 10) {
                imagem.setAttribute('src', 'img/foto-bebe-m.png')
            }
            else if (idade <= 22) {
                imagem.setAttribute('src', 'img/foto-jovem-m.png')
            }
            else if (idade < 60) {
                imagem.setAttribute('src', 'img/foto-adulto-m.png')
            }
            else {
                imagem.setAttribute('src', 'img/foto-idoso-m.png')
            }
        }

        else if (sexo[1].checked) {
            result.innerHTML = `Detectamos MULHER com ${idade} anos`

            if (idade <= 10) {
                imagem.setAttribute('src', 'img/foto-bebe-f.png')
            }
            else if (idade <= 22) {
                imagem.setAttribute('src', 'img/foto-jovem-f.png')
            }
            else if (idade < 60) {
                imagem.setAttribute('src', 'img/foto-adulto-f.png')
            }
            else {
                imagem.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }

        result.appendChild(imagem)
    }
}