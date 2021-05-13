let num = document.getElementById('entrada')
let lista = document.getElementById('lista')
let resp = document.querySelector('div#result')

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
        alert('O número digitado está fora do intervalo permitido ou já consta na lista')
    }

    num.value = ''
    num.focus()
}

function resultado() {
    resp.innerHTML = ''
    if (valores.length == 0) {
        alert('Você não adicionou nenhum número')
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
        
        //saídas
        resp.innerHTML = `<br>Ao todo temos ${tot} números cadastrados`
        resp.innerHTML += `<br>O maior número digitado foi ${maior}`
        resp.innerHTML += `<br>O menor número digitado foi ${menor}`
        resp.innerHTML += `<br>A soma dos números cadastrados é igual a ${soma}`
        resp.innerHTML += `<br>A média dos valores é ${media.toFixed(2)}`
    }
}