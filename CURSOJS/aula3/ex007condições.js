//Condição simples em JavaScript
var a = 40
if (a > 40) {
    console.log(`Você passou da velocidade permitida de 40km!`)
}
console.log("Use cinto de segurança!")


//Condição composta
console.log("Em que pais você esta?")
var b = "eua"
if (b != "Brasil") {
    console.log(" você é Estrangeiro!")
} else {
    console.log("você é Brasileiro")
}

// condição aninhadas

var idade = 120
if (idade < 16) {
    console.log("Você é menor de idade!Não pode votar.")
} else {
    if (idade < 18 || 65) {
        console.log("Você pode escolher ir votar!")
    } else {
        console.log("Você é maior de idade. VOCÊ TEM QUE VOTAR!")
    }
}


// E Condições multiplas