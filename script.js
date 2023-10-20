const CreatePlayer = function(name, marker) {
    return {name, marker};
};
const player1 = CreatePlayer('VINCE', 'X');
const player2 = CreatePlayer('RANDOM', 'O');

const GameBoard = (function() {
    const gameBoard = [];
    const gameChoice = [null, null, null, null, null, null, null, null, null];
    const hanger = document.querySelector('.game-board');
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.className = `square ${i}`;
        hanger.appendChild(square);
        gameBoard.push(square);
    }
    return {gameBoard, gameChoice};
})();

const ControlDisplay = (function() {
    for (let i = 0; i < 9; i++) {
        GameBoard.gameBoard[i].textContent = GameBoard.gameChoice[i];
    }
})();


const MakeChoice = (function() {
    GameBoard.gameChoice[0] = player1.marker;    
})();


