//contains player info such as current turn and CPU player move function

//update player turn
function updateTurn(currentPlayer){
    (currentPlayer=="X")?currentPlayer="O":currentPlayer="X";
}

//Cpu move function
function CPU_Move(){
    //select a best move using minimax and play that move
}

//function to setup first player to move during game startup
function startingPlayer(){
    let players = ["X", "O"];
    let randomNum = Math.floor(Math.random());
    return players[randomNum];
}