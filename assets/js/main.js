/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco
quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Creare una funzione che al click del bottone Play generi una griglia quadrata
function generateGrid(number_of_cells, container, element_name, class_name) {
    const cellsContainer = document.querySelector(container);
    for (let i = 1; i <= number_of_cells; i++) {
        const cell = document.createElement(element_name);
        cell.classList.add(class_name);
        cell.innerHTML = `${i}`;
        cellsContainer.append(cell);
    }
}

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", generateGrid(100, ".cells", "div", "cell"));

// Leggere il valore di difficoltà inserito dall'utente e generare il corrispondente numero di caselle
let input = document.getElementById("difficulty").value;

switch (input) {
    case 1:
        generateGrid(100, ".cells", "div", "cell");
        break;

    case 2:
        generateGrid(81, ".cells", "div", "cell");
        break;

    case 3:
        generateGrid(49, ".cells", "div", "cell");
        break;

    default:
        alert("Error");
        break;
}


// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.