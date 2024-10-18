/* IF E ELSE
    Estrutura condicional
*/

// let name = "João"

// if (name === "João") {
//     console.log("Meu nome é João")
// }


// const nota1 = Number(prompt("Digite sua primeira nota: "))
// const nota2 = Number(prompt("Digite sua segunda nota: "))
// const media = (nota1 + nota2) / 2

// if (media >= 6) {
//     console.log("Você está aprovado!")
// } else if (media < 6 && media >= 5) {
//     console.log("Você terá que fazer recuperação")
// } else {
//     console.log("Está reprovado")
// }

// const opcao = prompt("Digite seu jogo favorito: 1- Terraria 2- GTA RP 3- EA FC 24")

// switch(opcao){
//     case"1":
//         console.log("Parabéns, você é o unico que joga isso.")
//         break
//     case"2":
//         console.log("Paulinho Oloko!")
//         break
//     case"3":
//         console.log("Parabéns, você é gay")
//         break
//     default:
//         console.log("Não existe essa opção.")
// }

const botao = document.querySelector("button")
const div = document.querySelector("div")

botao.addEventListener("click", () => {
        // console.log("Você é burro")
        // this.innerHTML = `
        // <h1> Olá </h1>
        // `
        div.innerHTML = `
    <h1>Bem vindo a turma</h1>  
    `
    })