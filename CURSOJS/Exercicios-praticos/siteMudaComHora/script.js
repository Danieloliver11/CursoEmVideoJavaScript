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
    var g = ''
    if (ano === 0 || ano > anohoje) {
        alert('[ERRO] Ano maior que o atual ou ausência de ano!')
    } else if (sexo[0].checked) {
        genero = 'Homem'
        var xy = 'um'
        var idade = anohoje - ano

        if (idade >= 0 && idade <= 2) {
            g = 'Bebê do sexo masculino'
        } else if (idade >= 3 && idade <= 8) {
            g = 'Criança'
            xy = 'uma'
        } else if (idade >= 9 && idade <= 13) { g = 'menino' } else if (idade >= 14 && idade <= 22) { g = 'adolescente' } else if (idade >= 23 && idade <= 59) { g = 'homem' } else { g = 'idoso' }

        res.innerHTML = `<strong>Você é ${xy} ${g} de ${idade} anos.</strong>`
    } else if (sexo[1].checked) {
        genero = 'Mulher'
        var xy = 'uma'
        var idade = anohoje - ano

        if (idade >= 0 && idade <= 2) {
            g = 'Bebê do sexo feminino'
        } else if (idade >= 3 && idade <= 8) {
            g = 'Criança'
            xy = 'uma'
        } else if (idade >= 9 && idade <= 13) { g = 'menina' } else if (idade >= 14 && idade <= 22) { g = 'adolescente' } else if (idade >= 23 && idade <= 59) { g = 'mulher' } else { g = 'idosa' }

        res.innerHTML = `<strong>Você é ${xy} ${g} de ${idade} anos.</strong>`
    }
    //homem 
    if (genero === 'Homem' && idade >= 0 && idade <= 2) {
        img.setAttribute('src', 'bebeh.jpg')
        res.appendChild(img)
    } else if (genero === 'Homem' && idade >= 3 && idade <= 8) {
        img.setAttribute('src', 'crianca-masculina.jpg')
        res.appendChild(img)

    } else if (genero === 'Homem' && idade >= 9 && idade <= 13) {
        img.setAttribute('src', 'menino.jpg')
        res.appendChild(img)
    } else if (genero === 'Homem' && idade >= 14 && idade <= 22) {
        img.setAttribute('src', 'adolescente-masculino.jpg')
        res.appendChild(img)
    } else if (genero === 'Homem' && idade >= 23 && idade <= 59) {
        img.setAttribute('src', 'homem.jpg')
        res.appendChild(img)
    } else if (genero === 'Homem' && idade > 60) {
        img.setAttribute('src', 'idoso-homem.jpg')
        res.appendChild(img)
    }
    //mulher
    if (genero === 'Mulher' && idade >= 0 && idade <= 2) {
        img.setAttribute('src', 'bebem.jpg')
        res.appendChild(img)
    } else if (genero === 'Mulher' && idade >= 3 && idade <= 8) {
        img.setAttribute('src', 'crianca-feminina.jpg')
        res.appendChild(img)
    } else if (genero === 'Mulher' && idade >= 8 && idade <= 13) {
        img.setAttribute('src', 'menina.jpg')
        res.appendChild(img)
    } else if (genero === 'Mulher' && idade >= 14 && idade <= 22) {
        img.setAttribute('src', 'adolescente-feminina.jpg')
        res.appendChild(img)
    } else if (genero === 'Mulher' && idade >= 23 && idade <= 59) {
        img.setAttribute('src', 'mulher.jpg')
        res.appendChild(img)
    } else if (genero === 'Mulher' && idade > 60) {
        img.setAttribute('src', 'idosa.jpg')
        res.appendChild(img)
    }
}