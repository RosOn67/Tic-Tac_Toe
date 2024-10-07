//main game logic goes here
import { placeMark} from "./modules/board";
import { updateTurn,CPU_Move} from "./modules/player";
import { Game, startGame, checkWin, checkDraw } from "./modules/gameController";


function App(){
//ui objects
document.addEventListener("DOMContentLoaded", ()=>{
const start_button = document.getElementById("start-button");
const restart_button = document.getElementById("restart-button");
const friend_button = document.getElementById("FriendButton");
const cpu_button = document.getElementById("cpuButton");
const asX_button = document.getElementById("As-X");
const asO_button = document.getElementById("As-O");
const PlayAsOption = document.getElementById("options-2");
// console.log(friend_button, cpu_button,asX_button, asO_button, PlayAsOption);

//make gameBoard
Game.gameBoard = Array.from(document.querySelectorAll("[data-cell]"));

//event handler for cells
let Cell_Event_Handler =  function(e){
        console.log("Current Player is",Game.currentPlayer);
        placeMark(e.target, Game.currentPlayer);
        e.target.classList.add("marked");
        console.log("Mark Placed");
        if(checkWin(Game.gameBoard, Game.currentPlayer)){
          return 1;
        }
        if(checkDraw(Game.gameBoard)){
          return 1;
        }
        //after turn update it is time to make next move so check if cpu is playing 
        //and make its move after user clicks on desired cell and add a certain delay
        //to make like cpu is thinking
        updateTurn(Game.currentPlayer);
        console.log("after update current is",Game.currentPlayer);
        if(Game.isCpuPlayer===true&&Game.currentPlayer ===Game.cpuMark){
          //while cpu temporarily remove event listener and place back after cpu moves
          console.log("CPU is making its move");
          let CPU_marked_Cell = CPU_Move(Game.gameBoard);
          checkWin(Game.gameBoard, Game.cpuMark);
          CPU_marked_Cell.removeEventListener("click", Cell_Event_Handler);
        }
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
    startGame(Game.gameBoard);
    Game.gameBoard.forEach(cell=>{
        cell.addEventListener("click",Cell_Event_Handler,{once:true});
        console.log("readded handler");
    })
    // startGame(Game.gameBoard);
});

Game.gameBoard.forEach((cell)=>{
    cell.addEventListener("click", Cell_Event_Handler, {once:true});
});


// CPU and friend selection logic
cpu_button.addEventListener("click", () => {
  Game.isCpuPlayer = true;
  PlayAsOption.classList.remove("hidden");
  console.log("CPU is playing");
});

friend_button.addEventListener("click", () => {
  Game.isCpuPlayer = false;
});

asX_button.addEventListener("click", () => {
  if (Game.isCpuPlayer === true) {
    Game.HumanPlayer = "X";
    Game.cpuMark = "O";
    console.log("CPU got marked O");
  }});

asO_button.addEventListener("click", () => {
  if (Game.isCpuPlayer === true) {
    Game.HumanPlayer = "O";
    Game.cpuMark = "X";
    console.log("CPU got marked X");
  }
});
});
}

export {App};
