// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min
}
let level
let totalNumbers

function difficultySelect() {
    level = document.getElementById("level").value
    console.log(level)

    if ( level === "0" ) {
        totalNumbers = 100
        console.log(totalNumbers)
    } else if ( level === "1" ) {
        totalNumbers = 80
        console.log(totalNumbers)
    } else {
        totalNumbers = 50
        console.log(totalNumbers)
    }

    for ( let i = 1; i <= totalNumbers; i++) {
        let div = document.createElement('button');
        div.classList.add('test');
        div.innerHTML = "prova"
        document.getElementById("field").appendChild(div)
    }
}
console.log(totalNumbers)

// const bombsList = []
// const boombsNumber = 16
// const attemptsNumber = totalNumbers - boombsNumber

// while ( bombsList.length < boombsNumber ) {
//     const bombs = randomNumber(1, totalNumbers)

//     if (!bombsList.includes(bombs) ) {
//         bombsList.push(bombs)
//     }
// }
// console.log(bombsList)
// // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L’utente non può inserire più volte lo stesso numero.
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// let userAttempts = []
// let bombExploded = false

// while ( !bombExploded && userAttempts.length < attemptsNumber ) {

//     let userNumber
//     do {
//         userNumber = Number(prompt(`Inserisci un numero compreso tra 1 e ${totalNumbers}`))
//     } while ( isNaN(userNumber) || userNumber < 1 || userNumber > totalNumbers )

//     if ( bombsList.includes(userNumber) ) {
//         bombExploded = true
//     } else if ( userAttempts.includes(userNumber) ) {
//         alert("Il numero è già stato inserito")
//     } else {
//         userAttempts.push(userNumber)
//     }
    
// }
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
// if ( bombExploded ) {
//     alert (`Hai perso! Il tuo punteggio è ${userAttempts.length}`)
// } else {
//     alert ("Hai vinto!")
// }
// console.log("Gioco terminato")




