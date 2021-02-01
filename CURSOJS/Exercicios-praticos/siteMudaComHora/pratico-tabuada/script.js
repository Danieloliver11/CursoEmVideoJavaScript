function contar() {
    var numero = Number(document.getElementById('inicio').value)
    var res = document.getElementById('iresul')
    var contador = 0
    var resultado = 0
    res.innerHTML = `A tabuada de ${numero} é:<br>`

    if (numero == 0) {
        alert('[ERRO] Um número devera ser digitado!')
    } else {
        while (contador < 10) {
            contador = contador + 1
            resultado = numero * contador

            res.innerHTML += `${numero} x ${contador} = ${resultado} <br>`

        }
    }



}