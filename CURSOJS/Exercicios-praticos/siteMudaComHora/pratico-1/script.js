function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('saida')
    var resul
    inicio = 0
    res.innerHTML = "Contando: "
        //verificação
    if (inicio === 0 && fim === 0) {
        alert('[ERRO] Inicio e fim sem valor!')
    } else if (passo == 0) {
        passo = 1
    }


    while (inicio < fim) {
        resul = inicio + passo
        res.innerHTML = resul
    }


}