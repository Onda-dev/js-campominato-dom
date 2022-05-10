// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
const bombsList = []
while ( bombsList.length < 16 ) {
    let bombs = Math.floor(Math.random() * 100) + 1
    if (!bombsList.includes(bombs) ) {
        bombsList.push(bombs)
    }
}
console.log(bombsList)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
let userAttempts = []
let bombExploded = false

while ( !bombExploded && userAttempts.length < 84 ) {

    let userNumber
    do {
    userNumber = Number(prompt("Inserisci un numero compreso tra 1 e 100"))
    } while ( isNaN(userNumber) || userNumber < 1 || userNumber > 100 )

    if ( bombsList.includes(userNumber) ) {
        bombExploded = true
    } else if ( userAttempts.includes(userNumber) ) {
        alert("Il numero è già stato inserito")
    } else {
        userAttempts.push(userNumber)
    }
    
}
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
if ( bombExploded ) {
    alert (`Hai perso! Il tuo punteggio è ${userAttempts.length}`)
} else {
    alert ("Hai vinto!")
}
console.log("Gioco terminato")




