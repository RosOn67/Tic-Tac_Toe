//contains player info such as current turn and CPU player move function

import { Game } from "./gameController";
//update player turn
function updateTurn(currentPlayer){
    (currentPlayer=="X")?Game.currentPlayer="O":Game.currentPlayer="X";
}

// //Cpu move function
// function CPU_Move(){
//     //select a best move using minimax and play that move
// }

//function to setup first player to move during game startup
function Player_On_Start(){
    let players = ["X", "O"];
    let randomNum = Math.floor(Math.random());
    return players[randomNum];
}

export {updateTurn, Player_On_Start};