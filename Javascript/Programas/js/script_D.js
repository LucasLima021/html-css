function tabuada() {
    let num = document.getElementById('num')

    if (num.value.length == 0) {
        alert('Campo número vazio')
    }
    else {
        let n = Number(num.value)
        let cont = 0
        let resp = document.getElementById('tabuada')

        resp.innerHTML = ""

        while(cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            cont++

            resp.appendChild(item)
        }
    }
}