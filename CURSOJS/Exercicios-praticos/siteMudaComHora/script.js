function mudar() {
    var timee = document.getElementById('time')
    var imgs = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getUTCMinutes()

    if (hora >= 0 && hora < 12) {
        timee.innerHTML = `São <strong>${hora}:${minuto}</strong> Horas. Bom Dia!`
        imgs.src = 'manha.jpg'
        document.body.style.background = ' #6bc5d1c9'
    } else if (hora >= 12 && hora <= 18) {
        timee.innerHTML = `São <strong>${hora}:${minuto}</strong> Horas. Boa Tarde!`
        imgs.src = 'tarde.jpg'
        document.body.style.background = '#f8593dbd'

    } else {
        timee.innerHTML = `São <strong>${hora}:${minuto}</strong> Horas. Boa Noite!`
        imgs.src = 'noite.jpg'
        document.body.style.background = ' #201585ab '
    }



}


/*--------------------------------------*/
function contaidade() {
    var daata = new Date()
    var anohoje = daata.getFullYear()
    var ano = Number(document.getElementById('iano').value)
    var res = document.getElementById('saida')
    var sexo = document.getElementsByName('nsexo')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero = ''

    if (ano === 0 || ano > anohoje) {
        alert('[ERRO] Ano maior que o atual ou ausência de ano!')
    } else if (sexo[0].checked) {
        genero = 'Homem'
        var xy = 'um'
        var idade = anohoje - ano
        res.innerHTML = `Você é ${xy} ${genero} de ${idade} anos.`
    } else if (sexo[1].checked) {
        genero = 'Mulher'
        var xy = 'uma'
        var idade = anohoje - ano
        res.innerHTML = `Você é ${xy} ${genero} de ${idade} anos.`
    }
    //homem 
    if (genero === 'Homem' && idade >= 0 && idade <= 2) {
        img.setAttribute('src', 'bebehomem.jpg')
        res.appendChild(img)
    } else if (genero === 'Homem' && idade >= 3 && idade <= 8) {
        img.setAttribute('src', 'crianca-masculina.jpg')
        res.appendChild(img)

    } else if (genero === 'Homem' && idade >= 8 && idade <= 13) {
        img.setAttribute('src', 'menino.jpg')
        res.appendChild(img)
    } else if (genero === 'Homem' && idade >= 13 && idade <= 22) {
        img.setAttribute('src', 'adolescente-masculino.jpg')
        res.appendChild(img)
    }
}