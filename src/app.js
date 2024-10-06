//main game logic goes here
import { placeMark} from "./modules/board";
import { updateTurn,} from "./modules/player";
import { Game, startGame, checkWin } from "./modules/gameController";

function App(){
//ui objects
const start_button = document.getElementById("start-button");
const restart_button = document.getElementById("restart-button");

//make gameBoard
Game.gameBoard = document.querySelectorAll("[data-cell]");

//event handler for cells
let Cell_Event_Handler =  function(e){
    console.log("Current Player is",Game.currentPlayer);
        placeMark(e.target, Game.currentPlayer);
        e.target.classList.add("marked");
        console.log("Mark Placed");
        checkWin(Game.gameBoard);
        updateTurn(Game.currentPlayer);
        console.log("after update current is",Game.currentPlayer)
}

//add event listeners
start_button.addEventListener("click", () => {
        startGame(Game.gameBoard);
});

restart_button.addEventListener("click",() =>{
    Game.gameBoard.forEach(cell=>{
        cell.removeEventListener("click",Cell_Event_Handler);
        console.log("removed handler");
    })
    Game.gameBoard.forEach(cell=>{
        cell.addEventListener("click",Cell_Event_Handler,{once:true});
        console.log("readded handler");
    })
    startGame(Game.gameBoard);
});

Game.gameBoard.forEach((cell)=>{
    cell.addEventListener("click", Cell_Event_Handler, {once:true});
});
}

export {App};



