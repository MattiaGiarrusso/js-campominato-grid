// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.

const mainGrid = document.querySelector('#grid');
console.log(mainGrid);

// Creo il ciclo for per il conteggio di 100 celle numerate da 1 a 100
for(let i=1; i<101; i++) {
    // Dichiaro la variabile che richiamerà la funzione che genera i 100 numeri
    const square = generateSquare(i);
    console.log(square);
    // Appendo i quadrati alla griglia in html
    mainGrid.append(square);
}

// Creo la funzione che genera numeri
function generateSquare(number) {
    // dichiaro la variabile per creare l'elemento square
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    // assegno alla variabile 'newSquare' una funzione al click
    newSquare.addEventListener('click', function(){
        console.log(this.children[0].innerHTML);
        newSquare.classList.toggle('click-cell');
    });
    // ritorno il risultato della funzione
    return newSquare;
}