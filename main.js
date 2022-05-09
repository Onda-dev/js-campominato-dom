// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
const randomNumbers = []
while ( randomNumbers.length < 16 ) {
    let number = Math.floor(Math.random() * 20) + 1
    if (!randomNumbers.includes(number) ) {
        randomNumbers.push(number)
    }
}
console.log(randomNumbers)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
const userChoice = []
while ( userChoice.length < 4 ) {
    let number = Number(prompt("Inserisci un numero"))
    if ( !userChoice.includes(number)) {
        userChoice.push(number)
    } else {
        alert("Numero già inserito, scegline un altro")
    }
}
console.log(userChoice)
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.