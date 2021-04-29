function tabuada() {
    let num = document.getElementById('input')

    if (num.value.length == 0) {
        alert('Campo número vazio!')
    }
    else {
        let n = Number(num.value)
        let resp = document.getElementById('tabuada')
        let cont = 0

       resp.innerHTML = ""
       
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} =${n * cont}`
            cont++

            resp.appendChild(item)
        }
    }
}