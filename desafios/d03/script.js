function contar() {
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var passo = document.getElementById("passo").value;
    var resultado = document.getElementById("res");

    if (inicio.length == 0 || fim.length == 0 || passo < 0) {
        alert("[ERRO] Digite valores válidos!");
    } else {
        
        var nInicio = Number(inicio);
        var nFim = Number(fim);
        var nPasso = Number(passo);

        if (resultado.innerHTML != 0){
            resultado.innerHTML = ''
        }

        if (passo.length == 0) {
            nPasso = 1;
            }

        if (nInicio <= nFim) {

            while (nInicio <= nFim) {
                resultado.append(`${nInicio} `);
                nInicio = nInicio + nPasso;
            }
        } else {

            for (nInicio; nInicio >= nFim; nInicio -= nPasso) {
                resultado.append(`${nInicio} `)
            }
        }
    }
}
