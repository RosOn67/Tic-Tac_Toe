//contains player info such as current turn and CPU player move function

import { Game } from "./gameController";
import { placeMark } from "./board";
//update player turn
function updateTurn(currentPlayer){
    (currentPlayer=="X")?Game.currentPlayer="O":Game.currentPlayer="X";
}

//Cpu move function
function CPU_Move(board){
    //select a best move using minimax and play that move
    //for test make a random available cell selecting 
    for(let cell of board){
        if(cell.textContent === ""){
            placeMark(cell, Game.cpuMark);
            cell.classList.add("marked");
            console.log("CPu move function called");
            updateTurn(Game.currentPlayer);
            return cell;
        }
    }
}

//function to setup first player to move during game startup
function Player_On_Start(){
    let players = ["X", "O"];
    let randomNum = Math.floor(Math.random()*2);
    console.log("Random num is: ", randomNum);
    return players[randomNum];
}

export {updateTurn, Player_On_Start, CPU_Move};