//game controller module 

import { intitializeBoard, Vboard, placeMark} from "./board";
import { Player_On_Start, CPU_Move } from "./player";

function createGame(){   //function to create a game object
    let gameBoard=[];
    let currentPlayer=null;
    let startingPlayer=null;
    let isCpuPlayer=false;
    let cpuMark;
    let HumanPlayer;

    return{
        gameBoard,
        currentPlayer,
        startingPlayer,
        isCpuPlayer,
        cpuMark,
        HumanPlayer
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
    //if statrting turn is cpu then let ai make its move in starting and later handler clicks
    if(Game.isCpuPlayer===true&&Game.currentPlayer === Game.cpuMark){
        console.log("CPU is making its move");
          let toMark = CPU_Move(Vboard);
          console.log("toMark", toMark);
          let CPU_marked_Cell = Game.gameBoard[toMark];
          placeMark(CPU_marked_Cell, Game.cpuMark);
    }
}

//function to check for wins
function checkWin(board, currentPlayer){
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6], // diagonals
    ];
    for(let combn of winningCombinations){
        if(board[combn[0]]===currentPlayer&&board[combn[1]]===currentPlayer&&board[combn[2]]===currentPlayer){
            console.log(currentPlayer, "wins the game");
            return 1;
    }}
}

    function checkDraw(board) {
    const isDraw = board.every(cell => cell === "X" || cell === "O");

    if (isDraw) {
        console.log("The game is a draw");
        // Additional logic for handling the draw state can be added here
        return 1;
    }
}



export {Game, startGame, checkWin, checkDraw}