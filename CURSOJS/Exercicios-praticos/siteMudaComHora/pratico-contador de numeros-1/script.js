function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('saida')

    var emoti = "&#128073"
    var bandeira = "&#127937"

    //verificação
    if (inicio.leangth == 0 || fim.leangth == 0) {
        alert('[ERRO] Inicio e fim sem valor!')
    } else
    if (passo === 0) {
        passo = 1

    }
    res.innerText = "Contando:"

    if (inicio < fim) { //contagem crescente
        for (var c = inicio; c <= fim; c = c + passo) {

            res.innerHTML += ` ${emoti} ${c} `
        }
    } else { //contagem regressiva
        for (var c = inicio; c >= fim; c = c - passo)
            res.innerHTML += ` ${emoti} ${c} `
    }

    res.innerHTML += bandeira
}