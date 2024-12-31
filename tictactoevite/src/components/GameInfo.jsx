import React from "react";

function GameInfo({ gameBoard, nextTurn, winner, resetGameBoard }) {
  return (
    <>
        <div className="title" color="white">
            Tic Tac Toe in 3D
        </div>
        <div className="textBottomSection">
            <div className="winnerMove" color="white">
            {
                winner ? winner + " wins!!" : !winner && !gameBoard.includes(null)
                ? "Game is a draw!!" : "Current Move: " + (nextTurn ? "Sphere" : "Cube")
            }
            </div>
            <div onClick={resetGameBoard}>
            {
                gameBoard.every(x => x === null) ? null : 
                <button className="restartButton">
                    Restart Game
                </button>
            }
            </div>
        </div>
    </>
  );
}

export default React.memo(GameInfo);