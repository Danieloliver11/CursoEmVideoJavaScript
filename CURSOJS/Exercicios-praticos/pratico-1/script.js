function mudar() {
    var timee = document.getElementById('time')
    var imgs = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()

    if (hora < 12) {
        timee.innerHTML = `São <strong>${hora}</strong> Horas. Bom Dia!`
        imgs.src = 'manha.jpg'
        document.style.background = ' #2c74d3f8'
    } else
    if (hora < 19) {
        timee.innerHTML = `São <strong>${hora}</strong> Horas. Boa Tarde!`
        imgs.src = 'tarde.jpg'
        document.body.style.background = '#a75c1e'

    } else {
        timee.innerHTML = `São <strong>${hora}</strong> Horas. Boa Noite!`
        imgs.src = 'noite.jpg'
        document.body.style.background = '#3c0470'
    }



}