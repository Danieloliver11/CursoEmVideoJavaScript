function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('saida')
    var pri = inicio
    var emoti = "&#128073"
    var bandeira = "&#127937"

    //verificação
    if (inicio === 0 && fim === 0) {
        alert('[ERRO] Inicio e fim sem valor!')
    } else
    if (passo === 0) {
        passo = 1

    }
    res.innerText = "Contando:"
    res.innerHTML += `${emoti} ${pri}`

    while (inicio < fim) {

        inicio = inicio + passo
        res.innerHTML += ` ${emoti} ${inicio} `
    }

    res.innerHTML += bandeira
}