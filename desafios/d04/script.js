function gerarTabuada() {
    var numero = document.getElementById('num').value
    var resultado = document.querySelector('select')
    var n = Number(numero)
    var m = 1

    if (numero.length == 0) {
        alert('[ERRO] Valor inválido!')
    } else {
        resultado.innerHTML = ''

        for (n; m <= 10; m++) {
            let item = document.createElement('option')
            item.innerText = `${n} x ${m} = ${n * m}`
            item.value = `v${m}`
            resultado.append(item)
        }
    }
}