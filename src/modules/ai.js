//implementation of minimax function 

import { Game, checkDraw, checkWin} from "./gameController"


function minimax(board, isMaximizingPlayer, depth, maxDepth){
    //base condition
    if(checkWin(board,Game.cpuMark)){ //cpu player wins
        return 1; 
    }
    else if(checkWin(board, Game.HumanPlayer)){ //human player wins i.e CPU which is maximixing loses
        return -1;
    }
    else if(checkDraw(board)||depth===maxDepth){ //draw no one wins
        return 0;
    }

    if(isMaximizingPlayer){
        let bestEval = -Infinity;
        //for each child states of current board state 
        for(let i=0; i<board.length; ++i){
            //is available cell
            if(board[i]===""){
                board[i]=Game.cpuMark;
                let evalu = minimax(board, false, depth+1, maxDepth);
                bestEval = Math.max(evalu, bestEval);
                board[i] = "";
            }
        }
        return bestEval;
    }else{
        //evaluation for minimizing player
        let bestEval = +Infinity;
        //for each child states of current board state 
        for(let i=0; i<board.length; ++i){
            //is available cell
            if(board[i]===""){
                board[i]=Game.HumanPlayer;
                let evalu = minimax(board, true, depth+1, maxDepth);
                bestEval = Math.min(evalu, bestEval);
                board[i] = "";
            }
        }
        console.log("Minimax best evaluation is", bestEval)
        return bestEval;
    }
    
}

export {minimax};
