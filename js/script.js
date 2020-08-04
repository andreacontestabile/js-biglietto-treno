// 1. Chiediamo il numero di km da percorrere (e salviamo in una variabile)
var kmUtente = parseInt(prompt("Per favore, inserisci il numero di chilometri da percorrere"));
// 2. Chiediamo l'età del passeggero (e salviamo in una variabile)
var etaUtente = parseInt(prompt("Per favore, inserisci la tua età"));
// 3. Calcoliamo il prezzo del biglietto, secondo queste regole:
  // Prezzo 0.21€/km
  // Sconto 20% per i minorenni
  // Sconto 40% per gli over 65
var costoKm = 0.21;
var costo = (costoKm * kmUtente).toFixed(2);

if (etaUtente < 18) {
  var sconto = 0.2;
} else if (etaUtente >= 65) {
  var sconto = 0.4;
} else {
  var sconto = 0;
}

var costoTotale = (costo - costo * sconto).toFixed(2);

// 4. Stampiamo a schermo il risultato
document.getElementById('km').innerHTML = kmUtente;
document.getElementById('eta').innerHTML = etaUtente;
document.getElementById('prezzo').innerHTML = costo;
document.getElementById('sconto').innerHTML = sconto * 100;
document.getElementById('totale').innerHTML = costoTotale;
