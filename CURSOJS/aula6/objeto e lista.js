/*introdução objeto elista*/

let amigo = {
    nome: "João",
    sexo: "M",
    idade: "24",
    peso: 80,
    engordar(p = 0) {
        this.peso += p
    }
}
amigo.engordar(5)
console.log(amigo.nome + amigo.peso)