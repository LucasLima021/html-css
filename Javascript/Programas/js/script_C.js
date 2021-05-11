function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    if (ini.value.legth == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Algum campo está vazio')
    }
    else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        let resp = document.getElementById('resposta')

        let cont = 0

        //esvaziar a resposta a cada nova execução
        resp.innerHTML = ""
        
        if (p <= 0) {
            alert('[ERRO] Passo menor ou igual a zero: Considerando PASSO 1')
            p = 1
        }
        
        //contagem crescente
        if (i < f) {
            for (cont = i; cont <= f; cont += p) {
                resp.innerHTML += `${cont}\u{1F449}`
            }
        }

        //contagem regressiva
        else if (i > f) {
            for (cont = i; cont >= f; cont -= p) {
                resp.innerHTML += `${cont}\u{1F449}`
            }
        }

        resp.innerHTML += `\u{1F3C1}`
    }
}