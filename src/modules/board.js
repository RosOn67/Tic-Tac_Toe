//methods for board

//function to intitialize board
function intitializeBoard(board){ //initialize board with empty cell
    board.forEach((cell)=>{
        cell.textContent = '';
        //if cells have "x" or"O" class clear them too
        if(cell.classList.contains("X")){
            cell.classList.remove("X")
        }
        if(cell.classList.contains("O")){
            cell.classList.remove("O")
        }
    })
}

//function to place mark on cell
function placeMark(cell, currentPlayer){
    (currentPlayer === "X")?cell.textContent="X": cell.textContent = "O";
}

