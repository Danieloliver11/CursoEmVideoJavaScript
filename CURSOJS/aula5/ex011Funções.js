function parimpa(a) {
    if (a % 2 == 0) {
        return "É par!"

    } else {
        return "É impar"
    }
}
//n1 e n2 = 0, é para deixar essas duas variaveis com algum valor. Assim se não for passado algum dado entre esses dois valores, não dara NaN!
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}



var c = 223
console.log(parimpa(c))

console.log("//---------------------------------------------//")

console.log(soma(7))

console.log("//---------------------------------------------//")

var a = function(a) {
    return a * a
}
console.log(a(5))