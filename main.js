// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
const bombsList = []
while ( bombsList.length < 16 ) {
    let bombs = Math.floor(Math.random() * 20) + 1
    if (!bombsList.includes(bombs) ) {
        bombsList.push(bombs)
    }
}
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
let userChoices = []

while (userChoices <= 22) {

    do {
        userNumber = Number(prompt("Inserisci un numero compreso tra 1 e 100"))
        userChoices.push(userNumber)
    } while ( isNaN(userNumber > 100 || userNumber < 1) || !userChoices.includes(userNumber) )

}
console.log(userChoices)
console.log(bombsList)
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
