var num = document.getElementById("numeros");
var res = document.getElementById("res");
var analise = document.getElementById("analise");

var listaNumeros = [];

function numValido (num) {
    if (num.length == 0 || num.value < 1 || num.value > 100) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (numValido (num) == false) {
        alert ('[ERRO] Digite valores válidos!')
    } else {
        listaNumeros.push(Number(num.value))
        let valor = document.createElement('option')
        valor.innerHTML = `Você adicionou o valor ${num.value}`
        res.append(valor)
        num.value = ''
        num.focus()
        analise.innerHTML = ''
    }
}

function resValido () {
    if (listaNumeros.length == 0) {
        return false
    } else {
        return true
    }
}

function finalizar() {
    if (resValido () == false) {
        alert ('[ERRO] Adicione valores!')
    } else {
        listaNumeros.sort()

        let total = listaNumeros.length
        let maior = listaNumeros[0]
        let menor = listaNumeros[0]
        let soma = 0
        let media = 0

        for (let pos in listaNumeros) {
            if (listaNumeros[pos] > maior) {
                maior = listaNumeros[pos]
            }
            if (listaNumeros[pos] < menor) {
                menor = listaNumeros[pos]
            }
            soma += listaNumeros[pos]
        }
        media = soma / total7

        analise.innerHTML = `<p>A quantidade de elementos adicionados foi ${total} <br>
        O maior valor foi ${maior} <br>
        O menor valor foi ${menor} <br>
        A soma de todos os elementos foi de ${soma} <br>
        A média dos elementos foi ${media.toFixed(2)}
        </p>`
    }
}

function limpar() {
    res.innerHTML = ''
    analise.innerHTML = ''
    listaNumeros = []
}