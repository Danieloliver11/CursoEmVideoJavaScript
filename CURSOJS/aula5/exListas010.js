/*variavel.push(7), vai colocar um dado na ultima posição da sua lista
variavel.lenght , vaidara quantidade de itens em sua lista.
variavel.sort() , vai colocar em ordem crescente os dados de sua lista
variavel.indexOf() buscando valor ou a streng dentro de uma lista e devolve a posição que ele pertence .
*/
let num = ["a", "b", "c", "d", "e"]
var a = 0
var b = 0
for (a; a <= num.length; a = a + 1) {

    console.log(`A posição ${a} da lista tem a informação ${num[a]}`)
}
console.log(`a lista tem ${--a } numeros!`) //--a , é igual a = a - 1

console.log("//---------------------------------------------------------------------------")

for (b in num) {

    console.log(`USANDO (IN). A posição ${b} da lista tem a informação ${num[b]}`)
}
console.log(num.indexOf("d"))