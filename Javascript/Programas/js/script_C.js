function contar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Algum campo está vazio')
    }
    else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let cont = 0

        let resp = document.getElementById('resposta')

        //contagem crescente
        if (i < f) {

            for (cont = i; cont <= f; cont+=p)
            resp.innerHTML += `${cont}\u{1F449}`
            cont++
        }
        else if (i > f) {

            for(cont = i; cont >=f; cont-=p)
            resp.innerHTML += `${cont}\u{1F449}`
        }
    
        resp.innerHTML += `\u{1F3C1}`
    }
}