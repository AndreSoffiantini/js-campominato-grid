/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco
quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Creare una funzione che al click del bottone Play generi una griglia quadrata
function generateGrid(number_of_cells, container, element_name, class_name) {
    const cellsContainer = document.querySelector(container);
    const squareSide = Math.sqrt(number_of_cells);
    for (let i = 1; i <= number_of_cells; i++) {
        const cell = document.createElement(element_name);
        cell.classList.add(class_name);
        cell.innerHTML = `${i}`;
        cellsContainer.append(cell);
    }
}

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

function activateCell(selector, active_class) {
    const cells = document.querySelectorAll(selector);

    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        cell.addEventListener('click', function() {
            cell.classList.add(active_class);
        })
    }
}

// Leggere il valore di difficoltà inserito dall'utente e generare il corrispondente numero di caselle
const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function() {

    let inputValue = document.getElementById("difficulty").value;

    switch (inputValue) {
        case "1":
            generateGrid(100, ".grid", "div", "cell_10");
            activateCell('.cell_10', 'selected');
            break;

        case "2":
            generateGrid(81, ".grid", "div", "cell_9");
            activateCell('.cell_9', 'selected');
            break;

        case "3":
            generateGrid(49, ".grid", "div", "cell_7");
            activateCell('.cell_7', 'selected');
            break;

        default:
            alert("Error");
            break;
    }
});