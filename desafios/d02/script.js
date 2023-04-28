function verificar () {

    var date = new Date()
    var ano = date.getFullYear()
    var anoNascimento = document.getElementById('nascimento')
    var res = document.getElementById('resultado')

    if (anoNascimento.value.lenght == 0 || anoNascimento.value < 1900 || anoNascimento.value > ano){

        alert('Idade inválida. Tente outro valor.')

    } else {

        var idade = ano - anoNascimento.value
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 13){
                img.src = 'images/homem-crianca.jpg'
            } else if (idade < 20){
                img.src = 'images/homem-jovem.jpg'
            } else if (idade < 65){
                img.src = 'images/homem-adulto.jpg'
            } else {
                img.src = 'images/homem-idoso.jpg'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade < 13){
                img.src = 'images/mulher-crianca.jpg'
            } else if (idade < 20){
                img.src = 'images/mulher-jovem.jpg'
            } else if (idade < 65){
                img.src = 'images/mulher-adulta.jpg'
            } else {
                img.src = 'images/mulher-idosa.jpg'
            }
        }

        res.innerHTML = `${genero} de ${idade} anos de idade`
        res.appendChild(img)
    }
}