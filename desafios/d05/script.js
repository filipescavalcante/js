var num = document.getElementById('numeros')
var res = document.getElementById('res') 
var analise = document.getElementById('analise')
listaNumeros = []

function adicionar() {
    listaNumeros.push(Number(num.value))
    let valor = document.createElement('option')
    valor.innerHTML = `Você adicionou o valor ${num.value}`
    res.append(valor)
    num.value = ''
}

function finalizar() {
    listaNumeros.sort()

    let soma = 0
    let c = 1
    let v = listaNumeros.length

    while (c <= v) {
        soma = soma + listaNumeros[c] + listaNumeros[c-1]
        c++
    }

    analise.innerHTML = `${soma}`

    analise.innerHTML = `A quantidade de elementos adicionados foi ${listaNumeros.length} <br> 
    O maior valor foi ${listaNumeros[listaNumeros.length -1]} <br>
    O menor valor foi ${listaNumeros[0]} <br>
    `
}