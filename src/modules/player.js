//contains player info such as current turn and CPU player move function

import { Game } from "./gameController";
// import { placeMark, board } from "./board";
import { minimax } from "./ai";

//update player turn
function updateTurn(currentPlayer){
    (currentPlayer=="X")?Game.currentPlayer="O":Game.currentPlayer="X";
}

// //Cpu move function
// function CPU_Move(board){ //the board i am using here will be virtual boards
//     let bestScore = -Infinity;
//     let bestMove = null;

//     for(let i=0; i<board.length; ++i){
//         if(board[i]===""){
//             board[i] = Game.cpuMark;
//             let score = minimax(board, false, 5); ///calling minimax function with depth 5
//             board[i] = "";
//             if(score>bestScore){
//                 bestScore = score;
//                 bestMove = i;
//             }
//         }
//     }
//     board[bestMove] = Game.cpuMark;
//     console.log(board);
//     updateTurn(Game.currentPlayer);
//     return bestMove;  //the board iam referencing here is virtual baord 
// }
function CPU_Move(board) {
    let bestScore = -Infinity;  // To track the highest score
    let bestMove = null;        // To store the index of the best move

    // Loop through all cells to find the best move
    for (let i = 0; i < board.length; ++i) {
        if (board[i] === "") {  
            board[i] = Game.cpuMark; 
            let score = minimax(board, false, 0, 1);  // Call minimax with depth 5
            board[i] = ""; 

            // If the current move is better than the previous best, update bestMove
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;  // 
            }
        }
    }
        console.log("CPU selected best move", bestMove);
        board[bestMove] = Game.cpuMark;  // Make the best move on the virtual board
        updateTurn(Game.currentPlayer);
        return bestMove;  // Return the index of the best move
    }



//function to setup first player to move during game startup
function Player_On_Start(){
    let players = ["X", "O"];
    let randomNum = Math.floor(Math.random()*2);
    console.log("Random num is: ", randomNum);
    return players[randomNum];
}

export {updateTurn, Player_On_Start, CPU_Move};