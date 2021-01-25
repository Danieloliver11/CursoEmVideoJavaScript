function mudar() {
    var timee = document.getElementById('time')
    var imgs = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getUTCMinutes()

    if (hora < 12) {
        timee.innerHTML = `São <strong>${hora}:${minuto}</strong> Horas. Bom Dia!`
        imgs.src = 'manha.jpg'
        document.body.style.background = ' #6bc5d1c9'
    } else
    if (hora < 19) {
        timee.innerHTML = `São <strong>${hora}:${minuto}</strong> Horas. Boa Tarde!`
        imgs.src = 'tarde.jpg'
        document.body.style.background = '#f8593dbd'

    } else {
        timee.innerHTML = `São <strong>${hora}:${minuto}</strong> Horas. Boa Noite!`
        imgs.src = 'noite.jpg'
        document.body.style.background = ' #201585ab '
    }



}