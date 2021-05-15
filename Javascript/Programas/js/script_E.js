let num = document.getElementById('entrada')
let resp = document.getElementById('result')
let lista = document.getElementById('lista')

let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) == -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''
    }
    else {
        alert('Valor inválido ou o número digitado já consta na lista')
    }

    num.value = ''
    num.focus()
}

function resultado() {
    resp.innerHTML = ''

    if (valores.length == 0) {
        alert('Adicione algum valor')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (pos in valores) {
            soma += valores[pos]
            
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        //saída
        resp.innerHTML = `<br>Ao todo temos ${tot} números cadastrados`
        resp.innerHTML += `<br>O maior número cadastrado foi o ${maior}`
        resp.innerHTML += `<br>O menor número cadastrado foi o ${menor}`
        resp.innerHTML += `<br>A soma dos números cadastrados é de ${soma}`
        resp.innerHTML += `<br>A média é de ${media.toFixed(2).replace('.', ',')}`
    }
}