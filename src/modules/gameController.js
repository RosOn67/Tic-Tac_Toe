//game controller module 

import { intitializeBoard } from "./board";
import { Player_On_Start } from "./player";

function createGame(){   //function to create a game object
    let gameBoard;
    let currentPlayer;
    let startingPlayer;
    let isCpuPlayer

    return{
        gameBoard,
        currentPlayer,
        startingPlayer,
        isCpuPlayer
    }
};

//create a game object
let Game  = createGame();

//function to start game 
function startGame(board){ 
    //all intial game conditions are setup here
    intitializeBoard(board); //import from boardard
    Game.startingPlayer = Player_On_Start(); //randomize between X and O
    Game.currentPlayer = Game.startingPlayer;
    console.log("starting current player is",Game.currentPlayer);
    console.log("Initialized Board");
}

//function to check for wins
function checkWin(board){
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6], // diagonals
    ];
    for(let combn of winningCombinations){
        if(board[combn[0]].textContent==="X"&&board[combn[1]].textContent==="X"&&board[combn[2]].textContent==="X"){
            console.log("X wins the game");
            return "X";
        }else if(board[combn[0]].textContent==="O"&&board[combn[1]].textContent==="O"&&board[combn[2]].textContent==="O"){
            console.log("O wins the game");
            return "O";
        }
    }
    board.forEach(cell => {
        if(cell.textContent === "X" || cell.textContent === "O") {
            console.log("The game is a draw");
        }
    })
}


export {Game, startGame, checkWin}