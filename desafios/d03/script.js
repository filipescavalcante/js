function contar() {
    var c = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var resultado = document.getElementsByClassName('res')[0] 
    
    while (c <= fim) {
        resultado.innerHTML = c
        c = c + passo
    }
    
}
