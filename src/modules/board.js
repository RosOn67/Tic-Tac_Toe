//methods for board
let Vboard = ["", "", "", "", "", "", "", "", ""]; //a array to represent board
//function to intitialize board
function intitializeBoard(board){ //initialize board with empty cell
    board.forEach((cell)=>{
        cell.textContent = '';
        //if cells have "x" or"O" class clear them too
        if(cell.classList.contains("marked")){
            cell.classList.remove("marked")
        }
    })
}

//function to place mark on cell
function placeMark(cell, currentPlayer){
    (currentPlayer === "X")?cell.textContent="X": cell.textContent = "O";
}

export{intitializeBoard, placeMark, Vboard}
