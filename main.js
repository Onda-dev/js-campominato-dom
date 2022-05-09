// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
const randomNumbers = []
while ( randomNumbers.length < 16 ) {
    let number = Math.floor(Math.random() * 20) + 1
    if (!randomNumbers.includes(number) ) {
        randomNumbers.push(number)
    }
}
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
const userChoice = []
while ( randomNumbers.length <= 24 ) {
    let number = Number(prompt("Inserisci un numero compreso tra 1 e 100"))
    userChoice.push(number)
    if ( !randomNumbers.includes(number) ) {
        randomNumbers.push(number)
    } else {
        alert ("Hai perso!")
    }
}
console.log(userChoice)
console.log(randomNumbers)
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
